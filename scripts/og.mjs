/**
 * Jednorázově vygeneruje statické obrázky a uloží je do repozitáře:
 * - public/og.png (1200 × 630) pro sdílení na sociálních sítích,
 * - src/app/apple-icon.png (180 × 180) a src/app/favicon.ico (32 × 32).
 *
 * Spuštění: npm run og  (stáhne písmo Special Gothic z Google Fonts, potřebuje internet)
 * Po změně H1 nebo technických údajů v hero spusťte znovu a výsledek commitněte.
 */
import fs from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";

const root = process.cwd();

/** Vloží do PNG chunk tEXt „impeccable:prompt“ s původem obrázku (provenance, jen ASCII). */
function withProvenance(png, text) {
  const body = Buffer.concat([Buffer.from("tEXt", "latin1"), Buffer.from(`impeccable:prompt\0${text}`, "latin1")]);
  const chunk = Buffer.alloc(body.length + 8);
  chunk.writeUInt32BE(body.length - 4, 0);
  body.copy(chunk, 4);
  chunk.writeUInt32BE(zlib.crc32(body), body.length + 4);
  // Před koncový chunk IEND (posledních 12 bajtů).
  return Buffer.concat([png.subarray(0, png.length - 12), chunk, png.subarray(png.length - 12)]);
}

// Všechny znaky, které se v obrázku objeví; Google Fonts podle nich vrátí jeden soubor.
const CHARS = encodeURIComponent(
  [...new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,:–ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýž")].join(""),
);

/**
 * Stáhne statickou instanci Special Gothic v dané šířce a váze (jako font-stretch a font-weight na webu).
 * Starší user-agent dostane TTF místo WOFF2, které Satori neumí.
 */
async function gothic(stretch, weight) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=Special+Gothic:wdth,wght@${stretch},${weight}&text=${CHARS}`, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30" },
  }).then((response) => response.text());
  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Písmo Special Gothic ${stretch} ${weight} se nepodařilo najít`);
  return fetch(url).then((response) => response.arrayBuffer());
}

const [display, text, textBold] = await Promise.all([gothic(75, 700), gothic(100, 400), gothic(100, 700)]);

// Barvy z src/app/globals.css.
const c = { paper: "#ffffff", ink: "#1f3c9e", orange: "#ff5a14", overprint: "#1f150c" };

// Portrét v přetisku: modrý duotón (scripts/images.mjs) vynásobený oranžovou jako na webu.
const duo = await sharp(path.join(root, "public", "photos", "out", "me-duo-640.webp"))
  .resize(400, 500, { fit: "cover", position: "top" })
  .raw()
  .toBuffer({ resolveWithObject: true });
const orange = [0xff, 0x5a, 0x14];
const printed = Buffer.alloc(duo.info.width * duo.info.height * 3);
for (let i = 0; i < duo.info.width * duo.info.height; i++) {
  for (let ch = 0; ch < 3; ch++) printed[i * 3 + ch] = Math.round((duo.data[i * duo.info.channels + ch] * orange[ch]) / 255);
}
const photo = `data:image/png;base64,${(await sharp(printed, { raw: { width: duo.info.width, height: duo.info.height, channels: 3 } }).png().toBuffer()).toString("base64")}`;

/** Signet ze src/components/Signet.tsx. */
const signet = (size) =>
  h(
    "div",
    { style: { display: "flex", position: "relative", width: size, height: size } },
    h("div", { style: { position: "absolute", left: 0, top: size / 3, width: (size * 2) / 3, height: (size * 2) / 3, backgroundColor: c.orange } }),
    h("div", { style: { position: "absolute", left: size / 3, top: 0, width: (size * 2) / 3, height: (size * 2) / 3, backgroundColor: c.ink } }),
    h("div", { style: { position: "absolute", left: size / 3, top: size / 3, width: size / 3, height: size / 3, backgroundColor: c.overprint } }),
  );

const og = h(
  "div",
  { style: { width: "100%", height: "100%", display: "flex", position: "relative", backgroundColor: c.paper, fontFamily: "Text", color: c.ink } },
  // Oranžová deska s portrétem na spadávku vpravo.
  h(
    "div",
    { style: { position: "absolute", right: 0, top: 0, width: 440, height: 630, display: "flex", backgroundColor: c.orange, padding: "36px 36px 0" } },
    h("img", { src: photo, width: 368, height: 460, style: { objectFit: "cover" } }),
  ),
  h(
    "div",
    { style: { display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 64px", width: "100%" } },
    h("div", { style: { display: "flex", alignItems: "center", gap: 14, fontFamily: "Display", fontSize: 40 } }, signet(40), "Štěpán Synek"),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", fontFamily: "Display", fontSize: 104, lineHeight: 0.88, letterSpacing: "-0.01em" } },
      h("div", null, "Weby pro firmy,"),
      h("div", null, "které vyrábějí,"),
      h("div", null, "montují a servisují"),
    ),
    h(
      "div",
      { style: { display: "flex", width: 560, justifyContent: "space-between", borderTop: `2px solid ${c.ink}`, paddingTop: 16, fontSize: 28 } },
      h("div", null, "Web na klíč"),
      h("div", { style: { fontFamily: "TextBold" } }, "od 15 000 Kč"),
    ),
  ),
);

const fonts = [
  { name: "Display", data: display, weight: 700, style: "normal" },
  { name: "Text", data: text, weight: 400, style: "normal" },
  { name: "TextBold", data: textBold, weight: 700, style: "normal" },
];

const ogPng = Buffer.from(await new ImageResponse(og, { width: 1200, height: 630, fonts }).arrayBuffer());
await fs.writeFile(
  path.join(root, "public", "og.png"),
  withProvenance(
    await sharp(ogPng).png({ compressionLevel: 9 }).toBuffer(),
    "Generated by scripts/og.mjs: Satori layout set in Special Gothic, duotone portrait (public/photos/me.jpg via scripts/images.mjs) multiplied with #ff5a14, headline and price from src/content/texts.ts. No image model.",
  ),
);

// Ikony: signet na bílé (stejně jako src/app/icon.svg).
const iconSvg = (size) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32"><rect width="32" height="32" fill="${c.paper}"/><rect x="3" y="11" width="18" height="18" fill="${c.orange}"/><rect x="11" y="3" width="18" height="18" fill="${c.ink}"/><rect x="11" y="11" width="10" height="10" fill="${c.overprint}"/></svg>`,
  );
await fs.writeFile(
  path.join(root, "src", "app", "apple-icon.png"),
  withProvenance(await sharp(iconSvg(180)).png().toBuffer(), "Generated by scripts/og.mjs from the signet SVG (two overprinted squares, src/components/Signet.tsx). No image model."),
);

// favicon.ico = hlavička ICO + jeden obrázek 32 × 32 uložený jako PNG.
const png32 = await sharp(iconSvg(32)).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // rezervováno
header.writeUInt16LE(1, 2); // typ: ikona
header.writeUInt16LE(1, 4); // počet obrázků
header.writeUInt8(32, 6); // šířka
header.writeUInt8(32, 7); // výška
header.writeUInt16LE(1, 10); // barevné roviny
header.writeUInt16LE(32, 12); // bitů na pixel
header.writeUInt32LE(png32.length, 14); // velikost dat
header.writeUInt32LE(22, 18); // posun dat
await fs.writeFile(path.join(root, "src", "app", "favicon.ico"), Buffer.concat([header, png32]));

console.log("og: public/og.png, src/app/apple-icon.png, src/app/favicon.ico");
