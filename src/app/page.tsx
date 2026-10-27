import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Education />
      <Contact />
    </>
  );
}
