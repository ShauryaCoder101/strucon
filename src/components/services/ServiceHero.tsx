import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { ctas } from "@/content/site";
import type { Service } from "@/types";

/** Dark hero for a service page — clears the fixed nav, carries breadcrumbs + discipline code. */
export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-[calc(var(--nav-h)+2.5rem)] text-white md:pb-20">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <Breadcrumbs
          trail={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]}
        />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-steel-200">
              <span className="font-semibold text-accent">{service.code}</span> · Service
            </p>
            <h1 className="mt-5 text-display-lg font-bold text-white">{service.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">{service.summary}</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href={ctas.proposal.href} size="lg" variant="primary" className="group">
                {ctas.proposal.label}
                <ArrowRight />
              </Button>
              <Button href={ctas.consultation.href} size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-ink">
                {ctas.consultation.label}
              </Button>
            </div>
          </div>

          <MediaFrame
            src={service.image}
            alt={`${service.title} — illustrative`}
            prompt={service.heroPrompt}
            className="aspect-[4/3] w-full"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
