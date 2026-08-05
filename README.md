# STRUCON Website

Corporate lead-generation website for **STRUCON Consulting Pvt. Ltd.** — structural engineering
& steel detailing for global EPC companies. Next.js (App Router) + React + Tailwind CSS.

## Getting started

```bash
npm install      # or pnpm install
npm run dev      # http://localhost:3000
```

Scripts: `dev`, `build`, `start`, `lint`, `typecheck`.

## Design system

"Engineering Drawing" identity — see the tokens in `tailwind.config.ts`:
- **Colors:** `ink` #0B1F33 · `steel` #1B4B77 · `accent` #F26419 · `paper` #F4F6F9 · `line` #D9E0E8
- **Type:** Space Grotesk (display) · Inter (body) · IBM Plex Mono (data/labels)
- **Motif:** blueprint grid, mono discipline codes, drawing-title-block strips.

## Built-in admin panel (`/admin`)

A password-protected CMS at **`/admin`** lets non-technical staff edit content **without touching
code** — no external service. It covers: **Services, Industries, Projects, Blog, Team, Clients,
Testimonials, Careers**.

- **Sign in:** go to `/admin`. Default dev password `strucon-admin`. Set `ADMIN_PASSWORD` (and
  `ADMIN_TOKEN`) in your environment for production.
- **How it works:** the code seeds (`src/content/*`) are the defaults. When an editor saves, an
  override JSON is written to `/content-data/<collection>.json`, and the affected pages are
  revalidated so the change goes **live immediately**. Delete an override file to revert to seed.
- **Hosting requirement:** because the admin **writes files**, deploy on a **Node server with a
  persistent/writable filesystem** (or mount a volume) — not static/serverless-static hosting.
- **Editing model:** simple fields get proper inputs; list fields (e.g. software, deliverables)
  are one-per-line; complex nested data (benefits, process, FAQs, blog body, SEO) is edited as JSON.

Static site facts not in the admin — company name, contact details, nav, the About page, and legal
text — are edited in code: `src/content/site.ts`, `about.ts`, `legal.ts`.

**Architecture:** public pages read live content via server-only getters in `src/lib/content.ts`
(override → seed fallback via `src/lib/content-store.ts`). Client components receive data as props.
Auth: `src/lib/admin-auth.ts`. Editor UI: `src/components/admin/CollectionEditor.tsx`, driven by
field schemas in `src/content/admin-schema.ts`. Save API: `src/app/api/admin/save/route.ts`.

Every collection is typed against `src/types/index.ts`, so shape mistakes surface as build errors.

## Media / images

Images are **not required to run** — `MediaFrame` renders an on-brand blueprint placeholder that
prints the AI-generation prompt for each slot. To use a real asset, put it in `/public/...` and set
the `image` / `thumbnail` / `src` field in the relevant content file.

**Hero video:** drop `public/media/hero.mp4` (+ `public/media/hero-poster.jpg`). Until then the
hero shows its steel-gradient + blueprint fallback. Keep the video ≤ ~3 MB, muted, looping.

## SEO

See [`docs/SEO.md`](docs/SEO.md). Metadata factory: `src/lib/seo.ts`; schema: `src/lib/schema.ts`;
`sitemap.ts` / `robots.ts` are auto-generated from content.

## Requirements / open items

See [`REQUIREMENTS.md`](REQUIREMENTS.md) for the full asset & decision checklist.

## Build status

All six stages are complete — **40 routes**, full production build passing.

- **Stage 1:** scaffold, design system, components, homepage, SEO/schema foundation.
- **Stage 2:** reusable service template + all 8 service pages, with Service/FAQ/Breadcrumb schema.
- **Stage 3:** Industries (index + 8), Projects/case studies (index + 3), Clients + testimonials.
- **Stage 4:** About, Leadership, Careers (filterable openings + apply form).
- **Stage 5:** Blog index + post template + 3 seed posts, with Article schema.
- **Stage 6:** Contact (Google Map + intent-aware form), Privacy, Terms, validated lead forms
  (React Hook Form + Zod) → `/api/lead` placeholder, custom 404, auto OG image, sitemap/robots.

### Forms
`LeadForm` (`src/components/forms/LeadForm.tsx`) adapts its fields per CTA intent
(consultation, proposal, profile, tender w/ file upload, review, career, general) via
`src/content/forms.ts`. It POSTs to `src/app/api/lead/route.ts` — a validated placeholder that
logs the lead; wire it to email/CRM/storage for go-live (see REQUIREMENTS.md §6).

### Page routes
`/` · `/about` · `/leadership` · `/services` (+8) · `/industries` (+8) · `/projects` (+3) ·
`/clients` · `/careers` · `/blog` (+3) · `/contact` · `/privacy` · `/terms`
