'use client';
import { useState, type FormEvent } from 'react';

export function AdminLoginForm() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const values = new FormData(form);
    setBusy(true); setError('');
    try {
      const r = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: values.get('email'), password: values.get('password') }) });
      if (!r.ok) throw new Error('Sign in failed. Check your credentials and staff access.');
      window.location.assign('/admin');
    } catch (err) { setError(err instanceof Error ? err.message : 'Sign in failed.'); setBusy(false); }
  }
  return <form onSubmit={submit} className="panel space-y-5 p-7">
    <div><label htmlFor="staff-email" className="mb-2 block text-sm font-semibold">Staff email</label>
    <input id="staff-email" type="email" name="email" autoComplete="username" required maxLength={240} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3" /></div>
    <div><label htmlFor="staff-pass" className="mb-2 block text-sm font-semibold">Password</label>
    <input id="staff-pass" type="password" name="password" autoComplete="current-password" required className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3" /></div>
    <button className="button-primary disabled:opacity-50" disabled={busy} type="submit">{busy ? 'Signing in…' : 'Sign in'}</button>
    {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
  </form>;
}
