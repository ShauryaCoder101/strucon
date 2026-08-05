import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { timingSafeEqual } from "node:crypto";

/**
 * Auth for the built-in /admin.
 *
 * SECURITY: in production, ADMIN_PASSWORD and ADMIN_TOKEN must be set in the
 * environment. If either is missing, sign-in is refused outright — we never fall
 * back to a shipped default, because this repository is public and any default
 * would be a publicly-known password on a live site.
 *
 * The development fallbacks below apply only when NODE_ENV !== "production".
 */
export const ADMIN_COOKIE = "strucon_admin";

const IS_PROD = process.env.NODE_ENV === "production";
const DEV_PASSWORD = "strucon-admin";
const DEV_TOKEN = "strucon-admin-token-dev";

/** Configured password, or null when production is misconfigured. */
function adminPassword(): string | null {
  const fromEnv = process.env.ADMIN_PASSWORD;
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  return IS_PROD ? null : DEV_PASSWORD;
}

/** Session token stored in the auth cookie, or null when production is misconfigured. */
export function adminToken(): string | null {
  const fromEnv = process.env.ADMIN_TOKEN;
  if (fromEnv && fromEnv.length > 0) return fromEnv;
  return IS_PROD ? null : DEV_TOKEN;
}

/** True when the admin panel is usable (credentials are configured). */
export function isAdminConfigured(): boolean {
  return adminPassword() !== null && adminToken() !== null;
}

/** Constant-time comparison so a wrong password can't be found by timing. */
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return timingSafeEqual(bufA, bufB);
}

export function verifyPassword(pw: unknown): boolean {
  const expected = adminPassword();
  if (expected === null) return false; // production without ADMIN_PASSWORD: refuse everything
  if (typeof pw !== "string" || pw.length === 0) return false;
  return safeEqual(pw, expected);
}

export async function isAuthed(): Promise<boolean> {
  const expected = adminToken();
  if (expected === null) return false;
  const store = await cookies();
  const cookie = store.get(ADMIN_COOKIE)?.value;
  return typeof cookie === "string" && safeEqual(cookie, expected);
}

/** Redirects to the login page if the request is not authenticated. */
export async function requireAuth(): Promise<void> {
  if (!(await isAuthed())) redirect("/admin/login");
}
