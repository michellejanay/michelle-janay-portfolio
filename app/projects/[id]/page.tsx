import getAllProjects from "@/lib/getAllProjects";

export default async function ProjectDetails({ params }) {
  const projects = await getAllProjects();
  const project = projects.find((p) => Number(p.id) === Number(params.id));
  console.log(project);

  return (
    <main>
      <h1>{project.title}</h1>
    </main>
  );
}
