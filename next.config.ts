import type { NextConfig } from "next";

// Statický export pro GitHub Pages. Bez basePath – web běží na vlastní doméně.
const nextConfig: NextConfig = {
  output: "export",
  // Každá stránka jako slozka/index.html – GitHub Pages ji tak spolehlivě najde
  // (jinak by se /stranka tloukla se stejnojmennou složkou s daty pro prefetch).
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
