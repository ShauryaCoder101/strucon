import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/** Branded 1200×630 social share image, generated at build. Inherited by all routes. */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1F33",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, background: "#F26419", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 34, fontWeight: 700 }}>
            S
          </div>
          <div style={{ color: "#fff", fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#9FBAD1", fontSize: 22, letterSpacing: 4, textTransform: "uppercase", marginBottom: 20 }}>
            Structural Engineering · Steel Detailing · BIM
          </div>
          <div style={{ color: "#fff", fontSize: 68, fontWeight: 700, lineHeight: 1.05, maxWidth: 900, letterSpacing: -2 }}>
            Engineering Tomorrow&apos;s Infrastructure
          </div>
        </div>

        <div style={{ display: "flex", gap: 40, color: "#9FBAD1", fontSize: 22 }}>
          <span>EST. {site.founded}</span>
          <span>6 Lac+ MT Detailed</span>
          <span>Global EPC Delivery</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
