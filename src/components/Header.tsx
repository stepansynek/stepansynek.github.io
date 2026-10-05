import { config, site } from "@/content/config";
import { header, nav, navHints } from "@/content/texts";
import { consultationHref, isFilled, isShown, mailHref } from "@/lib/config";
import { visibleProjects } from "@/lib/projects";
import { cs } from "@/lib/typography";
import { HeaderShell } from "./HeaderShell";
import { Phone } from "./Phone";

/** Položky menu; Práce zmizí, když není co ukázat. */
export const navItems = nav
  .filter((item) => item.id !== "prace" || visibleProjects.length > 0)
  .map((item) => ({ href: `/#${item.id}`, label: cs(item.label), hint: cs(navHints[item.id] ?? "") }));

export function Header() {
  return (
    <HeaderShell
      name={site.name}
      items={navItems}
      cta={{ href: consultationHref, label: header.cta }}
      phone={isShown("TELEFON") ? <Phone className="text-2xl font-[680] tracking-tight [font-stretch:110%]" /> : null}
      email={isShown("EMAIL") ? { href: isFilled("EMAIL") ? mailHref : "/#kontakt", label: config.EMAIL } : null}
      texts={{ menu: header.menu, close: header.close, contact: header.menuContact }}
    />
  );
}
