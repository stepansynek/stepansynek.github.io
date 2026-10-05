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
      <a href={phoneHref(phone)} className={cn("link tabular-nums", className)}>
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
      className={cn("group inline-flex cursor-pointer items-center gap-[0.4em] text-left tabular-nums", className)}
    >
      <span aria-hidden="true">+420 ••• ••• •••</span>
      <span
        aria-hidden="true"
        className="rounded-full border border-current px-[0.7em] py-[0.2em] text-[max(0.75rem,0.4em)] leading-none font-semibold tracking-normal opacity-70 transition-opacity duration-150 group-hover:opacity-100"
      >
        zobrazit
      </span>
    </button>
  );
}
