import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validation";

/**
 * PLACEHOLDER lead endpoint. Validates the submission and returns success.
 * TODO (go-live): wire to email (Resend/SendGrid) and/or CRM, and push any uploaded
 * file to storage (S3/UploadThing). See REQUIREMENTS.md §6. No secrets are handled here yet.
 */
export const runtime = "nodejs";

const MAX_FILE_BYTES = 25 * 1024 * 1024; // 25 MB

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const values = Object.fromEntries(
      Array.from(form.entries()).filter(([, v]) => typeof v === "string")
    );
    const parsed = leadSchema.safeParse(values);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const file = form.get("file");
    if (file && file instanceof File && file.size > MAX_FILE_BYTES) {
      return NextResponse.json({ ok: false, error: "File exceeds 25 MB." }, { status: 400 });
    }

    // In development, log the lead so you can see submissions working end-to-end.
    console.log("[lead] received", {
      intent: parsed.data.intent,
      name: parsed.data.name,
      email: parsed.data.email,
      file: file instanceof File ? { name: file.name, size: file.size } : null,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] error", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
