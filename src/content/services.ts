export type Service = {
  title: string;
  text: string;
  /** Doplňující řádek pod textem („Obsahuje: …“), volitelný. */
  includes?: string;
  /** Cenový řádek v monospace. */
  price: string;
};

export const services: Service[] = [
  {
    title: "Web na klíč",
    text: "Web, na kterém zákazník do deseti vteřin pozná, co děláte, a rovnou vám pošle poptávku. Včetně textů, které napíšu po rozhovoru s vámi.",
    includes: "{Obsahuje: [ROZSAH_ZAKLAD]}",
    price: "od 15 000 Kč",
  },
  {
    title: "Péče",
    text: "Web pod dohledem: nové reference, pracovní nabídky, drobné úpravy, hosting a zálohy. Vy se staráte o firmu, já o web.",
    includes: "Cenu upravíme podle rozsahu péče, kterou potřebujete.",
    price: "{od [CENA_PECE] Kč měsíčně|měsíční paušál} · volitelná",
  },
  {
    title: "Foto a video",
    text: "Fotky strojů, lidí a zakázek přímo u vás. Fotí a natáčí moje sestra, takže máte všechno z jedné ruky.",
    price: "za příplatek, cenu řeknu předem",
  },
];
