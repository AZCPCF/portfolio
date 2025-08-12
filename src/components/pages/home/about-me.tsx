import { Container } from "cubes-ui";
import Title from "../../ui/title";
import AboutMeComponent from "../about-me";
export default function HomeAboutMe() {
  return (
    <Container className="mt-12 px-0">
      <div className="grid grid-cols-12 gap-4">
        <Title className="col-span-8 max-lg:col-span-9 max-md:col-span-6">
          about-me
        </Title>
      </div>
      <AboutMeComponent />
    </Container>
  );
}
