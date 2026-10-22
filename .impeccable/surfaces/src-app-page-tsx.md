---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/layout.tsx","src/app/globals.css"]
---

Scope: úvodní stránka stepansynek.com (src/app/page.tsx) a sdílené části (hlavička, patička, 404, zásady). Režim: Persuade.

Publikum a úkol: majitel nebo vedoucí technické firmy z Brna a okolí se rozhoduje, jestli si domluví konzultaci. Musí do pár vteřin pochopit co, pro koho a za kolik, uvidět hotovou práci (dvě ukázky smyšlených firem, jasně označené) a napsat nebo zavolat.

Nevyřešené: Formspree a Cal.com nejsou vyplněné (formulář se v produkci skryje), LinkedIn, IČO a sídlo chybí. ENGAS se zatím neukazuje.

## Direction contract

THESIS: Web je dvoubarevný exportní prospekt jedné služby. Odmítá šablonu freelancera: skleněnou hlavičku, štítky nad nadpisy, stejné karty a počítadla.

OWN-WORLD: Bílý křídový papír #ffffff. Klíčová barva ultramarín #1f3c9e nese text, linky a duotónové fotky. Druhá barva oranžová #ff5a14 jen jako ploché desky a rastry. V přetisku (multiply) vzniká skoro černá třetí barva. Jen Special Gothic: titulky 700 na 75 % šířky, text 400–500 na 100 %. Pravé úhly, linky 1,5 px, tabulky Technické údaje, žádné stíny. Plné barvy jen pro skutečnou práci (snímky ukázek jako barevná příloha).

STORY: Obálka řekne kdo, co a za kolik. Nabídka se čte jako ceník. Následují dvě živé ukázky, postup, o mně a otázky. Na modré zadní straně návštěvník napíše nebo zavolá.

FIRST VIEWPORT: Nahoře značka a menu. Vpravo oranžová deska na spadávku (asi 42 % šířky) a na ní modrý duotónový portrét v přetisku. Obří zúžený titulek vlevo přetéká přes desku a v přetisku tmavne. Vlevo dole modré tlačítko Domluvit konzultaci zdarma a e-mail. Přes spodní okraj desky bílá tabulka Technické údaje: cena, lhůta nabídky, konzultace, kapacita.

FORM: Exportní prospekt, pozice 3 z mého seřazeného seznamu sedmi, seed:624a5cad3be7afd1. Charakteristická interakce: snímek ukázky v plné délce projíždí rámem podle scrollu a tlačítko Spustit živou ukázku ho vymění za skutečný web v iframe s přepínačem počítač a telefon. Pohyb: jediný moment při načtení, nejdřív se vytiskne oranžová deska (clip-path shora), pak dosedne modrá do soutisku (posun 6 px na 0). Jinak jen pohyb vyvolaný uživatelem.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
