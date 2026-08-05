"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { AdminField } from "@/content/admin-schema";

type Item = Record<string, unknown> & { _rid: string };
const rid = () => Math.random().toString(36).slice(2, 10);

/** Normalize a stored value to the string the textarea/input edits. */
function toEditable(field: AdminField, value: unknown): unknown {
  if (field.type === "lines") return Array.isArray(value) ? value.join("\n") : "";
  if (field.type === "json") return value == null ? "" : JSON.stringify(value, null, 2);
  return value;
}

export function CollectionEditor({
  collection,
  label,
  singular,
  labelKey,
  fields,
  initial,
}: {
  collection: string;
  label: string;
  singular: string;
  labelKey: string;
  fields: AdminField[];
  initial: Record<string, unknown>[];
}) {
  const router = useRouter();

  const [items, setItems] = useState<Item[]>(() =>
    initial.map((it) => {
      const row: Item = { _rid: rid() };
      for (const f of fields) row[f.key] = toEditable(f, it[f.key]);
      return row;
    })
  );
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  const toggle = (id: string) =>
    setOpen((s) => {
      const n = new Set(s);
      n.has(id) ? n.delete(id) : n.add(id);
      return n;
    });

  const update = (id: string, key: string, value: unknown) =>
    setItems((rows) => rows.map((r) => (r._rid === id ? { ...r, [key]: value } : r)));

  const addItem = () => {
    const row: Item = { _rid: rid() };
    for (const f of fields) row[f.key] = f.type === "boolean" ? false : "";
    setItems((rows) => [...rows, row]);
    setOpen((s) => new Set(s).add(row._rid));
    setStatus("idle");
  };

  const removeItem = (id: string) => setItems((rows) => rows.filter((r) => r._rid !== id));

  function build(): { ok: true; data: unknown[] } | { ok: false; error: string } {
    const out: unknown[] = [];
    for (const item of items) {
      const obj: Record<string, unknown> = {};
      const name = String(item[labelKey] || "(untitled)");
      for (const f of fields) {
        const v = item[f.key];
        if (f.type === "lines") obj[f.key] = String(v ?? "").split("\n").map((s) => s.trim()).filter(Boolean);
        else if (f.type === "json") {
          const txt = String(v ?? "").trim();
          if (!txt) continue;
          try {
            obj[f.key] = JSON.parse(txt);
          } catch {
            return { ok: false, error: `Invalid JSON in “${f.label}” for “${name}”. Fix it and save again.` };
          }
        } else if (f.type === "number") obj[f.key] = v === "" || v == null ? undefined : Number(v);
        else if (f.type === "boolean") obj[f.key] = !!v;
        else obj[f.key] = v ?? "";
      }
      out.push(obj);
    }
    return { ok: true, data: out };
  }

  async function save() {
    const result = build();
    if (!result.ok) {
      setError(result.error);
      setStatus("error");
      return;
    }
    setStatus("saving");
    setError("");
    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ collection, data: result.data }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "Save failed");
      setStatus("saved");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Save failed");
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Action bar */}
      <div className="sticky top-0 z-10 -mx-4 mb-6 flex items-center justify-between gap-4 border-b border-line bg-paper/95 px-4 py-3 backdrop-blur">
        <p className="font-mono text-xs uppercase tracking-label text-slate">
          {items.length} {items.length === 1 ? singular : `${singular}s`}
        </p>
        <div className="flex items-center gap-3">
          {status === "saved" && <span className="text-sm text-green-700">Saved ✓</span>}
          <button onClick={addItem} className="h-10 border border-ink px-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white">
            + Add {singular}
          </button>
          <button onClick={save} disabled={status === "saving"} className="h-10 bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-600 disabled:opacity-60">
            {status === "saving" ? "Saving…" : "Save changes"}
          </button>
        </div>
      </div>

      {status === "error" && <p className="mb-4 border border-accent/40 bg-accent/5 px-4 py-3 text-sm text-accent-600">{error}</p>}

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = open.has(item._rid);
          return (
            <div key={item._rid} className="border border-line bg-white">
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <button onClick={() => toggle(item._rid)} className="flex flex-1 items-center gap-3 text-left">
                  <span className={`grid h-6 w-6 place-items-center border border-line text-slate transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  <span className="font-display font-semibold text-ink">{String(item[labelKey] || `New ${singular}`)}</span>
                </button>
                <button onClick={() => removeItem(item._rid)} className="font-mono text-[11px] uppercase tracking-label text-slate hover:text-accent-600">
                  Delete
                </button>
              </div>

              {isOpen && (
                <div className="grid gap-5 border-t border-line p-4 md:grid-cols-2">
                  {fields.map((f) => (
                    <Field
                      key={f.key}
                      field={f}
                      value={item[f.key]}
                      onChange={(v) => update(item._rid, f.key, v)}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {items.length === 0 && <p className="py-8 text-center text-slate">No {label.toLowerCase()} yet. Add one to get started.</p>}
      </div>
    </div>
  );
}

function Field({ field, value, onChange }: { field: AdminField; value: unknown; onChange: (v: unknown) => void }) {
  const wide = field.type === "textarea" || field.type === "lines" || field.type === "json";
  const inputCls = "w-full border border-line bg-white px-3 py-2 text-sm text-ink focus:border-steel focus:outline-none";

  return (
    <label className={`flex flex-col ${wide ? "md:col-span-2" : ""}`}>
      <span className="mb-1 font-mono text-[11px] uppercase tracking-label text-slate">{field.label}</span>
      {field.type === "boolean" ? (
        <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} className="h-5 w-5 accent-[#F26419]" />
      ) : field.type === "textarea" ? (
        <textarea rows={2} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} className={inputCls} />
      ) : field.type === "lines" ? (
        <textarea rows={4} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} className={inputCls} />
      ) : field.type === "json" ? (
        <textarea rows={6} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} className={`${inputCls} font-mono text-xs`} />
      ) : (
        <input type={field.type === "number" ? "number" : "text"} value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} className={inputCls} />
      )}
      {field.help && <span className="mt-1 text-[11px] text-slate-soft">{field.help}</span>}
    </label>
  );
}
