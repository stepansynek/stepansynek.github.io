import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="obsah">
        <Hero />
        <Problem />
        <Services />
        <Process />
      </main>
    </>
  );
}
