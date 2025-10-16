import * as React from "react";
import {
  ArrowUpRightIcon,
  CircleFadingPlusIcon,
  FileInputIcon,
  FolderPlusIcon,
  SearchIcon,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { BellIcon, LightIcon, RecentIcon, StarIcon } from "@/icons/NavbarIcons";
import { Star } from "lucide-react";
import { Outlet, useLocation } from "react-router";
import { cn } from "@/lib/utils";

export const AppLayout = () => {
  const location = useLocation();

  // console.log(location);

  return (
    <SidebarProvider>
      <SidebarLeft
        className={
          "bg-background w-[212px] gap-[16px] border-r-[1px] border-[#1C1C1C1A] px-[16px] py-[20px]"
        }
      />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b-[1px]">
          <div className="flex w-full items-center justify-between gap-2 px-[28px] py-[20px]">
            {" "}
            {/* left */}
            {/*flex-1*/}
            <div className="flex items-center justify-start gap-[8px]">
              <SidebarTrigger />

              <StarIcon />

              <Breadcrumb>
                <BreadcrumbList className={"gap-[8px]"}>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1">
                      Dashboards
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M16 3L8 21"
                          stroke="#1C1C1C33"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>{" "}
                      </g>
                    </svg>
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1">
                      Default
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            {/* right */}
            <div className="flex items-center gap-[20px]">
              <NavCommand
                className={"w-[160px] rounded-[8px] border-0 bg-[#1C1C1C0D]"}
              />
              <div className="flex items-center gap-[8px]">
                <LightIcon />

                <RecentIcon />

                <BellIcon />

                <SidebarTrigger />
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
      <SidebarRight className="bg-background w-[280px] gap-[24px] border-l-[1px] border-[#1C1C1C1A] p-[20px]" />
    </SidebarProvider>
  );
};

export const NavCommand = ({ className }) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        className={cn(
          "border-input bg-background placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 w-fit rounded-md border px-3 py-2 text-sm text-[#1C1C1C33] transition-[color,box-shadow] outline-none focus-visible:ring-[3px]",
          className,
        )}
        onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <SearchIcon
            className="-ms-1 me-3 text-[#1C1C1C33]"
            size={16}
            aria-hidden="true"
          />
          <span className="text-[14px] font-normal text-[#1C1C1C33]">
            Search
          </span>
        </span>
        <kbd className="#1C1C1C33 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded px-1 font-[inherit] text-[14px] font-medium">
          ⌘/
        </kbd>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick start">
            <CommandItem>
              <FolderPlusIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>New folder</span>
              <CommandShortcut className="justify-center">⌘N</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <FileInputIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Import document</span>
              <CommandShortcut className="justify-center">⌘I</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CircleFadingPlusIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Add block</span>
              <CommandShortcut className="justify-center">⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to dashboard</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to apps</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRightIcon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to connections</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
