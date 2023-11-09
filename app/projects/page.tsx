"use client";
import ProjectsCard from "@/components/ProjectsCard";
import { projectData } from "@/lib/projects-data";
import { useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(projectData);

  const filterProjects = (type: any) => {
    if (type === "view-all") {
      setProjects(projectData);
    } else {
      let filteredProjects = projects.filter((p) => p.type[0] === type);
      setProjects([...filteredProjects]);
    }
  };

  return (
    <>
      <h2 className={"font-libre mb-4 lg:max-w-[70%] lg:m-auto"}>Projects</h2>
      <section className={"font-libre mb-4 lg:max-w-[70%] lg:m-auto"}>
        <button onClick={() => filterProjects("ux/ui")}>UX/UI</button>
        <button onClick={() => filterProjects("development")}>
          Development
        </button>
        <button onClick={() => filterProjects("view-all")}>View All</button>
      </section>
      <div className="pt-8 grid gap-8 md:grid-cols-3 justify-center lg:max-w-[75%] lg:m-auto">
        <ProjectsCard projectData={projects} />
      </div>
    </>
  );
}
