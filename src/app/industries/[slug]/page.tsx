import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { getIndustry, industrySlugs, getService, getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return industrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return buildMetadata({ title: ind.seo.title, description: ind.seo.description, path: `/industries/${ind.slug}`, keywords: ind.seo.keywords });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  const related = ind.relatedServices.map(getService).filter(Boolean);
  // Surface every case study in this sector, not just the homepage-featured ones.
  const projects = getProjects().filter((p) => p.industry === ind.title).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: ind.title, path: `/industries/${ind.slug}` },
        ])}
      />

      <PageHeader
        eyebrow="Industry"
        title={ind.title}
        intro={ind.summary}
        trail={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: ind.title, path: `/industries/${ind.slug}` },
        ]}
      />

      {/* Overview + hero image */}
      <Section tone="white">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="eyebrow">Overview</p>
            {ind.overview.map((p) => (
              <p key={p.slice(0, 20)} className="max-w-prose text-lg leading-relaxed text-slate">{p}</p>
            ))}
          </div>
          <MediaFrame src={ind.image} alt={ind.title} prompt={ind.imagePrompt} className="aspect-[4/3] w-full" />
        </div>
      </Section>

      {/* Applications */}
      <Section tone="paper" eyebrow="What we deliver" title={`Typical ${ind.title.toLowerCase()} scopes`}>
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {ind.applications.map((a, i) => (
            <Reveal as="li" key={a} delay={(i % 2) * 40} className="flex items-start gap-3 border-b border-line pb-4">
              <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-ink">{a}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Related projects (if any) */}
      {projects.length > 0 && (
        <Section tone="white" eyebrow="Case studies" title={`${ind.title} projects`}>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p) => (
              <a key={p.slug} href={`/projects/${p.slug}`} className="group flex flex-col overflow-hidden rounded-sm border border-line bg-white transition-shadow hover:shadow-xl">
                <MediaFrame src={p.thumbnail} alt={p.title} prompt={p.imagePrompt} className="aspect-[16/10] w-full" rounded={false} />
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-ink">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink transition-colors group-hover:text-accent">View case study <ArrowRight /></span>
                </div>
              </a>
            ))}
          </div>
        </Section>
      )}

      {/* Related services */}
      <Section tone={projects.length > 0 ? "paper" : "white"} eyebrow="Services" title="How we serve this sector">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {related.map((s) => s && (
            <a key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col bg-white p-6 transition-colors hover:bg-ink">
              <span className="font-mono text-xs uppercase tracking-label text-accent">{s.code}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-ink transition-colors group-hover:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate transition-colors group-hover:text-white/70">{s.summary}</p>
            </a>
          ))}
        </div>
      </Section>

      <CtaBanner title={`Have a ${ind.title.toLowerCase()} project in the pipeline?`} />
    </>
  );
}
