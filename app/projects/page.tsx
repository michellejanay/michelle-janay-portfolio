import ProjectsCard from "@/components/ProjectsCard";

export default function Projects() {
  return (
    <>
      <h2 className={"font-libre mb-4 lg:max-w-[70%] lg:m-auto"}>Projects</h2>
      <div className="pt-8 grid gap-8 md:grid-cols-3 justify-center lg:max-w-[75%] lg:m-auto">
        <ProjectsCard />
      </div>
    </>
  );
}
