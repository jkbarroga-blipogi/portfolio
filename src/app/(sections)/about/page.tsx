import { About } from "@/components/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("About", "/about", "Get to know Kyle Barroga, a student developer learning by building real projects.");

export default function AboutPage() {
  return <About standalone />;
}
