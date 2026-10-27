import Link from "next/link";
import { ArrowRight } from "./icons";

type SectionHeadingProps = {
  id: string;
  title: string;
  description: string;
  href: string;
  standalone?: boolean;
};

export function SectionHeading({
  id,
  title,
  description,
  href,
  standalone = false,
}: SectionHeadingProps) {
  const Heading = standalone ? "h1" : "h2";

  return (
    <header className="mb-8 border-b border-line/80 pb-6">
      <div className="flex items-center justify-between gap-4">
        <Heading id={id} className="section-title text-2xl sm:text-[1.75rem]">
          {title}
        </Heading>
        {!standalone && (
          <Link href={href} className="inline-flex shrink-0 items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted hover:text-foreground">
            View all<span className="sr-only"> {title}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        )}
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">{description}</p>
    </header>
  );
}
