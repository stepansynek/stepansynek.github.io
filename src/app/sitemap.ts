import type { MetadataRoute } from "next";
import { PRIVACY_PATH, site } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}${PRIVACY_PATH}`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
