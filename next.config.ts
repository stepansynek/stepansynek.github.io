import type { NextConfig } from "next";

// Statický export pro GitHub Pages. Bez basePath – web běží na vlastní doméně.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
