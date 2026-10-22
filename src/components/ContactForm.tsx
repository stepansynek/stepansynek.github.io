"use client";

import { useEffect, useRef, useState } from "react";
import { form as texts } from "@/content/texts";
import { cn } from "@/lib/cn";
import { cs } from "@/lib/cs";
import { buttonClass } from "./Button";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = keyof typeof texts.fields;
type Errors = Partial<Record<FieldName, string>>;

const fields: { name: FieldName; required: boolean; multiline?: boolean; autoComplete?: string; inputMode?: "url" }[] = [
  { name: "name", required: true, autoComplete: "name" },
  { name: "company", required: true, autoComplete: "organization" },
  { name: "contact", required: true, autoComplete: "email" },
  { name: "web", required: false, autoComplete: "url", inputMode: "url" },
  { name: "message", required: true, multiline: true },
  { name: "source", required: false },
];

/** E-mail, nebo telefon s aspoň 9 číslicemi. */
function isValidContact(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.includes("@")) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed);
  return trimmed.replace(/\D/g, "").length >= 9;
}

function validate(data: FormData): Errors {
  const errors: Errors = {};
  for (const field of fields) {
    const value = String(data.get(field.name) ?? "").trim();
    if (field.required && !value) errors[field.name] = texts.fields[field.name].error;
  }
  if (!errors.contact && !isValidContact(String(data.get("contact") ?? ""))) {
    errors.contact = texts.fields.contact.error;
  }
  return errors;
}

/**
 * Poptávkový formulář jako jednoduchý objednávkový list.
 * S JavaScriptem: vlastní validace s hláškami u polí a odeslání přes fetch na Formspree.
 * Bez JavaScriptu: nativní validace a klasické odeslání na Formspree, plus odkaz na e-mail.
 *
 * Údaje z config.ts sem přicházejí jako props ze serveru (Contact.tsx): klientská komponenta
 * nesmí importovat config, jinak by se celý dostal do JavaScriptu v prohlížeči, i s telefonem.
 */
export function ContactForm({
  endpoint,
  privacyHref,
  sendError,
  noscript,
}: {
  /** URL Formspree; prázdná, dokud chybí FORMSPREE_ID (to nastane jen ve vývoji, v produkci se formulář skryje). */
  endpoint: string;
  privacyHref: string;
  /** Hláška při chybě odeslání s kontakty, vykreslená na serveru. */
  sendError: React.ReactNode;
  /** Obsah <noscript> s e-mailem, nebo null. */
  noscript: React.ReactNode;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [announcement, setAnnouncement] = useState("");
  const [hydrated, setHydrated] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const invalid = Object.keys(found) as FieldName[];
    if (invalid.length > 0) {
      setAnnouncement(`${texts.errorSummary(invalid.length)} ${invalid.map((name) => found[name]).join(" ")}`);
      form.querySelector<HTMLElement>(`[name="${invalid[0]}"]`)?.focus();
      return;
    }

    // Honeypot vyplňují jen roboti: tváříme se, že je odesláno, a nic neposíláme.
    if (String(data.get("_gotcha") ?? "") !== "") {
      setStatus("success");
      return;
    }

    if (!endpoint) {
      setStatus("error");
      setAnnouncement(texts.error);
      return;
    }

    const contact = String(data.get("contact"));
    if (contact.includes("@")) data.set("_replyto", contact.trim());

    setStatus("sending");
    setAnnouncement(texts.sending);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Formspree: ${response.status}`);
      form.reset();
      setStatus("success");
      setAnnouncement("");
    } catch {
      setStatus("error");
      setAnnouncement(texts.error);
    }
  }

  function clearError(name: FieldName) {
    if (!errors[name]) return;
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="bg-paper p-6 text-ink md:p-8">
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-10">
          <path d="M3 12.5l6 6L21 6" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <p className="h3 mt-5">{cs(texts.success)}</p>
        <p className="mt-2 text-lg">{texts.successSignature}</p>
      </div>
    );
  }

  return (
    <form
      action={endpoint || undefined}
      method="POST"
      noValidate={hydrated}
      onSubmit={handleSubmit}
      className="bg-paper p-5 text-ink md:p-8"
    >
      <p className="h3">{texts.title}</p>

      <input type="hidden" name="_subject" value={texts.subject} />
      {/* Past na roboty: lidé pole nevidí ani na něj nedojdou tabulátorem. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="pole-gotcha">Nevyplňujte</label>
        <input id="pole-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => {
          const id = `pole-${field.name}`;
          const error = errors[field.name];
          const describedBy = cn(error && `${id}-chyba`, field.name === "message" && "pole-zasady") || undefined;
          const common = {
            id,
            name: field.name,
            required: field.required,
            autoComplete: field.autoComplete,
            "aria-invalid": error ? true : undefined,
            "aria-describedby": describedBy,
            onInput: () => clearError(field.name),
            className: cn(
              "block w-full border-[length:var(--rule)] bg-paper px-3.5 py-3 text-base text-ink transition-[border-color,background-color] duration-150 hover:bg-ink-tint focus:bg-paper",
              error ? "border-orange" : "border-ink",
            ),
          };
          const wide = field.multiline || field.name === "contact" || field.name === "source";
          return (
            <div key={field.name} className={cn(wide && "sm:col-span-2")}>
              <label htmlFor={id} className="mb-1.5 block font-bold">
                {cs(texts.fields[field.name].label)}
                {field.required ? null : <span className="font-normal text-ink-soft"> ({texts.optional})</span>}
              </label>
              {field.multiline ? (
                <textarea {...common} rows={5} className={cn(common.className, "resize-y")} />
              ) : (
                <input {...common} type={field.name === "web" ? "url" : "text"} inputMode={field.inputMode} />
              )}
              {error ? (
                <p id={`${id}-chyba`} className="small mt-1.5 bg-orange-tint px-2 py-1 font-medium">
                  {cs(error)}
                </p>
              ) : null}
              {field.name === "message" ? (
                <p id="pole-zasady" className="small mt-2 text-ink-soft">
                  {cs(texts.privacyBefore)}
                  <a href={privacyHref} className="link">
                    {cs(texts.privacyLink)}
                  </a>
                  {texts.privacyAfter}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <p aria-live="polite" className="sr-only">
          {status === "error" ? "" : announcement}
        </p>
        {status === "error" ? sendError : null}
        <button type="submit" disabled={status === "sending"} className={cn(buttonClass.ink, "w-full disabled:cursor-wait disabled:opacity-60 sm:w-auto")}>
          {status === "sending" ? texts.sending : texts.submit}
        </button>
        {noscript ? (
          <noscript>
            <p className="small mt-4">{noscript}</p>
          </noscript>
        ) : null}
      </div>
    </form>
  );
}
