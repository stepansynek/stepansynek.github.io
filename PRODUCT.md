# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Majitelé a vedoucí malých a středních technických firem (výroba, obrábění, montáže, servis, elektro) z Brna, Vyškova, Rousínova a okolí. Mají zastaralý nebo žádný web, z webu jim nechodí poptávky a nemají čas koordinovat grafika, copywritera a fotografa. Na stránku přicházejí z doporučení, z LinkedInu nebo z vyhledávání a rozhodují se, jestli si domluvit 20minutovou konzultaci.

## Product Purpose

Osobní web Štěpána Synka, který prodává jeho služby: web na klíč, péči o web a na přání fotky, video a newsletter. Úspěch: návštěvník do pár vteřin pochopí, co Štěpán dělá a pro koho, uvidí hotovou práci a ozve se (e-mail, telefon, později formulář nebo Cal.com).

## Positioning

Jeden člověk, který rozumí technickým firmám (dělá marketing pro firmu z průmyslové automatizace, studuje automatizaci na VUT FEKT a ekonomii na MUNI ECON), napíše texty sám po jednom rozhovoru, fotky a video pořídí přímo v provozu a dá pevnou cenu do dvou pracovních dnů. Bere nejvýš dva nové projekty za půl roku.

## Operating Context

Nabídka a ceny (src/content/config.ts, services.ts): web na klíč od 15 000 Kč (jednostránkový web do 6 sekcí, texty po rozhovoru, poptávkový formulář, základní SEO a 2 kola připomínek); péče o web od 1 500 Kč měsíčně (hosting, zálohy, do 1 hodiny úprav měsíčně, práce navíc 500 Kč za hodinu), volitelná. Postup: konzultace 20 minut zdarma, nabídka do 2 pracovních dnů, realizace, volitelná péče. Odpověď do 24 hodin v pracovní dny.

## Capabilities and Constraints

- Next.js 16 (App Router, statický export) + Tailwind 4 + TypeScript, nasazení přes GitHub Actions na GitHub Pages, vlastní doména stepansynek.com. Repozitář je veřejný.
- Placeholdery `[KLÍČ]` v config.ts: ve vývoji viditelné, v produkci se skryjí (fill(), isShown()). Telefon je v repu zakódovaný a ukáže se až po kliknutí (PhoneReveal).
- Formulář (Formspree) a Cal.com zatím nejsou vyplněné; v produkci se proto formulář skryje a hlavní akcí je e-mail.
- Web nepoužívá cookies ani analytiku.
- Čeština; anglická verze jen na přání klientů, web sám je česky.

## Brand Commitments

- Jméno Štěpán Synek, doména stepansynek.com, e-mail contact@stepansynek.com.
- Vizuální identita je otevřená: uživatel 2026-10-22 schválil úplně nový vizuální svět (žlutá + Archivo se nemusí zachovat).
- Uživatel odmítá „AI slop“: eyebrow štítky, kapitálky, šipky v odkazech, dekorativní pohyb bez významu. Dynamické prvky ano, ale každý musí nést význam.

## Evidence on Hand

- Portrét: public/photos/me.jpg (4:5).
- Dvě ukázkové weby smyšlených firem, které Štěpán navrhl, napsal a nakódoval: SETINA přesné obrábění (https://stepansynek.com/setina-web/, zdroj ~/setina-web) a HRANOL (https://stepansynek.com/ukazka-hranol/, zdroj ~/Documents/GitHub/ukazka-hranol). Na webu musí být vždy jasně označené jako ukázky smyšlených firem, nikdy jako klienti nebo reference.
- ENGAS (skutečný klient) se zatím neukazuje.
- Žádné reference, citace klientů ani čísla výsledků zatím nejsou. Nevymýšlet.

## Product Principles

1. Ukázat, ne tvrdit: hotová práce a konkrétní fakta místo slibů.
2. Pravdivost: ukázky jsou ukázky, chybějící údaje se v produkci skryjí, žádné vymyšlené reference.
3. Mluvit řečí technických firem: konkrétně, věcně, bez marketingového nadšení.
4. Jedna jasná další akce: domluvit konzultaci nebo napsat e-mail.

## Accessibility & Inclusion

WCAG AA kontrast, ovladatelnost klávesnicí, respektovat prefers-reduced-motion, funkční obsah bez JavaScriptu.
