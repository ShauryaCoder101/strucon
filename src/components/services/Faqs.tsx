import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import type { FAQ } from "@/types";

/** FAQ accordion using native <details> — fully accessible and works without JavaScript. */
export function Faqs({ faqs, eyebrow = "FAQs", title = "Frequently asked questions" }: { faqs: FAQ[]; eyebrow?: string; title?: string }) {
  if (!faqs.length) return null;
  return (
    <Section tone="paper" eyebrow={eyebrow} title={title}>
      <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 40}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center border border-line text-slate transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-slate">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
