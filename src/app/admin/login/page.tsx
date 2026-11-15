import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { currentStaff } from '@/lib/admin-auth';
import { AdminLoginForm } from '@/components/admin-login-form';

export const metadata: Metadata = { title: 'Staff Sign In', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function AdminLogin() {
  if (await currentStaff()) redirect('/admin');
  return <section className="container-shell min-h-[68vh] py-20">
    <p className="eyebrow">Private administration</p>
    <h1 className="mt-5 text-4xl font-extrabold">Staff sign in</h1>
    <p className="muted mt-4 max-w-xl">Authorised Infinity Growth Tech staff only. Customer enquiries are private.</p>
    <div className="mt-10 max-w-lg"><AdminLoginForm /></div>
  </section>;
}
