import Link from "next/link";
import Image from "next/image";

export default function ProjectsCard({ projectData }: any) {
  return (
    <>
      {projectData.map((p: any) => (
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
        </div>
      ))}
    </>
  );
}
