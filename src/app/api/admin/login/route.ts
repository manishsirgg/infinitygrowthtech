import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, getSupabaseConfig, sameOrigin, verifyStaffToken } from '@/lib/admin-auth';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  if (!sameOrigin(request)) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const cfg = getSupabaseConfig();
  if (!cfg) return NextResponse.json({ error: 'Admin unavailable' }, { status: 503 });
  let credentials: { email?: unknown; password?: unknown };
  try {
    if (Number(request.headers.get('content-length') ?? 0) > 4096) throw new Error('large');
    const raw = await request.text();
    if (raw.length > 4096) throw new Error('large');
    credentials = JSON.parse(raw) as typeof credentials;
  } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const email = typeof credentials?.email === 'string' ? credentials.email.trim() : '';
  const password = typeof credentials?.password === 'string' ? credentials.password : '';
  if (!email || email.length > 240 || !password || password.length > 1024) return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });

  try {
    const r = await fetch(`${cfg.base}/auth/v1/token?grant_type=password`, {
      method: 'POST', headers: { apikey: cfg.publicKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }), cache: 'no-store', signal: AbortSignal.timeout(8000),
    });
    if (!r.ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    const session = await r.json() as { access_token?: string; expires_in?: number };
    if (!session.access_token || !(await verifyStaffToken(session.access_token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }
    const response = NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } });
    // Short-lived, HTTP-only session. Reauthentication is required after expiry.
    response.cookies.set(ADMIN_COOKIE, session.access_token, {
      httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax',
      path: '/', maxAge: Math.min(3600, Math.max(60, session.expires_in ?? 3600)),
    });
    return response;
  } catch { return NextResponse.json({ error: 'Sign in unavailable' }, { status: 503 }); }
}
