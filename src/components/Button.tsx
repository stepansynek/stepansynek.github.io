import { cn } from "@/lib/cn";

/** Hranatá tlačítka: plná modrá, obrysová, oranžová a bílá obrysová (na modré ploše). */
export const buttonClass = {
  ink: "btn btn-ink",
  line: "btn btn-line",
  orange: "btn btn-orange",
  whiteLine: "btn btn-white-line",
};

export function ButtonLink({
  href,
  variant = "line",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof buttonClass;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={cn(buttonClass[variant], className)}>
      {children}
    </a>
  );
}
