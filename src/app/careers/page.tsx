import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CareersClient } from "@/components/careers/CareersClient";

import { culture, benefits, careersIntro, hiringAreas, applicationsEmail } from "@/content/jobs";
import { getJobs, getJobDepartments } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Careers — Engineering Jobs at STRUCON",
  description:
    "Build your engineering career at STRUCON. See the areas we hire for — structural engineering, steel detailing, Tekla, BIM and project engineering — and apply online.",
  path: "/careers",
  keywords: ["Steel Detailing Jobs", "Structural Engineering Careers", "Tekla Detailer Jobs"],
});

export default function CareersPage() {
  const jobs = getJobs();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])} />

      <PageHeader
        eyebrow="Careers"
        title="Build your career with STRUCON"
        intro={careersIntro[0]}
        trail={[{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }]}
      />

      {/* The rest of the client's careers copy — the first paragraph is the page intro above. */}
      <Section tone="white">
        <div className="max-w-3xl space-y-5">
          {careersIntro.slice(1).map((p) => (
            <p key={p.slice(0, 20)} className="text-lg leading-relaxed text-slate">{p}</p>
          ))}
        </div>
      </Section>

      {/* Culture */}
      <Section tone="paper" eyebrow="Culture" title="Why engineers build their careers here">
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

      {/* Areas we hire for — the client's list. Published in place of a vacancies board. */}
      <Section tone="white" eyebrow="Disciplines" title="Areas we hire for">
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {hiringAreas.map((a) => (
            <li key={a} className="flex items-start gap-3 border-b border-line pb-4">
              <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
              <span className="text-ink">{a}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-slate">
          Applications go to{" "}
          <a href={`mailto:${applicationsEmail}`} className="font-medium text-ink underline underline-offset-2 hover:text-accent">
            {applicationsEmail}
          </a>
          .
        </p>
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

      {/* Openings + apply. With no published vacancies this renders a speculative-application state. */}
      <Section
        tone="white"
        eyebrow={jobs.length > 0 ? "Open positions" : "Apply"}
        title={jobs.length > 0 ? "Current openings" : "Send us a speculative application"}
      >
        <CareersClient jobs={jobs} departments={getJobDepartments()} />
      </Section>
    </>
  );
}
