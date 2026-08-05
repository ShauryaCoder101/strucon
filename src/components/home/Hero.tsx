import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { site, ctas } from "@/content/site";

/**
 * Full-bleed hero with a video background.
 * VIDEO SETUP: drop a muted, looping industrial clip at /public/media/hero.mp4
 * (+ optional /public/media/hero-poster.jpg). Until then, the steel gradient + blueprint
 * overlay render on their own so the hero still looks intentional.
 *
 * AI VIDEO PROMPT (for sourcing): "Slow cinematic push through a steel structure under
 * construction at dusk — pipe racks, bolted connections, cranes; cut with a rotating Tekla
 * BIM model overlay. Muted, industrial, no people, 10s seamless loop."
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink text-white">
      {/* Video layer */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Steel gradient + blueprint overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" aria-hidden="true" />
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />

      <Container className="relative z-10 py-32">
        <p className="eyebrow text-steel-200">
          Structural Engineering · Steel Detailing · BIM
        </p>

        <h1 className="mt-6 max-w-4xl text-display-xl font-bold text-white">
          {site.positioning}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
          Delivering multidisciplinary engineering, structural design, BIM, and steel
          detailing solutions to global EPC companies.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href={ctas.services.href} size="lg" variant="primary" className="group">
            {ctas.services.label}
            <ArrowRight />
          </Button>
          <Button href={ctas.consultation.href} size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-ink">
            {ctas.consultation.label}
          </Button>
        </div>

        {/* Title-block strip — the drawing-frame signature */}
        <dl className="mt-16 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-6">
          {[
            { k: "Established", v: site.founded },
            { k: "Steel Detailed", v: "6 Lac+ MT" },
            { k: "Quality", v: site.certification },
          ].map((item) => (
            <div key={item.k}>
              <dt className="font-mono text-[10px] uppercase tracking-label text-steel-200">{item.k}</dt>
              <dd className="mt-1 font-display text-lg font-semibold text-white">{item.v}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block" aria-hidden="true">
        <div className="h-10 w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
      </div>
    </section>
  );
}
