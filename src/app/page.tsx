import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Education />
      <Stack />
      <Contact />
    </>
  );
}
