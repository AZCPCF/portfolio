import { useGlobalState } from "cubes-ui";
import { Link } from "../../../router";

export const HeaderLink = ({
  title,
  closeHeader,
}: {
  title: string;
  closeHeader: () => void;
}) => {
  const [path] = useGlobalState("path");
  const linkPath = title === "home" ? "/" : `/${title}`;
  const isActive = path === linkPath;
  return (
    <Link
      to={linkPath}
      onClick={() => {
        closeHeader();
      }}
      className={`group duration-200 text-center ${
        isActive ? "text-primary-500" : ""
      }`}
    >
      <span className={isActive ? "text-primary-600" : "!text-primary-600"}>
        #
      </span>
      {title}
      <div
        className={`h-[1px] bg-white transition-all duration-300 ease-in-out ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></div>
    </Link>
  );
};
