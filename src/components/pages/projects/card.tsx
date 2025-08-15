import { Button, Image, Typography } from "cubes-ui";

export default function ProjectCard({
  src,
  languages,
  title,
  description,
  buttons,
}: {
  src?: string;
  languages: string[];
  title: string;
  description: string;
  buttons: { github: string; live?: string };
}) {
  return (
    <div className="w-full border border-gray-500 hover:shadow-lg duration-200 hover:scale-105 h-max">
      <Image src={src || ""} className="!aspect-video !rounded-none"/>
      <div className="border border-gray-500 flex flex-wrap p-2">
        {languages.map((item) => (
          <p className="px-1" key={crypto.randomUUID()}>
            {item}
          </p>
        ))}
      </div>
      <div className="border border-gray-500 p-2 *:mt-4">
        <div>
          <Typography variant="h3">{title}</Typography>
          <Typography variant="h6" className="text-gray-400">
            {description}
          </Typography>
        </div>
        <div className="flex gap-2">
          {buttons.live && (
            <Button
            size="sm"
              variant="outline"
              onClick={() => {
                window.open(buttons.live);
              }}
            >
              live {"<~>"}
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              window.open(buttons.github);
            }}
          >
            Github {">="}
          </Button>
        </div>
      </div>
    </div>
  );
}
