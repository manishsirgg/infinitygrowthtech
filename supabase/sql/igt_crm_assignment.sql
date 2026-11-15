-- PR #19: staff assignment and change history.
-- Review and run ONLY in the Infinity Growth Tech Supabase project.
alter table public.leads
  add column if not exists assigned_to uuid references public.igt_staff_users(user_id) on delete set null;

create index if not exists leads_assigned_to_idx
  on public.leads (assigned_to, follow_up_at)
  where assigned_to is not null;

alter table public.igt_lead_events
  add column if not exists old_assigned_to uuid,
  add column if not exists new_assigned_to uuid;

create or replace function public.igt_record_lead_update()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if old.status is distinct from new.status
     or old.follow_up_at is distinct from new.follow_up_at
     or old.internal_notes is distinct from new.internal_notes
     or old.assigned_to is distinct from new.assigned_to then
    insert into public.igt_lead_events(
      lead_id, actor_id, old_status, new_status,
      old_follow_up_at, new_follow_up_at, notes_changed,
      old_assigned_to, new_assigned_to
    )
    values (
      new.id, new.last_updated_by, old.status, new.status,
      old.follow_up_at, new.follow_up_at,
      old.internal_notes is distinct from new.internal_notes,
      old.assigned_to, new.assigned_to
    );
  end if;
  return new;
end;
$$;
revoke all on function public.igt_record_lead_update() from public, anon, authenticated;
grant execute on function public.igt_record_lead_update() to service_role;

drop trigger if exists igt_lead_change_audit on public.leads;
create trigger igt_lead_change_audit
after update of status, follow_up_at, internal_notes, assigned_to on public.leads
for each row execute function public.igt_record_lead_update();

-- Keep both tables private. Only the server-only service key can access them.
alter table public.leads enable row level security;
alter table public.igt_staff_users enable row level security;
alter table public.igt_lead_events enable row level security;
revoke all on public.leads, public.igt_staff_users, public.igt_lead_events from anon, authenticated;
grant select, insert, update on public.leads to service_role;
grant select on public.igt_staff_users to service_role;
grant select, insert on public.igt_lead_events to service_role;
