import { config, site } from "@/content/config";
import { footer } from "@/content/texts";
import { isShown } from "@/lib/config";
import { cs } from "@/lib/typography";
import { navItems } from "./Header";
import { ContactLink } from "./ContactLink";
import { Container } from "./Container";
import { Phone } from "./Phone";

/** Datum buildu, propisuje se do patičky jako revize. */
const revision = new Date().toISOString().slice(0, 10);

export function Footer() {
  return (
    <footer className="overflow-hidden pt-16 pb-8 md:pt-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-xl font-[700] tracking-tight [font-stretch:110%]">{site.name}</p>
            <p className="mt-2 max-w-[36ch] text-muted">{cs("Weby a marketing pro technické firmy z Brna, Vyškova a Rousínova.")}</p>
          </div>
          <nav aria-label="Patička">
            <ul className="grid gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-muted transition-colors duration-150 hover:text-text">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="grid content-start gap-2">
            {isShown("TELEFON") ? (
              <li>
                <Phone className="font-semibold" />
              </li>
            ) : null}
            {isShown("EMAIL") ? (
              <li>
                <ContactLink type="email" value={config.EMAIL} className="font-semibold" />
              </li>
            ) : null}
            {isShown("LINKEDIN") ? (
              <li>
                <ContactLink type="url" value={config.LINKEDIN} label={footer.linkedin} />
              </li>
            ) : null}
          </ul>
        </div>

        <p
          aria-hidden="true"
          className="mt-16 text-[clamp(3.5rem,15.5vw,13rem)] leading-[0.8] font-[800] tracking-[-0.06em] whitespace-nowrap select-none [font-stretch:125%] md:mt-24"
          style={{
            background: "linear-gradient(180deg, var(--text) 0%, rgb(14 17 22 / 0.08) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Synek
        </p>

        <p className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t border-line pt-6 text-[0.875rem] text-muted">
          <span>{site.name}</span>
          {isShown("ICO") ? <span>IČO {config.ICO}</span> : null}
          {isShown("SIDLO") ? <span>{cs(config.SIDLO)}</span> : null}
          <span>{cs(footer.register)}</span>
          <a href={site.privacyPath} className="link">
            {cs(footer.privacy)}
          </a>
          <span className="tabular-nums">
            {footer.revision} {revision}
          </span>
        </p>
      </Container>
    </footer>
  );
}
