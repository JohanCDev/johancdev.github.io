"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

type Props = {
  projectsToDisplay: typeof projectsData;
  title: string;
};

export default function Projects({projectsToDisplay, title}: Props) {
  const { ref } = useSectionInView("Projets", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{title}</SectionHeading>
      <div>
        {projectsToDisplay.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
