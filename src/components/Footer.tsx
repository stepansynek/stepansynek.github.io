import Link from "next/link";
import { Fragment } from "react";
import { site } from "@/config/site";
import { Container } from "./Container";
import { ContactLink } from "./ContactLink";

const linkClass = "underline decoration-1 underline-offset-4 hover:text-graphite hover:decoration-2";

export function Footer() {
  const items = [
    <span key="name" className="font-semibold text-graphite">
      {site.name}
    </span>,
    <span key="ico">IČO {site.ico}</span>,
    <span key="seat">{site.seat}</span>,
    <span key="register">Fyzická osoba zapsaná v živnostenském rejstříku</span>,
    <Link key="privacy" href="/zasady-ochrany-osobnich-udaju" className={linkClass}>
      Zásady ochrany osobních údajů
    </Link>,
    <ContactLink key="linkedin" type="url" value={site.linkedin} label="LinkedIn" />,
  ];

  return (
    <footer className="border-t border-hairline bg-chalk py-10 text-sm leading-relaxed text-muted md:py-12">
      <Container>
        <p className="flex flex-wrap gap-x-3 gap-y-1">
          {items.map((item, index) => (
            <Fragment key={index}>
              {index > 0 ? <span aria-hidden="true">·</span> : null}
              {item}
            </Fragment>
          ))}
        </p>
      </Container>
    </footer>
  );
}
