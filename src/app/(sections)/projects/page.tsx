import { Projects } from "@/components/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Projects", "/projects", "Kyle's web development projects: NCFDocs, AURORA, Matcha Landing Page, and Shelter API.");

export default function ProjectsPage() {
  return <Projects standalone />;
}
