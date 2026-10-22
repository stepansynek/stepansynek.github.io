import { config, site } from "@/content/config";
import { footer } from "@/content/texts";
import { isShown } from "@/lib/config";
import { cs } from "@/lib/typography";
import { navItems } from "./Header";
import { ContactLink } from "./ContactLink";
import { Container } from "./Container";
import { Phone } from "./Phone";
import { Signet } from "./Signet";

/** Rok buildu pro copyright v tiráži. */
const year = new Date().getFullYear();

/** Tiráž prospektu: značka, menu, kontakty a drobný tisk. */
export function Footer() {
  return (
    <footer className="pt-12 pb-8 md:pt-16">
      <Container>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <p className="flex items-center gap-3">
              <Signet className="size-8" />
              <span className="text-3xl leading-none font-bold [font-stretch:75%]">{site.name}</span>
            </p>
            <p className="measure mt-3">{cs(footer.tagline)}</p>
          </div>
          <nav aria-label="Patička" className="col-span-2 md:col-span-3 md:col-start-7">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 md:grid">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="font-medium underline decoration-transparent decoration-[length:var(--rule)] underline-offset-[0.2em] hover:decoration-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="col-span-2 grid content-start gap-2 md:col-span-3">
            {isShown("TELEFON") ? (
              <li>
                <Phone className="font-bold" />
              </li>
            ) : null}
            {isShown("EMAIL") ? (
              <li>
                <ContactLink type="email" value={config.EMAIL} className="font-bold break-all" />
              </li>
            ) : null}
            {isShown("LINKEDIN") ? (
              <li>
                <ContactLink type="url" value={config.LINKEDIN} label={footer.linkedin} />
              </li>
            ) : null}
          </ul>
        </div>

        <div className="small mt-12 flex flex-wrap gap-x-5 gap-y-1 border-t-[length:var(--rule)] border-ink pt-4 text-ink-soft">
          <span>
            © {year} {site.name}
          </span>
          {isShown("ICO") ? <span>IČO {config.ICO}</span> : null}
          {isShown("SIDLO") ? <span>{cs(config.SIDLO)}</span> : null}
          <span>{cs(footer.register)}</span>
          <a href={site.privacyPath} className="link">
            {cs(footer.privacy)}
          </a>
          <span className="md:ml-auto">{cs(footer.font)}</span>
        </div>
      </Container>
    </footer>
  );
}
