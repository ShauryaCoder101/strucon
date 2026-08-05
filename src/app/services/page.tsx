import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { getServices } from "@/lib/content";
import { buildMetadata, keywordBank } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Engineering Services — Structural, Steel Detailing & BIM",
  description:
    "Multidisciplinary engineering services for EPC and industrial projects: structural engineering, steel detailing, BIM, civil, mechanical, process, E&I, and project management.",
  path: "/services",
  keywords: [...keywordBank.home, ...keywordBank.services],
});

export default function ServicesIndexPage() {
  const services = getServices();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <PageHeader
        eyebrow="Capabilities"
        title="Multidisciplinary engineering under one roof"
        intro="Eight disciplines, one coordinated model — so your EPC scope stays consistent from design to erection. Explore each service below."
        trail={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      <Section tone="paper">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60}>
              <a href={`/services/${s.slug}`} className="group flex h-full flex-col bg-white p-8 transition-colors duration-200 hover:bg-ink">
                <span className="font-mono text-xs uppercase tracking-label text-accent">{s.code}</span>
                <h2 className="mt-4 font-display text-xl font-semibold text-ink transition-colors group-hover:text-white">
                  {s.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate transition-colors group-hover:text-white/70">
                  {s.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.software.slice(0, 3).map((tool) => (
                    <span key={tool} className="border border-line px-2 py-0.5 font-mono text-[10px] text-slate transition-colors group-hover:border-white/20 group-hover:text-white/60">
                      {tool}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                  Learn more <ArrowRight />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
