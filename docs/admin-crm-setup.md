# IGT CRM — admin release gate

This PR adds the first secure, read-and-update CRM interface. The existing public contact capture stays unchanged.

## Before activation
1. In the **dedicated Infinity Growth Tech Supabase project**, review and execute `supabase/sql/igt_admin.sql`. No SQL was executed automatically.
2. In Supabase Authentication > Users, invite/create one verified staff account. Strong unique password and MFA for the account are recommended.
3. Copy the **auth.users ID** for that staff member (not their email) into the sample SQL comment in the blueprint to add them to `public.igt_staff_users`. Never add arbitrary users.
4. Add **SUPABASE_PUBLISHABLE_KEY** (the IGT `sb_publishable_...` API key) to Vercel **server-only** production and preview settings. Existing `SUPABASE_URL` and `SUPABASE_SECRET_KEY` remain unchanged. Do not use `NEXT_PUBLIC_` for any secret or credential beyond public keys.
5. Review Vercel preview build and route behavior. After deployment open `/admin/login` and authenticate with the specifically authorised staff account.
6. Test an unauthenticated GET to `/admin`, a PATCH to `/api/admin/leads/{id}`, and log out. Both unauthenticated paths must reject/redirect. Confirm that only explicitly allowlisted staff can sign in.
7. Test changing a lead status and internal notes and verify the changes in Supabase. Confirm the public contact page still works.

## Security model
- Password login occurs strictly on the server against Supabase Auth. No user password is stored or logged by the app.
- After verified Auth credentials, server checks the protected `igt_staff_users` allowlist with a server-only secret key.
- A short-lived Supabase access token is held in an `HttpOnly`, SameSite=Lax, Secure-in-production cookie and rechecked with Supabase Auth on every privileged request.
- All lead reads/writes happen server-side using the configured secret key **after** authorization. No direct `anon` or `authenticated` access to customer records.
- Mutating endpoints require same-origin. Staff cookie expires at token expiry (approximately one hour), requiring sign-in again.
- This foundation has no password reset, MFA enforcement, audit trail, pagination beyond 100 most recent leads, or permissions tiers. They are follow-up milestones; a short cookie lifetime is deliberate until robust session handling is implemented.
- Supabase Auth login rate limits apply. Review Vercel WAF/rate limits and keep Auth signup disabled for private staff access.
- User-created metadata is **not** used to authorize staff.
- No leads, user IDs, tokens, keys or passwords should be committed to source control.

## Release gate
Do not merge this PR before the dedicated staff table exists, the publishable key has been added, and access-control and write tests pass.
