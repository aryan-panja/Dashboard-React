// custom sidebar list component with collapsible menu items
// shadcn + my customizations

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
import { Link } from "react-router";
import { useTheme } from "@/context/theme-provider";

// Sidebar Block
// to implement sections in sidebar like main, favorites, workspaces, etc.
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

// Sidebar Block Heading
// heading for each sidebar block
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

// Sidebar List
// list of sidebar items with collapsible sub-items
export const SidebarList = ({ data, active }) => {
  const { theme } = useTheme();
  return (
    <SidebarGroup className={"pl-0"}>
      <SidebarGroupContent>
        <SidebarMenu>
          {data.map((d, i) => (
            <Link
              to={`/dashboard${d.url}`}
              key={i}
              className={` ${active === d.name.toLowerCase() ? "bg-muted-background" : ""} relative rounded-[8px]`}
            >
              {active === d.name.toLowerCase() && (
                <div className="absolute top-1/2 left-0 h-[16px] w-[4px] -translate-y-1/2 rounded-[8px] bg-black dark:bg-[#CDCEFF]"></div>
              )}
              <SidebarMenuItem key={i}>
                <Collapsible className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90">
                  <CollapsibleTrigger asChild className={"pl-1"}>
                    <SidebarMenuButton
                      className={"px-[8px] py-[4px] text-[14px]"}
                    >
                      <ChevronRight className="transition-transform" />
                      <div className="flex items-center justify-center gap-[4px]">
                        {theme === "dark" ? d.dark : d.logo}
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
            </Link>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
