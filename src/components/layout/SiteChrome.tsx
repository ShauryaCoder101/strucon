"use client";

import { usePathname } from "next/navigation";

/**
 * Renders the public navbar/footer for site routes, but not for /admin (which has its own chrome).
 * Navbar/Footer are passed in as already-rendered server elements.
 */
export function SiteChrome({
  nav,
  footer,
  children,
}: {
  nav: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      {nav}
      <main id="main">{children}</main>
      {footer}
    </>
  );
}
