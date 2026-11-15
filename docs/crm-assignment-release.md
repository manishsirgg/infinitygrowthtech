# PR #19 — CRM assignment, follow-up filters and richer timeline

## Release order
1. Apply `supabase/sql/igt_crm_assignment.sql` to the dedicated Infinity Growth Tech project, **not EvoLeveX**. Review before running.
2. Confirm `leads.assigned_to`, `igt_lead_events.old_assigned_to` and `igt_lead_events.new_assigned_to` exist.
3. Confirm RLS is on for leads, staff_users and events, and neither anon nor authenticated role has table access.
4. Check Supabase Security Advisor; verify active staff records and existing CRM sign-in.
5. Test PR preview at /admin: filter by status, due today/overdue, unscheduled, assigned staff and unassigned.
6. Save assignment to an active staff member, refresh the page, and verify persistence and a new activity event. Try clearing assignment.
7. Verify inactive/non-staff user IDs cannot be assigned. Check unauthenticated PATCH denial and preserve public /contact.
8. Only then merge and deploy. No production SQL was executed by this PR.

## Notifications
New leads are visible in the existing **New** count and can now be triaged by ownership and follow-up schedule.
No outbound email, text or WhatsApp notifications are implemented in this milestone: those require a verified sender, recipient policy, consent/relevance and a secret for a delivery provider. Implement as a separate gated PR with idempotency and monitoring.

## Current limitations
- Dashboard, counts and filters cover the most recent 100 leads only.
- No full-text server search, pagination, row locking or conflict resolution.
- Activity events track field changes, not raw note text; the 30 newest events per lead are displayed.
- Do not make claims about automatic reminders until a scheduled notification job exists.
