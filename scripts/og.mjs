/**
 * Jednorázově vygeneruje statické obrázky a uloží je do repozitáře:
 * - public/og.png (1200 × 630) pro sdílení na sociálních sítích,
 * - src/app/apple-icon.png (180 × 180) a src/app/favicon.ico (32 × 32).
 *
 * Spuštění: npm run og  (stáhne písmo Archivo z Google Fonts, potřebuje internet)
 * Po změně H1 nebo cenového řádku spusťte znovu a výsledek commitněte.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { createElement as h } from "react";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";

const root = process.cwd();

// Všechny znaky, které se v obrázku objeví; Google Fonts podle nich vrátí jeden soubor.
const CHARS = encodeURIComponent(
  [...new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .,:·–ÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýž")].join(""),
);

/**
 * Stáhne statickou instanci Archiva v dané šířce a váze (jako font-stretch a font-weight na webu).
 * Starší user-agent dostane TTF místo WOFF2, které Satori neumí.
 */
async function archivo(stretch, weight) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@${stretch},${weight}&text=${CHARS}`, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30" },
  }).then((response) => response.text());
  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Písmo Archivo ${stretch} ${weight} se nepodařilo najít`);
  return fetch(url).then((response) => response.arrayBuffer());
}

const [display, text, textBold] = await Promise.all([archivo(118, 760), archivo(100, 400), archivo(108, 600)]);

// Barvy z src/app/globals.css.
const c = { bg: "#f5f6f8", text: "#0e1116", muted: "#525866", line: "rgba(14,17,22,0.09)", accent: "#ffc700", blue: "#2b59ff", violet: "#7b5cff" };
const grad = "linear-gradient(100deg, #2b59ff 0%, #6a3dff 55%, #b03ad8 100%)";

const og = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "64px 72px",
      fontFamily: "Text",
      color: c.text,
      backgroundColor: c.bg,
      // Aurora jako v hero: žlutá vlevo nahoře, modrá vpravo, fialová dole.
      backgroundImage: [
        "radial-gradient(circle at 0% 0%, rgba(255,199,0,0.55) 0%, rgba(255,199,0,0) 45%)",
        "radial-gradient(circle at 100% 20%, rgba(43,89,255,0.28) 0%, rgba(43,89,255,0) 45%)",
        "radial-gradient(circle at 60% 120%, rgba(123,92,255,0.25) 0%, rgba(123,92,255,0) 45%)",
      ].join(", "),
    },
  },
  h(
    "div",
    { style: { display: "flex", flexDirection: "column", alignItems: "flex-start" } },
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "8px 18px 8px 12px",
          borderRadius: 999,
          border: `1px solid ${c.line}`,
          backgroundColor: "rgba(255,255,255,0.7)",
          fontSize: 22,
        },
      },
      h("div", { style: { width: 12, height: 12, borderRadius: 999, backgroundImage: grad } }),
      "Weby pro technické firmy z Brna, Vyškova a Rousínova",
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          marginTop: 36,
          fontFamily: "Display",
          fontSize: 76,
          lineHeight: 1,
          letterSpacing: "-0.045em",
        },
      },
      h("div", null, "Weby a marketing pro firmy,"),
      h("div", null, "které vyrábějí, montují"),
      h("div", { style: { backgroundImage: grad, backgroundClip: "text", color: "transparent", paddingBottom: 8 } }, "a servisují."),
    ),
  ),
  h(
    "div",
    { style: { display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${c.line}`, paddingTop: 28 } },
    h("div", { style: { fontFamily: "TextBold", fontSize: 30 } }, "Weby od 15 000 Kč, pevná cena předem"),
    h(
      "div",
      { style: { display: "flex", alignItems: "center", gap: 14, fontFamily: "TextBold", fontSize: 28 } },
      h(
        "div",
        { style: { display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 9, backgroundColor: c.text } },
        h("div", { style: { width: 14, height: 14, borderRadius: 999, backgroundColor: c.accent } }),
      ),
      "Štěpán Synek",
    ),
  ),
);

const fonts = [
  { name: "Display", data: display, weight: 700, style: "normal" },
  { name: "Text", data: text, weight: 400, style: "normal" },
  { name: "TextBold", data: textBold, weight: 600, style: "normal" },
];

const ogPng = Buffer.from(await new ImageResponse(og, { width: 1200, height: 630, fonts }).arrayBuffer());
await fs.writeFile(path.join(root, "public", "og.png"), await sharp(ogPng).png({ compressionLevel: 9 }).toBuffer());

// Ikony: tmavý čtverec se žlutým bodem (stejně jako src/app/icon.svg).
const icon = { text: "#111317", accent: "#FFC700" };
const iconSvg = (size) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32"><rect width="32" height="32" fill="${icon.text}"/><circle cx="16" cy="16" r="5" fill="${icon.accent}"/></svg>`,
  );
await sharp(iconSvg(180)).png().toFile(path.join(root, "src", "app", "apple-icon.png"));

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
