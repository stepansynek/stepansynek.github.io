import { About } from "@/components/sections/About";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { References } from "@/components/sections/References";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main id="obsah">
      <Hero />
      <Problem />
      <Services />
      <Process />
      <About />
      <References />
      <CallToAction />
      <Contact />
    </main>
  );
}
