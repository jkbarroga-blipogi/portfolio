import { education, skills } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { TechIcon } from "./tech-icons";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative border-t border-line/70 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between xl:gap-12">
            <h2
              id="education-heading"
              className="text-2xl font-medium tracking-[-0.035em] sm:text-[1.7rem]"
            >
              Learning in class and on my own.
            </h2>
            <p className="max-w-xl text-sm leading-6 text-muted">
              A second-year BSIT student at Naga College Foundation, filling the
              gaps between coursework and real projects. Here&apos;s where I am
              and what I&apos;m working toward.
            </p>
          </div>
        </Reveal>

        <div className="mt-6">
          {education.map((item) => (
            <Reveal key={item.program}>
              <div className="grid gap-2 border-t border-line/70 py-5 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-10 lg:grid-cols-[160px_minmax(0,1fr)]">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                    {item.period}
                  </p>
                  <p className="mt-1 text-[10px] text-muted/80">
                    {item.location}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-[15px] font-medium tracking-[-0.01em]">
                      {item.program}
                    </h3>
                    {item.status ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent-soft px-2 py-0.5 font-mono text-[8px] uppercase tracking-[0.14em] text-accent">
                        <span className="size-1 rounded-full bg-accent" />
                        {item.status}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-[13px] text-accent/90">
                    {item.detail}
                  </p>
                  <p className="mt-2.5 max-w-xl text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10">
            <div className="flex items-end justify-between gap-4 border-b border-line/70 pb-3">
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                Technologies
              </h3>
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                Still learning
              </span>
            </div>

            <div className="mt-4 grid gap-x-16 gap-y-5 xl:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.label}
                  className="grid gap-2 border-t border-line/40 pt-4 sm:grid-cols-[130px_minmax(0,1fr)] sm:gap-6"
                >
                  <div>
                    <p className="text-[10px] font-medium text-foreground/90">
                      {group.label}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-4 text-muted">
                      {group.note}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-md border border-line bg-card px-2.5 py-1.5 text-[11px] text-muted transition-colors hover:border-accent/35 hover:text-foreground"
                      >
                        <TechIcon name={item} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 max-w-xl text-[11px] leading-5 text-muted">
              No mastery claims here. If a tool is listed, I&apos;ve used it in a
              class, a project, or both — and I&apos;m still getting better with
              all of them.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
