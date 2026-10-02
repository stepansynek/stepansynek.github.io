"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { FORMSPREE_ID, isPlaceholder } from "@/config/site";
import { cn } from "@/lib/cn";
import { buttonClass } from "./Button";
import { Node } from "./Node";

type Status = "idle" | "sending" | "success" | "error";

const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;

const inputClass =
  "block w-full rounded-[3px] border border-graphite bg-white px-4 py-3 text-base text-graphite placeholder:text-muted";
const labelClass = "mb-2 block text-sm font-semibold";

/**
 * Kontaktní formulář přes Formspree.
 * S JavaScriptem se odešle na pozadí a ukáže potvrzení přímo na stránce.
 * Bez JavaScriptu funguje jako běžný formulář (action → Formspree).
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (isPlaceholder(FORMSPREE_ID)) {
      setStatus("error");
      setError("Formulář zatím není propojený. Napište mi prosím e-mail.");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree: ${response.status}`);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Zprávu se nepodařilo odeslat. Zkuste to prosím znovu, nebo mi napište e-mail.");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-[3px] bg-chalk p-6 md:p-8">
        <p className="flex items-center gap-3 text-xl font-semibold">
          <Node />
          Děkuji, zpráva odešla.
        </p>
        <p className="mt-3 text-lg text-muted">Ozvu se vám co nejdříve.</p>
      </div>
    );
  }

  return (
    <form action={endpoint} method="POST" onSubmit={handleSubmit} className="rounded-[3px] bg-chalk p-6 md:p-8">
      <input type="hidden" name="_subject" value="Poptávka z webu stepansynek.com" />
      {/* Past na roboty: lidé pole nevidí, Formspree zprávy s vyplněným polem zahodí. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Jméno
          </label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor={`${id}-company`} className={labelClass}>
            Firma <span className="font-normal text-muted">(nepovinné)</span>
          </label>
          <input id={`${id}-company`} name="company" type="text" autoComplete="organization" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-email`} className={labelClass}>
            E-mail
          </label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={labelClass}>
            Zpráva
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            rows={5}
            required
            aria-describedby={`${id}-message-hint`}
            className={cn(inputClass, "resize-y")}
          />
          <p id={`${id}-message-hint`} className="mt-2 text-sm text-muted">
            Klidně sem vložte odkaz na svůj současný web.
          </p>
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <input
          id={`${id}-consent`}
          name="souhlas"
          type="checkbox"
          value="ano"
          required
          className="mt-0.5 size-5 shrink-0 accent-graphite"
        />
        <label htmlFor={`${id}-consent`} className="text-sm leading-relaxed">
          Souhlasím se zpracováním osobních údajů za účelem vyřízení mé zprávy. Podrobnosti v{" "}
          <Link href="/zasady-ochrany-osobnich-udaju" className="underline decoration-1 underline-offset-2 hover:decoration-2">
            zásadách ochrany osobních údajů
          </Link>
          .
        </label>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-6 border-l-2 border-graphite pl-4 font-medium">
          {error}
        </p>
      ) : null}

      <button type="submit" disabled={status === "sending"} className={cn(buttonClass, "mt-8 w-full px-6 py-3 sm:w-auto")}>
        {status === "sending" ? "Odesílám…" : "Odeslat zprávu"}
      </button>
    </form>
  );
}
