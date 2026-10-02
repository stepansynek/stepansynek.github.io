import { config, site } from "@/content/config";
import { seo } from "@/content/texts";
import { isFilled } from "@/lib/config";

/** Strukturovaná data: Person a ProfessionalService. Nevyplněné údaje se vynechají. */
export function JsonLd() {
  const personId = `${site.url}/#person`;
  const contact = {
    ...(isFilled("EMAIL") ? { email: config.EMAIL } : {}),
    ...(isFilled("TELEFON") ? { telephone: config.TELEFON } : {}),
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: `${site.url}/`,
        jobTitle: "Weby a marketing pro technické firmy",
        knowsLanguage: ["cs", "en"],
        ...contact,
        ...(isFilled("LINKEDIN") ? { sameAs: [config.LINKEDIN] } : {}),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: `${site.name} – weby a marketing pro technické firmy`,
        url: `${site.url}/`,
        description: seo.description,
        image: `${site.url}/og.png`,
        founder: { "@id": personId },
        areaServed: [
          ...site.locations.map((name) => ({ "@type": "City", name })),
          { "@type": "AdministrativeArea", name: "Jihomoravský kraj" },
        ],
        priceRange: "od 15 000 Kč",
        ...contact,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escapování „<“ brání ukončení skriptu uvnitř dat.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
