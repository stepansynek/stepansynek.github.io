import { isPlaceholder, showPlaceholders } from "@/lib/config";
import { cs } from "@/lib/typography";
import { cn } from "@/lib/cn";

const prefixes = { email: "mailto:", phone: "tel:", url: "" } as const;

/**
 * Odkaz na e-mail, telefon nebo web. Dokud je hodnota placeholder („[EMAIL]“),
 * zobrazí se ve vývoji jen jako text a v produkci vůbec, aby na webu nebyl nefunkční odkaz.
 * Okolní text (popisek, „Nebo zavolejte“) skryje volající podle isShown().
 */
export function ContactLink({
  type,
  value,
  label,
  className,
}: {
  type: keyof typeof prefixes;
  value: string;
  label?: string;
  className?: string;
}) {
  if (isPlaceholder(value)) {
    return showPlaceholders ? <span className={className}>{value}</span> : null;
  }
  const href = prefixes[type] + (type === "phone" ? value.replace(/[^\d+]/g, "") : value);
  return (
    <a href={href} className={cn("link", className)}>
      {label ?? (type === "phone" ? cs(value) : value)}
    </a>
  );
}
