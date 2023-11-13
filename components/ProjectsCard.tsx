import Link from "next/link";
import Image from "next/image";
import filterProjects from "@/lib/filterProjects";

export default function ProjectsCard({ projectData }: any) {
  return (
    <>
      {projectData.reverse().map((p: any) => (
        <div
          className="border border-[#252131] border-r-8 border-b-8 rounded p-4"
          key={p.id}
        >
          <h3>{p.title}</h3>
          {p.type[0] === "development" && (
            <Link href={p.source_code} target="_blank">
              <Image
                src={p.image}
                alt={p.image}
                width="400"
                height="400"
                className="pt-2 "
              />
            </Link>
          )}
          {p.type[0] === "ux/ui" && (
            <Link href={`./projects/${p.id}`}>
              <Image
                src={p.image}
                alt={p.image}
                width="400"
                height="400"
                className="pt-2 "
              />
            </Link>
          )}
          <p>
            <span className="font-bold">Technologies: </span> {p.technologies}
          </p>
        </div>
      ))}
    </>
  );
}
