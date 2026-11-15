import { NextRequest, NextResponse } from 'next/server';
import { currentStaff, getSupabaseConfig, sameOrigin } from '@/lib/admin-auth';
export const runtime = 'nodejs';
const choices = new Set(['new','contacted','qualified','proposal','won','lost','spam']);

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!sameOrigin(request)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  if (!(await currentStaff())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const cfg = getSupabaseConfig();
  if (!cfg) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  const { id } = await params;
  if (!/^[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$/i.test(id)) return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  let input: { status?: unknown; internal_notes?: unknown };
  try {
    const raw = await request.text();
    if (raw.length > 6000) throw new Error('large');
    input = JSON.parse(raw) as typeof input;
  } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  if (!choices.has(input.status as string) || typeof input.internal_notes !== 'string' || input.internal_notes.length > 5000) {
    return NextResponse.json({ error: 'Invalid update' }, { status: 400 });
  }
  try {
    const r = await fetch(`${cfg.base}/rest/v1/leads?id=eq.${id}`, { method: 'PATCH',
      headers: { apikey: cfg.secret, 'Content-Type': 'application/json', Prefer: 'return=representation' },
      body: JSON.stringify({ status: input.status, internal_notes: input.internal_notes, updated_at: new Date().toISOString() }),
      cache: 'no-store', signal: AbortSignal.timeout(10000),
    });
    if (!r.ok) return NextResponse.json({ error: 'Update failed' }, { status: 502 });
    const rows = await r.json() as Array<{ id: string }>;
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
  } catch { return NextResponse.json({ error: 'Unavailable' }, { status: 503 }); }
}
