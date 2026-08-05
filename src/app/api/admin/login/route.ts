import { NextResponse } from "next/server";
import { verifyPassword, ADMIN_COOKIE, ADMIN_TOKEN } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { password } = await req.json().catch(() => ({ password: "" }));
  if (!verifyPassword(password)) {
    return NextResponse.json({ ok: false, error: "Incorrect password" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, ADMIN_TOKEN, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
    secure: process.env.NODE_ENV === "production",
  });
  return res;
}
