import { hero } from "@/content/texts";

/** Běžící pás oborů a služeb. Dekorace, obsah je i jinde na stránce. */
export function Marquee() {
  const items = [...hero.marquee, ...hero.marquee];
  return (
    <div aria-hidden="true" className="marquee overflow-hidden border-y border-line bg-surface py-5">
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {items.map((item, index) => (
          <span key={index} className="flex items-center gap-10 text-2xl font-[700] tracking-tight whitespace-nowrap [font-stretch:120%] md:text-3xl">
            {item}
            <span className="size-2.5 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
