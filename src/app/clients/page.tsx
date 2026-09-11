import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/shared/PageHeader";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { TbdBlock, TbdNote } from "@/components/shared/Tbd";
import { REVIEW_MODE } from "@/content/review";

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
        {/* The names are real; the artwork is not. Flagged so the text-only strip is not
            mistaken for the finished design. */}
        <TbdNote className="mt-6">
          Client logo image files have not been supplied, so each client is shown as text. Supply
          rights-cleared logo artwork (SVG or transparent PNG) plus written permission to display each mark.
        </TbdNote>
      </Section>

      {/* Testimonials. No invented quotes are ever published: during client review the section
          still renders its heading with a panel stating exactly what is outstanding, and once
          review mode is off it disappears again entirely rather than leaving an empty heading. */}
      {(testimonials.length > 0 || REVIEW_MODE) && (
      <Section tone="paper" eyebrow="In their words" title="What clients say">
        {testimonials.length > 0 ? (
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
        ) : (
          <TbdBlock title="Client testimonials">
            <p>
              No approved client quotes have been supplied yet, so nothing is published here. We will not
              write testimonials on a client&apos;s behalf.
            </p>
            <p className="mt-3">Each testimonial needs all five of the following before it can go live:</p>
            <ul className="mt-3 space-y-1.5">
              <li>1. The quote itself, in the client&apos;s own words</li>
              <li>2. The name of the person quoted</li>
              <li>3. Their job title</li>
              <li>4. Their company</li>
              <li>5. Written permission to publish the quote and attribution</li>
            </ul>
          </TbdBlock>
        )}
      </Section>
      )}

      <CtaBanner title="Become our next success story." />
    </>
  );
}
