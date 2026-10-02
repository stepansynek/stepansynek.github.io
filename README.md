# stepansynek.com

Osobní prezentační web Štěpána Synka: marketing a weby pro průmyslové firmy.

Next.js (App Router, statický export) · TypeScript · Tailwind CSS · GitHub Pages.

## Lokální spuštění

Potřebujete Node.js 20.9 nebo novější (doporučeně 22).

```bash
npm install
npm run dev        # vývojový server na http://localhost:3000
```

Další příkazy:

```bash
npm run typecheck  # kontrola typů
npm run build      # statický export do složky out/
npm start          # náhled hotového buildu z out/ (stáhne balíček serve)
```

## Nasazení

Web se nasazuje automaticky přes GitHub Actions (`.github/workflows/deploy.yml`) při každém pushi do větve `main`:
instalace, kontrola typů, build, zkopírování `CNAME` do výstupu a nasazení na GitHub Pages.
Pull requesty se jen sestaví, nenasazují se.

**Jednorázové nastavení (nutné před prvním nasazením):**

1. V repozitáři otevřete **Settings → Pages**.
2. V části **Build and deployment → Source** zvolte **GitHub Actions** (místo „Deploy from a branch“).
3. V poli **Custom domain** ověřte, že je vyplněno `stepansynek.com`, a zapněte **Enforce HTTPS**.

Soubor `CNAME` v kořeni repozitáře zůstává a workflow ho kopíruje do buildu. `basePath` se nepoužívá, web běží
přímo na vlastní doméně.

## Kde co upravit

| Co | Kde |
| --- | --- |
| E-mail, telefon, IČO, sídlo, LinkedIn | `src/config/site.ts` |
| ID formuláře Formspree | `src/config/site.ts` → `FORMSPREE_ID` |
| Statistiky Plausible | `src/config/site.ts` → `PLAUSIBLE.enabled` |
| Texty sekcí | `src/components/sections/*.tsx` |
| Reference (případové studie) | `src/content/references.ts` |
| Zásady ochrany osobních údajů | `src/app/zasady-ochrany-osobnich-udaju/page.tsx` |
| Barvy, písmo, animace | `src/app/globals.css`, `src/app/layout.tsx` |

Dokud je údaj v hranatých závorkách (např. `[EMAIL]`), zobrazuje se na webu jako prostý text, ne jako odkaz,
a nepropisuje se do strukturovaných dat pro vyhledávače. Po doplnění se z něj automaticky stane odkaz
a objeví se i v JSON-LD.

### Fotka

Uložte fotku jako `public/me.jpg` (ideálně na výšku, poměr 4 : 5). Při dalším buildu se automaticky zobrazí
v sekci O mně místo placeholderu.

### Formspree

1. Na [formspree.io](https://formspree.io) vytvořte formulář s cílovým e-mailem.
2. ID z adresy formuláře (`https://formspree.io/f/ABCD1234` → `ABCD1234`) vložte do `FORMSPREE_ID`.
3. Ve Formspree můžete omezit odesílání jen z domény `stepansynek.com`.

### Plausible

1. Na [plausible.io](https://plausible.io) přidejte web `stepansynek.com`.
2. V `src/config/site.ts` nastavte `PLAUSIBLE.enabled` na `true`. Pokud Plausible nabídne vlastní adresu
   skriptu, vložte ji do `PLAUSIBLE.src`.
3. Do zásad ochrany osobních údajů se pak automaticky přidá odstavec o statistikách.

### Reference

Do pole `references` v `src/content/references.ts` přidejte položku (firma, co potřebovala, co vzniklo,
volitelně citace a odkaz). Dokud je pole prázdné, web ukazuje „První případová studie se připravuje.“

## Struktura

```
src/
  app/            stránky, layout, metadata, sitemap, robots, ikony
  components/     hlavička, patička, formulář, sdílené prvky (uzel, linky)
    sections/     jednotlivé sekce úvodní stránky
  config/site.ts  osobní údaje a nastavení na jednom místě
  content/        reference
public/           og-image.png (náhled pro sdílení), sem patří me.jpg
```
