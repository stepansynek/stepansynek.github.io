/**
 * Z fotek v public/photos/ vygeneruje WebP ve dvou šířkách (640 a 1280 px)
 * do public/photos/out/ a zapíše jejich rozměry do public/photos/out/manifest.json.
 * Komponenta <Photo> z manifestu skládá srcset.
 *
 * Fotky z DUOTONE dostanou navíc verzi „<jméno>-duo“: obraz vytištěný jen modrou barvou na bílý papír.
 * Na webu leží v režimu multiply na oranžové desce, takže světla jsou oranžová a stíny skoro černé
 * jako v dvoubarevném tisku.
 *
 * Ke každému WebP zapíše vedle soubor <jméno>.webp.json s původem (provenance pro impeccable):
 * ze kterého zdroje vznikl a původ zdroje z jeho JPEG komentáře „impeccable:prompt“.
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
const DUOTONE = new Set(["me"]);
/** Modrá z --ink v src/app/globals.css. */
const INK = [0x1f, 0x3c, 0x9e];

/** Původ zdroje z JPEG komentáře „impeccable:prompt“ (zapisuje ho `impeccable embed-prompt`). */
async function origin(input) {
  const data = await fs.readFile(input);
  if (data[0] !== 0xff || data[1] !== 0xd8) return "";
  const tag = "impeccable:prompt\0";
  for (let i = 2; i + 4 < data.length && data[i] === 0xff; ) {
    const marker = data[i + 1];
    const length = data.readUInt16BE(i + 2);
    if (marker === 0xda) break;
    if (marker === 0xfe) {
      const text = data.subarray(i + 4, i + 2 + length).toString("utf8");
      if (text.startsWith(tag)) return text.slice(tag.length);
    }
    i += 2 + length;
  }
  return "";
}

/** Zapíše vedle výstupu provenance: jak soubor vznikl a odkud je zdroj. */
async function provenance(output, file, how, source) {
  const prompt = `Odvozeno z public/photos/${file} skriptem scripts/images.mjs (${how}). ${source || "Původ zdroje není zapsaný."}`;
  await fs.writeFile(`${output}.json`, `${JSON.stringify({ prompt, createdAt: new Date().toISOString() }, null, 2)}\n`);
}

/** Šedotónový obraz převede na modrou barvu na bílém papíře. Křivka mírně zvedne kontrast středních tónů. */
async function duotone(input, width) {
  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .grayscale()
    .normalise()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 3);
  for (let i = 0; i < info.width * info.height; i++) {
    const light = data[i * info.channels] / 255;
    const ink = Math.min(1, Math.max(0, 1 - (0.5 + (light - 0.5) * 1.18 + 0.04)));
    for (let c = 0; c < 3; c++) out[i * 3 + c] = Math.round(255 - ink * (255 - INK[c]));
  }
  return sharp(out, { raw: { width: info.width, height: info.height, channels: 3 } });
}

await fs.mkdir(OUT_DIR, { recursive: true });

const files = (await fs.readdir(SRC_DIR)).filter((file) => EXTENSIONS.has(path.extname(file).toLowerCase()));
const manifest = {};

for (const file of files) {
  const name = path.basename(file, path.extname(file));
  const input = path.join(SRC_DIR, file);
  const sourceOrigin = await origin(input);
  const sources = [];

  for (const width of WIDTHS) {
    const output = path.join(OUT_DIR, `${name}-${width}.webp`);
    const info = await sharp(input)
      .rotate() // podle EXIF orientace
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(output);
    await provenance(output, file, `WebP, šířka ${info.width} px`, sourceOrigin);
    sources.push({ src: `/photos/out/${name}-${width}.webp`, width: info.width, height: info.height });
  }

  // Menší fotka, než je 1280 px, dá dvakrát stejnou šířku; duplicity vynecháme.
  const unique = sources.filter((source, index) => sources.findIndex((s) => s.width === source.width) === index);
  manifest[name] = unique;
  console.log(`photos: ${file} → ${unique.map((s) => `${s.width}×${s.height}`).join(", ")}`);

  if (DUOTONE.has(name)) {
    const duo = [];
    for (const width of WIDTHS) {
      const output = path.join(OUT_DIR, `${name}-duo-${width}.webp`);
      const info = await (await duotone(input, width)).webp({ quality: 82 }).toFile(output);
      await provenance(output, file, `modrý duotón #1f3c9e na bílé, WebP, šířka ${info.width} px`, sourceOrigin);
      duo.push({ src: `/photos/out/${name}-duo-${width}.webp`, width: info.width, height: info.height });
    }
    manifest[`${name}-duo`] = duo.filter((source, index) => duo.findIndex((s) => s.width === source.width) === index);
    console.log(`photos: ${file} → duotón ${duo.map((s) => `${s.width}×${s.height}`).join(", ")}`);
  }
}

await fs.writeFile(path.join(OUT_DIR, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
if (files.length === 0) console.log("photos: v public/photos/ nejsou žádné fotky");
