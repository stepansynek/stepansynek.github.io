/**
 * Brána před spuštěním (brief, sekce 2): selže, dokud nejsou vyplněné povinné údaje
 * v src/content/config.ts nebo chybí portrét public/photos/me.jpg.
 * Spouští se v GitHub Actions před nasazením z větve main. Ručně: npm run check:launch
 */
import fs from "node:fs";
import path from "node:path";

const REQUIRED = ["ICO", "SIDLO", "TELEFON", "EMAIL", "CASY_TELEFON", "ROZSAH_ZAKLAD", "CENA_PECE", "DPH_VETA"];

const source = fs.readFileSync(path.join(process.cwd(), "src", "content", "config.ts"), "utf8");
const problems = [];

for (const key of REQUIRED) {
  const value = source.match(new RegExp(`^\\s*${key}:\\s*"([^"]*)"`, "m"))?.[1];
  if (value === undefined || value.trim() === "" || /^\[.*\]$/.test(value.trim())) problems.push(`${key} není vyplněný`);
}

const email = source.match(/^\s*EMAIL:\s*"([^"]*)"/m)?.[1] ?? "";
if (email && !email.startsWith("[") && !email.endsWith("@stepansynek.com")) problems.push("EMAIL není na doméně stepansynek.com");

if (!fs.existsSync(path.join(process.cwd(), "public", "photos", "me.jpg"))) problems.push("chybí portrét public/photos/me.jpg");

if (problems.length) {
  console.error(`Brána před spuštěním neprošla:\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Brána před spuštěním: vše vyplněno.");
