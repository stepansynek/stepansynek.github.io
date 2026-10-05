"use client";

import { useEffect } from "react";

/**
 * Drobné interakce pro celou stránku, bez knihoven:
 * - [data-reveal] se odkryje při scrollu,
 * - .card a [data-spotlight] dostanou pozici kurzoru (--mx, --my) pro světlo pod kurzorem,
 * - [data-count] napočítá číslo od nuly, když se objeví,
 * - [data-progress] dostane --progress 0–1 podle toho, kolik z něj už prošlo obrazovkou.
 * Při prefers-reduced-motion se počítadla a postup nastaví rovnou na konec.
 */
export function Effects() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Odkrývání a počítadla
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const element = entry.target as HTMLElement;
          element.classList.add("is-visible");
          if (element.dataset.count) countUp(element, reduced);
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal], [data-count]").forEach((element) => observer.observe(element));

    // Světlo pod kurzorem
    function onPointerMove(event: PointerEvent) {
      const target = (event.target as Element | null)?.closest<HTMLElement>(".card, [data-spotlight]");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      target.style.setProperty("--my", `${event.clientY - rect.top}px`);
    }
    document.addEventListener("pointermove", onPointerMove, { passive: true });

    // Postup podle scrollu
    const progressItems = [...document.querySelectorAll<HTMLElement>("[data-progress]")];
    let frame = 0;
    function updateProgress() {
      frame = 0;
      const viewport = window.innerHeight;
      for (const item of progressItems) {
        const rect = item.getBoundingClientRect();
        const value = reduced ? 1 : Math.min(1, Math.max(0, (viewport * 0.75 - rect.top) / rect.height));
        item.style.setProperty("--progress", value.toFixed(3));
      }
    }
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    }
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

function countUp(element: HTMLElement, reduced: boolean) {
  const target = Number(element.dataset.count);
  const format = (value: number) => Math.round(value).toLocaleString("cs-CZ");
  if (reduced || !Number.isFinite(target)) return;
  const duration = 1400;
  const start = performance.now();
  function tick(now: number) {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    element.textContent = format(target * eased);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
