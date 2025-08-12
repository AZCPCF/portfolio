import { Button, Image, Typography, useModal } from "cubes-ui";
import image from "../../../assets/logo.svg";
import HomeForm from "./form";
export default function HomeWhoAmI() {
  const { Modal, openModal, closeModal } = useModal();
  return (
    <>
      <Modal className="bg-background text-white !z-[10000]" />
      <section className="md:my-40 lg:my-20 my-10 flex items-center max-lg:flex-wrap gap-2">
        <div className="flex gap-4 flex-col">
          <Typography
            variant="h2"
            className="lg:max-w-3xl leading-snug max-md:text-xl"
          >
            AZCPCF is a <span className="text-primary-main">web designer</span>{" "}
            and <span className="text-primary-main">front-end developer</span>
          </Typography>
          <Typography
            className="text-gray-500 lg:max-w-2xl max-md:text-lg"
            variant="h5"
          >
            He crafts responsive websites where technologies meet creativity
          </Typography>
          <Button
            variant="outline"
            className="text-white w-max rounded-sm"
            onClick={() => {
              openModal({
                content: <HomeForm closeModal={closeModal} />,
                config: { closeWithClickOutside: false },
              });
            }}
          >
            contact me !!
          </Button>
        </div>
        <div>
          <Image
            src={image}
            className="w-[400px] aspect-square max-lg:w-1/2 m-auto  max-lg:my-8 max-sm:w-full"
          />
          <div className="border border-gray-500 flex gap-2 items-center p-2">
            <div className="bg-primary-500 h-6 w-6"></div>
            <Typography variant="h5">
              <span className="text-gray-500">Currently working on</span>{" "}
              Cubes Router
            </Typography>
          </div>
        </div>
      </section>
    </>
  );
}
