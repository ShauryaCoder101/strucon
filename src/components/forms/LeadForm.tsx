"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, ArrowRight } from "@/components/ui/Button";
import { leadSchema, type LeadValues } from "@/lib/validation";
import { formConfig, type FormIntent, type FormFieldKey } from "@/content/forms";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { cn } from "@/lib/utils";

const timelineOptions = ["Immediate", "Within 3 months", "3–6 months", "6+ months"];
const budgetOptions = ["< $10k", "$10k–$50k", "$50k–$200k", "$200k+", "Not sure yet"];

type FieldMeta = { label: string; type: "text" | "email" | "tel" | "date" | "textarea" | "select"; options?: string[]; required?: boolean; full?: boolean };

const fieldMeta: Record<FormFieldKey, FieldMeta> = {
  name: { label: "Full name", type: "text", required: true },
  email: { label: "Email", type: "email", required: true },
  phone: { label: "Phone", type: "tel" },
  company: { label: "Company", type: "text" },
  service: { label: "Service of interest", type: "select", options: services.map((s) => s.title) },
  industry: { label: "Industry", type: "select", options: industries.map((i) => i.title) },
  projectType: { label: "Project type", type: "text" },
  timeline: { label: "Timeline", type: "select", options: timelineOptions },
  budget: { label: "Budget range", type: "select", options: budgetOptions },
  role: { label: "Role applying for", type: "text" },
  preferredDate: { label: "Preferred date", type: "date" },
  message: { label: "Message", type: "textarea", full: true },
};

export function LeadForm({ intent = "general", role }: { intent?: FormIntent; role?: string }) {
  const def = formConfig[intent];
  const fileRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { intent, role: role ?? "" },
  });

  async function onSubmit(values: LeadValues) {
    setStatus("submitting");
    try {
      const data = new FormData();
      Object.entries(values).forEach(([k, v]) => data.append(k, v ?? ""));
      const file = fileRef.current?.files?.[0];
      if (file) data.append("file", file);

      const res = await fetch("/api/lead", { method: "POST", body: data });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset({ intent, role: role ?? "" });
      if (fileRef.current) fileRef.current.value = "";
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-line bg-white p-8 text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent/10 text-accent">✓</div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Thank you — message received</h3>
        <p className="mt-2 text-slate">We&apos;ll get back to you within two working days.</p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>Send another</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="border border-line bg-white p-6 md:p-8">
      <h3 className="font-display text-xl font-semibold text-ink">{def.heading}</h3>
      <p className="mt-2 text-sm text-slate">{def.blurb}</p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {def.fields.map((key) => {
          const meta = fieldMeta[key];
          const err = errors[key as keyof LeadValues]?.message as string | undefined;
          return (
            <div key={key} className={cn("flex flex-col", (meta.full || meta.type === "textarea") && "sm:col-span-2")}>
              <label htmlFor={key} className="mb-1.5 font-mono text-[11px] uppercase tracking-label text-slate">
                {meta.label} {meta.required && <span className="text-accent">*</span>}
              </label>

              {meta.type === "textarea" ? (
                <textarea id={key} rows={4} {...register(key as keyof LeadValues)} className={inputCls(!!err)} />
              ) : meta.type === "select" ? (
                <select id={key} {...register(key as keyof LeadValues)} className={inputCls(!!err)} defaultValue="">
                  <option value="" disabled>Select…</option>
                  {meta.options?.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : (
                <input id={key} type={meta.type} {...register(key as keyof LeadValues)} className={inputCls(!!err)} />
              )}

              {err && <p className="mt-1 text-xs text-accent-600">{err}</p>}
            </div>
          );
        })}

        {def.file && (
          <div className="flex flex-col sm:col-span-2">
            <label htmlFor="file" className="mb-1.5 font-mono text-[11px] uppercase tracking-label text-slate">{def.file.label}</label>
            <input id="file" ref={fileRef} type="file" accept={def.file.accept} className="text-sm text-slate file:mr-4 file:cursor-pointer file:border file:border-line file:bg-paper file:px-4 file:py-2 file:font-mono file:text-xs file:uppercase file:text-ink hover:file:bg-line" />
            <p className="mt-1 text-xs text-slate-soft">{def.file.hint}</p>
          </div>
        )}
      </div>

      {status === "error" && (
        <p className="mt-4 border border-accent/30 bg-accent/5 px-4 py-3 text-sm text-accent-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}

      <Button type="submit" size="lg" className="group mt-6 w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : def.submit}
        <ArrowRight />
      </Button>
      <p className="mt-3 text-xs text-slate-soft">
        By submitting, you agree to our <a href="/privacy" className="underline hover:text-ink">Privacy Policy</a>.
      </p>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full border bg-white px-3.5 py-2.5 text-sm text-ink transition-colors placeholder:text-slate-soft focus:border-steel focus:outline-none",
    hasError ? "border-accent-600" : "border-line"
  );
}
