/**
 * Z fotek v public/photos/ vygeneruje WebP ve dvou šířkách (640 a 1280 px)
 * do public/photos/out/ a zapíše jejich rozměry do public/photos/out/manifest.json.
 * Komponenta <Photo> z manifestu skládá srcset.
 *
 * Spouští se automaticky před `npm run dev` a `npm run build`, ručně: node scripts/images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIR = path.join(process.cwd(), "public", "photos");
const OUT_DIR = path.join(SRC_DIR, "out");
const WIDTHS = [640, 1280];
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"]);

await fs.mkdir(OUT_DIR, { recursive: true });

const files = (await fs.readdir(SRC_DIR)).filter((file) => EXTENSIONS.has(path.extname(file).toLowerCase()));
const manifest = {};

for (const file of files) {
  const name = path.basename(file, path.extname(file));
  const input = path.join(SRC_DIR, file);
  const sources = [];

  for (const width of WIDTHS) {
    const output = path.join(OUT_DIR, `${name}-${width}.webp`);
    const info = await sharp(input)
      .rotate() // podle EXIF orientace
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(output);
    sources.push({ src: `/photos/out/${name}-${width}.webp`, width: info.width, height: info.height });
  }

  // Menší fotka, než je 1280 px, dá dvakrát stejnou šířku; duplicity vynecháme.
  const unique = sources.filter((source, index) => sources.findIndex((s) => s.width === source.width) === index);
  manifest[name] = unique;
  console.log(`photos: ${file} → ${unique.map((s) => `${s.width}×${s.height}`).join(", ")}`);
}

await fs.writeFile(path.join(OUT_DIR, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
if (files.length === 0) console.log("photos: v public/photos/ nejsou žádné fotky");
