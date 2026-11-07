import { Section } from "@/components/ui/Section";
import { PageHeader } from "@/components/shared/PageHeader";
import type { LegalBlock, LegalDoc } from "@/content/legal";

/**
 * Shared renderer for Privacy / Terms.
 *
 * The documents in src/content/legal.ts are the client's own approved copy, so this renders
 * them as written: their title line, their "Last Updated" line, their numbered headings, their
 * sub-headings, lists and address blocks. The round-1 "Awaiting legal review" annotation is
 * gone — the text is approved — and no disclaimer of ours is added on top of it.
 */
export function LegalLayout({ title, doc, trailName }: { title: string; doc: LegalDoc; trailName: string }) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={title}
        intro={doc.updatedLabel}
        trail={[{ name: "Home", path: "/" }, { name: trailName, path: "#" }]}
      />
      <Section tone="white">
        <div className="mx-auto max-w-prose">
          {doc.intro.map((b, i) => (
            <Block key={i} block={b} lead={b.type === "p" && i === 0} />
          ))}

          {doc.sections.map((s) => (
            <section key={s.heading} className="mt-10">
              <h2 className="font-display text-xl font-bold text-ink">{s.heading}</h2>
              {s.body.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </section>
          ))}

          <p className="mt-12 border-t border-line pt-6 text-sm text-slate-soft">{doc.notice}</p>
        </div>
      </Section>
    </>
  );
}

/** One block of the client's copy. `lead` sets the opening paragraph slightly larger. */
function Block({ block, lead = false }: { block: LegalBlock; lead?: boolean }) {
  switch (block.type) {
    case "p":
      return (
        <p className={lead ? "text-lg leading-relaxed text-slate" : "mt-3 leading-relaxed text-slate"}>
          {block.text}
        </p>
      );
    case "h3":
      return (
        <h3 className="mt-6 font-mono text-xs uppercase tracking-label text-steel">{block.text}</h3>
      );
    case "ul":
      return (
        <ul className="mt-3 space-y-2 leading-relaxed text-slate">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
              <span className="min-w-0">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "address":
      return (
        <div className="mt-4">
          {block.label && (
            <p className="font-mono text-xs uppercase tracking-label text-steel">{block.label}</p>
          )}
          <address className="mt-1 not-italic leading-relaxed text-slate">
            {block.lines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </address>
        </div>
      );
  }
}
