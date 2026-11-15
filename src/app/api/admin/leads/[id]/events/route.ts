import { NextRequest, NextResponse } from 'next/server';
import { currentStaff, getSupabaseConfig } from '@/lib/admin-auth';

export const runtime = 'nodejs';
export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await currentStaff())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const cfg = getSupabaseConfig();
  if (!cfg) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  const { id } = await params;
  if (!/^[a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}$/i.test(id))
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  try {
    const path = `/rest/v1/igt_lead_events?lead_id=eq.${encodeURIComponent(id)}&select=id,occurred_at,old_status,new_status,old_follow_up_at,new_follow_up_at,notes_changed,old_assigned_to,new_assigned_to&order=occurred_at.desc&limit=30`;
    const response = await fetch(new URL(path, cfg.base), {
      headers: { apikey: cfg.secret }, cache: 'no-store', signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return NextResponse.json({ error: 'History unavailable' }, { status: 502 });
    const events = await response.json() as unknown;
    return NextResponse.json({ events }, { headers: { 'Cache-Control': 'no-store' } });
  } catch { return NextResponse.json({ error: 'History unavailable' }, { status: 503 }); }
}
