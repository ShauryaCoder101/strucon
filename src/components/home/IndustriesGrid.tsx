import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { getIndustries } from "@/lib/content";

/** Interactive industry tiles — image + dark overlay, label reveals detail on hover/focus. */
export function IndustriesGrid() {
  const industries = getIndustries();
  return (
    <Section
      id="industries"
      tone="white"
      eyebrow="Industries"
      title="Engineered for heavy industry"
      intro="Two decades of structures for the sectors where steel does the heavy lifting."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.slug} delay={(i % 4) * 60}>
            <Link
              href={`/industries/${ind.slug}`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-sm focus-visible:outline-2"
            >
              <MediaFrame
                src={ind.image}
                alt={ind.title}
                prompt={ind.imagePrompt}
                className="absolute inset-0 h-full w-full transition-transform duration-500 ease-engineered group-hover:scale-105"
                rounded={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-display text-lg font-semibold text-white">{ind.title}</h3>
                <p className="mt-1 max-h-0 overflow-hidden text-sm leading-relaxed text-white/75 opacity-0 transition-all duration-300 ease-engineered group-hover:max-h-24 group-hover:opacity-100">
                  {ind.summary}
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
