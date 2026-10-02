import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactLink } from "@/components/ContactLink";
import { SectionDivider } from "@/components/SectionDivider";
import { PLAUSIBLE, PRIVACY_PATH, site } from "@/config/site";
import { cz } from "@/lib/typography";

export const metadata: Metadata = {
  title: "Zásady ochrany osobních údajů | Štěpán Synek",
  description: "Jak zpracovávám osobní údaje z kontaktního formuláře na webu stepansynek.com.",
  alternates: { canonical: PRIVACY_PATH },
};

const h2Class = "mt-12 text-xl font-semibold tracking-tight md:text-2xl";
const pClass = "mt-4 text-lg leading-relaxed text-muted";
const listClass = "mt-4 list-disc space-y-2 pl-6 text-lg leading-relaxed text-muted marker:text-graphite";

/*
 * ŠABLONA KE KONTROLE.
 * Text je obecný vzor pro kontaktní formulář, není to právní rada.
 * Před spuštěním zkontrolovat, doplnit údaje v [ZÁVORKÁCH] a odstranit upozornění nahoře.
 */
export default function PrivacyPolicy() {
  return (
    <main id="obsah" className="py-16 md:py-24">
      <Container>
        <article className="max-w-[70ch]">
          <p className="mb-10 rounded-[3px] border-[1.5px] border-dashed border-graphite p-4 font-medium">
            [KE KONTROLE] Tato stránka je šablona. Před spuštěním webu ji zkontroluji a doplním údaje v hranatých
            závorkách.
          </p>

          <SectionDivider className="mb-8" />
          <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance md:text-5xl">Zásady ochrany osobních údajů</h1>
          <p className={pClass}>
            {cz(
              "Na této stránce vysvětluji, jak nakládám s osobními údaji, které mi pošlete přes kontaktní formulář na webu stepansynek.com.",
            )}
          </p>

          <h2 className={h2Class}>Správce osobních údajů</h2>
          <p className={pClass}>
            {site.name}, IČO {site.ico}, se sídlem {site.seat}, fyzická osoba zapsaná v živnostenském rejstříku.
            <br />
            E-mail: <ContactLink type="email" value={site.email} />, telefon: <ContactLink type="phone" value={site.phone} />
          </p>

          <h2 className={h2Class}>Jaké údaje zpracovávám</h2>
          <p className={pClass}>{cz("Jen ty, které sami vyplníte v kontaktním formuláři:")}</p>
          <ul className={listClass}>
            <li>jméno,</li>
            <li>název firmy (nepovinné),</li>
            <li>e-mailovou adresu,</li>
            <li>{cz("obsah zprávy a údaje, které do ní uvedete.")}</li>
          </ul>

          <h2 className={h2Class}>Účel a právní základ</h2>
          <p className={pClass}>
            {cz(
              "Údaje používám jen k tomu, abych odpověděl na vaši zprávu a případně připravil nabídku. Právním základem je váš souhlas (čl. 6 odst. 1 písm. a) GDPR) a jednání o uzavření smlouvy na vaši žádost (čl. 6 odst. 1 písm. b) GDPR).",
            )}
          </p>

          <h2 className={h2Class}>Doba uchování</h2>
          <p className={pClass}>
            {cz(
              "Údaje uchovávám po dobu nezbytnou k vyřízení vaší zprávy, nejdéle [DOBA UCHOVÁNÍ]. Pokud spolu uzavřeme smlouvu, řídí se doba uchování smlouvou a zákonnými povinnostmi, například účetními předpisy.",
            )}
          </p>

          <h2 className={h2Class}>Kdo s údaji pracuje</h2>
          <p className={pClass}>{cz("Údaje neprodávám ani nepředávám dalším osobám. Používám tyto služby (zpracovatele):")}</p>
          <ul className={listClass}>
            <li>{cz("Formspree, Inc. (USA) – odeslání formuláře e-mailem. [OVĚŘIT: smlouva o zpracování a předání údajů do USA]")}</li>
            <li>{cz("GitHub, Inc. (USA) – hosting webu (GitHub Pages), může zpracovávat technické údaje jako IP adresu. [OVĚŘIT]")}</li>
            <li>{cz("[POSKYTOVATEL E-MAILU] – e-mailová schránka, do které zprávy chodí.")}</li>
          </ul>

          {PLAUSIBLE.enabled ? (
            <>
              <h2 className={h2Class}>Statistiky návštěvnosti</h2>
              <p className={pClass}>
                {cz(
                  "Návštěvnost měřím nástrojem Plausible Analytics (Plausible Insights OÜ, EU). Nepoužívá cookies a neukládá osobní údaje, výsledky vidím jen jako souhrnná čísla.",
                )}
              </p>
            </>
          ) : null}

          <h2 className={h2Class}>Cookies</h2>
          <p className={pClass}>{cz("Web nepoužívá cookies.")}</p>

          <h2 className={h2Class}>Vaše práva</h2>
          <p className={pClass}>{cz("Máte právo:")}</p>
          <ul className={listClass}>
            <li>{cz("na přístup ke svým údajům,")}</li>
            <li>{cz("na opravu nepřesných údajů,")}</li>
            <li>{cz("na výmaz („právo být zapomenut“),")}</li>
            <li>{cz("na omezení zpracování,")}</li>
            <li>{cz("na přenositelnost údajů,")}</li>
            <li>{cz("vznést námitku proti zpracování,")}</li>
            <li>{cz("kdykoli odvolat souhlas – odvolání nemá vliv na zpracování před ním,")}</li>
            <li>
              {cz("podat stížnost u Úřadu pro ochranu osobních údajů (")}
              <a href="https://uoou.gov.cz" className="underline decoration-1 underline-offset-4 hover:decoration-2">
                uoou.gov.cz
              </a>
              ). [OVĚŘIT ODKAZ]
            </li>
          </ul>
          <p className={pClass}>
            {cz("Pro uplatnění práv mi stačí napsat na e-mail")} <ContactLink type="email" value={site.email} />.
          </p>

          <h2 className={h2Class}>Účinnost</h2>
          <p className={pClass}>Tyto zásady platí od [DATUM].</p>
        </article>
      </Container>
    </main>
  );
}
