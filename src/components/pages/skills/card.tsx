import { Typography } from "cubes-ui";

export default function SkillCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className=" border-gray-500 border h-max *:p-2" dir="ltr">
      <Typography variant="h4">{title}</Typography>
      <div className="border text-gray-500 border-gray-500 flex flex-wrap p-2">
        {items.map((item) => (
          <p className="px-1 text-right" key={crypto.randomUUID()}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
