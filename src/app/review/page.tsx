import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { TbdBlock } from "@/components/shared/Tbd";
import { REVIEW_MODE } from "@/content/review";
import { site } from "@/content/site";

/**
 * Content status — one page listing everything still owed by the client, grouped by area.
 * This is a working document for the review preview, not part of the public site: it is
 * noindexed, absent from the sitemap, and linked only from the footer while REVIEW_MODE is on.
 *
 * The route always exists (so the build output is identical in both modes); with REVIEW_MODE
 * off it renders a short "review is closed" state instead of the outstanding-items list.
 */
export const metadata: Metadata = {
  title: "Content status (client review) | STRUCON",
  description: "Internal checklist of outstanding content for the STRUCON website review preview.",
  // Own canonical so this page does not inherit the root layout's "/" canonical.
  alternates: { canonical: `${site.url}/review` },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
};

type Item = {
  /** What is missing. */
  need: string;
  /** Where it shows up on the site, so the client can see the consequence. */
  where: string;
};

type Group = {
  area: string;
  items: Item[];
};

/**
 * Every outstanding item. Keep this in step with the TbdBlock / TbdNote markers placed
 * around the site — if a marker is removed because content arrived, remove its row here.
 */
const groups: Group[] = [
  {
    area: "Certifications",
    items: [
      {
        need: "Confirmation of any certifications held (e.g. ISO 9001) with a current, dated certificate.",
        where:
          "About → Standards we work to. No certification is claimed anywhere on the site until a certificate is supplied; only the design/detailing standards you confirmed are listed.",
      },
    ],
  },
  {
    area: "Logo & brand assets",
    items: [
      {
        need: "Vector logo (SVG or AI/EPS) plus a mono/reversed version, and brand colour references if they exist.",
        where:
          "Site-wide header and footer, where the STRUCON name is currently set as type. The palette was sampled to complement the existing steel/industrial mark and will be re-tuned once the real artwork arrives.",
      },
      {
        need: "Favicon / app icon source at 512px or larger.",
        where: "Browser tab and bookmark icon.",
      },
    ],
  },
  {
    area: "Hero video",
    items: [
      {
        need: "A muted, looping industrial clip (approx. 10s, 1080p or better) for /public/media/hero.mp4, plus a poster frame.",
        where:
          "Home page hero. A supplied refinery still is standing in as the poster; the gradient and blueprint overlay carry the hero until the clip lands.",
      },
    ],
  },
  {
    area: "Photography",
    items: [
      {
        need: "Service photography — one image per service page.",
        where: "Services pages. Seven supplied photos are already in use across the site; the remaining slots show a TBD frame with the art direction for the shot needed.",
      },
      {
        need: "Industry photography.",
        where: "Industries index and detail pages.",
      },
      {
        need: "Project photography — site photos or rendered views per case study, with permission to publish.",
        where: "Projects index and case-study pages.",
      },
      {
        need: "Team headshots for all four directors (consistent background and lighting).",
        where: "Leadership page and the leadership preview on About.",
      },
      {
        need: "Office photography — Noida and Gurugram, interior and exterior.",
        where: "About page and Contact page.",
      },
    ],
  },
  {
    area: "Client logos",
    items: [
      {
        need: "Rights-cleared logo files (SVG or transparent PNG) for each named client, plus written permission to display each mark.",
        where:
          "Clients page logo grid, which currently sets every client name as text. Client names themselves are already confirmed and tied to a supplied case study.",
      },
    ],
  },
  {
    area: "Testimonials",
    items: [
      {
        need: "Approved client quotes. Each needs the quote, the person's name, their job title, their company, and written permission to publish.",
        where:
          "Clients page. Nothing is published until real quotes arrive — we will not write testimonials on your behalf.",
      },
    ],
  },
  {
    area: "Director bios & LinkedIn",
    items: [
      {
        need: "Short biographies (60–120 words) for Owais Ahmad, Rukhsada Khatoon and Yasir Ali, written by or approved by each individual.",
        where: "Leadership page. Mohammad Shaheem's bio has been supplied and is published.",
      },
      {
        need: "LinkedIn profile URLs for any director who wants theirs linked.",
        where: "Leadership page. No profile links are shown at present.",
      },
    ],
  },
  {
    area: "Blog approval",
    items: [
      {
        need: "Review and approval of the three seed articles, or instruction to remove them.",
        where: "Insights index and each article page.",
      },
      {
        need: "Confirmed byline — who should be credited as the author of each article.",
        where: "Article headers and the structured data attached to each post. The current authors are placeholders.",
      },
    ],
  },
  {
    area: "Privacy & terms",
    items: [
      {
        need: "Legal review and approval of the Privacy Policy and Terms of Use wording by your counsel.",
        where:
          "Privacy and Terms pages. Both currently carry unapproved placeholder wording that must not be relied upon.",
      },
      {
        need: "Confirmation of how enquiry data is stored, who it is shared with, and how long it is kept.",
        where: "Privacy Policy — the data-handling sections cannot be finalised without this.",
      },
    ],
  },
  {
    area: "Analytics (GA4)",
    items: [
      {
        need: "A GA4 measurement ID (and Google Search Console access) under your own Google account.",
        where:
          "Not yet installed anywhere. No analytics or tracking script runs on the site today, so no visitor data is being collected.",
      },
    ],
  },
  {
    area: "Enquiry inbox",
    items: [
      {
        need: "The destination inbox for website enquiries, and confirmation of who monitors it.",
        where:
          "Contact form and every CTA that points at it. Submissions currently validate and confirm to the visitor but are not yet delivered by email — this must be wired before launch.",
      },
      {
        need: "Company profile PDF for the “Download Company Profile” button.",
        where:
          "Home page and the closing banner on most pages. The button works but opens the enquiry form, because there is no document to download yet.",
      },
    ],
  },
];

export default function ReviewStatusPage() {
  if (!REVIEW_MODE) {
    // Go-live state: the checklist is retired along with every on-site TBD marker.
    return (
      <Section tone="white">
        <Container>
          <h1 className="font-display text-2xl font-bold text-ink">Content status</h1>
          <p className="mt-3 max-w-prose text-slate">
            The client-review period is closed. This page is no longer maintained.
          </p>
        </Container>
      </Section>
    );
  }

  const total = groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <>
      <PageHeader
        eyebrow="Client review"
        title="Content status"
        intro="Everything still awaiting content from you, grouped by area. Each item below is also flagged in place on the site itself with a TBD marker."
        trail={[{ name: "Home", path: "/" }, { name: "Content status", path: "/review" }]}
      />

      <Section tone="white">
        <TbdBlock title="How to read this page" className="mb-12">
          <p>
            {total} items across {groups.length} areas are still outstanding. Nothing on this list is
            invented or assumed — where you left a question blank, the site says so rather than
            filling the gap with drafted copy.
          </p>
          <p className="mt-3">
            This page and every TBD marker are switched off in one place at go-live; they never
            affect the real content around them.
          </p>
        </TbdBlock>

        <div className="space-y-12">
          {groups.map((g, gi) => (
            <section key={g.area}>
              <div className="flex items-baseline gap-3 border-b border-line pb-3">
                <span className="font-mono text-xs text-accent">{String(gi + 1).padStart(2, "0")}</span>
                <h2 className="font-display text-xl font-bold text-ink">{g.area}</h2>
                <span className="ml-auto font-mono text-[11px] uppercase tracking-label text-slate-soft">
                  {g.items.length} {g.items.length === 1 ? "item" : "items"}
                </span>
              </div>

              <ul className="mt-5 space-y-5">
                {g.items.map((item) => (
                  <li key={item.need} className="border-l border-dashed border-accent/60 pl-4">
                    <p className="font-medium leading-relaxed text-ink">{item.need}</p>
                    <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-slate">{item.where}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
