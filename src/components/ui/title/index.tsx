import { cn, Typography } from "cubes-ui";
import { ReactNode } from "react";

export default function Title({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-8",className)}>
      <Typography variant="h2">
        <span className="!text-primary-600">#</span>
        {children}
        <div className="w-0 group-hover:w-full h-[1px] bg-white transition-all duration-300 ease-in-out"></div>
      </Typography>
      <div className="w-full h-[2px] max-sm:hidden bg-primary-main"></div>
    </div>
  );
}
