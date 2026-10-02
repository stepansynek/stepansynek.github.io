import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { visibleProjects } from "@/lib/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** Pořadí sekcí. Čísla 01, 02… se generují z toho, co se opravdu vykreslí. */
const sections = [
  { key: "hero", Component: Hero },
  { key: "sluzby", Component: Services },
  ...(visibleProjects.length > 0 ? [{ key: "prace", Component: Work }] : []),
  { key: "postup", Component: Process },
  { key: "o-mne", Component: About },
  { key: "faq", Component: Faq },
  { key: "kontakt", Component: Contact },
];

export default function Home() {
  return (
    <main id="obsah">
      <JsonLd />
      {sections.map(({ key, Component }, index) => (
        <Component key={key} number={String(index + 1).padStart(2, "0")} />
      ))}
    </main>
  );
}
