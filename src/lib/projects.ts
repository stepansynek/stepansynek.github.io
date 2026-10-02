import { projects, type Project } from "@/content/projects";

const isProduction = process.env.NODE_ENV === "production";

/** Projekty, které se smí zobrazit: placeholder jen ve vývoji, published jen se souhlasem. */
export const visibleProjects: Project[] = projects.filter((project) => {
  if (project.status === "placeholder") return !isProduction;
  if (project.status === "published") return project.consent;
  return true;
});
