import React from "react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
  isProject: boolean;
}) {
  return <div>{children}</div>;
}
