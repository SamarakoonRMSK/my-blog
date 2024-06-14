import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg dark:bg-slate-800">
      <Link to={project.link} target="_blank">
        <div className="image-wrapper h-44">
          <img className="zoom-image" src={project.image} alt="project image" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            {project.dis}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {project.technology &&
            project.technology.map((tec, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200  dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2"
              >
                {tec}
              </span>
            ))}
        </div>
      </Link>
    </div>
  );
}
