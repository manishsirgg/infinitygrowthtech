-- Run this schema ONLY in a dedicated Infinity Growth Tech Supabase project.
-- Do not apply it to EvoLeveX or any other venture.
-- This is the initial reviewed SQL blueprint; production execution is intentionally separate.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 2 and 120),
  email text not null check (char_length(email) <= 240),
  phone text check (phone is null or char_length(phone) <= 30),
  service_interest text not null check (service_interest in (
    'Website or Digital Platform', 'Marketing & Growth', 'Automation', 'Other'
  )),
  message text not null check (char_length(message) between 10 and 5000),
  source text not null default 'website-contact' check (char_length(source) <= 80),
  utm_source text check (utm_source is null or char_length(utm_source) <= 120),
  utm_medium text check (utm_medium is null or char_length(utm_medium) <= 120),
  utm_campaign text check (utm_campaign is null or char_length(utm_campaign) <= 120),
  status text not null default 'new' check (status in ('new', 'qualified', 'contacted', 'proposal', 'won', 'lost', 'spam')),
  internal_notes text,
  updated_at timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status, created_at desc);

alter table public.leads enable row level security;

-- No public read, insert, update or delete policies. The Next.js backend writes
-- using a server-only Supabase secret key; never expose the key to the browser.
revoke all on table public.leads from anon, authenticated;
grant select, insert, update on table public.leads to service_role;

comment on table public.leads is 'Private business enquiries collected by Infinity Growth Tech website.';
