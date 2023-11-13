import { promises as fs } from "fs";

export default async function getAllProjects() {
  const projectsData = await fs.readFile(
    process.cwd() + "/lib/projects-data.json",
    "utf8"
  );

  const projects = JSON.parse(projectsData);

  if (!projects) throw new Error("failed to import projects data");

  return [...projects];
}


