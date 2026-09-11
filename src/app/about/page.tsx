import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TbdNote } from "@/components/shared/Tbd";

import { about } from "@/content/about";
import { getLeadership } from "@/lib/content";
import { stats } from "@/content/stats";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About STRUCON — Structural Engineering Since 2003",
  description:
    "STRUCON Consulting has delivered civil and structural engineering, steel detailing and 3D modelling for industrial and commercial projects in India and international markets since 2003.",
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
        intro="Since 2003, STRUCON has provided dependable engineering and detailing solutions for complex industrial and commercial structures."
        trail={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]}
      />

      {/* Story */}
      <Section tone="white" eyebrow="Our story" title="Two decades of industrial engineering">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {about.story.map((p) => <p key={p.slice(0, 20)} className="max-w-prose text-lg leading-relaxed text-slate">{p}</p>)}

            {/* The closing line of the client's story, set apart as a pull-quote. */}
            <figure className="mt-8 max-w-prose border-l-2 border-accent pl-6">
              <p className="eyebrow">{about.objective.lead}</p>
              <blockquote className="mt-3 font-display text-xl leading-snug text-ink md:text-2xl">
                {about.objective.quote}
              </blockquote>
            </figure>
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

      {/* Design & detailing standards worked to — deliberately NOT presented as certifications held. */}
      <Section tone="paper" eyebrow="Quality" title="Standards we work to">
        <div className="flex flex-wrap gap-3">
          {about.standards.map((c) => (
            <span key={c} className="border border-line bg-white px-4 py-2 font-mono text-sm text-ink">{c}</span>
          ))}
        </div>
        <p className="mt-4 max-w-prose text-sm text-slate-soft">
          These are the design and detailing standards our engineers work to on client projects, in both metric and imperial systems.
        </p>
        <TbdNote className="mt-5">
          Certifications held (e.g. ISO 9001) are still to be confirmed &mdash; none are claimed on this site yet.
        </TbdNote>
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
