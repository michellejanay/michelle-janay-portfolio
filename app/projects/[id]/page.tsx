import getAllProjects from "@/lib/getAllProjects";
import Link from "next/link";
import ArrowLeft from "@/components/ArrowLeft";
import Lush from "@/components/lush/page";

export default async function ProjectDetails({ params }) {
  const projects = await getAllProjects();
  const project = projects.find((p) => Number(p.id) === Number(params.id));

  return (
    <main className="">
      <Link href={"./"} className="flex">
        {<ArrowLeft />} Back
      </Link>
      {project.title && <h1>{project.title}</h1>}
      {project.title.includes("Lush") && <Lush />}
    </main>
  );
}
