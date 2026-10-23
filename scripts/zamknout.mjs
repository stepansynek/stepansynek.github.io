/**
 * Zamkne hotový build heslem: každé HTML v out/ zašifruje StatiCryptem, takže web uvidí jen ten,
 * kdo zná heslo. Místo stránky se ukáže scripts/heslo.html.
 *
 * Spouští se v GitHub Actions po buildu, heslo bere z tajemství repozitáře SITE_PASSWORD.
 * Ručně: npm run build && SITE_PASSWORD="…" npm run lock && npm start
 *
 * Next.js ukládá texty stránek i do souborů .txt (data pro navigaci bez načtení stránky).
 * Ty by obsah prozradily, proto se mažou. Odkazy pak načtou celou stránku a ta se odemkne sama
 * z uloženého hesla. Veřejné zůstávají fotky, CSS a JS (v JS jsou jen popisky formuláře).
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "out");
const password = process.env.SITE_PASSWORD;

function fail(message) {
  console.error(`Zamčení selhalo: ${message}`);
  process.exit(1);
}

if (!password) fail("chybí SITE_PASSWORD, web by šel ven nezamčený.");
if (!fs.existsSync(path.join(out, "index.html"))) fail("chybí out/index.html, nejdřív npm run build.");

const listOut = () => fs.readdirSync(out, { recursive: true }).map((file) => path.join(out, file));
const isFlightData = (file) => /^(index|__next\..*)\.txt$/.test(path.basename(file));

// 1. Data pro navigaci (index.txt, __next.*.txt) obsahují celé texty stránek.
for (const file of listOut()) if (isFlightData(file)) fs.rmSync(file);

// 2. Stránka s heslem si půjčí styly a písmo webu.
const index = fs.readFileSync(path.join(out, "index.html"), "utf8");
const htmlClass = index.match(/<html[^>]*\sclass="([^"]*)"/)?.[1] ?? "";
const links = (index.match(/<link [^>]*>/g) ?? []).filter((tag) => tag.includes('rel="stylesheet"') || tag.includes('as="font"'));
if (!links.some((tag) => tag.includes('rel="stylesheet"'))) fail("v out/index.html chybí odkaz na CSS.");

const template = fs
  .readFileSync(path.join(root, "scripts", "heslo.html"), "utf8")
  .replace("<!-- styly webu -->", links.join("\n    "))
  .replace("__HTML_CLASS__", htmlClass);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "heslo-"));
const templatePath = path.join(tmp, "heslo.html");
fs.writeFileSync(templatePath, template);

// 3. Šifrování přímo v out/. Pevná sůl v .staticrypt.json drží „Zapamatovat“ platné i po dalším nasazení.
const staticrypt = path.join(root, "node_modules", ".bin", "staticrypt");
const args = ["out", "-r", "-d", ".", "--short", "--remember", "30", "-c", ".staticrypt.json", "-t", templatePath];
args.push("--template-error", "Heslo nesouhlasí. Zkuste to znovu.");
execFileSync(staticrypt, args, {
  cwd: root,
  env: { ...process.env, STATICRYPT_PASSWORD: password },
  stdio: ["ignore", "ignore", "inherit"],
});
fs.rmSync(tmp, { recursive: true, force: true });

// 4. Kontrola: žádná stránka nesmí zůstat čitelná.
const pages = listOut().filter((file) => file.endsWith(".html"));
const readable = pages.filter((file) => {
  const html = fs.readFileSync(file, "utf8");
  return !html.includes("staticrypt") || html.includes("self.__next_f");
});
const leftovers = listOut().filter(isFlightData);
if (readable.length || leftovers.length) {
  fail(`čitelné zůstalo:\n- ${[...readable, ...leftovers].map((file) => path.relative(root, file)).join("\n- ")}`);
}
console.log(`Zamčeno heslem: ${pages.length} stránek.`);
