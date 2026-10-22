---
name: Štěpán Synek
description: Dvoubarevný exportní prospekt jedné služby, weby pro technické firmy
colors:
  paper: "#ffffff"
  ink: "#1f3c9e"
  ink-soft: "#576db6"
  ink-tint: "#e9ecf5"
  orange: "#ff5a14"
  orange-tint: "#ffe6da"
  overprint: "#1f150c"
typography:
  display:
    fontFamily: "Special Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 9.4vw, 9.25rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.012em"
    fontVariation: "'wdth' 75"
  headline:
    fontFamily: "Special Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.6vw, 5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 75"
  title:
    fontFamily: "Special Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 2.4vw, 2.125rem)"
    fontWeight: 700
    lineHeight: 1
    fontVariation: "'wdth' 75"
  body:
    fontFamily: "Special Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Special Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
  button:
    fontFamily: "Special Gothic, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.1
    fontVariation: "'wdth' 87"
rounded:
  none: "0px"
spacing:
  rule: "1.5px"
  gutter-mobile: "16px"
  gutter: "32px"
  section-mobile: "48px"
  section: "80px"
  header-height: "4.5rem"
  measure: "38rem"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-ink-hover:
    backgroundColor: "{colors.overprint}"
    textColor: "{colors.paper}"
  button-line:
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-line-hover:
    backgroundColor: "{colors.ink-tint}"
    textColor: "{colors.ink}"
  button-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.overprint}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  button-orange-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.overprint}"
  button-white-line:
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3.25rem"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.75rem 0.875rem"
  input-hover:
    backgroundColor: "{colors.ink-tint}"
  plate-orange:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.overprint}"
    rounded: "{rounded.none}"
    padding: "2.5rem"
  back-cover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "6rem 2rem"
---

# Design System: Štěpán Synek

## Overview

**Creative North Star: "Exportní prospekt"**

Web je tištěný prospekt jedné služby ve dvou tiskových barvách na bílém křídovém papíře. Ultramarín je klíčová barva: nese veškerý text, linky, ikony a duotónové fotky. Oranžová je druhá barva a existuje jen jako plochá deska nebo rastr, nikdy jako písmo. Kde se obě barvy potkají v přetisku (multiply), vzniká skoro černá třetí barva, která se nikde nemíchá zvlášť, jen se tiskne.

Sazba je technická a věcná jako katalog strojírny: zúžená groteska v titulcích, tabulky Technické údaje s linkou mezi řádky, nabídka sazená jako ceník, pravé úhly a linky 1,5 px. Hloubku nedělají stíny, ale soutisk a přetisk. Plné barvy patří jen skutečné práci: snímky ukázek jsou barevná příloha prospektu, všechno ostatní je ve dvou barvách.

Pohyb je tiskový. Při načtení se jednou vytiskne oranžová deska (clip-path shora) a modrá do ní dosedne do soutisku. Jinak se hýbe jen to, co spustí uživatel: snímek ukázky projíždí rámem podle scrollu, otázky se rozbalují, menu se odvíjí.

**Key Characteristics:**
- Dvě tiskové barvy na bílém papíře, třetí vzniká jen přetiskem.
- Jedno písmo, Special Gothic, ve dvou šířkách: 75 % titulky, 100 % text.
- Pravé úhly všude, linky 1,5 px v barvě textu.
- Tabulky Technické údaje a ceník místo karet a štítků.
- Žádné stíny; hloubka je soutisk desky a modré.
- Plnobarevné jsou jen snímky hotové práce.

## Colors

Dvoubarevný tisk: ultramarín na bílé, oranžová jako plochá deska, skoro černý přetisk tam, kde se překrývají.

### Primary
- **Ultramarín tiskové barvy** (ink): veškerý text, linky, ikony, číslice, obrys rámů a plná tlačítka; duotónové fotky jsou tištěné touto barvou. Modrá je i plocha zadní strany (kontakt), kde text přechází do bílé.
- **Rastr modré 75 %** (ink-soft): vedlejší text, poznámky pod tlačítky, popisky v úzkých tabulkách, patička. Na papíře 4,9 : 1, proto jen pro menší doprovodný text, nikdy pro hlavní obsah.
- **Rastr modré 10 %** (ink-tint): podklad rámu ukázky, hover obrysového tlačítka a polí, neaktivní volba přepínače, dráha scrollbaru.

### Secondary
- **Signální oranžová deska** (orange): jen ploché desky (portrét na obálce, „Web patří vám“, kapacita v O mně, signet) a drobné čtvercové rastry (body měst na mapě). Funkčně ještě jako stavová značka: focus ring, podtržení aktivní položky menu, okraj chybného pole, výběr textu, kurzor v poli.
- **Světlý rastr oranžové** (orange-tint): podklad chybových hlášek formuláře.

### Neutral
- **Bílý křídový papír** (paper): pozadí stránky, hlavičky, formuláře a bílého výseku tabulky přes desku.
- **Přetisk** (overprint): modrá přes oranžovou. Jediná barva textu na oranžové desce (5,7 : 1) a hover plného modrého tlačítka. Ve fotkách a titulku nevzniká jako barva, ale přes `mix-blend-mode: multiply`.

### Named Rules
**The Plate Not Ink Rule.** Oranžová je deska nebo rastr, nikdy barva písma, číslic ani ikon. Text na oranžové je buď přetisk, nebo modrá v režimu multiply.

**The Two Inks Rule.** Na ploše jsou jen dvě tiskové barvy a jejich rastry. Třetí tón se nemíchá, tiskne se přetiskem. Žádná další barva kromě plnobarevných snímků hotové práce.

**The Color Supplement Rule.** Plné barvy jsou vyhrazené skutečné práci: snímkům ukázek v rámu a živému iframe. Portrét a ostatní fotky jdou přes duotón (scripts/images.mjs).

## Typography

**Display Font:** Special Gothic, šířka 75 % (s ui-sans-serif, system-ui)
**Body Font:** Special Gothic, šířka 100 %
**Label/Mono Font:** stejná rodina; tlačítka a velké údaje na 87 %

**Character:** Jedna variabilní groteska ve třech šířkách, jako sazba prospektů šedesátých let: titulky zúžené a husté, text v plné šířce a klidný, údaje mezi tím.

### Hierarchy
- **Display** (700, 75 %, clamp(3.25rem, 9.4vw, 9.25rem), 0.86): jen titulek obálky; řádky se nelámou a přetékají přes desku, kde ztmavnou do přetisku.
- **Headline** (700, 75 %, clamp(2.5rem, 5.6vw, 5rem), 0.9): nadpisy sekcí, titulek na oranžových deskách, hlavní položka ceníku.
- **Title** (700, 75 %, clamp(1.625rem, 2.4vw, 2.125rem), 1): nadpisy řádků ceníku, kroků postupu, tabulek a formuláře.
- **Body** (400, 1.0625rem, 1.55): odstavce s max. šířkou 38rem; úvody sekcí o stupeň větší (1.125–1.25rem). Hlavní menu a odkazy 500.
- **Label** (400, 0.9375rem, 1.45): popisky, poznámky, popisky fotek, patička. Bez kapitálek a bez prostrkání.
- **Údaj** (700, 87 %): ceny, telefon, e-mail v kontaktu a tlačítka. Velké číslice kroků postupu a hlavní cena jdou na 75 %.

### Named Rules
**The Two Widths Rule.** Titulky jsou vždy 700 na 75 %, text vždy 400–500 na 100 %. Mezi nimi jen 87 % pro tlačítka a údaje.

**The No Kicker Rule.** Nad nadpisem nic není: žádné štítky, kapitálky ani prostrkané popisky. Sekci otevírá linka a nadpis.

## Layout

Sazební obrazec široký max. 1312 px s okraji 16 px na mobilu a 32 px od sm. Na lg dvanáct sloupců s mezerou 24 px; typická sekce dává nadpis do 7 sloupců a úvod do 5 vedle něj, pod nimi obsah. Sekce mají svislý rytmus 48 px (mobil) a 80 px, odsazení obsahu pod nadpisem 40 a 64 px. Hlavička je vysoká 4.5rem a lepí se nahoře; kotvy počítají s jejím odsazením.

Obálka: oranžová deska jde na spadávku vpravo (42vw) a končí 7.5rem nad spodkem, titulek vlevo přes ni přetéká a bílá tabulka Technické údaje je výsek přes spodní hranu desky. Pod lg je deska nahoře na plnou šířku a první řádek titulku ji přetiskne. Ukázky střídají snímek a technický list stran. Kontakt je modrá zadní strana na celou šířku.

**The Rule Opens Rule.** Každá sekce, řádek ceníku, krok postupu i otázka začínají linkou 1,5 px přes celou šířku sloupce v barvě textu. Linka je hrana stránky, ne dekorace.

## Elevation & Depth

Systém je plochý. Stíny nejsou; jediný `box-shadow` v buildu je ve skutečnosti linka (vnitřní obrys tlačítka a spodní linka hlavičky po odrolování). Hloubku dává tisk: oranžová deska pod modrou, multiply přetisk portrétu a titulku, bílý výsek tabulky přes desku a rám ukázky s linkou.

**The Registration Not Shadow Rule.** Vrstvy se vrství soutiskem a přetiskem, ne stínem ani rozmazáním. Žádné skleněné ani průsvitné hlavičky.

## Shapes

Pravé úhly bez výjimky (0 px), jako ořez archu. Hrany dělají linky 1,5 px v barvě textu (na modré bílá, místy se 40–75% krytím). Tvary jsou obdélníky a čtverce: deska, rám, signet ze dvou čtverců v soutisku, čtvercové body měst na mapě, čtvercové odrážky. Ikony jsou tenké lineární SVG v barvě textu (křížek otázek, který se otočí o 45°).

## Components

### Buttons
Hranaté a tiskové: plná barva, žádné stíny, po najetí se změní jen barva.
- **Shape:** pravé úhly (0 px), výška 3.25rem, na obálce a v kontaktu 3.5rem; v hlavičce a ovládání ukázky 2.75rem.
- **Primary (ink):** plná modrá s bílým textem 700 na 87 %; po najetí přetisk.
- **Line:** modrý text s vnitřní linkou 1,5 px; po najetí rastr 10 %.
- **Orange:** jen na modré zadní straně a v mobilním menu, text v přetisku; po najetí bílá.
- **White line:** na modré ploše, bílý text a bílá linka se 70% krytím; po najetí 12% bílá.
- **Focus:** oranžový obrys 3 px s odsazením 3 px.

### Inputs / Fields
- **Style:** bílý papír, linka 1,5 px v modré, pravé úhly, popisek tučně nad polem, nepovinné pole poznámkou v rastru 75 %.
- **Focus / Hover:** po najetí rastr 10 %, při focusu zpět papír a oranžový focus ring; kurzor oranžový.
- **Error:** okraj pole oranžový, pod ním hláška na světlém rastru oranžové v modré.

### Navigation
Bílá hlavička přes celou šířku se signetem a jménem (75 %). Položky 500 v plné šířce; po najetí modré podtržení 3 px, aktuální sekce oranžové podtržení. Po odrolování dostane spodní linku. Pod lg obrysové tlačítko Menu odvine panel (clip-path shora) s velkými odkazy na 75 % oddělenými linkou a modrým kontaktním blokem.

### Tabulka Technické údaje (signature)
Definiční seznam: řádky oddělené linkou 1,5 px v barvě textu, popisek vlevo, hodnota tučně vpravo. V úzkém sloupci se skládá popisek nad hodnotu. Používá se na obálce, v technických listech ukázek a v kontaktu místo karet a počítadel.

### Ceník
Řádek přes dvanáct sloupců: název (title, hlavní položka headline), popis s poznámkou v rastru, cena vpravo 700 na 87 % (hlavní 75 % velkým řezem). Řádky odděluje linka.

### Oranžová deska
Plná oranžová plocha bez rámu a stínu, text v přetisku: titulek headline a odstavec. Nese jedno sdělení (vlastnictví webu, kapacita) a případně tlačítko ink.

### Rám ukázky (DemoFrame)
Rám s linkou 1,5 px a podkladem rastru 10 %, poměr 16 : 9 (pod md 9 : 16). Plnobarevný snímek ukázky v něm projíždí podle scrollu; tlačítko Spustit živou ukázku ho vymění za iframe s přepínačem počítač a telefon (aktivní volba plná modrá, ostatní rastr).

### Otázky
Rozbalovací položky mezi linkami, otázka tučně 1.125–1.25rem, lineární křížek se při otevření otočí o 45°, obsah se rozbalí výškou.

## Do's and Don'ts

### Do:
- **Do** sázet veškerý text, číslice a ikony modrou (ink), na modré ploše bílou.
- **Do** psát na oranžovou desku jen přetiskem (overprint) nebo modrou přes `mix-blend-mode: multiply`.
- **Do** otevírat sekce a řádky linkou 1,5 px (rule) v barvě textu.
- **Do** dávat údaje do tabulky Technické údaje nebo ceníku.
- **Do** tisknout fotky lidí a provozu duotónem v modré; plné barvy nechat jen snímkům hotové práce.
- **Do** držet titulky 700 na 75 % a text na 100 %.
- **Do** omezit pohyb na tisk desky při načtení a na pohyb vyvolaný uživatelem, vše za `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** používat oranžovou jako barvu textu, číslic nebo ikon.
- **Don't** přidávat štítky, chipy, odznaky, eyebrow popisky ani kapitálky nad nadpisy.
- **Don't** používat stíny, zaoblené rohy, sklo ani rozmazání.
- **Don't** přidávat třetí barvu nebo gradient; tmavý tón vzniká jen přetiskem.
- **Don't** skládat obsah do stejných karet s ikonou nebo do počítadel.
- **Don't** dávat do odkazů šipky ani dekorativní pohyb bez významu.
