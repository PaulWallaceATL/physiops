import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Reduce client bundle by not inlining small assets
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  // Slight security/tidiness; avoid revealing Next.js
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
