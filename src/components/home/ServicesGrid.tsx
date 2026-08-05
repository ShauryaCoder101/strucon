import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Button";
import { getServices } from "@/lib/content";

/** 8 service cards. Each carries a mono discipline code — the "drawing annotation" motif. */
export function ServicesGrid() {
  const services = getServices();
  return (
    <Section
      id="services"
      tone="paper"
      eyebrow="Capabilities"
      title="Multidisciplinary engineering under one roof"
      intro="From analysis to fabrication-ready drawings, our disciplines work off a single coordinated model — so your EPC scope stays consistent from design to erection."
    >
      <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 4) * 60}>
            <Link
              href={`/services/${s.slug}`}
              className="group flex h-full flex-col bg-white p-6 transition-colors duration-200 hover:bg-ink"
            >
              <span className="font-mono text-xs uppercase tracking-label text-accent">{s.code}</span>
              <h3 className="mt-4 font-display text-xl font-semibold text-ink transition-colors group-hover:text-white">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate transition-colors group-hover:text-white/70">
                {s.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                Learn more <ArrowRight />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
