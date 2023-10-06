import { projectData } from "@/lib/projects-data";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <div className="">
        <h2 className={"font-libre mb-4 lg:max-w-[70%] lg:m-auto"}>Projects</h2>
        <div className="pt-8 grid gap-4 md:grid-cols-3 justify-center lg:max-w-[75%] lg:m-auto">
          {projectData.map((p) => (
            <div className="" key={p.id}>
              <h3>{p.title}</h3>
              <Image
                src={p.image}
                alt={p.image}
                width="400"
                height="400"
                className=""
              />
              <div>
                <Link href={p.deployment} target="_blank">Deployment</Link>
                <Link href={p.source_code} target="_blank">Source Code</Link>
              </div>
              <p>
                <span className="font-bold">Technologies: </span>{" "}
                {p.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
