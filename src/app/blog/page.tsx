import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TbdBlock } from "@/components/shared/Tbd";

import { getPosts } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Insights — BIM, Tekla & Structural Engineering",
  description:
    "Engineering insights from STRUCON on BIM, Tekla detailing, steel structures, power plants, and engineering outsourcing for EPC projects.",
  path: "/blog",
  keywords: ["Structural Engineering Blog", "Tekla Modeling Services", "Structural BIM Services", "Engineering Outsourcing"],
});

export default function BlogIndexPage() {
  const [featured, ...rest] = getPosts();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />

      <PageHeader
        eyebrow="Insights"
        title="Engineering insights & industry perspective"
        intro="Notes from our engineers on BIM, Tekla, steel structures, and delivering for global EPC projects."
        trail={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]}
      />

      <Section tone="white">
        {/* One approval notice above the whole grid — all three seed articles are ours, not the client's. */}
        <TbdBlock title="Draft articles — pending approval" className="mb-10">
          <p>
            All three articles below were drafted by us as seed content to show how the Insights
            section works. None has been reviewed or approved by the client, and no byline has been
            confirmed &mdash; the authors shown are placeholders.
          </p>
          <p className="mt-3">
            Approve, edit, or ask us to remove each article, and confirm who should be credited as
            the author, before go-live.
          </p>
        </TbdBlock>

        {/* Featured */}
        <a href={`/blog/${featured.slug}`} className="group grid overflow-hidden rounded-sm border border-line bg-white transition-shadow hover:shadow-xl lg:grid-cols-2">
          <MediaFrame src={undefined} alt={featured.title} prompt={featured.coverPrompt} className="aspect-[16/10] w-full lg:aspect-auto lg:h-full" rounded={false} />
          <div className="flex flex-col justify-center p-8 md:p-10">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-steel">
              <span className="bg-accent px-2 py-0.5 text-white">{featured.category}</span>
              <span>{formatDate(featured.date)}</span>
              <span>· {featured.readingMinutes} min read</span>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">{featured.title}</h2>
            <p className="mt-3 max-w-prose leading-relaxed text-slate">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">Read article <ArrowRight /></span>
          </div>
        </a>

        {/* Rest */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <a href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition-shadow hover:shadow-xl">
                <MediaFrame src={undefined} alt={p.title} prompt={p.coverPrompt} className="aspect-[16/9] w-full" rounded={false} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-label text-steel">
                    <span className="bg-ink px-2 py-0.5 text-white">{p.category}</span>
                    <span>{p.readingMinutes} min read</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">Read article <ArrowRight /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner title="Have an engineering challenge to discuss?" />
    </>
  );
}
