import { cn } from "@/lib/utils";
import React from "react";

export const PageLayout = ({ children, className, ...props }) => {
  return (
    <div className={cn("px-[8px] py-[16px]", className)} {...props}>
      {children}
    </div>
  );
};
