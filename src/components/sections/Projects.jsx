import user_info from "../../data/user_info.js";
import Project from "../Project.jsx";
import { FaLandmark } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

function Projects() {
  return (
    <div className="">
     <h4 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8 flex justify-center items-center gap-2 mt-5">
        <GoProjectRoadmap className="text-blue-500" />
        Projects
     </h4>

    
    <section
      id="projects"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:px-16"
    >
      
      {user_info.projects.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            link={project.link}
          />
        );
      })}
    </section>
    </div>
  );
}

export default Projects;
