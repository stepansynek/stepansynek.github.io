"use client";

import { useEffect, useRef, useState } from "react";

/** Menu pro mobil a tablet: tlačítko s aria-expanded a panel pod hlavičkou. Zavírá Esc i klik na odkaz. */
export function MobileMenu({ items }: { items: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobilni-menu"
        aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-10 items-center justify-center"
      >
        <svg aria-hidden="true" focusable="false" width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M4 4l14 14M18 4L4 18" />
          ) : (
            <path d="M2 6h18M2 11h18M2 16h18" />
          )}
        </svg>
      </button>
      <nav
        id="mobilni-menu"
        aria-label="Menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-bg"
      >
        <ul className="mx-auto max-w-[calc(1100px+4rem)] px-4 py-2 sm:px-8">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line last:border-b-0">
              <a href={item.href} onClick={() => setOpen(false)} className="block py-3 text-lg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
