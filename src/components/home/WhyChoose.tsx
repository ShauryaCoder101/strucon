import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { whyChoose } from "@/content/stats";

/** 6 differentiators. No numbering — order is not a sequence, so markers would be decoration. */
export function WhyChoose() {
  return (
    <Section
      id="why-strucon"
      tone="ink"
      eyebrow="Why Strucon"
      title="The reasons EPC teams keep coming back"
      intro="An offshore engineering partner that behaves like an in-house team — fast, coded to your standards, and accountable to the schedule."
    >
      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {whyChoose.map((point, i) => (
          <Reveal key={point.title} delay={(i % 3) * 60}>
            <div className="h-full bg-ink p-7">
              <span className="inline-flex h-8 w-8 items-center justify-center border border-accent font-mono text-xs text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-white/65">{point.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
