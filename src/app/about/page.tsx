import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { about } from "@/content/about";
import { getLeadership } from "@/lib/content";
import { stats } from "@/content/stats";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

/**
 * NOTE ON YEARS: the client confirmed 2008 as the incorporation year (round 2, rows 4 and 10)
 * while the story copy they supplied for this page still opens "Since 2003". Our own copy
 * below is therefore year-neutral, so the only year on the page is the one inside their own
 * verbatim wording. See the founding-year note in src/content/site.ts.
 */
export const metadata: Metadata = buildMetadata({
  title: "About STRUCON — Structural Engineering & Steel Detailing",
  description:
    "STRUCON Consulting delivers civil and structural engineering, steel detailing and 3D modelling for industrial and commercial projects in India and international markets.",
  path: "/about",
  keywords: ["Structural Engineering Consultant", "Steel Detailing Company", "Engineering Outsourcing"],
});

export default function AboutPage() {
  const leads = getLeadership();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      <PageHeader
        eyebrow="About"
        title="An engineering partner that behaves like your own team"
        intro="STRUCON provides dependable engineering and detailing solutions for complex industrial and commercial structures."
        trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
      />

      {/* Story — heading and body are both the client's own words (about.ts). */}
      <Section tone="white" eyebrow="Our story" title={about.storyHeading}>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {about.story.map((p) => <p key={p.slice(0, 20)} className="max-w-prose text-lg leading-relaxed text-slate">{p}</p>)}
          </div>
          <MediaFrame src={undefined} alt="STRUCON engineering office" prompt="Engineers collaborating over structural drawings and Tekla models in a modern industrial engineering office, photoreal, no logos." className="aspect-[4/3] w-full" />
        </div>
      </Section>

      {/* Stats */}
      <section className="bg-ink py-16 text-white">
        <div className="container grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl font-bold md:text-5xl">{s.value}</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-label text-steel-200">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          {[{ k: "Mission", v: about.mission }, { k: "Vision", v: about.vision }].map((m) => (
            <Reveal key={m.k}>
              <div className="h-full border-t-2 border-accent bg-white p-8">
                <p className="eyebrow">{m.k}</p>
                <p className="mt-4 text-xl leading-relaxed text-ink">{m.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Pillars: Infrastructure / Technology / Quality / People */}
      <Section tone="white" eyebrow="What sets us apart" title="Infrastructure, technology, quality, people">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 60}>
              <div className="h-full bg-white p-7">
                <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Quality. Two separately-labelled lists: certifications HELD, and the design/detailing
          standards worked to. They are deliberately not merged — see the note in about.ts. */}
      <Section tone="paper" eyebrow="Quality" title="Certification & standards">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-label text-steel">Certifications held</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {about.certifications.map((c) => (
                <span key={c} className="border-l-2 border-accent bg-white px-4 py-3 font-display text-lg font-semibold text-ink">{c}</span>
              ))}
            </div>
            <p className="mt-4 max-w-prose text-sm text-slate-soft">
              Our quality management system is certified to ISO 9001:2015.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-label text-steel">Standards we work to</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {about.standards.map((c) => (
                <span key={c} className="border border-line bg-white px-4 py-2 font-mono text-sm text-ink">{c}</span>
              ))}
            </div>
            <p className="mt-4 max-w-prose text-sm text-slate-soft">
              These are the design and detailing standards our engineers work to on client projects, in both metric and imperial systems. They are design codes, not certifications.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership preview */}
      <Section tone="white" eyebrow="Leadership" title="The people behind the practice">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leads.map((m) => (
            <div key={m.slug} className="group">
              <MediaFrame src={undefined} alt={m.name} prompt={m.photoPrompt} className="aspect-[4/5] w-full" />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{m.name}</h3>
              <p className="font-mono text-xs uppercase tracking-label text-steel">{m.role}</p>
            </div>
          ))}
        </div>
        <a href="/leadership" className="group mt-8 inline-flex items-center gap-2 font-medium text-ink hover:text-accent">Meet the leadership team <ArrowRight /></a>
      </Section>

      <CtaBanner />
    </>
  );
}
