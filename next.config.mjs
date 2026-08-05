/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // AVIF/WebP for Core Web Vitals; add remotePatterns when a real image host is wired.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
};

export default nextConfig;
