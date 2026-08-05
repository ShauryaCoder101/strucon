import { NextResponse, type NextRequest } from "next/server";

/**
 * Keep preview/staging deployments out of search results.
 *
 * The canonical tags and sitemap deliberately point at the production domain, but a
 * *.vercel.app preview serves the same pages on a different host. Google ignores a
 * canonical that points to substantially different content — and until launch the
 * production domain still serves the old site — so the preview could be indexed as a
 * duplicate. An explicit X-Robots-Tag removes that risk without affecting production.
 */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const host = req.headers.get("host") ?? "";

  if (host.endsWith(".vercel.app") || host.startsWith("localhost")) {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return res;
}

export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico).*)",
};
