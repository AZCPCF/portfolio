import { Container } from "cubes-ui";
import ProjectCard from "../components/pages/projects/card";
import PageTitle from "../components/ui/page-title";
import Title from "../components/ui/title";
import { projects, smallProjects } from "../data/projects";

export default function Projects() {
  return (
    <Container className="px-0">
      <PageTitle>projects</PageTitle>
      <p className="mt-4 text-gray-400">List of my projects</p>
      <div className="mt-20">
        <Title>complete-apps</Title>
        <div className="grid grid-cols-3 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {projects.map((item) => (
            <ProjectCard {...item} key={crypto.randomUUID()} />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Title>small-projects</Title>
        <div className="grid grid-cols-3 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {smallProjects.map((item) => (
            <ProjectCard {...item} key={crypto.randomUUID()} />
          ))}
        </div>
      </div>
    </Container>
  );
}
