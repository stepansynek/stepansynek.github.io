import { cz } from "@/lib/typography";
import { ButtonLink } from "../Button";
import { Container } from "../Container";
import { HeroLine } from "../HeroLine";

export function Hero() {
  return (
    <section aria-labelledby="hero-nadpis" className="pt-14 pb-16 md:pt-24 md:pb-24">
      <Container>
        <h1
          id="hero-nadpis"
          className="max-w-[17ch] text-[2.5rem] leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[4.5rem]"
        >
          Marketing a weby pro firmy, které vyrábějí.
        </h1>
        <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
          {cz(
            "Jsem Štěpán Synek. Pomáhám malým a středním průmyslovým firmám na jižní Moravě ukázat, co opravdu umí – stroje, technologie a reference. Technice rozumím, protože ji studuji a roky v ní pracuji.",
          )}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <ButtonLink href="#kontakt" className="px-6 py-3">
            Domluvit 20min konzultaci zdarma
          </ButtonLink>
          <a href="#sluzby" className="py-2 font-semibold underline decoration-1 underline-offset-[6px] hover:decoration-2">
            Co dělám <span aria-hidden="true">↓</span>
          </a>
        </div>
        <HeroLine className="mt-16 md:mt-24" />
      </Container>
    </section>
  );
}
