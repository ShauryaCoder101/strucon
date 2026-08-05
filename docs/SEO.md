# STRUCON — SEO Strategy & Implementation Report

**Target:** Global EPC market · **Primary intent:** commercial (lead-gen), not just traffic.
This documents how SEO is engineered into the build, stage by stage. Items marked ✅ are
implemented in **Stage 1**; ⏳ are wired-for and completed in later stages.

---

## 1. Keyword strategy — commercial intent over raw volume

Per your brief, we target buyer-intent phrases a decision-maker types when they're ready to hire,
not broad informational terms. Mapped to pages so each URL owns a small keyword cluster:

| Page | Primary keyword | Supporting keywords |
|------|-----------------|---------------------|
| Home | Structural Engineering Consultant | Steel Detailing Company, EPC Engineering Design, Industrial Engineering Consultants |
| /services/steel-detailing | Steel Detailing Company | Tekla Modeling Services, Fabrication Drawing Services, Connection Design |
| /services/bim | Structural BIM Services | Tekla BIM, Clash Detection Services |
| /services/structural-engineering | Power Plant Structural Design | Pipe Rack Design, Industrial Steel Structures |
| /industries/power | Power Plant Structural Design | Boiler Structure Detailing |
| /industries/mining | Conveyor Gallery Design | Transfer Tower Design |
| /industries/oil-gas | Pipe Rack Design | Process Structure Detailing |
| Blog posts | long-tail informational | funnel top → capture → retarget |

The keyword bank lives in `src/lib/seo.ts` (`keywordBank`) and is attached per-page via `buildMetadata()`.

---

## 2. On-page & technical SEO

| Item | Status | Where |
|------|--------|-------|
| Unique `<title>` + meta description per page | ✅ (home) / ⏳ (all) | `buildMetadata()` in `src/lib/seo.ts` |
| Canonical URLs | ✅ | `alternates.canonical` in every page's metadata |
| Semantic heading hierarchy (one `<h1>`, ordered `<h2/h3>`) | ✅ | Hero `<h1>`, `Section` `<h2>`, cards `<h3>` |
| Open Graph + Twitter cards | ✅ | `buildMetadata()` |
| `sitemap.xml` (auto-generated, content-driven) | ✅ | `src/app/sitemap.ts` |
| `robots.txt` (+ sitemap ref, admin/api disallowed) | ✅ | `src/app/robots.ts` |
| Descriptive, keyword-relevant URL slugs | ✅ | `/services/steel-detailing`, `/industries/power` … |
| Image `alt` text everywhere | ✅ | `MediaFrame` requires `alt`; `next/image` enforced |
| Internal linking (nav, cards, footer, cross-links) | ✅ | Services/Industries/Projects grids all deep-link |
| Breadcrumbs + BreadcrumbList schema | ⏳ Stage 2–3 | on sub-pages |
| `hreflang` (only if we add localized pages) | ⏳ if needed | — |

---

## 3. Structured data (schema.org / JSON-LD)

| Schema | Status | Where |
|--------|--------|-------|
| `Organization` | ✅ | `src/lib/schema.ts` → rendered in root layout |
| `ProfessionalService` / `LocalBusiness` (address, geo, areaServed: Worldwide) | ✅ | same |
| `Service` (per service page) | ⏳ Stage 2 | |
| `Article` + author/date (per blog post) | ⏳ Stage 5 | |
| `BreadcrumbList` | ⏳ Stage 2–3 | |
| `FAQPage` (service-page FAQs) | ⏳ Stage 2 | eligible for rich results |

---

## 4. Performance = ranking (Core Web Vitals)

Google ranks on CWV; the stack is built to hit **95+ Lighthouse**:

- **Next.js App Router + React Server Components** — minimal client JS (only the Navbar and
  Reveal wrapper are client components).
- **Fonts self-hosted** via `next/font` (no render-blocking Google Fonts request; `display: swap`).
- **Images** via `next/image` with AVIF/WebP, responsive `sizes`, lazy-loading below the fold.
- **LCP:** hero text is server-rendered HTML (not an image), so the largest paint is instant;
  hero video is decorative and never the LCP element.
- **CLS:** fixed aspect-ratio media frames + reserved space → no layout shift.
- **No heavy libraries:** the "world map" is inline SVG/CSS, not a map/tiles library.
- **`prefers-reduced-motion`** respected; animations are CSS transforms (compositor-friendly).

> ⚠️ CWV caveat: once you supply the **hero video**, keep it ≤ ~2–3 MB, compressed (H.264/H.265),
> muted, and lazy — a heavy video is the one thing that can sink the mobile score. A high-quality
> poster image + short loop is the safe pattern.

---

## 5. Off-page & operational (your side — for later)
- Google Business Profile for the Noida HQ (feeds LocalBusiness).
- Google Search Console + GA4 (I'll add the tags in Stage 6 once you share IDs).
- Consistent NAP (Name, Address, Phone) across directories.
- Backlinks from EPC partners, association listings, and published project references.

---

## 6. What I still need from you for full SEO (see REQUIREMENTS.md)
1. **Production domain** — canonicals/sitemap currently use `www.strucon.net`.
2. **GA4 + Search Console** access/IDs.
3. **OG share image** (1200×630) — or I'll generate a branded default.
4. Confirmation of **priority service/industry pages** so I weight internal linking + metadata.
