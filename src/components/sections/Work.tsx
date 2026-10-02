import type { Project } from "@/content/projects";
import { work } from "@/content/texts";
import { visibleProjects } from "@/lib/projects";
import { t } from "@/lib/typography";
import { Photo } from "../Photo";
import { Section } from "../Section";

function Scope({ scope, year }: { scope: string[]; year?: number }) {
  return (
    <p className="label mt-4">
      {scope.join(" · ")}
      {year ? ` · ${year}` : null}
    </p>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const name = project.consent ? project.client : project.anonymous;

  if (project.status !== "published") {
    return (
      <article className="border border-line bg-surface p-6 md:p-8">
        <p className="label">{work.inProgress}</p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">{t(name)}</h3>
        {project.summary ? <p className="prose-width mt-3">{t(project.summary)}</p> : null}
        <Scope scope={project.scope} year={project.year} />
      </article>
    );
  }

  return (
    <article className="border border-line bg-surface">
      {project.images?.length ? (
        <div className="grid gap-px border-b border-line bg-line sm:grid-cols-2">
          {project.images.map((image) => (
            <Photo key={image.src} name={image.src} alt={image.alt} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[3/2] w-full" />
          ))}
        </div>
      ) : null}
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold tracking-tight">{t(name)}</h3>
        {project.summary ? <p className="prose-width mt-3">{t(project.summary)}</p> : null}
        <Scope scope={project.scope} year={project.year} />
        {project.quote ? (
          <figure className="mt-6 border-t border-line pt-6">
            <blockquote className="prose-width text-lg font-medium">„{t(project.quote)}“</blockquote>
            {project.quoteAuthor ? <figcaption className="mt-2 text-muted">{t(project.quoteAuthor)}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </article>
  );
}

export function Work({ number }: { number: string }) {
  return (
    <Section id="prace" number={number} title={work.title}>
      <ul className="grid gap-4 md:gap-6">
        {visibleProjects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
