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
SITE_PASSWORD="…" npm run lock  # zamkne hotový out/ heslem (viz Neveřejný web)
```

## Kde co upravit

Všechno je v `src/content/`:

| Soubor | Co v něm je |
| --- | --- |
| `config.ts` | telefon, e-mail, IČO, sídlo, ceny, Cal.com, Formspree, LinkedIn… |
| `texts.ts` | texty sekcí, formuláře, patičky, 404 a zásad ochrany osobních údajů |
| `services.ts` | tři karty služeb |
| `projects.ts` | skutečné zakázky v sekci Práce (jen se souhlasem klienta) |
| `demos.ts` | ukázkové weby SETINA a HRANOL v sekci Ukázky |
| `faq.ts` | otázky a odpovědi |

Hodnota v hranatých závorkách (`"[TELEFON]"`) je placeholder. Při `npm run dev` se ukáže tak, jak je
(bez odkazu), ať je vidět, co chybí. V produkčním buildu se skryje: telefon, e-mail, LinkedIn, IČO a sídlo
zmizí, formulář bez `FORMSPREE_ID` se nezobrazí a chybějící portrét nahradí panel s iniciálami.

V textech se `[KLÍČ]` automaticky nahradí hodnotou z `config.ts`. Část textu, která bez údaje nedává smysl,
dejte do složených závorek: `{Obsahuje: [ROZSAH_ZAKLAD]}` se v produkci bez údaje vynechá,
`{Od roku [ROK_OD] dělám|Dělám} B2B marketing` použije text za svislítkem. `[KLÍČ]` mimo závorky
by se v produkci ukázal i s hranatými závorkami. Nezlomitelné mezery doplňuje `cs()`
v `src/lib/typography.ts`, do textů je psát nemusíte.

**Telefon** je v `config.ts` zakódovaný, protože repozitář je veřejný. Nové číslo zakódujete příkazem
`npm run telefon -- "+420 777 123 456"` a výstup vložíte do `TELEFON`. Na webu se číslo ukáže až po kliknutí
na „zobrazit“ (`src/components/PhoneReveal.tsx`). V HTML ani ve strukturovaných datech v čitelné podobě není.

Bez `CAL_LINK` vedou tlačítka „Domluvit konzultaci“ na `#kontakt` a tlačítko přímo v sekci Kontakt se skryje.
Hlavní akcí v sekci Kontakt je pak „Napsat e-mail“ s předvyplněným předmětem a osnovou zprávy (`contact.emailBody`).
Bez formuláře (`FORMSPREE_ID`) stojí vedle kontaktů panel „Co bude následovat“ (`contact.next`).
Formspree a Cal.com se v zásadách ochrany osobních údajů uvádějí, jen když jsou v `config.ts` vyplněné.

## Projekty a souhlas

V `src/content/projects.ts` přidejte položku do pole `projects`:

- `status: 'inProgress'` – karta „Právě pracuji na…“. Bez souhlasu se ukáže `anonymous`, se souhlasem `client`.
- `status: 'published'` – karta s fotkami, rozsahem, rokem a citací. Zobrazí se **jen** při `consent: true`.
- `status: 'placeholder'` – jen ve vývoji (`npm run dev`), v produkci se nezobrazí.

Po písemném souhlasu klienta přepněte `consent: false` na `true`.
Když není co ukázat, sekce Práce i položka v menu zmizí a čísla sekcí se přečíslují.

## Vzhled

Web je dvoubarevný „exportní prospekt“: bílý papír, modrá `#1f3c9e` (text, linky, fotky) a oranžová `#ff5a14`
(jen plné desky a rastry). Kde modrá leží přes oranžovou (`mix-blend-mode: multiply`), vznikne skoro černý přetisk.
Písmo je jen Special Gothic (`next/font/google`, stahuje se při buildu a běží z vlastní domény): titulky tučně
na 75 % šířky, text v plné šířce. Tokeny jsou nahoře v `src/app/globals.css`, podrobně v `DESIGN.md`.

Jediný pohyb bez akce návštěvníka je tisk obálky při načtení (oranžová deska, pak modrá do soutisku)
a snímky ukázek, které při scrollu projedou rámem. Obojí se vypne při `prefers-reduced-motion`.

## Fotky

1. Uložte fotku do `public/photos/` (JPG nebo PNG), např. `public/photos/me.jpg` pro portrét (poměr 4 : 5).
2. `npm run images` (spouští se i automaticky před `dev` a `build`) vytvoří WebP v šířkách 640 a 1280 px
   do `public/photos/out/` (ve gitu se neukládají, generují se při každém buildu). Portrét dostane navíc
   duotón `me-duo` (jen modrá barva na bílém), který v úvodu leží v přetisku na oranžové desce.
3. Fotky projektů zadejte v `projects.ts` jménem souboru bez přípony: `images: [{ src: 'engas-dilna', alt: '…' }]`.

**Snímky ukázek** (`public/photos/ukazka-*.jpg`) jsou screenshoty celé úvodní stránky: počítač 1440 px
a telefon 390 px (2×). Po změně ukázkového webu je nafoťte znovu ve stejných názvech. Tlačítko
„Spustit živou ukázku“ načte skutečný web v iframe až po kliknutí.

Obrázek pro sdílení `public/og.png` a ikony se generují jednou příkazem `npm run og` (potřebuje internet,
stáhne písmo Special Gothic, a nejdřív `npm run images` kvůli duotónu). Po změně H1 nebo technických údajů
ho spusťte znovu a výsledek commitněte.

## Nasazení

GitHub Actions (`.github/workflows/deploy.yml`) při pushi do `main`: instalace, kontrola typů,
**brána před spuštěním**, build, **zamčení heslem** a nasazení na GitHub Pages. Pull requesty se jen sestaví.

Brána (`scripts/check-launch.mjs`) zastaví nasazení, dokud v `config.ts` nejsou vyplněné `ICO`, `SIDLO`,
`TELEFON`, `EMAIL` (na @stepansynek.com), `CASY_TELEFON`, `ROZSAH_ZAKLAD`, `CENA_PECE`, `DPH_VETA`
a dokud chybí `public/photos/me.jpg`. Schválení textů hlídá Štěpán sám.

Jednorázově: **Settings → Pages → Source: GitHub Actions**, Custom domain `stepansynek.com`, Enforce HTTPS.
Soubor `CNAME` je v `public/` a do buildu se zkopíruje sám.

## Neveřejný web

Web je zatím zamčený heslem. Po buildu `scripts/zamknout.mjs` zašifruje StatiCryptem každé HTML v `out/`
a místo stránky se ukáže `scripts/heslo.html` („Web je zatím neveřejný“). Kdo heslo zadá, uvidí web
normálně; se zaškrtnutým „Zapamatovat“ se mu web 30 dní odemyká sám. Stránka s heslem má `noindex`,
sitemap je dočasně pryč, takže web z vyhledávání vypadne. Soubory `.txt` s daty pro navigaci Next.js
skript maže, protože obsahují celé texty. Veřejně dostupné zůstávají fotky, CSS a JS (v JS jsou jen
popisky formuláře). A dokud je repozitář veřejný, jsou texty čitelné i v `src/content/`.

- **Heslo** je v tajemství repozitáře `SITE_PASSWORD` (Settings → Secrets and variables → Actions), ne v kódu.
  Změna: `gh secret set SITE_PASSWORD` a znovu spustit nasazení (`gh workflow run deploy.yml`).
- **Sůl** v `.staticrypt.json` je veřejná a musí zůstat stejná, jinak se uložená hesla po nasazení zneplatní.
- **Zveřejnění webu:** smazat krok „Zamčení heslem“ v `deploy.yml` a vrátit `src/app/sitemap.ts`
  (`git log --diff-filter=D -- src/app/sitemap.ts`) i odkaz na sitemap v `src/app/robots.ts`.

Ukázky na `stepansynek.com/<repo>/` (SETINA, HRANOL) jsou samostatné repozitáře a zámek se jich netýká.
