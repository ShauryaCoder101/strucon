"use client";

import { useState } from "react";
import { LeadForm } from "@/components/forms/LeadForm";
import { applicationsEmails } from "@/content/jobs";
import type { Job } from "@/types";

/**
 * Openings list + apply form.
 *
 * The client supplied role TITLES only (round 2, row 51) — no department, location,
 * employment type, experience level, summary, responsibilities or requirements. So this
 * renders a plain titled list with an apply action per role rather than the job-detail
 * accordion and department filter it used to: a filter with no departments and an accordion
 * with nothing inside it would both be empty shells, and filling them would mean inventing
 * facts. Selecting a role pre-fills it on the apply form below.
 *
 * With no roles published at all (an empty `jobs`), the speculative-application state is
 * shown instead, exactly as before.
 */
export function CareersClient({ jobs }: { jobs: Job[] }) {
  const [role, setRole] = useState<string>("");

  const hasOpenings = jobs.length > 0;

  function apply(title: string) {
    setRole(title);
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {hasOpenings ? (
        <>
          <ul className="divide-y divide-line border-y border-line">
            {jobs.map((job, i) => (
              <li
                key={job.slug}
                className="flex flex-col gap-3 py-6 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-lg font-semibold text-ink md:text-xl">{job.title}</h3>
                </div>
                <button
                  onClick={() => apply(job.title)}
                  className="inline-flex h-11 shrink-0 items-center gap-2 self-start bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-600 md:self-auto"
                >
                  Apply for this role
                </button>
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-prose text-slate">
            Applications go to{" "}
            {applicationsEmails.map((e, i) => (
              <span key={e}>
                {i > 0 && " and "}
                <a
                  href={`mailto:${e}`}
                  className="font-medium text-ink underline underline-offset-2 hover:text-accent"
                >
                  {e}
                </a>
              </span>
            ))}
            , or use the form below.
          </p>
        </>
      ) : (
        /* No published vacancies — invite a speculative application instead of an empty list. */
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
            {applicationsEmails.map((e, i) => (
              <span key={e}>
                {i > 0 && " or "}
                <a href={`mailto:${e}`} className="underline underline-offset-2 hover:text-accent">
                  {e}
                </a>
              </span>
            ))}
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
