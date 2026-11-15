import 'server-only';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'igt_admin_access';

const headersNoStore = { 'Cache-Control': 'no-store' };

export function getSupabaseConfig() {
  const raw = process.env.SUPABASE_URL;
  const publicKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!raw || !publicKey || !secret) return null;
  const url = new URL(raw);
  if (url.protocol !== 'https:' || !url.hostname.endsWith('.supabase.co')) return null;
  return { base: url.origin, publicKey, secret };
}

export function sameOrigin(request: Request): boolean {
  try {
    const origin = request.headers.get('origin');
    return !!origin && new URL(origin).origin === new URL(request.url).origin;
  } catch { return false; }
}

export async function verifyStaffToken(token: string) {
  const cfg = getSupabaseConfig();
  if (!cfg || !token) return null;
  try {
    const userResponse = await fetch(`${cfg.base}/auth/v1/user`, {
      headers: { apikey: cfg.publicKey, Authorization: `Bearer ${token}` },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });
    if (!userResponse.ok) return null;
    const user = await userResponse.json() as { id?: string; email?: string };
    if (!user.id || !/^[a-f\d-]{36}$/i.test(user.id)) return null;
    // DB-backed allowlist: users cannot grant themselves staff access via user metadata.
    const staffResponse = await fetch(
      `${cfg.base}/rest/v1/igt_staff_users?user_id=eq.${encodeURIComponent(user.id)}&active=eq.true&select=user_id&limit=1`,
      { headers: { apikey: cfg.secret }, cache: 'no-store', signal: AbortSignal.timeout(8000) }
    );
    if (!staffResponse.ok) return null;
    const rows = await staffResponse.json() as Array<{ user_id: string }>;
    return Array.isArray(rows) && rows[0]?.user_id === user.id
      ? { id: user.id, email: user.email ?? '' }
      : null;
  } catch { return null; }
}

export async function currentStaff() {
  const jar = await cookies();
  return verifyStaffToken(jar.get(ADMIN_COOKIE)?.value ?? '');
}

export type Lead = {
  id: string; created_at: string; full_name: string; email: string; phone: string | null;
  service_interest: string; message: string; source: string; status: string;
  internal_notes: string | null; updated_at: string;
};

export async function queryLeads() {
  const cfg = getSupabaseConfig();
  if (!cfg) throw new Error('Admin not configured');
  const response = await fetch(
    `${cfg.base}/rest/v1/leads?select=id,created_at,full_name,email,phone,service_interest,message,source,status,internal_notes,updated_at&order=created_at.desc&limit=100`,
    { headers: { apikey: cfg.secret }, ...{ cache: 'no-store' as const }, signal: AbortSignal.timeout(10000) }
  );
  if (!response.ok) throw new Error('Unable to load leads');
  return response.json() as Promise<Lead[]>;
}

export { headersNoStore };
