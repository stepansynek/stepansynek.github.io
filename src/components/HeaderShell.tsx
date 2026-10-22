"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Signet } from "./Signet";

type Link = { href: string; label: string };

/**
 * Bílá hlavička přes celou šířku. Po odrolování dostane spodní linku.
 * Odkaz na sekci, která je právě na obrazovce, je podtržený oranžovou.
 * Pod lg místo menu tlačítko, které rozbalí panel s velkými odkazy a kontakty.
 * Panel zavírá Esc, klik na odkaz i klik mimo něj.
 */
export function HeaderShell({
  name,
  items,
  cta,
  phone,
  email,
  texts,
}: {
  name: string;
  items: Link[];
  cta: Link;
  /** Telefon chráněný proti sběru (Phone), vykreslený na serveru. */
  phone: React.ReactNode;
  email: Link | null;
  texts: { menu: string; close: string; contact: string; home: string };
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sekce, jejíž horní část prošla pásem pod hlavičkou, je aktivní.
  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.split("#")[1] ?? ""))
      .filter((section): section is HTMLElement => Boolean(section));
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-20% 0px -75% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-paper transition-[box-shadow] duration-200",
        scrolled || open ? "shadow-[0_var(--rule)_0_0_var(--ink)]" : "shadow-[0_var(--rule)_0_0_transparent]",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] w-full max-w-[calc(1312px+2rem)] items-center gap-6 px-4 sm:max-w-[calc(1312px+4rem)] sm:px-8">
        <a href="/" aria-label={texts.home} className="mr-auto flex items-center gap-3">
          <Signet className="size-7" />
          <span className="text-[1.625rem] leading-none font-bold [font-stretch:75%]">{name}</span>
        </a>

        <nav aria-label="Hlavní menu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => {
              const isActive = active !== null && item.href.endsWith(`#${active}`);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "block px-2.5 py-2 text-[1.0625rem] font-medium underline decoration-[3px] underline-offset-[0.45em] transition-[text-decoration-color] duration-150 xl:px-3",
                      isActive ? "decoration-orange" : "decoration-transparent hover:decoration-ink",
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href={cta.href} className="btn btn-ink hidden min-h-11 px-5 sm:inline-flex">
          {cta.label}
        </a>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="rolovaci-menu"
          onClick={() => setOpen((value) => !value)}
          className="btn btn-line min-h-11 gap-3 px-4 lg:hidden"
        >
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span className={cn("absolute left-0 h-[2px] w-4 bg-current transition-all duration-300", open ? "top-[5px] rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 h-[2px] w-4 bg-current transition-all duration-300", open ? "top-[5px] -rotate-45" : "top-[10px]")} />
          </span>
          {open ? texts.close : texts.menu}
        </button>
      </div>

      <div
        ref={panelRef}
        id="rolovaci-menu"
        inert={!open}
        className={cn(
          "absolute inset-x-0 top-full bg-paper shadow-[0_var(--rule)_0_0_var(--ink)] transition-[clip-path,visibility] duration-500 ease-[var(--ease-out)] lg:hidden",
          open ? "visible [clip-path:inset(0_0_-2px_0)]" : "invisible [clip-path:inset(0_0_100%_0)]",
        )}
      >
        <div className="mx-auto grid max-w-[calc(1312px+4rem)] gap-8 px-4 pt-4 pb-6 sm:grid-cols-[1.4fr_1fr] sm:px-8 sm:pb-8">
          <nav aria-label="Menu">
            <ul>
              {items.map((item) => (
                <li key={item.href} className="border-b-[length:var(--rule)] border-ink last:border-b-0">
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-[clamp(2rem,8vw,2.75rem)] leading-none font-bold [font-stretch:75%]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col justify-end gap-3 bg-ink p-5 text-white sm:p-6">
            <p className="small text-white/80">{texts.contact}</p>
            {phone}
            {email ? (
              <a href={email.href} className="link text-lg break-all">
                {email.label}
              </a>
            ) : null}
            <a href={cta.href} onClick={() => setOpen(false)} className="btn btn-orange mt-3 self-start">
              {cta.label}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
