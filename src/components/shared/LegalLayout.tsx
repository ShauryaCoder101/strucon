import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { formatDate } from "@/lib/utils";

type LegalDoc = { updated: string; intro: string; sections: { heading: string; body: string[] }[] };

/** Shared renderer for Privacy / Terms. */
export function LegalLayout({ title, doc, trailName }: { title: string; doc: LegalDoc; trailName: string }) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        intro={`Last updated ${formatDate(doc.updated)}.`}
        trail={[{ name: "Home", path: "/" }, { name: trailName, path: "#" }]}
      />
      <Section tone="white">
        <div className="mx-auto max-w-prose">
          <p className="text-lg leading-relaxed text-slate">{doc.intro}</p>
          <div className="mt-6 border-l-2 border-accent bg-paper p-4 text-sm text-slate">
            This is placeholder text and does not constitute legal advice. Have it reviewed by qualified legal counsel before publishing.
          </div>
          {doc.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="font-display text-xl font-bold text-ink">{s.heading}</h2>
              {s.body.map((p) => <p key={p.slice(0, 20)} className="mt-3 leading-relaxed text-slate">{p}</p>)}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
