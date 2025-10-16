import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
} from "@/components/ui/sidebar";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

// 🧱 Sidebar Block
export const SidebarBlock = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-start justify-center gap-[4px] pb-[12px]",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
SidebarBlock.displayName = "SidebarBlock";

// 🏷️ Sidebar Block Heading
export const SidebarBlockHeading = forwardRef(
  ({ className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-sidebar-foreground-muted px-[12px] py-[4px]",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarBlockHeading.displayName = "SidebarBlockHeading";

export const SidebarList = ({ data }) => {
  return (
    <SidebarGroup className={"pl-0"}>
      <SidebarGroupContent>
        <SidebarMenu>
          {data.map((d, i) => (
            <SidebarMenuItem key={i}>
              <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
                <CollapsibleTrigger asChild className={"pl-1"}>
                  <SidebarMenuButton
                    className={"px-[8px] py-[4px] text-[14px]"}
                  >
                    <ChevronRight className="transition-transform" />
                    <div className="flex items-center justify-center gap-[4px]">
                      {d.logo}
                      {/* <Folder /> */}
                      {d.name}
                    </div>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {d.pages && (
                  <CollapsibleContent>
                    <SidebarMenuSub className={"gap-[4px]"}>
                      {d.pages.map((subItem, index) => (
                        <div key={index} className="px-[8px] py-[4px]">
                          {subItem.name}
                        </div>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </Collapsible>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
