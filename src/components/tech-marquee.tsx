"use client";

import { useState } from "react";
import { TechIcon } from "./tech-icons";

const technologies = ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "PHP", "NestJS"];

export function TechMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <button
      type="button"
      aria-label={paused ? "Resume technology animation" : "Pause technology animation"}
      aria-pressed={paused}
      title={paused ? "Click to resume" : "Click to pause"}
      onClick={() => setPaused((value) => !value)}
      className="tech-marquee mt-10 block w-full cursor-pointer overflow-hidden border-y border-line/70 py-6 text-left sm:mt-12"
    >
      <span className="tech-marquee-track" style={{ animationPlayState: paused ? "paused" : "running" }}>
        {[false, true].map((copy) => (
          <span key={String(copy)} aria-hidden={copy || undefined} className={`tech-marquee-group ${copy ? "tech-marquee-copy" : ""}`}>
            {technologies.map((name) => (
              <span key={name} className="inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm text-muted">
                <TechIcon name={name} className="size-5" />{name}
              </span>
            ))}
          </span>
        ))}
      </span>
    </button>
  );
}
