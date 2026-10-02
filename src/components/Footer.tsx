import { Fragment } from "react";
import { config, site } from "@/content/config";
import { footer } from "@/content/texts";
import { cs } from "@/lib/typography";
import { ContactLink } from "./ContactLink";
import { Container } from "./Container";

/** Datum buildu, propisuje se do razítka jako revize. */
const revision = new Date().toISOString().slice(0, 10);

export function Footer() {
  const stamp = [...footer.stamp, [footer.revision, revision]];
  const items = [
    <span key="name">{site.name}</span>,
    <span key="ico">IČO {config.ICO}</span>,
    <span key="seat">{cs(config.SIDLO)}</span>,
    <span key="register">{cs(footer.register)}</span>,
    <a key="privacy" href={site.privacyPath} className="link">
      {cs(footer.privacy)}
    </a>,
    <ContactLink key="linkedin" type="url" value={config.LINKEDIN} label={footer.linkedin} />,
    <ContactLink key="phone" type="phone" value={config.TELEFON} />,
    <ContactLink key="email" type="email" value={config.EMAIL} />,
  ];

  return (
    <footer className="border-t border-line py-12 md:py-16">
      <Container>
        <table className="w-full border-collapse border border-line-strong font-mono text-[0.8125rem] sm:ml-auto sm:w-auto sm:min-w-[22rem]">
          <caption className="sr-only">Razítko</caption>
          <tbody>
            {stamp.map(([label, value]) => (
              <tr key={label} className="border-b border-line last:border-b-0">
                <th scope="row" className="border-r border-line px-3 py-1.5 text-left font-normal tracking-[0.06em] text-muted uppercase">
                  {label}
                </th>
                <td className="px-3 py-1.5 tabular-nums">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-[0.9375rem] text-muted">
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
