import { projectData } from "@/lib/projects-data";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <h2 className={"font-libre"}>Projects</h2>
      <div className="grid md:grid-cols-3">
        {projectData.map((p) => (
          <div className="" key={p.id}>
            <h3>{p.title}</h3>
            <Image
              src={p.image}
              alt={p.image}
              width="200"
              height="200"
              className=""
            />
            <div>
              <Link href={p.deployment}>Deployment</Link>
              <Link href={p.source_code}>Source Code</Link>
            </div>
            <p>
              <span className="font-bold">Technologies: </span> {p.technologies}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
