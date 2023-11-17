import getAllProjects from "@/lib/getAllProjects";
import Link from "next/link";
import ArrowLeft from "@/components/ArrowLeft";

export default async function ProjectDetails({
  params,
}: {
  params: React.ReactNode;
}) {
  const projects = await getAllProjects();
  const project = projects.find((p) => Number(p.id) === Number(params.id));

  return (
    <main className="">
      <Link href={"./"} className="flex">
        {<ArrowLeft />}Back
      </Link>
      <h1>{project.title}</h1>
    </main>
  );
}
