import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;