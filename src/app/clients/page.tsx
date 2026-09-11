import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { getClients, getTestimonials } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Our Clients — Trusted by Global EPC Companies",
  description:
    "STRUCON partners with EPC leaders across power, oil & gas, steel, and infrastructure — delivering structural engineering and steel detailing worldwide.",
  path: "/clients",
  keywords: ["EPC Engineering Design", "Structural Engineering Consultant", "Steel Detailing Company"],
});

export default function ClientsPage() {
  const clients = getClients();
  const testimonials = getTestimonials();
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Clients", path: "/clients" }])} />

      <PageHeader
        eyebrow="Clients"
        title="Trusted by global EPC companies"
        intro="We work as an engineering partner to EPC contractors, plant owners and fabricators. The organisations below are named on the strength of projects we have delivered for them."
        trail={[{ name: "Home", path: "/" }, { name: "Clients", path: "/clients" }]}
      />

      {/* Logo grid */}
      <Section tone="white">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((c) => (
            <div key={c.name} className="flex aspect-[3/2] items-center justify-center bg-white p-6">
              <span className="text-center font-display text-base font-semibold text-ink/40">{c.name}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials — omitted entirely when none are supplied. No invented quotes are published. */}
      {testimonials.length > 0 && (
        <Section tone="paper" eyebrow="In their words" title="What clients say">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="flex h-full flex-col border border-line bg-white p-7">
                  <span className="font-display text-4xl leading-none text-accent" aria-hidden="true">&ldquo;</span>
                  <blockquote className="mt-3 flex-1 leading-relaxed text-ink">{t.quote}</blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4">
                    <p className="font-display font-semibold text-ink">{t.name}</p>
                    <p className="font-mono text-xs uppercase tracking-label text-slate">{t.role}, {t.company}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CtaBanner title="Become our next success story." />
    </>
  );
}
