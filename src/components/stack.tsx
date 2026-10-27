import { skills } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { TechIcon } from "./tech-icons";

export function Stack({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="stack" aria-labelledby="stack-heading" className="portfolio-section">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            id="stack-heading"
            title="Stack"
            description="The technologies I use in class and in my projects, plus the things I'm learning next."
            href="/stack"
            standalone={standalone}
          />
        </Reveal>
        <div className="grid gap-5 xl:grid-cols-2">
          {skills.map((group) => (
            <Reveal key={group.label}>
              <div className="h-full rounded-xl border border-line bg-card/85 p-5">
                <h3 className="text-sm font-medium">{group.label}</h3>
                <p className="mt-1 text-xs leading-6 text-muted">{group.note}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="inline-flex items-center gap-2 rounded-lg border border-line bg-background px-3 py-2 text-xs text-muted">
                      <TechIcon name={item} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-xs leading-6 text-muted">No mastery claims here. If a tool is listed, I&apos;ve used it in a class, a project, or both — and I&apos;m still getting better with all of them.</p>
      </div>
    </section>
  );
}
