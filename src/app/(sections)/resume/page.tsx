import { SectionHeading } from "@/components/section-heading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Resume", "/resume", "Kyle Barroga's résumé page. No résumé has been uploaded yet.");

export default function ResumePage() {
  return (
    <section className="portfolio-section" aria-labelledby="resume-heading">
      <div className="content-shell">
        <SectionHeading
          id="resume-heading"
          title="Resume"
          description="No résumé uploaded yet."
          href="/resume"
          standalone
        />
      </div>
    </section>
  );
}
