import ProjectsCard from "@/components/ProjectsCard";
import getAllProjects from "@/lib/getAllProjects";


export default async function Projects() {
  const projects = await getAllProjects();

  return (
    <>
      <h2 className={"font-libre mb-4 lg:max-w-[70%] lg:m-auto"}>Projects</h2>
      <section className={"font-libre mb-4 lg:max-w-[70%] lg:m-auto"}>
        <button>UX/UI</button>
        <button>Development</button>
        <button>View All</button>
      </section>
      <div className="pt-8 grid gap-8 md:grid-cols-3 justify-center lg:max-w-[75%] lg:m-auto">
        <ProjectsCard projectData={projects} />
      </div>
    </>
  );
}
