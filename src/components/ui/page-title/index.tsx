import { Typography } from "cubes-ui";
import { ReactNode } from "react";

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <Typography variant="h2">
      <span className="text-primary-main">/</span>
      {children}
    </Typography>
  );
}
