import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

/** Dark interior-page header. Clears the fixed nav and carries breadcrumbs + eyebrow/title/intro. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  trail,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  trail: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-16 pt-[calc(var(--nav-h)+2.5rem)] text-white md:pb-20">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <Breadcrumbs trail={trail} />
        <p className="eyebrow mt-10 text-steel-200">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl text-display-lg font-bold text-white">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </Container>
    </section>
  );
}
