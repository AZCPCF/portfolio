import { Link } from "../../../router";

export const HeaderLink = ({ title }: { title: string }) => {
  return (
    <Link
      to={title == "home" ? "/" : `/${title}`}
      className="group duration-200 text-center"
    >
      <span className="!text-primary-600">#</span>
      {title}
      <div className="w-0 group-hover:w-full h-[1px] bg-white transition-all duration-300 ease-in-out"></div>
    </Link>
  );
};
