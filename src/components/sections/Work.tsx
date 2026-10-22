import type { Project } from "@/content/projects";
import { work } from "@/content/texts";
import { visibleProjects } from "@/lib/projects";
import { cs, t } from "@/lib/typography";
import { Photo } from "../Photo";
import { Section } from "../Section";

/** Rozsah a rok jako jeden řádek údajů pod popisem. */
function Scope({ scope, year }: { scope: string[]; year?: number }) {
  return (
    <p className="small mt-5 text-ink-soft">
      {cs(scope.join(", "))}
      {year ? `, ${year}` : null}
    </p>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const name = project.consent ? project.client : project.anonymous;

  if (project.status !== "published") {
    return (
      <article className="border-t-[length:var(--rule)] border-ink pt-5">
        <p className="small font-bold">{work.inProgress}</p>
        <h3 className="h2 mt-3">{t(name)}</h3>
        {project.summary ? <p className="measure mt-4 text-lg">{t(project.summary)}</p> : null}
        <Scope scope={project.scope} year={project.year} />
      </article>
    );
  }

  return (
    <article className="border-t-[length:var(--rule)] border-ink pt-5">
      {project.images?.length ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {project.images.map((image) => (
            <Photo key={image.src} name={image.src} alt={image.alt} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[3/2] w-full" />
          ))}
        </div>
      ) : null}
      <h3 className="h2 mt-6">{t(name)}</h3>
      {project.summary ? <p className="measure mt-3 text-lg">{t(project.summary)}</p> : null}
      <Scope scope={project.scope} year={project.year} />
      {project.quote ? (
        <figure className="mt-8 bg-orange p-6 text-overprint md:p-8">
          <blockquote className="measure text-xl font-medium">„{t(project.quote)}“</blockquote>
          {project.quoteAuthor ? <figcaption className="small mt-3">{t(project.quoteAuthor)}</figcaption> : null}
        </figure>
      ) : null}
    </article>
  );
}

/** Skutečné zakázky z src/content/projects.ts. Bez souhlasu klienta se v produkci neukáže nic. */
export function Work() {
  return (
    <Section id="prace" title={work.title}>
      <ul className="grid gap-14">
        {visibleProjects.map((project) => (
          <li key={project.slug}>
            <ProjectRow project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
