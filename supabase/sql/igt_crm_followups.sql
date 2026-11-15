-- Infinity Growth Tech CRM: follow-up scheduling and automatic history.
-- Run in the dedicated IGT Supabase project after reviewing; NOT EvoLeveX.
-- Existing leads/staff tables remain unchanged except for additive columns.

alter table public.leads
  add column if not exists follow_up_at timestamptz,
  add column if not exists last_updated_by uuid references auth.users(id);

create index if not exists leads_follow_up_idx
  on public.leads (follow_up_at)
  where follow_up_at is not null and status not in ('won', 'lost', 'spam');

create table if not exists public.igt_lead_events (
  id bigint generated always as identity primary key,
  lead_id uuid not null references public.leads(id) on delete cascade,
  occurred_at timestamptz not null default now(),
  actor_id uuid references auth.users(id) on delete set null,
  old_status text,
  new_status text,
  old_follow_up_at timestamptz,
  new_follow_up_at timestamptz,
  notes_changed boolean not null default false
);

create index if not exists igt_lead_events_lead_time_idx
  on public.igt_lead_events (lead_id, occurred_at desc);

alter table public.igt_lead_events enable row level security;
revoke all on public.igt_lead_events from anon, authenticated;
grant select, insert on public.igt_lead_events to service_role;

-- Trigger runs with invoker rights, and is only invoked by our server-side
-- service-role update. No client can directly update a lead.
create or replace function public.igt_record_lead_update()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if old.status is distinct from new.status
     or old.follow_up_at is distinct from new.follow_up_at
     or old.internal_notes is distinct from new.internal_notes then
    insert into public.igt_lead_events(
      lead_id, actor_id, old_status, new_status,
      old_follow_up_at, new_follow_up_at, notes_changed
    )
    values (
      new.id, new.last_updated_by, old.status, new.status,
      old.follow_up_at, new.follow_up_at,
      old.internal_notes is distinct from new.internal_notes
    );
  end if;
  return new;
end;
$$;
revoke all on function public.igt_record_lead_update() from public, anon, authenticated;
grant execute on function public.igt_record_lead_update() to service_role;

drop trigger if exists igt_lead_change_audit on public.leads;
create trigger igt_lead_change_audit
after update of status, follow_up_at, internal_notes on public.leads
for each row execute function public.igt_record_lead_update();

-- Existing rules remain: no public SELECT/INSERT/UPDATE access to leads.
