import { cn } from "@/lib/cn";

/** Žluté tlačítko s grafitovým textem. Hover a focus přidají grafitový rámeček. */
export const buttonClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[3px] bg-accent px-5 py-2.5 text-base font-semibold text-graphite transition-shadow duration-150 hover:shadow-[inset_0_0_0_2px_var(--color-graphite)] disabled:cursor-wait disabled:opacity-70";

export function ButtonLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  return (
    <a href={href} className={cn(buttonClass, className)}>
      {children}
    </a>
  );
}
