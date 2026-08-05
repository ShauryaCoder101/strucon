import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CareersClient } from "@/components/careers/CareersClient";

import { culture, benefits } from "@/content/jobs";
import { getJobs, getJobDepartments } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Engineering Jobs at STRUCON",
  description:
    "Build your engineering career at STRUCON. Explore openings in steel detailing, structural design, and BIM — and apply online.",
  path: "/careers",
  keywords: ["Steel Detailing Jobs", "Structural Engineering Careers", "Tekla Detailer Jobs"],
});

export default function CareersPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])} />

      <PageHeader
        eyebrow="Careers"
        title="Engineer the world's infrastructure with us"
        intro="Join a team that works on complex EPC projects across power, oil & gas, steel, and infrastructure — with the tools and mentoring to grow."
        trail={[{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }]}
      />

      {/* Culture */}
      <Section tone="white" eyebrow="Culture" title="Why engineers build their careers here">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {culture.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 60}>
              <div className="h-full bg-white p-7">
                <h3 className="font-display text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="paper" eyebrow="Benefits" title="What we offer">
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 border-b border-line pb-4">
              <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-ink">{b}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Openings + apply */}
      <Section tone="white" eyebrow="Open positions" title="Current openings">
        <CareersClient jobs={getJobs()} departments={getJobDepartments()} />
      </Section>
    </>
  );
}
