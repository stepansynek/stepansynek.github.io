/**
 * Jednorázově vygeneruje statické obrázky a uloží je do repozitáře:
 * - public/og.png (1200 × 630) pro sdílení na sociálních sítích,
 * - src/app/apple-icon.png (180 × 180) a src/app/favicon.ico (32 × 32).
 *
 * Spuštění: npm run og  (stáhne písma Inter a JetBrains Mono z Google Fonts, potřebuje internet)
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

/** Stáhne písmo z Google Fonts (starší user-agent dostane WOFF místo WOFF2, které Satori neumí). */
async function font(family, weight) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${CHARS}`, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.30 (KHTML, like Gecko) Safari/534.30" },
  }).then((response) => response.text());
  const url = css.match(/src: url\((.+?)\)/)?.[1];
  if (!url) throw new Error(`Písmo ${family} se nepodařilo najít`);
  return fetch(url).then((response) => response.arrayBuffer());
}

const [inter600, inter400, mono] = await Promise.all([
  font("Inter", 600),
  font("Inter", 400),
  font("JetBrains+Mono", 400),
]);

const c = { bg: "#F6F4EF", text: "#111317", muted: "#6C7077", line: "#D9D6CE", strong: "#8A9099", accent: "#FFC700" };
const monoStyle = { fontFamily: "Mono", fontSize: 20, letterSpacing: "0.06em", textTransform: "uppercase" };

const stampRows = [
  ["Název výkresu", "stepansynek.com"],
  ["Kreslil", "Štěpán Synek"],
  ["Měřítko", "1:1"],
];

const og = h(
  "div",
  {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: c.bg,
      color: c.text,
      padding: "64px 72px",
      fontFamily: "Inter",
    },
  },
  h(
    "div",
    { style: { display: "flex", flexDirection: "column" } },
    h("div", { style: { ...monoStyle, color: c.muted } }, "Štěpán Synek · Brno · Vyškov · Rousínov"),
    h(
      "div",
      { style: { marginTop: 28, fontSize: 64, fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 900 } },
      "Weby a marketing pro firmy, které vyrábějí, montují a servisují.",
    ),
  ),
  h(
    "div",
    { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderTop: `1px solid ${c.line}`, paddingTop: 28 } },
    h("div", { style: { fontFamily: "Mono", fontSize: 26 } }, "Weby od 15 000 Kč · pevná cena předem"),
    h(
      "div",
      { style: { display: "flex", flexDirection: "column", border: `1px solid ${c.strong}`, fontFamily: "Mono", fontSize: 16 } },
      ...stampRows.map(([label, value], index) =>
        h(
          "div",
          { key: label, style: { display: "flex", borderTop: index ? `1px solid ${c.line}` : "none" } },
          h(
            "div",
            { style: { width: 170, padding: "6px 12px", color: c.muted, letterSpacing: "0.06em", textTransform: "uppercase", borderRight: `1px solid ${c.line}` } },
            label,
          ),
          h("div", { style: { width: 190, padding: "6px 12px" } }, value),
        ),
      ),
    ),
  ),
);

const fonts = [
  { name: "Inter", data: inter600, weight: 600, style: "normal" },
  { name: "Inter", data: inter400, weight: 400, style: "normal" },
  { name: "Mono", data: mono, weight: 400, style: "normal" },
];

const ogPng = Buffer.from(await new ImageResponse(og, { width: 1200, height: 630, fonts }).arrayBuffer());
await fs.writeFile(path.join(root, "public", "og.png"), await sharp(ogPng).png({ compressionLevel: 9 }).toBuffer());

// Ikony: tmavý čtverec se žlutým bodem (stejně jako src/app/icon.svg).
const iconSvg = (size) =>
  Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32"><rect width="32" height="32" fill="${c.text}"/><circle cx="16" cy="16" r="5" fill="${c.accent}"/></svg>`,
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
