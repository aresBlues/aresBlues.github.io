import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static export for GitHub Pages
  // User site (username.github.io): leave basePath empty. For project pages, set e.g. "/repo-name".
  basePath: "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
