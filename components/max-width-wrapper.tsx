import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full relative max-w-screen-xl px-2.5 md:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
