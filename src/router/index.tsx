import { useGlobalState } from "cubes-ui";
import { FC, ReactNode, useEffect } from "react";
import { RouterProps } from "./router.type";
export const Router: FC<RouterProps> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useGlobalState(
    "path",
    window.location.pathname
  );
  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [setCurrentPath]);

  const route = routes.find((r) => r.path === currentPath);
  const Component = route ? route.component : () => <h2>404 Not Found</h2>;

  return <Component />;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ to, onClick, children, ...props }) => {
  const onClickF = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.history.pushState(null, "", to);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      href={to}
      {...props}
      onClick={(e) => {
        onClickF(e);
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {children}
    </a>
  );
};
