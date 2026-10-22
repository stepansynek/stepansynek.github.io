import fs from "node:fs";
import path from "node:path";
import { cn } from "@/lib/cn";
import { showPlaceholders } from "@/lib/config";

type Source = { src: string; width: number; height: number };

// Manifest zapisuje scripts/images.mjs před buildem. Čte se při buildu, ne v prohlížeči.
function readManifest(): Record<string, Source[]> {
  try {
    const file = path.join(process.cwd(), "public", "photos", "out", "manifest.json");
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return {};
  }
}

const manifest = readManifest();

export function hasPhoto(name: string): boolean {
  return Boolean(manifest[name]?.length);
}

/** Zdroje fotky pro klientské komponenty, které si <img> skládají samy. Bez fotky null. */
export function photoSources(name: string): { src: string; srcSet: string; width: number; height: number } | null {
  const sources = manifest[name];
  if (!sources?.length) return null;
  const largest = sources[sources.length - 1];
  return {
    src: sources[0].src,
    srcSet: sources.map((source) => `${source.src} ${source.width}w`).join(", "),
    width: largest.width,
    height: largest.height,
  };
}

/**
 * Fotka z public/photos/<name>.jpg ve WebP se srcset.
 * Když fotka chybí, vykreslí ve vývoji viditelný placeholder se stejným poměrem stran,
 * v produkci náhradu z `fallback` (nebo nic).
 */
export function Photo({
  name,
  alt,
  sizes,
  eager = false,
  className,
  fallback = null,
}: {
  name: string;
  alt: string;
  sizes: string;
  eager?: boolean;
  className?: string;
  fallback?: React.ReactNode;
}) {
  const sources = manifest[name];

  if (!sources?.length) {
    if (!showPlaceholders) return fallback;
    return (
      <div className={cn("flex items-center justify-center bg-ink-tint", className)}>
        <span className="small">[{name}.jpg]</span>
      </div>
    );
  }

  const largest = sources[sources.length - 1];
  return (
    <img
      src={sources[0].src}
      srcSet={sources.map((source) => `${source.src} ${source.width}w`).join(", ")}
      sizes={sizes}
      width={largest.width}
      height={largest.height}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding={eager ? "sync" : "async"}
      className={cn("object-cover", className)}
    />
  );
}
