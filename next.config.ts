import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async rewrites() {
    return [
      {
        source: "/public/img/:path*",
        destination: "/img/:path*",
      },
      {
        source: "/img/bg",
        destination: "/img/bg.jpg",
      },
      {
        source: "/public/img/bg",
        destination: "/img/bg.jpg",
      },
    ];
  },
};

export default nextConfig;
