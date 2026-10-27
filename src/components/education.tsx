import { education } from "@/data/portfolio";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Education({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="education" aria-labelledby="education-heading" className="portfolio-section">
      <div className="content-shell">
        <Reveal>
          <SectionHeading
            id="education-heading"
            title="Education"
            description="Learning in class and on my own. A second-year BSIT student at Naga College Foundation, filling the gaps between coursework and real projects."
            href="/education"
            standalone={standalone}
          />
        </Reveal>
        <div>
          {education.map((item, index) => (
            <Reveal key={item.program}>
              <div className={`grid gap-4 border-b border-line/80 pb-7 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-8 ${index > 0 ? "pt-7" : ""}`}>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">{item.period}</p>
                  <p className="mt-2 text-xs leading-5 text-muted">{item.location}</p>
                </div>
                <div>
                  <h3 className="text-base font-medium tracking-tight">{item.program}</h3>
                  <p className="mt-1 text-[13px] text-accent">{item.detail}</p>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
