'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Lead, StaffOption } from '@/lib/admin-auth';

const choices = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost', 'spam'] as const;
type LeadEvent = { id: number; occurred_at: string; old_status: string | null; new_status: string | null; old_follow_up_at: string | null; new_follow_up_at: string | null; notes_changed: boolean; old_assigned_to: string | null; new_assigned_to: string | null };
function isOpen(status: string) { return !['won','lost','spam'].includes(status); }
function toInputDate(iso: string) {
  const date = new Date(iso);
  return new Date(date.getTime() - date.getTimezoneOffset()*60000).toISOString().slice(0,16);
}
function LeadHistory({ id, refresh }: { id: string; refresh: number }) {
  const [events, setEvents] = useState<LeadEvent[]>([]);
  const [error, setError] = useState('');
  useEffect(() => {
    let current = true;
    fetch(`/api/admin/leads/${encodeURIComponent(id)}/events`, { cache: 'no-store' })
      .then(async r => { if (!r.ok) throw new Error('Unavailable'); return r.json() as Promise<{events: LeadEvent[]}>; })
      .then(data => { if (current) setEvents(data.events); })
      .catch(() => { if (current) setError('Could not load activity history.'); });
    return () => { current = false; };
  }, [id, refresh]);
  return <section className="mt-6 border-t border-white/10 pt-5">
    <h3 className="font-semibold">Recent activity</h3>
    {error && <p role="alert" className="mt-2 text-sm text-red-300">{error}</p>}
    {!error && events.length === 0 && <p className="muted mt-2 text-sm">No changes recorded.</p>}
    <ol className="mt-4 space-y-3 text-sm">{events.map(item => <li key={item.id} className="border-l-2 border-[#4ade80]/40 pl-3">
      <time className="text-[#9babb2]">{new Date(item.occurred_at).toLocaleString('en-IN')}</time>
      {item.old_status !== item.new_status && <p>Status: {item.old_status} → {item.new_status}</p>}
      {item.old_follow_up_at !== item.new_follow_up_at && <p>Follow-up date changed</p>}
      {item.notes_changed && <p>Internal notes updated</p>}
      {item.old_assigned_to !== item.new_assigned_to && <p>Assignment changed: {item.old_assigned_to?.slice(0,8) || 'Unassigned'} → {item.new_assigned_to?.slice(0,8) || 'Unassigned'}</p>}
    </li>)}</ol>
  </section>;
}
function LeadEditor({ lead, onSaved, staffOptions }: { lead: Lead; onSaved: (next: Lead) => void; staffOptions: StaffOption[] }) {
  const [status, setStatus] = useState(lead.status);
  const [notes, setNotes] = useState(lead.internal_notes || '');
  const [assignedTo, setAssignedTo] = useState(lead.assigned_to || '');
  const [followUp, setFollowUp] = useState(lead.follow_up_at ? toInputDate(lead.follow_up_at) : '');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [refresh, setRefresh] = useState(0);
  async function save() {
    setBusy(true); setMessage('');
    try {
      const follow_up_at = followUp ? new Date(followUp).toISOString() : null;
      const r = await fetch(`/api/admin/leads/${encodeURIComponent(lead.id)}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, internal_notes: notes, follow_up_at, assigned_to: assignedTo || null }),
      });
      if (r.status === 401 || r.status === 403) { window.location.assign('/admin/login'); return; }
      if (!r.ok) throw new Error('Unable to save changes');
      onSaved({ ...lead, status, internal_notes: notes, follow_up_at, assigned_to: assignedTo || null });
      setRefresh(n => n+1); setMessage('Saved');
    } catch { setMessage('Save failed. Please try again.'); } finally { setBusy(false); }
  }
  return <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
    <div className="grid gap-3 sm:grid-cols-2">
      <div><p className="text-xs uppercase tracking-widest text-[#9babb2]">Email</p><a className="break-all text-[#4ade80] hover:underline" href={`mailto:${lead.email}`}>{lead.email}</a></div>
      <div><p className="text-xs uppercase tracking-widest text-[#9babb2]">Phone</p><p>{lead.phone || 'Not provided'}</p></div>
    </div>
    <div><p className="text-xs uppercase tracking-widest text-[#9babb2]">Enquiry</p><p className="mt-2 whitespace-pre-wrap break-words text-[#d5e0e4]">{lead.message}</p></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-semibold" htmlFor={`status-${lead.id}`}>Pipeline status</label>
        <select id={`status-${lead.id}`} value={status} onChange={e=>setStatus(e.target.value)} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3">{choices.map(choice=><option key={choice} value={choice}>{choice}</option>)}</select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-semibold" htmlFor={`due-${lead.id}`}>Next follow-up (local time)</label>
        <input id={`due-${lead.id}`} type="datetime-local" value={followUp} onChange={e=>setFollowUp(e.target.value)} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3" />
        <button type="button" className="mt-2 text-sm text-[#4ade80] hover:underline" onClick={()=>setFollowUp('')}>Clear follow-up</button>
      </div>
    </div>
    <div>
      <label className="mb-2 block text-sm font-semibold" htmlFor={`owner-${lead.id}`}>Assigned staff member</label>
      <select id={`owner-${lead.id}`} value={assignedTo} onChange={e => setAssignedTo(e.target.value)} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3">
        <option value="">Unassigned</option>
        {staffOptions.map(staff => <option key={staff.user_id} value={staff.user_id}>Staff {staff.user_id.slice(0,8)}</option>)}
      </select>
    </div>
    <div>
      <label className="mb-2 block text-sm font-semibold" htmlFor={`notes-${lead.id}`}>Internal notes</label>
      <textarea id={`notes-${lead.id}`} value={notes} maxLength={5000} rows={3} onChange={e=>setNotes(e.target.value)} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3" />
    </div>
    <div className="flex items-center gap-4"><button type="button" disabled={busy} onClick={save} className="button-primary disabled:opacity-50">{busy ? 'Saving…' : 'Save changes'}</button><span role="status" className="text-sm text-[#a9eab9]">{message}</span></div>
    <LeadHistory id={lead.id} refresh={refresh} />
  </div>;
}

export function LeadsDashboard({ leads: initial, staffOptions, page, total, totalPages }: { leads: Lead[]; staffOptions: StaffOption[]; page: number; total: number; totalPages: number }) {
  const [leads, setLeads] = useState(initial);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [dueFilter, setDueFilter] = useState('all');
  const [ownerFilter, setOwnerFilter] = useState('all');
  const [expanded, setExpanded] = useState<string | null>(null);
  const counts = useMemo(() => ({
    total: leads.length,
    new: leads.filter(x=>x.status==='new').length,
    active: leads.filter(x=>['contacted','qualified','proposal'].includes(x.status)).length,
    due: leads.filter(x=>x.follow_up_at && isOpen(x.status) && new Date(x.follow_up_at).getTime() <= Date.now()).length,
  }), [leads]);
  const shown = useMemo(() => leads.filter(x => {
    const time = x.follow_up_at ? Date.parse(x.follow_up_at) : null;
    const now = Date.now();
    const todayEnd = new Date(); todayEnd.setHours(23,59,59,999);
    const dueMatch = dueFilter==='all' ||
      (dueFilter==='overdue' && time!==null && time<now && isOpen(x.status)) ||
      (dueFilter==='today' && time!==null && time<=todayEnd.getTime() && isOpen(x.status)) ||
      (dueFilter==='upcoming' && time!==null && time>now && isOpen(x.status)) ||
      (dueFilter==='unscheduled' && time===null && isOpen(x.status));
    const ownerMatch = ownerFilter==='all' || (ownerFilter==='unassigned' ? !x.assigned_to : x.assigned_to===ownerFilter);
    return (filter==='all' || x.status===filter) && dueMatch && ownerMatch &&
      [x.full_name,x.email,x.service_interest,x.source].some(value=>value.toLowerCase().includes(search.toLowerCase().trim()));
  }),[leads,filter,dueFilter,ownerFilter,search]);
  return <div>
    <p className="muted mb-5 text-sm">Page {page} of {totalPages} · {total} enquiries overall. Search and filters apply to this page only.</p>
    <div className="mb-9 grid grid-cols-2 gap-4 md:grid-cols-4">
      {([['On this page',counts.total],['New',counts.new],['In progress',counts.active],['Due / overdue',counts.due]] as const).map(([label,value])=><div key={label} className="panel p-5"><p className="text-sm text-[#a7b7bd]">{label}</p><p className="mt-3 text-3xl font-extrabold">{value}</p></div>)}
    </div>
    <div className="mb-6 flex flex-col gap-3 sm:flex-row">
      <label className="flex-1"><span className="sr-only">Search leads</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, email, service…" className="w-full rounded-lg border border-[#40515a] bg-[#111a20] p-3" /></label>
      <label><span className="sr-only">Filter by status</span><select className="w-full rounded-lg border border-[#40515a] bg-[#111a20] p-3" value={filter} onChange={e=>setFilter(e.target.value)}><option value="all">All statuses</option>{choices.map(choice=><option key={choice} value={choice}>{choice}</option>)}</select></label>
    </div>
    <div className="mb-6 flex flex-wrap gap-3">
      <label><span className="sr-only">Filter follow-up</span><select className="rounded-lg border border-[#40515a] bg-[#111a20] p-3" value={dueFilter} onChange={e=>setDueFilter(e.target.value)}>
        <option value="all">All follow-ups</option><option value="today">Due by today</option><option value="overdue">Overdue</option><option value="upcoming">Upcoming</option><option value="unscheduled">Unscheduled</option>
      </select></label>
      <label><span className="sr-only">Filter assignment</span><select className="rounded-lg border border-[#40515a] bg-[#111a20] p-3" value={ownerFilter} onChange={e=>setOwnerFilter(e.target.value)}>
        <option value="all">All owners</option><option value="unassigned">Unassigned</option>
        {staffOptions.map(staff=><option key={staff.user_id} value={staff.user_id}>Staff {staff.user_id.slice(0,8)}</option>)}
      </select></label>
    </div>
    <div className="space-y-4">
      {shown.length===0 && <p className="muted py-10">No enquiries match these filters.</p>}
      {shown.map(lead => {
        const due = lead.follow_up_at && isOpen(lead.status) ? new Date(lead.follow_up_at) : null;
        return <article key={lead.id} className="panel p-5 sm:p-6">
          <button type="button" onClick={()=>setExpanded(expanded===lead.id?null:lead.id)} aria-expanded={expanded===lead.id} className="flex w-full flex-wrap items-center justify-between gap-4 text-left">
            <span><span className="block text-lg font-bold">{lead.full_name}</span><span className="mt-1 block text-sm text-[#9eafb6]">{lead.service_interest} · {new Date(lead.created_at).toLocaleString('en-IN')}</span></span>
            <span className="flex flex-col items-end gap-2"><span className="rounded-lg border border-[#50636a] px-3 py-1 text-sm capitalize">{lead.status}</span>
              {due && <span className={due.getTime() <= Date.now() ? 'text-xs text-amber-300' : 'text-xs text-[#a0b0b8]'}>{due.getTime()<=Date.now()?'Overdue: ':'Follow up: '}{due.toLocaleString('en-IN',{dateStyle:'medium',timeStyle:'short'})}</span>}
            </span>
          </button>
          {expanded===lead.id && <LeadEditor lead={lead} staffOptions={staffOptions} onSaved={next=>setLeads(current=>current.map(item=>item.id===next.id?next:item))}/>}
        </article>;
      })}
    </div>
    <nav aria-label="Lead pages" className="mt-9 flex items-center justify-between gap-4 border-t border-white/10 pt-7">
      <div className="text-sm text-[#b6c7cc]">Showing {total === 0 ? 0 : (page-1)*25+1}–{Math.min(page*25,total)} of {total}</div>
      <div className="flex items-center gap-3">
        {page > 1 ? <Link href={`/admin?page=${page-1}`} className="button-outline">Previous</Link> : <span className="rounded-md border border-white/10 p-3 text-[#6e8188]">Previous</span>}
        <span className="text-sm text-[#b6c7cc]">{page} / {totalPages}</span>
        {page < totalPages ? <Link href={`/admin?page=${page+1}`} className="button-outline">Next</Link> : <span className="rounded-md border border-white/10 p-3 text-[#6e8188]">Next</span>}
      </div>
    </nav>
  </div>;
}
