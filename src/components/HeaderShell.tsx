"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Arrow } from "./Button";

type Link = { href: string; label: string };

/**
 * Plovoucí skleněná hlavička. Při scrollu se zúží.
 * Tlačítko Menu roluje dolů panel přes celou šířku s velkými odkazy a kontakty.
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
  items: (Link & { hint: string })[];
  cta: Link;
  phone: Link;
  email: Link;
  texts: { menu: string; close: string; contact: string };
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={cn(
          "glass relative mx-auto flex h-14 max-w-[1180px] items-center gap-3 rounded-full pr-1.5 pl-5 transition-[max-width,height] duration-500 ease-[var(--ease-out)]",
          scrolled && "max-w-[980px]",
        )}
      >
        <a href="/" className="mr-auto flex items-center gap-2.5 font-[650] tracking-tight [font-stretch:110%]">
          <span aria-hidden="true" className="grid size-6 place-items-center rounded-md bg-text">
            <span className="size-2 rounded-full bg-accent" />
          </span>
          {name}
        </a>

        <nav aria-label="Hlavní menu" className="hidden xl:block">
          <ul className="flex items-center">
            {items.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-full px-3 py-2 text-[0.9375rem] text-muted transition-colors duration-150 hover:bg-text/5 hover:text-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={cta.href} className="btn btn-dark hidden min-h-11 px-5 text-[0.9375rem] sm:inline-flex">
          {cta.label}
          <Arrow />
        </a>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="rolovaci-menu"
          onClick={() => setOpen((value) => !value)}
          className="btn btn-ghost min-h-11 gap-2.5 px-4 text-[0.9375rem]"
        >
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span className={cn("absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300", open ? "top-[5px] rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 h-[1.5px] w-4 bg-current transition-all duration-300", open ? "top-[5px] -rotate-45" : "top-[10px]")} />
          </span>
          {open ? texts.close : texts.menu}
        </button>
      </div>

      <div
        ref={panelRef}
        id="rolovaci-menu"
        inert={!open}
        className={cn(
          "glass absolute inset-x-3 top-[calc(100%+0.5rem)] mx-auto max-w-[1180px] overflow-hidden rounded-[2rem] transition-[clip-path,opacity] duration-600 ease-[var(--ease-out)] sm:inset-x-5",
          open ? "opacity-100 [clip-path:inset(0_0_0_0_round_2rem)]" : "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0_round_2rem)]",
        )}
      >
        <div aria-hidden="true" className="aurora aurora-1 -top-24 -right-24 size-80 bg-accent" />
        <div aria-hidden="true" className="aurora aurora-2 -bottom-32 left-1/3 size-80 bg-blue opacity-30" />
        <div className="relative grid gap-8 p-5 sm:p-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12 lg:p-10">
          <nav aria-label="Menu">
            <ul>
              {items.map((item, index) => (
                <li
                  key={item.href}
                  style={{ transitionDelay: open ? `${80 + index * 50}ms` : "0ms" }}
                  className={cn(
                    "border-b border-line transition-[opacity,transform] duration-500 ease-[var(--ease-out)] last:border-b-0",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                >
                  <a href={item.href} onClick={() => setOpen(false)} className="group flex items-baseline justify-between gap-4 py-3 sm:py-4">
                    <span className="text-[clamp(1.6rem,4vw,2.6rem)] leading-none font-[720] tracking-[-0.03em] [font-stretch:115%] transition-transform duration-300 group-hover:translate-x-2">
                      {item.label}
                    </span>
                    <span className="hidden text-right text-[0.9375rem] text-muted sm:block">{item.hint}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col justify-end gap-3 rounded-3xl bg-text p-6 text-white">
            <p className="text-[0.9375rem] text-white/80">{texts.contact}</p>
            <a href={phone.href} className="text-2xl font-[680] tracking-tight [font-stretch:110%] tabular-nums">
              {phone.label}
            </a>
            <a href={email.href} className="break-all text-lg text-white/90">
              {email.label}
            </a>
            <a href={cta.href} onClick={() => setOpen(false)} className="btn btn-primary mt-3 self-start">
              {cta.label}
              <Arrow />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
