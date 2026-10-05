/**
 * Zakóduje telefon pro TELEFON v src/content/config.ts (viz src/lib/phone.ts).
 * Spuštění: npm run telefon -- "+420 777 123 456"
 */
const phone = process.argv.slice(2).join(" ").trim();
if (!phone) {
  console.error('Zadejte číslo: npm run telefon -- "+420 777 123 456"');
  process.exit(1);
}
console.log(Buffer.from([...phone].reverse().join("")).toString("base64"));
