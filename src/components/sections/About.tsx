import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { cz } from "@/lib/typography";
import { Node } from "../Node";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

const facts = [
  "Studuji automatizaci a měřicí techniku na VUT\u00A0FEKT a ekonomii na MUNI\u00A0ECON.",
  "Roky dělám B2B marketing v průmyslové automatizaci.",
  "Rozumím rozvaděčům, PLC i tolerancím.",
  "Mluvím česky, německy a anglicky.",
];

// Kontroluje se při buildu: jakmile bude v public/ soubor me.jpg, zobrazí se místo placeholderu.
const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", "me.jpg"));

export function About() {
  return (
    <Section id="o-mne" labelledBy="o-mne-nadpis">
      <SectionHeading id="o-mne-nadpis" title="O mně" />
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:gap-16 lg:gap-24">
        <div>
          <p className="max-w-[34ch] text-2xl leading-snug font-medium tracking-tight md:text-[1.75rem]">
            {cz("Nejsem velká agentura. Mluvíte přímo se mnou – s člověkem, který rozumí řeči techniků i zákazníků.")}
          </p>
          <ul className="mt-10 space-y-5">
            {facts.map((fact) => (
              <li key={fact} className="flex gap-4 text-lg leading-relaxed">
                <Node size={10} className="mt-[0.55em]" />
                <span>{cz(fact)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-[3px] bg-chalk">
          {hasPhoto ? (
            <Image src="/me.jpg" alt="Štěpán Synek" fill sizes="(min-width: 768px) 22rem, 100vw" className="object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center border-[1.5px] border-dashed border-muted/40 text-muted">
              sem přijde fotka
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
