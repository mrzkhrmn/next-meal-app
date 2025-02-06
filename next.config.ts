import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    BASE_URL: process.env.PUBLIC_NEXT_API_BASE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/images/media/meals/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
