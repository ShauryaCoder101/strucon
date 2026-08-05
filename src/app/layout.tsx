import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata, keywordBank } from "@/lib/seo";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Structural Engineering & Steel Detailing Consultants | STRUCON",
  description:
    "STRUCON delivers structural engineering, steel detailing, Tekla modeling, and BIM services to global EPC companies. ISO-certified, multi-code, and schedule-driven.",
  path: "/",
  keywords: keywordBank.home,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <SiteChrome nav={<Navbar />} footer={<Footer />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
