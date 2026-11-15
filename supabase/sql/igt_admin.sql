-- Provisioning blueprint for the existing dedicated Infinity Growth Tech Supabase database.
-- Apply only after review, never to EvoLeveX.
create table if not exists public.igt_staff_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.igt_staff_users enable row level security;
revoke all on table public.igt_staff_users from anon, authenticated;
grant select on table public.igt_staff_users to service_role;
comment on table public.igt_staff_users is 'Explicit allowlist for Infinity Growth Tech CRM staff. Service-only access.';

-- Do not create any public RLS policies on leads or staff_users.
-- After manually creating a staff account under Authentication > Users,
-- copy its confirmed auth.users UUID, then execute:
-- insert into public.igt_staff_users (user_id, active)
-- values ('YOUR_CONFIRMED_AUTH_USER_UUID', true)
-- on conflict (user_id) do update set active = excluded.active;
