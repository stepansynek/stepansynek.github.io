"use client";

import { useEffect, useRef, useState } from "react";
import { config, site } from "@/content/config";
import { form as texts } from "@/content/texts";
import { isPlaceholder } from "@/lib/config";
import { cn } from "@/lib/cn";
import { cs } from "@/lib/typography";
import { Arrow, buttonClass } from "./Button";
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
      <div ref={successRef} tabIndex={-1} role="status" className="rounded-[2rem] bg-surface p-8 text-text md:p-10">
        <span aria-hidden="true" className="grid size-12 place-items-center rounded-full bg-accent text-xl font-bold">
          ✓
        </span>
        <p className="mt-6 text-2xl font-[700] tracking-tight [font-stretch:110%]">{cs(texts.success)}</p>
        <p className="mt-2 text-lg text-muted">{texts.successSignature}</p>
      </div>
    );
  }

  return (
    <form
      action={endpoint}
      method="POST"
      noValidate={hydrated}
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-surface p-6 text-text shadow-[0_40px_80px_-30px_rgb(0_0_0/0.5)] md:p-8"
    >
      <p className="text-xl font-[700] tracking-tight [font-stretch:110%]">{texts.title}</p>

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
              "block w-full rounded-2xl border bg-bg px-4 py-3 text-base text-text transition-[border-color,background-color,box-shadow] duration-200 hover:border-line-strong focus:bg-surface focus:shadow-[0_0_0_4px_rgb(255_199_0/0.35)]",
              error ? "border-text" : "border-line",
            ),
          };
          const wide = field.multiline || field.name === "contact" || field.name === "source";
          return (
            <div key={field.name} className={cn(wide && "sm:col-span-2")}>
              <label htmlFor={id} className="mb-1.5 block text-[0.9375rem] font-semibold">
                {cs(texts.fields[field.name].label)}
                {field.required ? null : <span className="font-normal text-muted"> ({texts.optional})</span>}
              </label>
              {field.multiline ? (
                <textarea {...common} rows={5} className={cn(common.className, "resize-y")} />
              ) : (
                <input {...common} type={field.name === "web" ? "url" : "text"} inputMode={field.inputMode} />
              )}
              {error ? (
                <p id={`${id}-chyba`} className="mt-1.5 text-[0.9375rem] font-medium">
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
      </div>

      <div className="mt-6">
        <p aria-live="polite" className="sr-only">
          {status === "error" ? "" : announcement}
        </p>
        {status === "error" ? (
          <p role="alert" className="mb-4 rounded-2xl bg-accent/25 px-4 py-3">
            {cs(texts.errorPrefix)} <ContactLink type="email" value={config.EMAIL} /> {texts.errorMiddle}{" "}
            <ContactLink type="phone" value={config.TELEFON} />.
          </p>
        ) : null}
        <button type="submit" disabled={status === "sending"} className={cn(buttonClass.dark, "w-full disabled:cursor-wait disabled:opacity-60 sm:w-auto")}>
          {status === "sending" ? texts.sending : texts.submit}
          <Arrow />
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
