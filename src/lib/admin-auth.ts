import "server-only";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Minimal auth for the built-in /admin. Set ADMIN_PASSWORD and ADMIN_TOKEN in your
 * environment for production; the defaults below are for local development only.
 */
export const ADMIN_COOKIE = "strucon_admin";
const PASSWORD = process.env.ADMIN_PASSWORD || "strucon-admin";
export const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "strucon-admin-token-dev";

export function verifyPassword(pw: string): boolean {
  return typeof pw === "string" && pw.length > 0 && pw === PASSWORD;
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  return store.get(ADMIN_COOKIE)?.value === ADMIN_TOKEN;
}

/** Redirects to the login page if the request is not authenticated. */
export async function requireAuth(): Promise<void> {
  if (!(await isAuthed())) redirect("/admin/login");
}
