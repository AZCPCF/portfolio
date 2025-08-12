import { Container } from "cubes-ui";
import ShowAll from "../../ui/show-all";
import Title from "../../ui/title";
import ProjectCard from "../projects/card";
import { projects } from "../../../data/projects";
export default function HomeProjects() {
  return (
    <Container className="mt-12 px-0">
      <div className="grid grid-cols-12 gap-4">
        <Title className="col-span-5 max-lg:col-span-6 max-md:col-span-7">
          projects
        </Title>
        <ShowAll
          className="col-span-7 max-lg:col-span-6 max-md:col-span-5"
          to="works"
        />
      </div>
      <div className="grid grid-cols-3 mt-8 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">
        {projects.map((item) => (
          <ProjectCard {...item} key={crypto.randomUUID()} />
        ))}
      </div>
    </Container>
  );
}
