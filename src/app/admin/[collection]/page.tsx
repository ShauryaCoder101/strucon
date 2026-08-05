import Link from "next/link";
import { notFound } from "next/navigation";

import { requireAuth } from "@/lib/admin-auth";
import { ADMIN_COLLECTIONS, getCollection, type CollectionName } from "@/lib/content";
import { adminSchemas } from "@/content/admin-schema";
import { CollectionEditor } from "@/components/admin/CollectionEditor";

export const dynamic = "force-dynamic";

export default async function AdminCollectionPage({ params }: { params: Promise<{ collection: string }> }) {
  await requireAuth();
  const { collection } = await params;

  if (!ADMIN_COLLECTIONS.includes(collection as CollectionName)) notFound();
  const schema = adminSchemas[collection];
  const items = getCollection(collection as CollectionName) as Record<string, unknown>[];

  return (
    <div>
      <Link href="/admin" className="font-mono text-[11px] uppercase tracking-label text-slate hover:text-ink">← All content</Link>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink">{schema.label}</h1>
      <p className="mb-8 mt-1 text-sm text-slate">Add, edit, reorder by deleting/re-adding, and remove {schema.label.toLowerCase()}. Save to publish.</p>

      <CollectionEditor
        collection={collection}
        label={schema.label}
        singular={schema.singular}
        labelKey={schema.labelKey}
        fields={schema.fields}
        initial={items}
      />
    </div>
  );
}
