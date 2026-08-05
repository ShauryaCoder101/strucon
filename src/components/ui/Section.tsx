import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

/** Mono "drawing callout" eyebrow — the annotation layer of the identity. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "paper" | "ink" | "white";
  className?: string;
  children: React.ReactNode;
};

const tones = {
  paper: "bg-paper text-ink",
  white: "bg-white text-ink",
  ink: "bg-ink text-white",
};

/**
 * Section wrapper with consistent vertical rhythm + optional header block.
 * Keeps spacing in ONE place to avoid selector-specificity margin conflicts.
 */
export function Section({ id, eyebrow, title, intro, tone = "paper", className, children }: SectionProps) {
  const onDark = tone === "ink";
  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      <Container>
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 max-w-3xl md:mb-16">
            {eyebrow && <Eyebrow className={onDark ? "text-steel-200" : undefined}>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className={cn("mt-4 text-display-md", onDark && "text-white")}>{title}</h2>
            )}
            {intro && (
              <p className={cn("mt-5 max-w-prose text-lg leading-relaxed", onDark ? "text-steel-200" : "text-slate")}>
                {intro}
              </p>
            )}
          </Reveal>
        )}
        {children}
      </Container>
    </section>
  );
}
