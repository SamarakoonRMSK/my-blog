import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

export default function Projects() {
  return (
    <div className="flex flex-wrap justify-center gap-7 mt-20">
      {projects &&
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
    </div>
  );
}
