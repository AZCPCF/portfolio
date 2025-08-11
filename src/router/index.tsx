import { FC, ReactNode, useEffect, useState } from "react";
import { RouterProps } from "./router.type";

export const Router: FC<RouterProps> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  const route = routes.find((r) => r.path === currentPath);
  const Component = route ? route.component : () => <h2>404 Not Found</h2>;

  return <Component />;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ to, children, ...props }) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.history.pushState(null, "", to);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={to} onClick={onClick} {...props}>
      {children}
    </a>
  );
};
