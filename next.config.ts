import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.godtlevert.no" },
      { protocol: "https", hostname: "www.adamsmatkasse.no" },
      { protocol: "https", hostname: "logos.adtraction.com" },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
