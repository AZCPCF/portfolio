import { Container, Image, Typography } from "cubes-ui";
import Title from "../../ui/title";
import logo2 from "../../../assets/logo-2.svg";
export default function HomeAboutMe() {
  return (
    <Container className="mt-12 px-0">
      <div className="grid grid-cols-12 gap-4">
        <Title className="col-span-8 max-lg:col-span-9 max-md:col-span-6">
          about-me
        </Title>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="flex gap-14 flex-wrap mt-10">
          <Typography variant="h4">Hello, i’m Alisan!</Typography>
          <Typography variant="h4">
            I’m a front-end developer . I can develop responsive websites from
            scratch and raise them into modern user-friendly web experiences.
          </Typography>
          <Typography variant="h4">
            Transforming my creativity and knowledge into a websites has been my
            passion for a few year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </Typography>
        </div>
        <div className="flex justify-end max-md:justify-center">
          <Image src={logo2} />
        </div>
      </div>
    </Container>
  );
}
