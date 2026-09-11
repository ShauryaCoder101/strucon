"use client";

import { useState } from "react";
import { LeadForm } from "@/components/forms/LeadForm";
import { applicationsEmail } from "@/content/jobs";
import type { Job } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Openings list + apply form.
 *
 * The client instructed that no inactive or fictional vacancies be published, so the jobs list
 * is normally empty. With no jobs, the filter UI would render as an empty shell — instead we
 * show a speculative-application state. The apply form works either way; selecting "Apply" on a
 * real opening pre-fills the role.
 */
export function CareersClient({ jobs, departments: depts }: { jobs: Job[]; departments: string[] }) {
  const departments = ["All", ...depts];
  const [dept, setDept] = useState("All");
  const [role, setRole] = useState<string>("");

  const hasOpenings = jobs.length > 0;
  const filtered = dept === "All" ? jobs : jobs.filter((j) => j.department === dept);

  function apply(title: string) {
    setRole(title);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {hasOpenings ? (
        <>
          {/* Filter */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter roles by department">
            {departments.map((d) => (
              <button
                key={d}
                role="tab"
                aria-selected={dept === d}
                onClick={() => setDept(d)}
                className={cn(
                  "border px-4 py-2 font-mono text-xs uppercase tracking-label transition-colors",
                  dept === d ? "border-ink bg-ink text-white" : "border-line bg-white text-slate hover:border-ink hover:text-ink"
                )}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Listings */}
          <div className="mt-8 divide-y divide-line border-y border-line">
            {filtered.map((job) => (
              <details key={job.slug} className="group py-6">
                <summary className="flex cursor-pointer list-none flex-col gap-3 md:flex-row md:items-center md:justify-between [&::-webkit-details-marker]:hidden">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{job.title}</h3>
                    <p className="mt-1 flex flex-wrap gap-x-3 font-mono text-[11px] uppercase tracking-label text-slate">
                      <span>{job.department}</span><span>·</span><span>{job.location}</span><span>·</span><span>{job.type}</span><span>·</span><span>{job.experience}</span>
                    </p>
                  </div>
                  <span className="grid h-7 w-7 shrink-0 place-items-center border border-line text-slate transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>

                <div className="mt-5 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-slate">{job.summary}</p>
                    <h4 className="mt-5 font-mono text-xs uppercase tracking-label text-steel">Responsibilities</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate">
                      {job.responsibilities.map((r) => <li key={r} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />{r}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-label text-steel">Requirements</h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate">
                      {job.requirements.map((r) => <li key={r} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />{r}</li>)}
                    </ul>
                    <button onClick={() => apply(job.title)} className="mt-6 inline-flex h-11 items-center gap-2 bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-600">
                      Apply for this role
                    </button>
                  </div>
                </div>
              </details>
            ))}
            {filtered.length === 0 && <p className="py-8 text-slate">No open roles in this department right now.</p>}
          </div>
        </>
      ) : (
        /* No published vacancies — invite a speculative application instead of an empty filter UI. */
        <div className="border-t-2 border-accent bg-paper p-8 md:p-10">
          <p className="eyebrow">Applications</p>
          <h3 className="mt-4 max-w-2xl font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
            We have no vacancies published at the moment — but we are always glad to hear from good engineers.
          </h3>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate">
            Send us your CV and tell us the kind of work you want to do. We keep applications on file and
            get in touch when a matching role opens in one of the areas we hire for.
          </p>
          <p className="mt-6 font-mono text-sm text-ink">
            Or email us directly at{" "}
            <a href={`mailto:${applicationsEmail}`} className="underline underline-offset-2 hover:text-accent">
              {applicationsEmail}
            </a>
          </p>
        </div>
      )}

      {/* Apply form */}
      <div id="apply" className="mt-16 scroll-mt-24">
        <div className="mx-auto max-w-2xl">
          <LeadForm intent="career" role={role} key={role || "career"} />
        </div>
      </div>
    </>
  );
}
