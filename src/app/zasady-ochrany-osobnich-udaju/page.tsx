import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { site } from "@/content/config";
import { privacy } from "@/content/texts";
import { isShown } from "@/lib/config";
import { t } from "@/lib/typography";

const title = `${privacy.title} | ${site.name}`;

export const metadata: Metadata = {
  title,
  description: privacy.description,
  alternates: { canonical: site.privacyPath },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: site.privacyPath,
    siteName: site.name,
    title,
    description: privacy.description,
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function PrivacyPolicy() {
  return (
    <main id="obsah" className="py-16 md:py-24">
      <Container>
        <article className="measure">
          <h1 className="h2">{privacy.title}</h1>
          <p className="mt-6 text-lg">{t(privacy.intro)}</p>
          {privacy.sections.map((section) => (
            <section key={section.heading} className="mt-12 border-t-[length:var(--rule)] border-ink pt-5">
              <h2 className="h3">{t(section.heading)}</h2>
              {section.blocks.map((block, index) => {
                if (typeof block !== "string") {
                  // Služby, které web zatím nepoužívá (nevyplněný údaj v config.ts), se v produkci neuvádějí.
                  const items = block.flatMap((item) => (typeof item === "string" ? [item] : isShown(item.when) ? [item.text] : []));
                  return (
                    <ul key={index} className="mt-4 list-[square] space-y-1 pl-6 marker:text-orange">
                      {items.map((item) => (
                        <li key={item}>{t(item)}</li>
                      ))}
                    </ul>
                  );
                }
                // Odstavec, ze kterého zbyla jen vynechaná volitelná část, se nevykreslí.
                const text = t(block);
                return text ? (
                  <p key={index} className="mt-4">
                    {text}
                  </p>
                ) : null;
              })}
            </section>
          ))}
        </article>
      </Container>
    </main>
  );
}
