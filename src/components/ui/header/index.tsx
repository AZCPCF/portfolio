import { cn, useGlobalState } from "cubes-ui";
import { AlignRight, X } from "lucide-react";
import Github from "../../../assets/github";
import Logo from "../../../assets/logo";
import Telegram from "../../../assets/telegram";
import { HeaderLink } from "./link.header";
import { Link } from "../../../router";

export default function Header() {
  const [opener, setOpener] = useGlobalState("header-menu", false);
  const closeHeader = () => setOpener(false);
  return (
    <header className="flex justify-between items-center p-1 mt-4 relative">
      <Link to="/" className="flex items-center gap-2">
        <Logo />
        <h5>AZCPCF</h5>
      </Link>
      <div className="md:hidden">
        <button
          onClick={() => setOpener(!opener)}
          className="p-2 rounded-md bg-muted hover:bg-muted/80 transition"
          aria-label="Toggle menu"
        >
          {opener ? <X size={24} /> : <AlignRight size={24} />}
        </button>
        <nav
          className={cn(
            "absolute top-full left-0 w-full backdrop-blur-md bg-background/80 px-6 py-8 shadow-xl rounded-sm text-white border border-gray-600 flex flex-col items-start gap-6 transition-all duration-300 ease-in-out",
            opener
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-6 pointer-events-none"
          )}
        >
          <HeaderLink closeHeader={closeHeader} title="home" />
          <HeaderLink closeHeader={closeHeader} title="works" />
          <HeaderLink closeHeader={closeHeader} title="about-me" />
          <HeaderLink closeHeader={closeHeader} title="contacts" />
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/AZCPCF"
              className="cursor-pointer hover:scale-110 duration-10"
            >
              <Github />
            </a>
            <a
              href="https://t.me/AZCPCF"
              className="cursor-pointer hover:scale-110 duration-100"
            >
              <Telegram />
            </a>
          </div>
        </nav>
      </div>
      <nav className="flex gap-8 max-md:!hidden">
        <HeaderLink closeHeader={closeHeader} title="home" />
        <HeaderLink closeHeader={closeHeader} title="works" />
        <HeaderLink closeHeader={closeHeader} title="about-me" />
        <HeaderLink closeHeader={closeHeader} title="contacts" />
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/AZCPCF"
            className="cursor-pointer hover:scale-110 duration-100"
          >
            <Github />
          </a>
        </div>
      </nav>
    </header>
  );
}
