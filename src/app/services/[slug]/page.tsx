import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { ServiceHero } from "@/components/services/ServiceHero";
import { Faqs } from "@/components/services/Faqs";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { getServices, getService, serviceSlugs } from "@/lib/content";
import { ctas } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return serviceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
    keywords: service.seo.keywords,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = getServices().filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <JsonLd data={serviceSchema({ name: service.title, description: service.seo.description, path: `/services/${service.slug}` })} />
      <JsonLd data={faqSchema(service.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />

      <ServiceHero service={service} />

      {/* Overview */}
      <Section tone="white" eyebrow="Overview" title={`${service.title} at STRUCON`}>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            {service.overview.map((p) => (
              <p key={p.slice(0, 24)} className="max-w-prose text-lg leading-relaxed text-slate">
                {p}
              </p>
            ))}
          </div>
          <aside className="h-fit border border-line bg-paper p-6">
            <p className="font-mono text-xs uppercase tracking-label text-steel">Talk to an engineer</p>
            <p className="mt-3 text-slate">
              Have a scope or drawing set for {service.title.toLowerCase()}? Get a clear plan and price.
            </p>
            <Button href={ctas.review.href} className="group mt-5 w-full">
              {ctas.review.label}
              <ArrowRight />
            </Button>
          </aside>
        </div>
      </Section>

      {/* Benefits */}
      <Section tone="paper" eyebrow="Benefits" title="Why teams choose us for this">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {service.benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 60}>
              <div className="h-full bg-white p-7">
                <h3 className="font-display text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2.5 leading-relaxed text-slate">{b.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process — an ordered workflow, so the numbering carries real meaning */}
      <Section tone="white" eyebrow="Process" title="How we deliver" intro="A disciplined, checked workflow from brief to issued drawings.">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 70} className="relative border-t-2 border-line pt-5">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Software */}
      <Section tone="ink" eyebrow="Software Used" title="The tools behind the work">
        <div className="flex flex-wrap gap-3">
          {service.software.map((s) => (
            <span key={s} className="border border-white/15 bg-white/5 px-4 py-2 font-mono text-sm text-white/85">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section tone="paper" eyebrow="Deliverables" title="What you receive">
        <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {service.deliverables.map((d, i) => (
            <Reveal as="li" key={d} delay={(i % 2) * 40} className="flex items-start gap-3 border-b border-line pb-4">
              <Check />
              <span className="text-ink">{d}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* FAQs */}
      <Faqs faqs={service.faqs} />

      {/* Related services */}
      <Section tone="white" eyebrow="Related" title="Explore more disciplines">
        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <a key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col bg-white p-6 transition-colors hover:bg-ink">
              <span className="font-mono text-xs uppercase tracking-label text-accent">{s.code}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-ink transition-colors group-hover:text-white">{s.title}</h3>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink transition-colors group-hover:text-accent">
                View <ArrowRight />
              </span>
            </a>
          ))}
        </div>
      </Section>

      <CtaBanner
        title={`Ready to start your ${service.title.toLowerCase()} scope?`}
        primary={ctas.proposal}
        secondary={ctas.tender}
      />
    </>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
