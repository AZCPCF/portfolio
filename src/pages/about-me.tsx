import { Container } from "cubes-ui";
import AboutMeComponent from "../components/pages/about-me";
import PageTitle from "../components/ui/page-title";
import HomeSkills from "../components/pages/home/skills";

export default function AboutMe() {
  return (
    <Container className="px-0">
      <PageTitle>about-me</PageTitle>
      <p className="mt-4">who am i?</p>
      <div className="mt-8">
        <AboutMeComponent />
      </div>
      <HomeSkills />
    </Container>
  );
}
