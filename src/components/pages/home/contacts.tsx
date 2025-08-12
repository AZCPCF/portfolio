import { Container, Typography } from "cubes-ui";
import { Mail } from "lucide-react";
import Telegram from "../../../assets/telegram";
import Title from "../../ui/title";
export default function HomeContacts() {
  return (
    <Container className="mt-12 px-0">
      <div className="grid grid-cols-12 gap-4">
        <Title className="col-span-7 max-lg:col-span-8 max-md:col-span-4">
          contacts
        </Title>
      </div>
      <div className="grid grid-cols-2 mt-4 max-md:grid-cols-1">
        <div className="flex gap-14 flex-wrap mt-4">
          <Typography variant="h5" className="text-gray-400 max-md:mb-8">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Typography>
        </div>
        <div className="flex justify-end items-end max-md:items-center max-md:justify-center">
          <div className="border border-gray-500 p-4 flex gap-4 w-max max-md:w-full flex-col flex-wrap ">
            <Typography variant="h4">Message me here</Typography>
            <div className="flex gap-2 items-center">
              <Telegram />
              <Typography variant="p">azcpcf</Typography>
            </div>
            <div className="flex gap-2 items-center text-gray-200">
              <Mail />
              <Typography variant="p">99.a.cpcf.r.99@gmail.com</Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
