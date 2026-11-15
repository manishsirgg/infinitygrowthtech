import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

function reply(status: number, message: string) {
  return NextResponse.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });
}

async function countLeads(base: string, secret: string, query: URLSearchParams) {
  const url = new URL('/rest/v1/leads', base);
  query.forEach((value, key) => url.searchParams.set(key, value));
  const result = await fetch(url, {
    method: 'HEAD',
    headers: { apikey: secret, Prefer: 'count=exact' },
    cache: 'no-store',
    signal: AbortSignal.timeout(8000),
  });
  if (!result.ok) throw new Error('Supabase count unavailable');
  const raw = result.headers.get('content-range')?.split('/')[1];
  const count = Number(raw);
  if (raw === undefined || raw === null || !Number.isSafeInteger(count) || count < 0) throw new Error('Supabase count missing');
  return count;
}

export async function GET(request: NextRequest) {
  // Vercel's scheduler supplies Authorization: Bearer <CRON_SECRET>.
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || request.headers.get('authorization') !== `Bearer ${cronSecret}`) {
    return reply(401, 'Unauthorized');
  }

  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CRM_DIGEST_FROM;
  const to = process.env.CRM_DIGEST_TO;

  // Deliberate fail-closed: cannot send until verified sender and receiver are configured.
  if (process.env.CRM_DIGEST_ENABLED !== 'true' || !url || !secret || !resendKey || !from || !to) {
    return reply(503, 'Digest not configured');
  }
  let base: string;
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' || !parsed.hostname.endsWith('.supabase.co')) throw Error('bad URL');
    base = parsed.origin;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) throw Error('bad address');
  } catch { return reply(503, 'Digest configuration invalid'); }

  const now = new Date();
  const since = new Date(now.getTime() - 24*60*60*1000);
  const istDay = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit' }).format(now);
  try {
    const [newLeads, overdue, unassigned] = await Promise.all([
      countLeads(base, secret, new URLSearchParams({ created_at: `gte.${since.toISOString()}` })),
      countLeads(base, secret, new URLSearchParams({
        follow_up_at: `lte.${now.toISOString()}`,
        status: 'in.(new,contacted,qualified,proposal)',
      })),
      countLeads(base, secret, new URLSearchParams({
        assigned_to: 'is.null',
        status: 'in.(new,contacted,qualified,proposal)',
      })),
    ]);
    // No contact PII is included in email. Open the secured CRM to see details.
    const content = [
      `Infinity Growth Tech CRM — Daily Summary (${istDay} IST)`,
      '',
      `Enquiries received in the last 24 hours: ${newLeads}`,
      `Active leads with follow-ups due or overdue: ${overdue}`,
      `Active unassigned leads: ${unassigned}`,
      '',
      'View and manage enquiries at https://www.infinitygrowthtech.com/admin',
      '',
      'This is an internal administrative notification. No customer data is attached.',
    ].join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `igt-crm-digest-${istDay}`,
      },
      body: JSON.stringify({
        from: `Infinity Growth Tech <${from}>`,
        to: [to],
        subject: `IGT CRM daily digest — ${istDay}`,
        text: content,
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) {
      // Avoid logging provider response bodies, keys, or customer data.
      console.error('CRM digest delivery failed:', response.status);
      return reply(502, 'Digest delivery failed');
    }
    return reply(200, 'Digest delivery accepted');
  } catch {
    return reply(503, 'Digest unavailable');
  }
}
