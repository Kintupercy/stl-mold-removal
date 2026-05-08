import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // static HTML export for Cloudflare Pages
  trailingSlash: true, // /faq/ style URLs for consistent canonicals
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
