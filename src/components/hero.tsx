import { site, socials } from "@/data/portfolio";
import { ArrowUpRight, SocialIcon } from "./icons";
import { LivePortrait } from "./live-portrait";
import { TechMarquee } from "./tech-marquee";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="pt-28 pb-6 sm:pb-10 lg:pt-20">
      <div className="content-shell">
        <div className="grid items-start gap-8 md:grid-cols-[288px_minmax(0,1fr)] xl:gap-12">
          <LivePortrait />
          <div>
            <h1 id="hero-name" className="section-title text-3xl sm:text-4xl">{site.name}</h1>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.05em] text-muted">Student Developer</p>
            <p className="mt-6 text-[15px] leading-7 text-muted">I&apos;m a second-year BSIT student at Naga College Foundation, building web applications with React, PHP, and NestJS.</p>
            <p className="mt-4 text-[15px] leading-7 text-muted">{site.tagline}</p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target={social.icon === "mail" ? undefined : "_blank"} rel={social.icon === "mail" ? undefined : "noreferrer"} className="inline-flex items-center gap-1.5 py-1 font-mono text-xs text-muted transition-colors hover:text-foreground">
                  <SocialIcon name={social.icon} className="size-3.5" />{social.label}<ArrowUpRight className="size-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <TechMarquee />
      </div>
    </section>
  );
}
