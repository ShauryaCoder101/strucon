import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/content/stats";

/** Stats band styled like a drawing schedule — mono labels, thin dividers, big display numerals. */
export function StatsBar() {
  return (
    <section className="bg-ink py-16 text-white">
      <Container>
        <div className="grid grid-cols-2 divide-line/10 md:grid-cols-4 md:divide-x">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className="px-2 py-6 text-center md:px-6"
            >
              <div className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                {stat.value}
              </div>
              <div className="mt-3 font-mono text-xs uppercase tracking-label text-steel-200">
                {stat.label}
              </div>
              {stat.note && <div className="mt-1 text-xs text-white/40">{stat.note}</div>}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
