import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctas } from "@/content/site";

type CtaLink = { label: string; href: string };

/** Reusable conversion banner used at the foot of most pages. */
export function CtaBanner({
  eyebrow = "Let's begin",
  title = "Let's build something extraordinary together.",
  intro = "Share your tender, drawings, or scope. We'll come back with a clear plan, timeline, and price — usually within two working days.",
  primary = ctas.consultation,
  secondary = ctas.profile,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  primary?: CtaLink;
  secondary?: CtaLink | null;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="blueprint absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-steel-200">{eyebrow}</p>
          <h2 className="mt-5 text-display-lg font-bold text-white">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{intro}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={primary.href} size="lg" variant="primary" className="group">
              {primary.label}
              <ArrowRight />
            </Button>
            {secondary && (
              <Button href={secondary.href} size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-ink">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
