# stepansynek.com

Osobní web Štěpána Synka: weby a marketing pro technické firmy.
Next.js (App Router, statický export) · TypeScript · Tailwind CSS · GitHub Pages.

> **Zásady ochrany osobních údajů** (`src/content/texts.ts` → `privacy`) jsou návrh.
> Před spuštěním je Štěpán musí zkontrolovat, hlavně dobu uchování, předání údajů do USA
> a jestli doplnit poskytovatele e-mailové schránky.

## Lokální spuštění

Node.js 20.9 nebo novější (doporučeně 22).

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # statický export do out/
npm start            # náhled buildu z out/
npm run typecheck    # kontrola typů
npm run check:launch # brána před spuštěním (viz níže)
```

## Kde co upravit

Všechno je v `src/content/`:

| Soubor | Co v něm je |
| --- | --- |
| `config.ts` | telefon, e-mail, IČO, sídlo, ceny, Cal.com, Formspree, LinkedIn… |
| `texts.ts` | texty sekcí, formuláře, patičky, 404 a zásad ochrany osobních údajů |
| `services.ts` | tři karty služeb |
| `projects.ts` | projekty v sekci Práce |
| `faq.ts` | otázky a odpovědi |

Hodnota v hranatých závorkách (`"[TELEFON]"`) je placeholder: na webu se ukáže tak, jak je, bez odkazu.
V textech se `[KLÍČ]` automaticky nahradí hodnotou z `config.ts`. Nezlomitelné mezery doplňuje `cs()`
v `src/lib/typography.ts`, do textů je psát nemusíte.

Bez `CAL_LINK` vedou tlačítka „Domluvit konzultaci“ na `#kontakt`.

## Projekty a souhlas

V `src/content/projects.ts` přidejte položku do pole `projects`:

- `status: 'inProgress'` – karta „Právě pracuji na…“. Bez souhlasu se ukáže `anonymous`, se souhlasem `client`.
- `status: 'published'` – karta s fotkami, rozsahem, rokem a citací. Zobrazí se **jen** při `consent: true`.
- `status: 'placeholder'` – jen ve vývoji (`npm run dev`), v produkci se nezobrazí.

Po písemném souhlasu klienta přepněte `consent: false` na `true`.
Když není co ukázat, sekce Práce i položka v menu zmizí a čísla sekcí se přečíslují.

## Fotky

1. Uložte fotku do `public/photos/` (JPG nebo PNG), např. `public/photos/me.jpg` pro portrét (poměr 4 : 5).
2. `npm run images` (spouští se i automaticky před `dev` a `build`) vytvoří WebP v šířkách 640 a 1280 px
   do `public/photos/out/` (ve gitu se neukládají, generují se při každém buildu).
3. Fotky projektů zadejte v `projects.ts` jménem souboru bez přípony: `images: [{ src: 'engas-dilna', alt: '…' }]`.

Obrázek pro sdílení `public/og.png` a ikony se generují jednou příkazem `npm run og` (potřebuje internet,
stáhne písma). Po změně H1 nebo cenového řádku ho spusťte znovu a výsledek commitněte.

## Nasazení

GitHub Actions (`.github/workflows/deploy.yml`) při pushi do `main`: instalace, kontrola typů,
**brána před spuštěním**, build a nasazení na GitHub Pages. Pull requesty se jen sestaví.

Brána (`scripts/check-launch.mjs`) zastaví nasazení, dokud v `config.ts` nejsou vyplněné `ICO`, `SIDLO`,
`TELEFON`, `EMAIL` (na @stepansynek.com), `CASY_TELEFON`, `ROZSAH_ZAKLAD`, `CENA_PECE`, `DPH_VETA`
a dokud chybí `public/photos/me.jpg`. Schválení textů hlídá Štěpán sám.

Jednorázově: **Settings → Pages → Source: GitHub Actions**, Custom domain `stepansynek.com`, Enforce HTTPS.
Soubor `CNAME` je v `public/` a do buildu se zkopíruje sám.
