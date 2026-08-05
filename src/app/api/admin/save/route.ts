import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { isAuthed } from "@/lib/admin-auth";
import { writeCollection } from "@/lib/content-store";
import { ADMIN_COLLECTIONS } from "@/lib/content";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const { collection, data } = await req.json().catch(() => ({ collection: null, data: null }));

  if (!ADMIN_COLLECTIONS.includes(collection)) {
    return NextResponse.json({ ok: false, error: "Unknown collection" }, { status: 400 });
  }
  if (!Array.isArray(data)) {
    return NextResponse.json({ ok: false, error: "Invalid data" }, { status: 400 });
  }

  try {
    writeCollection(collection, data);
    // Purge the static cache for the whole site so the change is live immediately.
    revalidatePath("/", "layout");
    return NextResponse.json({ ok: true, count: data.length });
  } catch (err) {
    console.error("[admin/save] error", err);

    // Serverless hosts (Vercel, Netlify Functions) give each request a read-only
    // filesystem, so the JSON content store cannot persist there. Say so plainly
    // instead of surfacing a generic 500 to whoever pressed Save.
    const code = (err as NodeJS.ErrnoException)?.code;
    if (code === "EROFS" || code === "EACCES" || code === "EPERM") {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Saving is disabled on this deployment: its filesystem is read-only. Content can still be edited by running the site locally and committing the change, until a storage backend (e.g. Vercel Blob) is connected.",
        },
        { status: 501 }
      );
    }

    return NextResponse.json({ ok: false, error: "Failed to save" }, { status: 500 });
  }
}
