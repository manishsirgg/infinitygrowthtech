# Infinity Growth Tech: secure lead capture setup

## Dedicated project required
The connected Supabase account currently exposes projects belonging to EvoLeveX, not IGT. Do not reuse those databases for IGT.

1. Create/identify a dedicated Infinity Growth Tech Supabase project.
2. Review and execute `supabase/sql/igt_leads.sql` in that project using approved SQL editor/migration workflow.
3. Create a Cloudflare Turnstile widget restricted to `infinitygrowthtech.com`, `www.infinitygrowthtech.com` and any specifically approved preview hostname.
4. Configure `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `TURNSTILE_SECRET_KEY`, `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_ALLOWED_HOSTNAMES` in Vercel. Never share these values in chat, GitHub or logs.
5. Deploy a preview, submit one authorised test lead, and confirm it appears only in the dedicated IGT leads table. Run RLS/security advisor checks.
6. Verify rejected test submissions (invalid email, oversized payload, missing captcha, replayed captcha, cross-origin request).
7. Publish a reviewed privacy policy specifying the actual controller, purpose, retention, providers and contact channel before production release.

## Security design
- Next.js server API route `POST /api/leads` validates input and verifies Cloudflare Turnstile server-side.
- Uses Supabase secret key strictly on the server, under the `apikey` header (new secret keys are not JWTs).
- RLS enabled; `anon` and `authenticated` roles lack table permissions; no public RLS policies.
- Server route sends a minimal insert to PostgREST, no database responses or sensitive logs.
- Same-origin check, honeypot, basic payload limits and Turnstile are layered controls; consider durable IP-based throttling and monitoring for sustained abuse.
- No CRM dashboard, email notifications, consent to marketing, or automated follow-up is claimed or implemented in this PR.

## Release gate
This PR must **not** be merged until Supabase and Turnstile are provisioned and both test and production environments have their credentials. Otherwise the contact form is intentionally disabled rather than silently sending to an unconfigured endpoint.

## Notes
The SQL file is a provisioning blueprint pending a dedicated database; it has NOT been executed. A database migration history entry should be generated in the new project's CLI workflow before production if using managed migrations.
