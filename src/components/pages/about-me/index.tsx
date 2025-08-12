import { Image, Typography } from "cubes-ui";

import logo2 from "../../../assets/logo-2.svg";
export default function AboutMeComponent() {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1">
      <div className="flex gap-14 flex-wrap mt-10 text-gray-400">
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
  );
}
