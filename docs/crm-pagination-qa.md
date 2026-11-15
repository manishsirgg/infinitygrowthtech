# PR #20 — CRM pagination

The existing CRM only loaded the latest 100 leads. This update fetches 25 leads per page using a protected server-side Supabase REST query and an exact result count.

The dashboard presents current-page cards and filtering explicitly as page-local. All existing customer-data access remains staff-only.

QA: verify preview build; check /admin and ?page=2 with more than 25 records; verify editing a lead on page 2; test empty and partial pages; check keyboard and mobile navigation; confirm the contact form still works.

Limitations: page-based offset can shift during concurrent inserts; search, filters and statistics are page-local rather than global. No email notifications or scheduled jobs are enabled.