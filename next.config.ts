import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portofolio",
  assetPrefix: "/Portofolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
