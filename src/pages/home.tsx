import { Container } from "cubes-ui";
import HomeProjects from "../components/pages/home/projects";
import HomeQuote from "../components/pages/home/quote";
import HomeSkills from "../components/pages/home/skills";
import HomeWhoAmI from "../components/pages/home/whoami";
export default function Home() {
  return (
    <Container className="px-0">
      <HomeWhoAmI />
      <HomeQuote />
      <HomeProjects />
      <HomeSkills />
    </Container>
  );
}
