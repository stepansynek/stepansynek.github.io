import type { NextConfig } from "next";

// Statický export pro GitHub Pages. Bez basePath – web běží na vlastní doméně.
const nextConfig: NextConfig = {
  output: "export",
  // Každá stránka jako slozka/index.html – GitHub Pages ji tak spolehlivě najde.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Kořen projektu výslovně, ať Next nehledá package-lock.json o složky výš.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
