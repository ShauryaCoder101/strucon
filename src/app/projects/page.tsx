import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { getProjects } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Projects & Case Studies — Structural & Steel Detailing",
  description:
    "Selected structural engineering and steel detailing case studies across power, petrochemical, and industrial projects — with tonnage, schedule, and standards.",
  path: "/projects",
  keywords: ["Steel Detailing Case Study", "Structural Engineering Projects", "EPC Engineering Design"],
});

export default function ProjectsIndexPage() {
  const projects = getProjects();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />

      <PageHeader
        eyebrow="Selected Work"
        title="Case studies from the field"
        intro="Selected delivery across power, refinery, cement, steel and material handling projects in India and international markets."
        trail={[{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }]}
      />

      <Section tone="paper">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <a href={`/projects/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition-shadow duration-200 hover:shadow-xl">
                <MediaFrame src={p.thumbnail} alt={p.title} prompt={p.imagePrompt} className="aspect-[16/10] w-full" rounded={false} />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-steel">
                    <span>{p.industry}</span><span className="text-line">/</span><span>{p.location}</span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{p.title}</h2>
                  {p.metrics && (
                    <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
                      {p.metrics.map((m) => (
                        <div key={m.label}>
                          <dt className="font-mono text-[10px] uppercase tracking-label text-slate">{m.label}</dt>
                          <dd className="mt-0.5 font-display text-sm font-semibold text-ink">{m.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">View case study <ArrowRight /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
