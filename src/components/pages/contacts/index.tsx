import { Typography } from "cubes-ui";
import { Mail } from "lucide-react";
import Telegram from "../../../assets/telegram";

export default function ContactsComponent() {
  return (
    <div className="grid grid-cols-2 mt-4 max-md:grid-cols-1">
      <div className="flex gap-14 flex-wrap mt-4">
        <Typography variant="h5" className="text-gray-400 max-md:mb-8">
          I’m interested in freelance opportunities, especially projects where I
          can bring fresh ideas and deliver meaningful results. However, if you
          have any other request, question, or collaboration in mind, don’t
          hesitate to get in touch. Whether it’s a quick inquiry, a detailed
          proposal, or just a friendly “hello,” my inbox is always open. Let’s
          connect and see how we can create something exceptional together.
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
  );
}
