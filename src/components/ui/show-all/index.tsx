import { cn } from "cubes-ui";
import { Link } from "../../../router";

export default function ShowAll({
  to,
  className,
}: {
  to: string;
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "flex justify-end gap-2 items-center duration-200 ease-in-out hover:scale-105 hover:-translate-x-1",
        className
      )}
      to={to}
    >
      View all <span>{"~~>"}</span>
    </Link>
  );
}
