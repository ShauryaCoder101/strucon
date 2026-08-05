import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site, offices, mainNav, ctas } from "@/content/site";
import { getServices } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  const services = getServices();

  return (
    <footer className="bg-ink text-white/70">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <Container className="flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-label text-steel-200">Start a project</p>
            <p className="mt-2 max-w-md font-display text-2xl text-white">
              Have a tender or drawing set to review? Let&apos;s talk this week.
            </p>
          </div>
          <Link
            href={ctas.proposal.href}
            className="group inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-sm text-white transition-colors hover:border-accent hover:bg-accent"
          >
            {ctas.proposal.label}
            <span aria-hidden="true">→</span>
          </Link>
        </Container>
      </div>

      <Container className="grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <span className="font-display text-2xl font-bold text-white">{site.name}</span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline}.</p>
          <p className="mt-4 font-mono text-xs text-steel-200">EST. {site.founded} · {site.certification}</p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-label text-steel-200">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-label text-steel-200">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {mainNav
              .filter((i) => ["/about", "/projects", "/industries", "/careers", "/blog", "/contact"].includes(i.href))
              .map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="transition-colors hover:text-white">
                    {i.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="col-span-2">
          <h3 className="font-mono text-xs uppercase tracking-label text-steel-200">Contact</h3>
          <ul className="mt-4 space-y-4 text-sm">
            {offices.map((o) => (
              <li key={o.name}>
                <p className="text-white/90">{o.name}</p>
                <p className="mt-1 leading-relaxed">{o.lines.join(", ")}</p>
              </li>
            ))}
            <li className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
              <a href={site.phoneHref} className="transition-colors hover:text-white">{site.phone}</a>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">{site.email}</a>
            </li>
            <li className="flex gap-4 pt-1">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">LinkedIn</a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">WhatsApp</a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Use</Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
