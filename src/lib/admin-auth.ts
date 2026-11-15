import 'server-only';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'igt_admin_access';

const headersNoStore = { 'Cache-Control': 'no-store' };

export function getSupabaseConfig() {
  const raw = process.env.SUPABASE_URL;
  const publicKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!raw || !publicKey || !secret) return null;
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:' || !url.hostname.endsWith('.supabase.co')) return null;
    return { base: url.origin, publicKey, secret };
  } catch { return null; }
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
  internal_notes: string | null; updated_at: string; follow_up_at: string | null; assigned_to: string | null;
};

export const LEADS_PAGE_SIZE = 25;
export type LeadPage = { leads: Lead[]; page: number; pageSize: number; total: number; totalPages: number };

export async function queryLeads(page = 1): Promise<LeadPage> {
  const cfg = getSupabaseConfig();
  if (!cfg) throw new Error('Admin not configured');
  if (!Number.isSafeInteger(page) || page < 1 || page > 10000) throw new Error('Invalid page');
  const offset = (page - 1) * LEADS_PAGE_SIZE;
  const url = new URL('/rest/v1/leads', cfg.base);
  url.searchParams.set('select', 'id,created_at,full_name,email,phone,service_interest,message,source,status,internal_notes,updated_at,follow_up_at,assigned_to');
  url.searchParams.set('order', 'created_at.desc,id.desc');
  url.searchParams.set('limit', String(LEADS_PAGE_SIZE));
  url.searchParams.set('offset', String(offset));
  const response = await fetch(url, {
    headers: { apikey: cfg.secret, Prefer: 'count=exact' },
    cache: 'no-store', signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error('Unable to load leads');
  const leads = await response.json() as Lead[];
  const range = response.headers.get('content-range');
  const countMatch = range?.match(/\\/(\\d+)$/);
  if (!countMatch) throw new Error('Missing lead count');
  const total = Number(countMatch[1]);
  return { leads, page, pageSize: LEADS_PAGE_SIZE, total, totalPages: Math.max(1, Math.ceil(total / LEADS_PAGE_SIZE)) };
}

export { headersNoStore };

export type StaffOption = { user_id: string; active: boolean };
export async function queryStaffOptions(): Promise<StaffOption[]> {
  const cfg = getSupabaseConfig();
  if (!cfg) throw new Error('Admin not configured');
  const response = await fetch(
    `${cfg.base}/rest/v1/igt_staff_users?select=user_id,active&active=eq.true&order=created_at.asc&limit=100`,
    { headers: { apikey: cfg.secret }, cache: 'no-store', signal: AbortSignal.timeout(10000) }
  );
  if (!response.ok) throw new Error('Unable to load staff');
  return response.json() as Promise<StaffOption[]>;
}
