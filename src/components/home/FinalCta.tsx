import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ctas } from "@/content/site";

/** Closing conversion banner. */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="blueprint absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-steel-200">Let&apos;s begin</p>
          <h2 className="mt-5 text-display-lg font-bold text-white">
            Let&apos;s build something extraordinary together.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
            Share your tender, drawings, or scope. We&apos;ll come back with a clear plan,
            timeline, and price — usually within two working days.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={ctas.consultation.href} size="lg" variant="primary" className="group">
              {ctas.consultation.label}
              <ArrowRight />
            </Button>
            <Button href={ctas.profile.href} size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-ink">
              {ctas.profile.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
