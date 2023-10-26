import Link from "next/link";
import Image from "next/image";
import { ProjectTypes } from "@/types";

//why are my local changes not pushing?
interface ProjectsCardProps {
  projectData: ProjectTypes[];
}

export default function ProjectsCard({ projectData }: ProjectsCardProps) {
  return (
    <>
      {projectData.reverse().map((p) => (
        <div
          className="border border-[#252131] border-r-8 border-b-8 rounded p-4"
          key={p.id}
        >
          <h3>{p.title}</h3>
          <Image
            src={p.image}
            alt={p.image}
            width="400"
            height="400"
            className="pt-2"
          />
          <p>
            <span className="font-bold">Technologies: </span> {p.technologies}
          </p>
          <div className="flex justify-between py-2">
            <Link href={p.deployment} target="_blank" className="button-style">
              Deployment
            </Link>
            <Link href={p.source_code} target="_blank" className="button-style">
              Source Code
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
