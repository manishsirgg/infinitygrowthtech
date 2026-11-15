# PR #18 — Follow-ups and CRM history: deployment gate

This is additive to the production lead capture and staff dashboard. Do not merge before the dedicated IGT database migration is applied and verified.

## Database first
1. Review `supabase/sql/igt_crm_followups.sql` and execute in the dedicated IGT project SQL Editor. NOT in EvoLeveX.
2. Confirm `leads.follow_up_at`, `leads.last_updated_by` and `igt_lead_events` exist.
3. Confirm RLS is on for both leads and event log, with no anonymous/authenticated table grants or permissive policies.
4. Run the Supabase Security Advisor.
5. Confirm the approved staff account has working login, and only staff-allowlisted users can reach `/admin`.

## Application behavior
- Staff may assign a due date/time or clear it, edit status and notes.
- Each meaningful edit creates a history entry through a database trigger, recording status change, due date change, whether notes changed and the authenticated actor ID.
- History intentionally does not store old/new notes content to avoid duplicating sensitive customer data.
- The dashboard reports due/overdue next actions for the 100 most recent leads, not an organisation-wide total.
- The existing public lead-capture endpoint remains unchanged.
- Admin sessions remain short lived; no refresh tokens.
- No email/SMS/WhatsApp reminders or background jobs are implemented.

## Pre-merge validation
- Check Vercel preview build and TypeScript.
- Save a follow-up date and verify it persists after page refresh.
- Clear follow-up and verify it persists.
- Change status/notes and verify an event row appears in `igt_lead_events`.
- Verify unauthorised PATCH returns 401, and same-origin enforcement rejects cross-origin requests.
- Verify public contact submissions still work.
- This is a draft PR; don't merge until SQL and tests pass.
