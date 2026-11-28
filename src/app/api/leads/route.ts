import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

type Submission = {
  name?: unknown; email?: unknown; phone?: unknown; subject?: unknown;
  message?: unknown; website?: unknown; turnstileToken?: unknown;
  source?: unknown; utm_source?: unknown; utm_medium?: unknown;
  utm_campaign?: unknown;
};

const allowedSubjects = new Set(['Website or Digital Platform', 'Marketing & Growth', 'Package Consultation', 'Marketplace Services', 'Automation', 'AI Visibility Audit', 'Social Media Consultation', 'Content Production', 'Content Production Consultation', 'Brand Strategy Consultation', 'Website Scope Consultation', 'Other']);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const limited = (value: unknown, max: number) => typeof value === 'string' ? value.trim().slice(0, max) : '';
const json = (message: string, status: number) => NextResponse.json({ message }, {
  status,
  headers: { 'Cache-Control': 'no-store' },
});

export async function POST(request: NextRequest) {
  // Require same-origin browser requests; this is defense-in-depth, not anti-bot protection.
  const origin = request.headers.get('origin');
  try {
    if (!origin || new URL(origin).origin !== request.nextUrl.origin) {
      return json('Invalid request origin.', 403);
    }
  } catch {
    return json('Invalid request origin.', 403);
  }

  const size = Number(request.headers.get('content-length') ?? 0);
  if (!Number.isFinite(size) || size > 16_384) return json('Request too large.', 413);

  const url = process.env.SUPABASE_URL;
  const secret = process.env.SUPABASE_SECRET_KEY;
  const captchaSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!url || !secret || !captchaSecret) {
    return json('Enquiries are temporarily unavailable. Please try again later.', 503);
  }

  let body: Submission;
  try {
    // Enforce a byte budget even when Content-Length is absent or untrusted.
    const raw = await request.text();
    if (new TextEncoder().encode(raw).byteLength > 16_384) return json('Request too large.', 413);
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return json('Invalid form data.', 400);
    }
    body = parsed as Submission;
  } catch {
    return json('Invalid form data.', 400);
  }

  // Hidden honeypot catches unsophisticated form bots.
  if (limited(body.website, 200)) return json('Thank you for your enquiry.', 200);

  const name = limited(body.name, 120);
  const email = limited(body.email, 240).toLowerCase();
  const phone = limited(body.phone, 30);
  const subject = limited(body.subject, 100);
  const message = limited(body.message, 5000);
  const token = limited(body.turnstileToken, 4096);

  if (name.length < 2 || name.length > 120 || !emailPattern.test(email) ||
      email.length > 240 || message.length < 10 || message.length > 5000 ||
      !allowedSubjects.has(subject) || !token) {
    return json('Please check the form fields and verification.', 400);
  }

  const captcha = new URLSearchParams({
    secret: captchaSecret,
    response: token,
  });
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  if (ip) captcha.set('remoteip', ip);

  let verified = false;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: captcha.toString(),
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    const result = await response.json() as { success?: boolean; hostname?: string };
    const permittedHosts = (process.env.TURNSTILE_ALLOWED_HOSTNAMES ?? 'infinitygrowthtech.com,www.infinitygrowthtech.com')
      .split(',').map(value => value.trim().toLowerCase()).filter(Boolean);
    verified = response.ok && result.success === true &&
      !!result.hostname && permittedHosts.includes(result.hostname.toLowerCase());
  } catch {
    return json('Verification service unavailable. Please try again.', 503);
  }
  if (!verified) return json('Verification failed. Please try again.', 400);

  let apiUrl: URL;
  try {
    apiUrl = new URL('/rest/v1/leads', url);
    if (apiUrl.protocol !== 'https:' || !apiUrl.hostname.endsWith('.supabase.co')) throw new Error('Invalid Supabase URL');
  } catch {
    return json('Enquiries are temporarily unavailable.', 503);
  }

  const payload = {
    full_name: name,
    email,
    phone: phone || null,
    service_interest: subject,
    message,
    source: limited(body.source, 80) || 'website-contact',
    utm_source: limited(body.utm_source, 120) || null,
    utm_medium: limited(body.utm_medium, 120) || null,
    utm_campaign: limited(body.utm_campaign, 120) || null,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'apikey': secret,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error('Lead storage failed:', response.status);
      return json('Unable to send your enquiry right now. Please try again.', 502);
    }
    return json('Thank you. Your enquiry has been received.', 201);
  } catch {
    return json('Unable to send your enquiry right now. Please try again.', 502);
  }
}

export async function GET() {
  return json('Method not allowed.', 405);
}
