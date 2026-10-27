import { site, socials } from "@/data/portfolio";
import { ArrowUpRight, SocialIcon } from "./icons";
import { LivePortrait } from "./live-portrait";
import { TechIcon } from "./tech-icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-name" className="pt-28 pb-12 sm:pb-16 lg:pt-16">
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8 lg:px-10">
        <LivePortrait />
        <h1 id="hero-name" className="mt-7 font-mono text-3xl font-medium tracking-[-0.045em] sm:text-4xl">{site.name}</h1>
        <p className="mt-3 font-mono text-[11px] tracking-[0.05em] text-muted">Student Developer</p>
        <p className="mt-6 max-w-2xl text-[15px] leading-7 text-muted">I&apos;m a second-year BSIT student at Naga College Foundation, building web applications with React, PHP, and NestJS.</p>
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-muted">I learn by turning ideas into real projects. From a school document service to a shelter API, each build is a chance to understand something new.</p>
        <div className="mt-6 flex flex-wrap gap-3">{socials.map((social) => <a key={social.label} href={social.href} className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs text-muted transition-colors hover:bg-surface hover:text-foreground"><SocialIcon name={social.icon} className="size-3.5" />{social.label}<ArrowUpRight className="size-3" /></a>)}</div>
        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-4 border-t border-line pt-6">{["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "PHP", "NestJS"].map((name) => <a key={name} href="#stack" className="inline-flex items-center gap-2 text-xs text-muted hover:text-foreground"><TechIcon name={name} />{name}</a>)}</div>
      </div>
    </section>
  );
}
