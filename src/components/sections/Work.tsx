import type { Project } from "@/content/projects";
import { work } from "@/content/texts";
import { visibleProjects } from "@/lib/projects";
import { cs, t } from "@/lib/typography";
import { Photo } from "../Photo";
import { Section } from "../Section";

function Scope({ scope, year }: { scope: string[]; year?: number }) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {scope.map((item) => (
        <li key={item} className="rounded-full border border-line bg-bg px-3 py-1 text-[0.9375rem]">
          {cs(item)}
        </li>
      ))}
      {year ? <li className="rounded-full border border-line px-3 py-1 text-[0.9375rem] text-muted">{year}</li> : null}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const name = project.consent ? project.client : project.anonymous;

  if (project.status !== "published") {
    return (
      <article className="card relative overflow-hidden p-6 md:p-10">
        <div aria-hidden="true" className="aurora aurora-1 -right-20 -bottom-24 size-72 bg-accent opacity-40" />
        <div className="relative">
          <p className="flex items-center gap-2.5 text-[0.9375rem] font-semibold">
            <span className="live-dot" aria-hidden="true" />
            {work.inProgress}
          </p>
          <h3 className="mt-4 text-[clamp(1.75rem,4vw,3rem)] leading-[1.05] font-[740] tracking-[-0.035em] [font-stretch:115%]">
            {t(name)}
          </h3>
          {project.summary ? <p className="prose-width mt-4 text-lg text-muted">{t(project.summary)}</p> : null}
          <Scope scope={project.scope} year={project.year} />
        </div>
      </article>
    );
  }

  return (
    <article className="card overflow-hidden">
      {project.images?.length ? (
        <div className="grid gap-1 p-1 sm:grid-cols-2">
          {project.images.map((image) => (
            <Photo key={image.src} name={image.src} alt={image.alt} sizes="(min-width: 640px) 50vw, 100vw" className="aspect-[3/2] w-full rounded-[1.25rem]" />
          ))}
        </div>
      ) : null}
      <div className="p-6 md:p-10">
        <h3 className="h3">{t(name)}</h3>
        {project.summary ? <p className="prose-width mt-3 text-muted">{t(project.summary)}</p> : null}
        <Scope scope={project.scope} year={project.year} />
        {project.quote ? (
          <figure className="mt-8 border-t border-line pt-6">
            <blockquote className="prose-width text-xl font-medium">„{t(project.quote)}“</blockquote>
            {project.quoteAuthor ? <figcaption className="mt-2 text-muted">{t(project.quoteAuthor)}</figcaption> : null}
          </figure>
        ) : null}
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Section id="prace" eyebrow="Práce" title={work.title}>
      <ul className="grid gap-4">
        {visibleProjects.map((project) => (
          <li key={project.slug} data-reveal>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
