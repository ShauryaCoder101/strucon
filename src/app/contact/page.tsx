import type { Metadata } from "next";

import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Section } from "@/components/ui/Section";
import { JsonLd } from "@/components/ui/JsonLd";
import { LeadForm } from "@/components/forms/LeadForm";

import { site, offices } from "@/content/site";
import { formConfig, type FormIntent } from "@/content/forms";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact STRUCON — Start Your Engineering Project",
  description:
    "Contact STRUCON Consulting for structural engineering, steel detailing, and BIM. Offices in Noida and Gurugram, India. Request a proposal or upload tender documents.",
  path: "/contact",
  keywords: ["Contact Structural Engineering Consultant", "Steel Detailing Company", "Request Engineering Proposal"],
});

const validIntents = Object.keys(formConfig) as FormIntent[];

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ intent?: string }> }) {
  const { intent: raw } = await searchParams;
  const intent: FormIntent = validIntents.includes(raw as FormIntent) ? (raw as FormIntent) : "general";

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <JsonLd data={localBusinessSchema()} />

      {/* Header */}
      <section className="relative overflow-hidden bg-ink pb-14 pt-[calc(var(--nav-h)+2.5rem)] text-white">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />
          <p className="eyebrow mt-10 text-steel-200">Contact</p>
          <h1 className="mt-5 max-w-3xl text-display-lg font-bold text-white">Let&apos;s start your project</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Tell us what you&apos;re building. Share a scope, a tender, or a drawing set — we usually respond within two working days.
          </p>
        </Container>
      </section>

      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <div>
            <div className="space-y-8">
              {offices.map((o) => (
                <div key={o.name}>
                  <p className="font-mono text-xs uppercase tracking-label text-steel">{o.name}</p>
                  <p className="mt-2 leading-relaxed text-ink">{o.lines.join(", ")}</p>
                </div>
              ))}

              <div className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
                <ContactRow label="Phone" value={site.phone} href={site.phoneHref} />
                <ContactRow label="Email" value={site.email} href={`mailto:${site.email}`} />
                <ContactRow label="WhatsApp" value="Message us" href={site.whatsappHref} external />
                <ContactRow label="LinkedIn" value="Follow us" href={site.linkedin} external />
              </div>
            </div>

            {/* Google Map embed */}
            <div className="mt-8 overflow-hidden rounded-sm border border-line">
              <iframe
                title="STRUCON office location map"
                src="https://www.google.com/maps?q=Astralis+Tower+Supertech+Supernova+Sector+94+Noida&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm intent={intent} />
          </div>
        </div>
      </Section>
    </>
  );
}

function ContactRow({ label, value, href, external }: { label: string; value: string; href: string; external?: boolean }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-label text-slate">{label}</p>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="mt-1 inline-block font-medium text-ink underline-offset-2 hover:text-accent hover:underline"
      >
        {value}
      </a>
    </div>
  );
}
