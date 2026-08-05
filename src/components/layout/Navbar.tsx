"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { mainNav, site, ctas } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-engineered",
        solid ? "bg-ink/95 shadow-lg backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="container flex h-[var(--nav-h)] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 text-white" aria-label={`${site.name} home`}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {mainNav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="flex items-center gap-1 py-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                {item.label}
                {item.children && <Chevron />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-56 translate-y-1 border border-white/10 bg-ink opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={ctas.consultation.href} size="md">
            {ctas.consultation.label}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Burger open={open} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <nav className="container flex flex-col py-4" aria-label="Mobile">
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-white/5 py-1">
                <Link
                  href={item.href}
                  className="block py-2.5 text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-white/10 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-sm text-white/60"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href={ctas.consultation.href} className="mt-4" size="lg">
              {ctas.consultation.label}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

/** Wordmark placeholder — swap for the supplied SVG logo. Mono mark evokes a grid/coordinate. */
function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center bg-accent font-display text-lg font-bold text-white">S</span>
      <span className="font-display text-xl font-bold tracking-tight">{site.name}</span>
    </span>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      {open ? (
        <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      )}
    </svg>
  );
}
