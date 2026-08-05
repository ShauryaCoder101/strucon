import { Container } from "@/components/ui/Container";
import { Button, ArrowRight } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-ink pt-[var(--nav-h)] text-white">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative text-center">
        <p className="font-mono text-sm uppercase tracking-label text-accent">Error 404</p>
        <h1 className="mt-4 text-display-lg font-bold text-white">This drawing isn&apos;t on file</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/75">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/" size="lg" variant="primary" className="group">
            Back to home <ArrowRight />
          </Button>
          <Button href="/contact" size="lg" variant="outline" className="border-white/40 text-white hover:bg-white hover:text-ink">
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
}
