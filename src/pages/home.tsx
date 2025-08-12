import { Container } from "cubes-ui";
import HomeProjects from "../components/pages/home/projects";
import HomeQuote from "../components/pages/home/quote";
import HomeSkills from "../components/pages/home/skills";
import HomeWhoAmI from "../components/pages/home/whoami";
import HomeAboutMe from "../components/pages/home/about-me";
import HomeContacts from "../components/pages/home/contacts";
export default function Home() {
  return (
    <Container className="px-0 *:my-20">
      <HomeWhoAmI />
      <HomeQuote />
      <HomeProjects />
      <HomeSkills />
      <HomeAboutMe />
      <HomeContacts />
    </Container>
  );
}
