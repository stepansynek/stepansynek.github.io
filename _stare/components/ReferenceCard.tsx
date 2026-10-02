import type { Reference } from "@/content/references";
import { cz } from "@/lib/typography";
import { Node } from "./Node";

export function ReferenceCard({ reference }: { reference: Reference }) {
  return (
    <article className="flex h-full flex-col rounded-[3px] border border-hairline bg-white p-6 md:p-8">
      <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
        <Node size={10} />
        {reference.url ? (
          <a href={reference.url} className="underline decoration-1 underline-offset-4 hover:decoration-2">
            {reference.company}
          </a>
        ) : (
          reference.company
        )}
      </h3>
      <dl className="mt-6 space-y-5">
        <div>
          <dt className="text-sm font-semibold">Co potřebovala</dt>
          <dd className="mt-1 leading-relaxed text-muted">{cz(reference.need)}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Co vzniklo</dt>
          <dd className="mt-1 leading-relaxed text-muted">{cz(reference.result)}</dd>
        </div>
      </dl>
      {reference.quote ? (
        <div className="mt-auto pt-8">
          <figure className="border-t border-hairline pt-6">
            <blockquote className="text-lg leading-snug font-medium">„{cz(reference.quote.text)}“</blockquote>
            <figcaption className="mt-3 text-sm text-muted">{reference.quote.author}</figcaption>
          </figure>
        </div>
      ) : null}
    </article>
  );
}
