import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import { TbdBlock } from "@/components/shared/Tbd";
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
          {/* Replaces the previous grey caveat box: the same warning, but unmistakably a review
              annotation so nobody reads this wording as settled policy. */}
          <TbdBlock title="Awaiting legal review" className="mt-6">
            <p>
              The wording on this page is unapproved placeholder text drafted by us. It has not been
              written or checked by a lawyer, does not constitute legal advice, and must not be relied
              upon by anyone &mdash; visitors or the company.
            </p>
            <p className="mt-3">
              The client&apos;s legal counsel must review, correct, and approve this document before the
              site goes live.
            </p>
          </TbdBlock>
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
