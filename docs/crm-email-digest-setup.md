# PR #21 — Optional daily CRM email digest

This release introduces a **daily administrative digest**, not immediate new-lead notifications.
The scheduled job runs around 09:30 Asia/Kolkata (04:00 UTC). Vercel Hobby cron timing may vary substantially.

## What it sends
- Number of enquiries received in the preceding 24 hours.
- Number of active leads with due/overdue follow-up dates.
- Number of active unassigned leads.
- A link to the staff-only CRM. No customer email, phone, message, or other PII is sent.

## Manual setup BEFORE merging or activating
1. Verify a domain you control with Resend and create an API key with the required send permission. Do not share the key.
2. Select an internal business recipient mailbox. Do not configure customers or third parties as recipients.
3. Set these **server-only, Production** Vercel environment variables:
   - `CRON_SECRET`: long random secret generated securely. Vercel passes it as an authorization bearer token.
   - `RESEND_API_KEY`: Resend API key.
   - `CRM_DIGEST_FROM`: verified sender address, e.g. notifications@your-verified-domain (example only).
   - `CRM_DIGEST_TO`: approved internal mailbox.
   - `CRM_DIGEST_ENABLED`: `true` after approval; omit or set `false` to disable sending.
   Existing `SUPABASE_URL` and `SUPABASE_SECRET_KEY` remain required.

## Validate
- Without CRON_SECRET, the endpoint must return 401.
- With CRON_SECRET but disabled config, return 503 without sending.
- Verify Supabase counts against SQL for the 24-hour window.
- Test an approved run using the provider's controlled test destination; inspect only sanitized Vercel response/logs.
- A retry with the same daily idempotency key should not deliver a second email within Resend's supported replay window.
- Confirm the daily job is registered in the Vercel Cron dashboard after deployment.
- Review data processing implications and the provider's handling of administrator email data.
- Disable immediately by setting `CRM_DIGEST_ENABLED=false` and redeploying if necessary.

## Scope and limitations
- No customer-facing emails, marketing newsletters, WhatsApp alerts, or transactional responses.
- Not a reliable real-time alert. On Hobby, the once-daily schedule is intentional.
- The Resend idempotency key reduces repeated sends but is not a permanent cross-day lock.
- Digest counts are organization-wide while the CRM's search/filter UI is page-local.
- This is an optional feature for a commercial venture: confirm your Vercel plan permits your commercial use. Hobby terms generally restrict commercial workloads.
- Production contact form remains unchanged.
