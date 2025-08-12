import { Typography } from "cubes-ui";
import { Copyright, Figma, Github } from "lucide-react";
import Logo from "../../../assets/logo";
import Telegram from "../../../assets/telegram";
import { Link } from "../../../router";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 py-10">
      <div className="flex  justify-between max-sm:flex-wrap">
        <div className="flex flex-col gap-8 max-sm:w-full">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <h5>AZCPCF</h5>
            <h6 className="text-gray-400 pl-4">99.a.cpcf.r.99@gmail.com</h6>
          </Link>
          <Typography variant="h6">
            Web designer and front-end developer
          </Typography>
        </div>
        <div className="flex flex-wrap justify-start max-sm:mt-8 gap-3">
          <Typography className="w-full" variant="h3">
            Media
          </Typography>
          <div className="w-full flex gap-3 **:text-gray-300">
            <a
              target="_blank"
              className="w-max h-max"
              href="https://github.com/AZCPCF/"
            >
              <Github />
            </a>
            <a
              className="w-max h-max"
              target="_blank"
              href="https://www.figma.com/design/gbPD0E1kBCpPLYedJjQRJK/Portfolio--Community-?node-id=1-2&t=sBSOF5P4WP6U8Epy-0"
            >
              <Figma />
            </a>

            <a
              className="w-max h-max"
              target="_blank"
              href="https://www.t.me/azcpcf"
            >
              <Telegram />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 gap-2 text-gray-300">
        <Copyright /> Made by AZCPCF
      </div>
    </footer>
  );
}
