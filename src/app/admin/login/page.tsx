"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Incorrect password. Try again.");
        setLoading(false);
        return;
      }
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Try again.");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-sm py-16">
      <h1 className="font-display text-2xl font-bold text-ink">Admin sign in</h1>
      <p className="mt-2 text-sm text-slate">Enter the admin password to manage site content.</p>
      <form onSubmit={onSubmit} className="mt-6 border border-line bg-white p-6">
        <label className="flex flex-col">
          <span className="mb-1.5 font-mono text-[11px] uppercase tracking-label text-slate">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="w-full border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-steel focus:outline-none"
          />
        </label>
        {error && <p className="mt-3 text-sm text-accent-600">{error}</p>}
        <button type="submit" disabled={loading} className="mt-5 h-11 w-full bg-accent text-sm font-medium text-white transition-colors hover:bg-accent-600 disabled:opacity-60">
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
      {/* Dev-only hint. Never rendered in production builds, so the password
          is not disclosed on the live site. */}
      {process.env.NODE_ENV !== "production" && (
        <p className="mt-4 text-xs text-slate-soft">
          Dev password: <code className="font-mono">strucon-admin</code>. In production, set{" "}
          <code className="font-mono">ADMIN_PASSWORD</code> and <code className="font-mono">ADMIN_TOKEN</code> — without them, sign-in is disabled.
        </p>
      )}
    </div>
  );
}
