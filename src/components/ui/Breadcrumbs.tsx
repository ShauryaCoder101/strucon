import Link from "next/link";

/** Visual breadcrumb trail. Pair with breadcrumbSchema() for the structured-data equivalent. */
export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-label text-white/50">
        {trail.map((item, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span className="text-white/80">{item.name}</span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-white">
                  {item.name}
                </Link>
              )}
              {!last && <span aria-hidden="true" className="text-white/25">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
