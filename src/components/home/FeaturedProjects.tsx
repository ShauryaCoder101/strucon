import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ArrowRight } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/content";

/** Featured case-study cards — metadata (client, industry) + headline metrics. */
export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section
      id="projects"
      tone="paper"
      eyebrow="Selected Work"
      title="Case studies from the field"
      intro="Real projects, real tonnages — a snapshot of delivery across power, refinery and cement plants."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <Link
              href={`/projects/${p.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-sm border border-line bg-white transition-shadow duration-200 hover:shadow-xl"
            >
              <MediaFrame
                src={p.thumbnail}
                alt={p.title}
                prompt={p.imagePrompt}
                className="aspect-[16/10] w-full"
                rounded={false}
              />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-steel">
                  <span>{p.industry}</span>
                  <span className="text-line">/</span>
                  <span>{p.location}</span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-ink">{p.title}</h3>

                {p.metrics && (
                  <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-line pt-4">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="font-mono text-[10px] uppercase tracking-label text-slate">{m.label}</dt>
                        <dd className="mt-0.5 font-display text-sm font-semibold text-ink">{m.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                  View case study <ArrowRight />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/projects" className="group inline-flex items-center gap-2 font-medium text-ink hover:text-accent">
          All projects <ArrowRight />
        </Link>
      </div>
    </Section>
  );
}
