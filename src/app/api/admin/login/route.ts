import { NextResponse } from "next/server";
import { verifyPassword, adminToken, ADMIN_COOKIE } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));
  const token = adminToken();

  // token === null means production is running without ADMIN_TOKEN/ADMIN_PASSWORD set.
  if (token === null) {
    return NextResponse.json(
      { ok: false, error: "Admin is not configured on this deployment." },
      { status: 503 }
    );
  }
  if (!verifyPassword(password)) {
    return NextResponse.json({ ok: false, error: "Incorrect password" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
