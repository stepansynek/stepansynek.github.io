"use client";

import { useEffect, useRef, useState } from "react";
import { config, site } from "@/content/config";
import { form as texts } from "@/content/texts";
import { isPlaceholder } from "@/lib/config";
import { cn } from "@/lib/cn";
import { cs } from "@/lib/typography";
import { buttonClass } from "./Button";
import { ContactLink } from "./ContactLink";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = keyof typeof texts.fields;
type Errors = Partial<Record<FieldName, string>>;

const endpoint = `https://formspree.io/f/${config.FORMSPREE_ID}`;

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
 */
export function ContactForm() {
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

    if (isPlaceholder(config.FORMSPREE_ID)) {
      setStatus("error");
      setAnnouncement(texts.errorPrefix);
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
      setAnnouncement(texts.errorPrefix);
    }
  }

  function clearError(name: FieldName) {
    if (!errors[name]) return;
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="border border-line bg-surface p-6 md:p-8">
        <p className="text-xl font-semibold">{cs(texts.success)}</p>
        <p className="mt-2 text-lg">{texts.successSignature}</p>
      </div>
    );
  }

  return (
    <form
      action={endpoint}
      method="POST"
      noValidate={hydrated}
      onSubmit={handleSubmit}
      className="border border-text bg-surface"
    >
      <div className="flex items-center justify-between border-b border-text px-4 py-2 md:px-6">
        <p className="label text-text">{texts.title}</p>
        <p className="label" aria-hidden="true">
          {texts.sheet}
        </p>
      </div>

      <input type="hidden" name="_subject" value={texts.subject} />
      {/* Past na roboty: lidé pole nevidí ani na něj nedojdou tabulátorem. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="pole-gotcha">Nevyplňujte</label>
        <input id="pole-gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {fields.map((field, index) => {
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
          className:
            "block w-full bg-transparent px-0 py-1 text-base text-text",
        };
        return (
          <div key={field.name} className="border-b border-line px-4 py-3 last:border-b-0 md:px-6">
            <label htmlFor={id} className="flex items-baseline gap-3">
              <span className="label" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.9375rem] font-medium">
                {cs(texts.fields[field.name].label)}
                {field.required ? null : <span className="font-normal text-muted"> ({texts.optional})</span>}
              </span>
            </label>
            {field.multiline ? (
              <textarea {...common} rows={5} className={cn(common.className, "resize-y")} />
            ) : (
              <input {...common} type={field.name === "web" ? "url" : "text"} inputMode={field.inputMode} />
            )}
            {error ? (
              <p id={`${id}-chyba`} className="mt-1 text-[0.9375rem] font-medium text-text">
                <span aria-hidden="true">× </span>
                {cs(error)}
              </p>
            ) : null}
            {field.name === "message" ? (
              <p id="pole-zasady" className="mt-2 text-[0.9375rem] text-muted">
                {cs(texts.privacyBefore)}
                <a href={site.privacyPath} className="link">
                  {cs(texts.privacyLink)}
                </a>
                {texts.privacyAfter}
              </p>
            ) : null}
          </div>
        );
      })}

      <div className="border-t border-text px-4 py-4 md:px-6">
        <p aria-live="polite" className="sr-only">
          {status === "error" ? "" : announcement}
        </p>
        {status === "error" ? (
          <p role="alert" className="mb-4 border-l-2 border-text pl-3">
            {cs(texts.errorPrefix)} <ContactLink type="email" value={config.EMAIL} /> {texts.errorMiddle}{" "}
            <ContactLink type="phone" value={config.TELEFON} />.
          </p>
        ) : null}
        <button type="submit" disabled={status === "sending"} className={cn(buttonClass.secondary, "w-full px-6 sm:w-auto")}>
          {status === "sending" ? texts.sending : texts.submit}
        </button>
        <noscript>
          <p className="mt-4 text-[0.9375rem]">
            {cs(texts.noscript)} <ContactLink type="email" value={config.EMAIL} />.
          </p>
        </noscript>
      </div>
    </form>
  );
}
