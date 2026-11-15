# Infinity Growth Tech 2.0 — Next.js foundation

This is the **isolated** Next.js 16 App Router rebuild, located inside `site-v2/` so the existing Vite application in the repository root stays unchanged. This PR is an architecture/design milestone, **not a production cutover**.

## Develop locally

- Use Node.js 20.9 or newer.
- `cd site-v2`
- `npm install`
- `npm run dev`
- `npm run typecheck`
- `npm run lint`
- `npm run build`

## Deployment safety

- The **current Vercel production project remains rooted at the repository root**.
- If a preview deployment is desired, create a **separate Vercel project** and configure its Root Directory to `site-v2`. Ensure the new project does not claim the production custom domain.
- Never change the live Vercel Root Directory or merge this PR as a substitute for a controlled migration plan.
- Existing homepage, pricing and contact functionality remain in the root Vite application.
- This milestone deliberately does not integrate Supabase, forms, analytics or the AI advisor. All require security and configuration review.

## Design tokens

Premium dark identity: background `#070A0D`, surfaces `#10171C`, foreground `#E7EEF1`, accent `#4ADE80`, accent secondary `#2DD4BF`. Typography uses system-safe sans for now; custom font choice comes with detailed design review.

## Remaining before launch

- Confirm brand assets, contact email and legal/privacy copy.
- Replace temporary contact handoff with server-side validated lead submission and Supabase RLS.
- Review editorial/case study content and add genuine project screenshots.
- Add service landing pages, accessibility/SEO tests, monitoring and mobile QA.
- Review existing Gemini key exposure risk in the Vite app and rotate secrets where appropriate.
- Audit redirects, canonical host, production deployment settings and rollback plan.
