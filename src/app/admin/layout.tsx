import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "STRUCON Admin",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center bg-accent font-display text-sm font-bold text-white">S</span>
            <span className="font-display font-bold">STRUCON</span>
            <span className="font-mono text-[11px] uppercase tracking-label text-slate">Admin</span>
          </Link>
          <Link href="/" className="font-mono text-[11px] uppercase tracking-label text-slate hover:text-ink" target="_blank">
            View live site ↗
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
