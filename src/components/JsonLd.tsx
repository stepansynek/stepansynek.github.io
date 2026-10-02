import { OG_IMAGE, isPlaceholder, site } from "@/config/site";

/** Vrátí { [klíč]: hodnota } jen pro vyplněné údaje – placeholdery do dat nepatří. */
function ifFilled(key: string, value: string) {
  return isPlaceholder(value) ? {} : { [key]: value };
}

/** Strukturovaná data pro vyhledávače: Person + ProfessionalService, oblast Brno. */
export function JsonLd() {
  const personId = `${site.url}/#person`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: `${site.url}/`,
        jobTitle: site.jobTitle,
        knowsLanguage: ["cs", "de", "en"],
        ...ifFilled("email", site.email),
        ...ifFilled("telephone", site.phone),
        ...(isPlaceholder(site.linkedin) ? {} : { sameAs: [site.linkedin] }),
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#professional-service`,
        name: `${site.name} – marketing a weby pro průmyslové firmy`,
        url: `${site.url}/`,
        description: site.description,
        image: `${site.url}${OG_IMAGE.url}`,
        founder: { "@id": personId },
        areaServed: site.locations.map((name) => ({ "@type": "City", name })),
        address: {
          "@type": "PostalAddress",
          addressRegion: "Jihomoravský kraj",
          addressCountry: "CZ",
        },
        availableLanguage: ["cs", "de", "en"],
        ...ifFilled("email", site.email),
        ...ifFilled("telephone", site.phone),
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
