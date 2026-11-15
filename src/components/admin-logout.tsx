'use client';
export function AdminLogout() {
  return <button className="button-outline text-sm" type="button" onClick={async () => {
    const r = await fetch('/api/admin/logout', { method: 'POST' });
    if (r.ok) window.location.assign('/admin/login');
  }}>Sign out</button>;
}
