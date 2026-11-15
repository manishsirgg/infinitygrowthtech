import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { currentStaff, queryLeads, queryStaffOptions } from '@/lib/admin-auth';
import { LeadsDashboard } from '@/components/leads-dashboard';
import { AdminLogout } from '@/components/admin-logout';

export const metadata: Metadata = { title: 'Private CRM', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

type Props = { searchParams: Promise<{ page?: string }> };
export default async function AdminPage({ searchParams }: Props) {
  const search = await searchParams;
  const requested = Number(search.page ?? '1');
  const page = Number.isSafeInteger(requested) && requested >= 1 && requested <= 10000 ? requested : 1;
  const staff = await currentStaff();
  if (!staff) redirect('/admin/login');
  let result;
  let staffOptions;
  try { [result, staffOptions] = await Promise.all([queryLeads(page), queryStaffOptions()]); } catch {
    return <section className="container-shell min-h-[60vh] py-20"><h1 className="text-3xl font-bold">CRM temporarily unavailable</h1><p className="muted mt-5">Check the staff table, database permissions and server configuration.</p><div className="mt-8"><AdminLogout /></div></section>;
  }
  return <section className="container-shell min-h-[65vh] py-14 md:py-20">
    <div className="mb-9 flex flex-wrap items-center justify-between gap-4">
      <div><p className="eyebrow">Staff-only workspace</p><h1 className="mt-2 text-4xl font-black">Lead management</h1><p className="muted mt-3 text-sm">Signed in as {staff.email}. Showing {result.total} total enquiries in pages of {result.pageSize}.</p></div>
      <AdminLogout />
    </div>
    <LeadsDashboard leads={result.leads} staffOptions={staffOptions} page={result.page} total={result.total} totalPages={result.totalPages} />
  </section>;
}
