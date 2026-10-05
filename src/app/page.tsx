import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Facts } from "@/components/sections/Facts";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { visibleProjects } from "@/lib/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main id="obsah">
      <JsonLd />
      <Hero />
      <Marquee />
      <Facts />
      <Services />
      {visibleProjects.length > 0 ? <Work /> : null}
      <Process />
      <About />
      <Faq />
      <Contact />
    </main>
  );
}
