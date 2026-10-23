import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Web je zamčený heslem (scripts/zamknout.mjs) a stránka s heslem má noindex. Procházení se nezakazuje,
// aby roboti noindex viděli a web z vyhledávání vyřadili. Platí i pro ukázky na stepansynek.com/<repo>/.
// Sitemap se vrátí se zveřejněním webu (git: src/app/sitemap.ts).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
