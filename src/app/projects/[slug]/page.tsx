import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { CtaBanner } from "@/components/shared/CtaBanner";

import { getProject, projectSlugs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return projectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.seo?.title ?? p.title,
    description: p.seo?.description ?? `${p.title} — a STRUCON case study.`,
    path: `/projects/${p.slug}`,
    keywords: p.seo?.keywords,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const facts = [
    { k: "Client", v: p.client },
    { k: "Industry", v: p.industry },
    { k: "Location", v: p.location },
    ...(p.software ? [{ k: "Software", v: p.software.join(", ") }] : []),
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: p.title, path: `/projects/${p.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink pb-16 pt-[calc(var(--nav-h)+2.5rem)] text-white md:pb-20">
        <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
        <Container className="relative">
          <Breadcrumbs trail={[{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }, { name: p.title, path: `/projects/${p.slug}` }]} />
          <p className="eyebrow mt-10 text-steel-200">{p.industry} · {p.location}</p>
          <h1 className="mt-5 max-w-4xl text-display-lg font-bold text-white">{p.title}</h1>
          {p.metrics && (
            <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-label text-steel-200">{m.label}</dt>
                  <dd className="mt-1 font-display text-xl font-semibold text-white">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </Container>
      </section>

      {/* Lead image */}
      <Section tone="white">
        <MediaFrame src={p.thumbnail} alt={p.title} prompt={p.imagePrompt} className="aspect-[21/9] w-full" priority />

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {p.scope && p.scope.length > 0 && (
              <Reveal>
                <p className="eyebrow">Scope</p>
                <ul className="mt-4 grid max-w-prose gap-x-8 gap-y-3 sm:grid-cols-2">
                  {p.scope.map((s) => (
                    <li key={s} className="flex items-start gap-3 border-b border-line pb-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                      <span className="text-ink">{s}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
            {p.challenge && <Block label="Challenge" text={p.challenge} />}
            {p.solution && <Block label="Solution" text={p.solution} />}
            {p.results && <Block label="Outcome" text={p.results} />}
          </div>
          <aside className="h-fit border border-line bg-paper p-6">
            <p className="font-mono text-xs uppercase tracking-label text-steel">Project facts</p>
            <dl className="mt-4 space-y-4">
              {facts.map((f) => (
                <div key={f.k} className="border-b border-line pb-3 last:border-0">
                  <dt className="font-mono text-[10px] uppercase tracking-label text-slate">{f.k}</dt>
                  <dd className="mt-1 text-ink">{f.v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      {/* Gallery */}
      {p.gallery && p.gallery.length > 0 && (
        <Section tone="paper" eyebrow="Gallery" title="From model to erection">
          <div className="grid gap-4 md:grid-cols-3">
            {p.gallery.map((g, i) => (
              <Reveal key={i} delay={(i % 3) * 60}>
                <MediaFrame src={undefined} alt={`${p.title} — image ${i + 1}`} prompt={g} className="aspect-[4/3] w-full" />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CtaBanner title="Have a similar project?" />
    </>
  );
}

function Block({ label, text }: { label: string; text: string }) {
  return (
    <Reveal>
      <p className="eyebrow">{label}</p>
      <p className="mt-4 max-w-prose text-lg leading-relaxed text-slate">{text}</p>
    </Reveal>
  );
}
