import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { getIndustries } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve — Power, Oil & Gas, Steel & More",
  description:
    "STRUCON engineers structures for heavy industry: power, steel, oil & gas, petrochemical, mining, infrastructure, warehousing, and industrial buildings.",
  path: "/industries",
  keywords: ["Industrial Engineering Consultants", "Power Plant Structural Design", "Pipe Rack Design", "Conveyor Gallery Design"],
});

export default function IndustriesIndexPage() {
  const industries = getIndustries();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />

      <PageHeader
        eyebrow="Industries"
        title="Engineered for heavy industry"
        intro="Two decades of structures for the sectors where steel does the heavy lifting."
        trail={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]}
      />

      <Section tone="white">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 4) * 60}>
              <a href={`/industries/${ind.slug}`} className="group relative block aspect-[4/5] overflow-hidden rounded-sm">
                <MediaFrame
                  src={ind.image}
                  alt={ind.title}
                  prompt={ind.imagePrompt}
                  className="absolute inset-0 h-full w-full transition-transform duration-500 ease-engineered group-hover:scale-105"
                  rounded={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h2 className="font-display text-lg font-semibold text-white">{ind.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{ind.summary}</p>
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
