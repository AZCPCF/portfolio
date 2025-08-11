import { FC } from "react";

export interface Route {
  path: string;
  component: FC;
}

export interface RouterProps {
  routes: Route[];
}
