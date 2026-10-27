import { about } from "@/data/portfolio";
import { ArrowUpRight } from "./icons";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-t border-line/70 py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_minmax(0,0.8fr)] xl:gap-14 2xl:gap-20">
            <div className="max-w-md">
              <h2
                id="about-heading"
                className="text-2xl font-medium tracking-[-0.035em] sm:text-[1.7rem]"
              >
                Still learning. Already building.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted">{about.lead}</p>

              <blockquote className="mt-6 border-l border-accent/40 pl-4">
                <p className="text-[15px] italic leading-6 text-foreground/80">
                  &ldquo;{about.quote}&rdquo;
                </p>
              </blockquote>
            </div>

            <div className="max-w-2xl">
              <div className="space-y-4 text-sm leading-7 text-muted">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 xl:col-span-1">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line/70 pt-5 sm:grid-cols-3 xl:grid-cols-2">
                {about.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <a
                href="#contact"
                className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Say hello
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
