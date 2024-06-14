import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-7 mt-20">
        {projects &&
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
      <div className="flex justify-center mt-10 pb-10">
        <a
          href="https://github.com/SamarakoonRMSK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button gradientDuoTone="purpleToBlue">Show more</Button>
        </a>
      </div>
    </>
  );
}
