import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Studies from "@/components/studies";
import { projectsData, studentProjectsData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Studies />
      <Experience />
      <Projects projectsToDisplay={projectsData} title="Mes projets" />
      <Projects projectsToDisplay={studentProjectsData} title="Mes projets étudiants" />
      <Skills />
      <Contact />
    </main>
  );
}
