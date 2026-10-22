"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { cs } from "@/lib/cs";
import { decodePhone, phoneHref } from "@/lib/phone";

/**
 * Telefon na kliknutí: v HTML je jen zakódovaný, rozbalí se až po skutečném kliknutí
 * nebo stisku klávesy (event.isTrusted), takže ho nesebere robot, který jen čte stránku.
 * Po odkrytí je to obyčejný odkaz tel:.
 */
export function PhoneReveal({ encoded, className }: { encoded: string; className?: string }) {
  const [phone, setPhone] = useState<string | null>(null);

  if (phone) {
    return (
      <a href={phoneHref(phone)} className={cn("link", className)}>
        {cs(phone)}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        if (event.isTrusted) setPhone(decodePhone(encoded));
      }}
      aria-label="Zobrazit telefonní číslo"
      className={cn("group inline-flex cursor-pointer items-center gap-[0.45em] text-left", className)}
    >
      <span aria-hidden="true">+420 ••• ••• •••</span>
      <span
        aria-hidden="true"
        className="border-[length:var(--rule)] border-current px-[0.6em] py-[0.3em] text-[max(0.8125rem,0.38em)] leading-none font-bold [font-stretch:100%] transition-colors duration-150 group-hover:border-orange"
      >
        zobrazit
      </span>
    </button>
  );
}
