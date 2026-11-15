'use client';
import { useMemo, useState } from 'react';
import type { Lead } from '@/lib/admin-auth';

const choices = ['new', 'contacted', 'qualified', 'proposal', 'won', 'lost', 'spam'] as const;

function LeadEditor({ lead, onSaved }: { lead: Lead; onSaved: (next: Lead) => void }) {
  const [status, setStatus] = useState(lead.status);
  const [notes, setNotes] = useState(lead.internal_notes || '');
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  async function save() {
    setBusy(true); setMessage('');
    try {
      const r = await fetch(`/api/admin/leads/${encodeURIComponent(lead.id)}`, { method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status, internal_notes: notes }) });
      if (r.status === 401 || r.status === 403) { window.location.assign('/admin/login'); return; }
      if (!r.ok) throw new Error('Unable to save changes');
      onSaved({ ...lead, status, internal_notes: notes }); setMessage('Saved');
    } catch { setMessage('Save failed. Try again.'); } finally { setBusy(false); }
  }
  return <div className="mt-5 space-y-4 border-t border-white/10 pt-5">
    <div className="grid gap-3 sm:grid-cols-2">
      <div><p className="text-xs uppercase tracking-widest text-[#9babb2]">Email</p><a className="break-all text-[#4ade80] hover:underline" href={`mailto:${lead.email}`}>{lead.email}</a></div>
      <div><p className="text-xs uppercase tracking-widest text-[#9babb2]">Phone</p><p>{lead.phone || 'Not provided'}</p></div>
    </div>
    <div><p className="text-xs uppercase tracking-widest text-[#9babb2]">Enquiry</p><p className="mt-2 whitespace-pre-wrap break-words text-[#d5e0e4]">{lead.message}</p></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <div><label className="mb-2 block text-sm font-semibold" htmlFor={`status-${lead.id}`}>Pipeline status</label>
        <select id={`status-${lead.id}`} value={status} onChange={e => setStatus(e.target.value)} className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3">
          {choices.map(choice => <option key={choice} value={choice}>{choice}</option>)}
        </select></div>
      <div><label className="mb-2 block text-sm font-semibold" htmlFor={`notes-${lead.id}`}>Internal notes</label>
        <textarea id={`notes-${lead.id}`} value={notes} maxLength={5000} rows={3} onChange={e => setNotes(e.target.value)}
          className="w-full rounded-lg border border-[#40515a] bg-[#070a0d] p-3" /></div>
    </div>
    <div className="flex items-center gap-4"><button type="button" disabled={busy} onClick={save} className="button-primary disabled:opacity-50">{busy ? 'Saving…' : 'Save changes'}</button><span role="status" className="text-sm text-[#a9eab9]">{message}</span></div>
  </div>;
}

export function LeadsDashboard({ leads: initial }: { leads: Lead[] }) {
  const [leads, setLeads] = useState(initial);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState<string | null>(null);
  const counts = useMemo(() => ({
    total: leads.length, new: leads.filter(x => x.status === 'new').length,
    active: leads.filter(x => ['contacted','qualified','proposal'].includes(x.status)).length,
    won: leads.filter(x => x.status === 'won').length,
  }), [leads]);
  const shown = useMemo(() => leads.filter(x => (filter === 'all' || x.status === filter) &&
    [x.full_name,x.email,x.service_interest,x.source].some(value => value.toLowerCase().includes(search.toLowerCase().trim()))), [leads,filter,search]);
  return <div>
    <div className="mb-9 grid grid-cols-2 gap-4 md:grid-cols-4">
      {([['Total (latest 100)',counts.total],['New',counts.new],['In progress',counts.active],['Won',counts.won]] as const).map(([label,value])=>
      <div key={label} className="panel p-5"><p className="text-sm text-[#a7b7bd]">{label}</p><p className="mt-3 text-3xl font-extrabold">{value}</p></div>)}
    </div>
    <div className="mb-6 flex flex-col gap-3 sm:flex-row">
      <label className="flex-1"><span className="sr-only">Search leads</span><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search name, email, service…" className="w-full rounded-lg border border-[#40515a] bg-[#111a20] p-3" /></label>
      <label><span className="sr-only">Filter by status</span><select className="w-full rounded-lg border border-[#40515a] bg-[#111a20] p-3" value={filter} onChange={e=>setFilter(e.target.value)}>
        <option value="all">All statuses</option>{choices.map(choice=><option key={choice} value={choice}>{choice}</option>)}
      </select></label>
    </div>
    <div className="space-y-4">
      {shown.length === 0 && <p className="muted py-10">No enquiries match these filters.</p>}
      {shown.map(lead => <article key={lead.id} className="panel p-5 sm:p-6">
        <button type="button" onClick={()=>setExpanded(expanded===lead.id?null:lead.id)} aria-expanded={expanded===lead.id} className="flex w-full flex-wrap items-center justify-between gap-4 text-left">
          <span><span className="block text-lg font-bold">{lead.full_name}</span><span className="mt-1 block text-sm text-[#9eafb6]">{lead.service_interest} · {new Date(lead.created_at).toLocaleString('en-IN')}</span></span>
          <span className="rounded-lg border border-[#50636a] px-3 py-1 text-sm capitalize">{lead.status}</span>
        </button>
        {expanded===lead.id && <LeadEditor lead={lead} onSaved={next=>setLeads(current=>current.map(item=>item.id===next.id?next:item))} />}
      </article>)}
    </div>
  </div>;
}
