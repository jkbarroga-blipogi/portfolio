import Image from "next/image";
import { projects, site, type Project } from "@/data/portfolio";
import { ArrowRight, ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

const methodTone: Record<string, string> = {
  GET: "text-sky-700 dark:text-sky-400",
  POST: "text-accent",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const live = project.status === "Live";

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-line bg-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_24px_60px_-42px_rgba(0,0,0,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line/80 bg-surface">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <>
            <div aria-hidden className="absolute inset-0 dot-grid opacity-40" />

            <span
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[7rem] italic leading-none text-foreground/[0.06]"
            >
              {project.mark}
            </span>

            {project.endpoints ? (
              <div className="absolute inset-0 grid place-items-center p-5">
                <div className="w-full max-w-[235px] rounded-lg border border-line bg-background/85 p-3.5 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.4)] backdrop-blur">
                  <div className="flex items-center gap-1.5 border-b border-line pb-2.5">
                    <span className="size-1.5 rounded-full bg-accent/60" />
                    <span className="size-1.5 rounded-full bg-muted/40" />
                    <span className="size-1.5 rounded-full bg-muted/40" />
                    <span className="ml-auto font-mono text-[7px] uppercase tracking-[0.18em] text-muted">
                      shelter.api
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-2">
                    {project.endpoints.map((endpoint) => (
                      <li
                        key={`${endpoint.method}-${endpoint.path}`}
                        className="flex items-center gap-2 font-mono text-[9px]"
                      >
                        <span
                          className={`w-8 shrink-0 text-[7px] font-semibold uppercase tracking-[0.1em] ${methodTone[endpoint.method]}`}
                        >
                          {endpoint.method}
                        </span>
                        <span className="text-muted">{endpoint.path}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </>
        )}

        <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/45 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-white backdrop-blur-md">
          <span
            className={`size-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-amber-400"}`}
          />
          {project.status}
        </div>

        <div className="absolute top-3 right-3 z-10 grid size-7 place-items-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-transparent group-hover:bg-foreground group-hover:text-background">
          <ArrowUpRight className="size-3.5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-2 pt-4 pb-1">
        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>
        <div className="mt-1.5 flex items-center justify-between gap-3">
          <h3 className="text-[17px] font-medium tracking-[-0.02em]">
            {project.title}
          </h3>
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
            {project.year}
          </span>
        </div>
        <p className="mt-1.5 text-pretty text-[13px] leading-6 text-muted">
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-line bg-background px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <span className="sr-only"> (opens in a new tab)</span>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative border-t border-line/70 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between xl:gap-12">
            <h2
              id="projects-heading"
              className="text-2xl font-medium tracking-[-0.035em] sm:text-[1.7rem]"
            >
              Things I&apos;ve built while learning.
            </h2>
            <p className="max-w-xl text-sm leading-6 text-muted">
              Four real projects — three live sites and one backend API. No
              client work or invented metrics, just what I&apos;ve built so far.
            </p>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              className="h-full"
              delay={(index % 2) * 70}
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-7 flex justify-center">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              More on GitHub
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
