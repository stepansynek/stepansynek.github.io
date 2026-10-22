"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Shot = { src: string; srcSet: string; width: number; height: number } | null;
type Device = "desktop" | "phone";

/** Velikost okna prohlížeče, ve kterém se ukázka v iframe vykreslí (jako snímky v public/photos/). */
const VIEWPORT: Record<Device, number> = { desktop: 1440, phone: 390 };

/**
 * Rám ukázkového webu. Výchozí stav je snímek celé stránky, který při scrollu projede rámem (CSS, .travel).
 * Tlačítko ho vymění za skutečný web v iframe, zmenšený do rámu. Na počítači jde přepnout zobrazení
 * počítač a telefon, na úzké obrazovce je jen telefon (zmenšený počítač by byl nečitelný).
 * Iframe se načte až po kliknutí, stránka tak nestahuje dva celé weby navíc.
 */
export function DemoFrame({
  url,
  desktop,
  mobile,
  texts,
}: {
  url: string;
  desktop: Shot;
  mobile: Shot;
  texts: { live: string; liveNote: string; close: string; desktop: string; phone: string; frameTitle: string; shotAlt: string };
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef<HTMLButtonElement>(null);
  const [live, setLive] = useState(false);
  const [device, setDevice] = useState<Device>("desktop");
  const [narrow, setNarrow] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [wasLive, setWasLive] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setNarrow(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new ResizeObserver(([entry]) => setSize({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  // Fokus zůstane u ovládání: po spuštění na „Zpět na snímek“, po návratu na „Spustit“.
  useEffect(() => {
    if (live) closeRef.current?.focus();
    else if (wasLive) openRef.current?.focus();
  }, [live, wasLive]);

  const view: Device = narrow ? "phone" : device;
  const viewportWidth = VIEWPORT[view];
  // Počítač vyplní šířku rámu; telefon na širokém rámu vyplní výšku, na úzkém šířku.
  const scale = size.width === 0 ? 0 : view === "phone" && !narrow ? size.height / 844 : size.width / viewportWidth;
  const iframeHeight = scale ? size.height / scale : 0;
  const offset = view === "phone" && !narrow ? (size.width - viewportWidth * scale) / 2 : 0;

  const ratios = {
    "--ratio-d": desktop ? desktop.height / desktop.width : 1,
    "--ratio-m": mobile ? mobile.height / mobile.width : 1,
  } as React.CSSProperties;

  return (
    <div>
      <div ref={frameRef} style={ratios} className="travel relative overflow-hidden bg-ink-tint outline-[length:var(--rule)] outline-ink outline-solid">
        {live ? (
          scale ? (
            <iframe
              src={url}
              title={texts.frameTitle}
              className="absolute top-0 origin-top-left border-0 bg-white"
              style={{ width: viewportWidth, height: iframeHeight, left: offset, transform: `scale(${scale})` }}
            />
          ) : null
        ) : desktop ? (
          <picture>
            {mobile ? <source media="(max-width: 767px)" srcSet={mobile.srcSet} sizes="100vw" /> : null}
            <img
              src={desktop.src}
              srcSet={desktop.srcSet}
              sizes="(min-width: 1024px) 64vw, 100vw"
              width={desktop.width}
              height={desktop.height}
              alt={texts.shotAlt}
              loading="lazy"
              decoding="async"
              className="travel-image"
            />
          </picture>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
        {live ? (
          <>
            {!narrow ? (
              <div role="group" aria-label="Zobrazení ukázky" className="flex">
                {(["desktop", "phone"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={device === option}
                    onClick={() => setDevice(option)}
                    className={cn("btn min-h-11 px-4", device === option ? "bg-ink text-white" : "bg-ink-tint text-ink hover:bg-[#d7dcee]")}
                  >
                    {texts[option]}
                  </button>
                ))}
              </div>
            ) : null}
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                setLive(false);
                setWasLive(true);
              }}
              className="btn btn-line min-h-11 px-4"
            >
              {texts.close}
            </button>
          </>
        ) : (
          <>
            <button ref={openRef} type="button" onClick={() => setLive(true)} className="btn btn-ink min-h-11 px-5">
              {texts.live}
            </button>
            <p className="small text-ink-soft">{texts.liveNote}</p>
          </>
        )}
        <p className="small ml-auto text-ink-soft">
          {url.replace(/^https:\/\//, "").replace(/\/$/, "")}
        </p>
      </div>
    </div>
  );
}
