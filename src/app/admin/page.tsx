import Link from "next/link";
import { requireAuth } from "@/lib/admin-auth";
import { ADMIN_COLLECTIONS, getCollection, type CollectionName } from "@/lib/content";
import { adminSchemas } from "@/content/admin-schema";
import { isOverridden } from "@/lib/content-store";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  await requireAuth();

  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Content</h1>
          <p className="mt-1 text-sm text-slate">Edit site content. Changes go live immediately after saving.</p>
        </div>
        <form action="/api/admin/logout" method="post">
          <button className="font-mono text-[11px] uppercase tracking-label text-slate hover:text-accent-600">Log out</button>
        </form>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ADMIN_COLLECTIONS.map((name) => {
          const schema = adminSchemas[name];
          const count = getCollection(name as CollectionName).length;
          const edited = isOverridden(name);
          return (
            <Link key={name} href={`/admin/${name}`} className="group flex flex-col border border-line bg-white p-6 transition-colors hover:border-ink">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-ink">{schema.label}</h2>
                <span className="font-mono text-xs text-slate">{count}</span>
              </div>
              <p className="mt-2 text-sm text-slate">
                {edited ? "Edited via admin" : "Using default content"}
              </p>
              <span className="mt-6 font-mono text-[11px] uppercase tracking-label text-accent">Edit →</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 border-t border-line pt-6 text-xs text-slate-soft">
        <p>Static site facts (company name, contact, About page, legal text) are edited in code — see <code className="font-mono">src/content/site.ts</code>, <code className="font-mono">about.ts</code>, and <code className="font-mono">legal.ts</code>.</p>
      </div>
    </div>
  );
}
