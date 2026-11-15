# Infinity Growth Tech 2.0 — Root Next.js Migration

## Purpose
Use the existing Vercel project with Root Directory `./` and Next.js preset. The Next.js App Router application now lives directly at `src/app` in the repository root; `site-v2/` remains as the earlier scaffold snapshot.

## What changed
- Root `package.json` now uses Next.js (`next dev`, `next build`, `next start`) rather than Vite.
- Root TypeScript configuration is scoped to the new Next.js application.
- Added root Next.js configuration, PostCSS/Tailwind setup, ESLint setup, app routes and layout components.
- Removed the Vite dependency lockfile because it no longer matches the root manifest.
- The previous Vite files remain for reference but are not used by the Next.js build.

## Before merging
1. Check the PR preview deployment, build logs, and the homepage/contact/privacy routes.
2. Ensure Vercel Framework Preset is `Next.js`, Root Directory is `./` and Build/Install/Output command overrides are OFF.
3. Run `npm install`, `npm run typecheck`, `npm run lint`, `npm run build` locally or in CI.
4. Verify that legacy public assets do not conflict with Next.js routes; verify keyboard navigation and responsiveness.
5. Approve replacement of the old Vite homepage and its pricing/contact experience. The new contact page currently links back to the old live contact page, so it **must be replaced with a functioning enquiry form before permanent launch** to avoid a dead-end after cutover.

## Deployment safety
Do not switch Root Directory to `site-v2` or create a second project. Merge only after validation. Keep the previous successful deployment available for rollback. No Supabase secrets or AI keys are required by the foundation.
