import { contact } from "@/content/texts";

/*
 * Dálnice D1 od Ostrovačic přes Brno po Vyškov z OpenStreetMap (Overpass, way["highway"="motorway"]["ref"~"D1"],
 * jeden jízdní pás, zjednodušeno Ramer–Douglas–Peucker). Promítnuto na 1000 jednotek šířky:
 * x = (lon − 16,55) · cos 49,23° · k, y = (49,33 − lat) · k. Výřez x −80 až 1000 (místo na popisek Brna), y 110–550.
 */
const D1 =
  "M-259.2 365.0L-252.2 382.5L-242.4 396.9L-226.0 411.4L-208.1 421.7L-144.1 441.2L-107.8 459.0L-79.4 466.7L-59.9 476.2L-11.3 487.8L31.3 507.3L43.6 508.7L68.4 506.3L111.5 513.3L134.0 513.3L165.9 511.7L209.6 501.1L254.5 499.7L265.8 496.0L275.8 489.2L301.0 460.1L315.4 447.7L331.1 438.7L351.9 432.2L372.7 429.8L392.0 430.9L407.9 434.4L447.8 447.5L472.1 449.8L535.8 440.4L560.6 439.0L587.3 426.3L597.9 423.4L609.0 423.0L629.5 426.1L644.2 422.9L652.8 417.7L672.0 398.7L694.0 383.7L707.0 371.8L727.8 342.4L743.1 306.6L752.4 291.2L772.0 267.9L793.5 249.5L819.6 233.3L865.5 212.3L895.3 189.3L912.9 179.2L935.5 171.8L965.9 170.4L993.3 155.7L1026.7 147.6";

const LEFT = -80;
const WIDTH = 1080;
const TOP = 110;
const HEIGHT = 440;
/** 10 km v jednotkách mapy. */
const KM10 = 269.7;

/** Středy měst (souřadnice náměstí). Popisek je u všech vlevo od bodu, D1 vede pod nimi. */
const towns = [
  { name: "Brno", x: 111.4, y: 405.1 },
  { name: "Rousínov", x: 651.4, y: 386.4 },
  { name: "Vyškov", x: 880.4, y: 157.6 },
];

const pct = (x: number, y: number) => ({ left: `${((x - LEFT) / WIDTH) * 100}%`, top: `${((y - TOP) / HEIGHT) * 100}%` });

/** Mapka okolí, kde působím: bílá D1, oranžová města. Na modré ploše kontaktu. */
export function RegionMap({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <p className="h3">{contact.mapTitle}</p>
      <div role="img" aria-label={contact.mapAlt} className="relative mt-5 aspect-[1080/440] border-t-[length:var(--rule)] border-b-[length:var(--rule)] border-white/40">
        <svg aria-hidden="true" viewBox={`${LEFT} ${TOP} ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path d={D1} fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <span aria-hidden="true" className="small absolute -translate-x-1/2 pt-2 text-white/75" style={pct(445, 452)}>
          D1
        </span>
        <span aria-hidden="true" className="small absolute top-4 left-0 text-white/75" style={{ width: `${(KM10 / WIDTH) * 100}%` }}>
          <span className="block h-2 border-x-[length:var(--rule)] border-b-[length:var(--rule)] border-white/75" />
          <span className="mt-1 block">10 km</span>
        </span>
        {towns.map((town) => (
          <span key={town.name} aria-hidden="true" className="absolute" style={pct(town.x, town.y)}>
            <span className="absolute size-3.5 -translate-1/2 bg-orange md:size-4" />
            <span className="absolute right-3 -translate-y-1/2 text-lg leading-none font-bold whitespace-nowrap [font-stretch:87%] md:right-4 md:text-2xl">
              {town.name}
            </span>
          </span>
        ))}
      </div>
      <figcaption className="small mt-3 text-white/75">{contact.mapCredit}</figcaption>
    </figure>
  );
}
