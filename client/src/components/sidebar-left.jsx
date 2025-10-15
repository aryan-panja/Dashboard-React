import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  ChevronRight,
  Command,
  Folder,
  Home,
  Inbox,
  MessageCircleQuestion,
  MoreHorizontal,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NavFavorites } from "@/components/nav-favorites";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavWorkspaces } from "@/components/nav-workspaces";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarRail,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const sidebarData = {
  fav: [
    {
      name: "Overview",
      url: "#",
    },
    {
      name: "Projects",
      url: "#",
    },
  ],
  recents: [
    {
      name: "OverviewR",
      url: "#",
    },
    {
      name: "ProjectsR",
      url: "#",
    },
  ],
  dashboards: [
    {
      name: "Default",
      url: "/default",
      logo: (
        <svg
          fill="#000000"
          viewBox="0 0 256 256"
          id="Flat"
          width={"16px"}
          height={"16px"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g opacity="0.2">
              {" "}
              <path d="M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z"></path>{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M99.99854,116.45337a8.00012,8.00012,0,0,0,4-6.92822v-72.062a8.00029,8.00029,0,0,0-10.666-7.54272,104.15035,104.15035,0,0,0-67.59863,117.0835,7.99987,7.99987,0,0,0,11.8667,5.47485Zm-12-66.86353v55.31641L40.11621,132.551Q40.00048,130.27832,40,128A88.20107,88.20107,0,0,1,87.99854,49.58984Z"></path>{" "}
              <path d="M218.27118,76.39893c-.06738-.13306-.12872-.26807-.20429-.39893-.10235-.17725-.21624-.34375-.32977-.51A104.0513,104.0513,0,0,0,128,24a8.00008,8.00008,0,0,0-8,8v91.3811L40.86133,169.07178A8.00031,8.00031,0,0,0,37.93311,180c.03363.05835.076.10791.11084.165.08837.17944.17614.35913.27929.53418A104.0111,104.0111,0,0,0,232,128,103.36346,103.36346,0,0,0,218.27118,76.39893ZM136,40.36743a88.02937,88.02937,0,0,1,63.8667,36.90283L136,114.14355ZM128,216a88.45937,88.45937,0,0,1-71.88879-37.25732l151.77459-87.627A87.9799,87.9799,0,0,1,128,216Z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
      pages: [
        // {
        //   name: "Daily Journal & Reflection",
        //   url: "#",
        //   emoji: "📔",
        // },
        // {
        //   name: "Health & Wellness Tracker",
        //   url: "#",
        //   emoji: "🍏",
        // },
        // {
        //   name: "Personal Growth & Learning Goals",
        //   url: "#",
        //   emoji: "🌟",
        // },
      ],
    },
    {
      name: "eCommerce",
      url: "#",
      logo: (
        <svg
          fill="#000000"
          viewBox="0 0 256 256"
          width={"16px"}
          height={"16px"}
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M216,44H40A12.01312,12.01312,0,0,0,28,56V200a12.01312,12.01312,0,0,0,12,12H216a12.01312,12.01312,0,0,0,12-12V56A12.01312,12.01312,0,0,0,216,44ZM40,52H216a4.00427,4.00427,0,0,1,4,4V76H36V56A4.00427,4.00427,0,0,1,40,52ZM216,204H40a4.00427,4.00427,0,0,1-4-4V84H220V200A4.00427,4.00427,0,0,1,216,204Zm-44-92a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z"></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      name: "Projects",
      url: "#",
      logo: (
        <svg
          viewBox="0 0 24 24"
          width={"16px"}
          height={"16px"}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>Folder</title>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g id="Folder">
                {" "}
                <rect
                  id="Rectangle"
                  fill-rule="nonzero"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  {" "}
                </rect>{" "}
                <path
                  d="M3,7 L20,7 C20.5523,7 21,7.44772 21,8 L21,19 C21,19.5523 20.5523,20 20,20 L4,20 C3.44772,20 3,19.5523 3,19 L3,7 Z"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M3,4.5 C3,4.22386 3.22386,4 3.5,4 L9.79289,4 C9.9255,4 10.0527,4.05268 10.1464,4.14645 L13,7 L3,7 L3,4.5 Z"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      name: "Online Courses",
      url: "#",
      logo: (
        <svg
          viewBox="0 0 24 24"
          width={"16px"}
          height={"16px"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 17H9C10.6569 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 11.1213 4.87868C10.2426 4 8.82843 4 6 4H5C4.05719 4 3.58579 4 3.29289 4.29289C3 4.58579 3 5.05719 3 6V15C3 15.9428 3 16.4142 3.29289 16.7071C3.58579 17 4.05719 17 5 17Z"
              fill="#2A4157"
              fill-opacity="0.24"
              stroke="#222222"
              stroke-width="1.2"
            ></path>{" "}
            <path
              d="M19 17H15C13.3431 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 12.8787 4.87868C13.7574 4 15.1716 4 18 4H19C19.9428 4 20.4142 4 20.7071 4.29289C21 4.58579 21 5.05719 21 6V15C21 15.9428 21 16.4142 20.7071 16.7071C20.4142 17 19.9428 17 19 17Z"
              fill="#2A4157"
              fill-opacity="0.24"
              stroke="#222222"
              stroke-width="1.2"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ],
  pages: [
    {
      name: "User Profile",
      url: "#",
      logo: (
        <svg
          fill="#000000"
          viewBox="0 0 256 256"
          id="Flat"
          width={"16px"}
          height={"16px"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g opacity="0.2">
              {" "}
              <path d="M33.60061,145.5506A96.15147,96.15147,0,0,1,95.99845,37.46313V109.5252Z"></path>{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M99.99854,116.45337a8.00012,8.00012,0,0,0,4-6.92822v-72.062a8.00029,8.00029,0,0,0-10.666-7.54272,104.15035,104.15035,0,0,0-67.59863,117.0835,7.99987,7.99987,0,0,0,11.8667,5.47485Zm-12-66.86353v55.31641L40.11621,132.551Q40.00048,130.27832,40,128A88.20107,88.20107,0,0,1,87.99854,49.58984Z"></path>{" "}
              <path d="M218.27118,76.39893c-.06738-.13306-.12872-.26807-.20429-.39893-.10235-.17725-.21624-.34375-.32977-.51A104.0513,104.0513,0,0,0,128,24a8.00008,8.00008,0,0,0-8,8v91.3811L40.86133,169.07178A8.00031,8.00031,0,0,0,37.93311,180c.03363.05835.076.10791.11084.165.08837.17944.17614.35913.27929.53418A104.0111,104.0111,0,0,0,232,128,103.36346,103.36346,0,0,0,218.27118,76.39893ZM136,40.36743a88.02937,88.02937,0,0,1,63.8667,36.90283L136,114.14355ZM128,216a88.45937,88.45937,0,0,1-71.88879-37.25732l151.77459-87.627A87.9799,87.9799,0,0,1,128,216Z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
      pages: [
        {
          name: "Overview",
          url: "#",
        },
        {
          name: "Projects",
          url: "#",
        },
        {
          name: "Campaigns",
          url: "#",
        },
        {
          name: "Documents",
          url: "#",
        },
        {
          name: "Followers",
          url: "#",
        },
      ],
    },
    {
      name: "Account",
      url: "#",
      logo: (
        <svg
          fill="#000000"
          viewBox="0 0 256 256"
          width={"16px"}
          height={"16px"}
          id="Flat"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M216,44H40A12.01312,12.01312,0,0,0,28,56V200a12.01312,12.01312,0,0,0,12,12H216a12.01312,12.01312,0,0,0,12-12V56A12.01312,12.01312,0,0,0,216,44ZM40,52H216a4.00427,4.00427,0,0,1,4,4V76H36V56A4.00427,4.00427,0,0,1,40,52ZM216,204H40a4.00427,4.00427,0,0,1-4-4V84H220V200A4.00427,4.00427,0,0,1,216,204Zm-44-92a44,44,0,0,1-88,0,4,4,0,0,1,8,0,36,36,0,0,0,72,0,4,4,0,0,1,8,0Z"></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      name: "Corporate",
      url: "#",
      logo: (
        <svg
          viewBox="0 0 24 24"
          width={"16px"}
          height={"16px"}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>Folder</title>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g id="Folder">
                {" "}
                <rect
                  id="Rectangle"
                  fill-rule="nonzero"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  {" "}
                </rect>{" "}
                <path
                  d="M3,7 L20,7 C20.5523,7 21,7.44772 21,8 L21,19 C21,19.5523 20.5523,20 20,20 L4,20 C3.44772,20 3,19.5523 3,19 L3,7 Z"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M3,4.5 C3,4.22386 3.22386,4 3.5,4 L9.79289,4 C9.9255,4 10.0527,4.05268 10.1464,4.14645 L13,7 L3,7 L3,4.5 Z"
                  id="Path"
                  stroke="#0C0310"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  {" "}
                </path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      ),
    },
    {
      name: "Blog",
      url: "#",
      logo: (
        <svg
          viewBox="0 0 24 24"
          width={"16px"}
          height={"16px"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 17H9C10.6569 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 11.1213 4.87868C10.2426 4 8.82843 4 6 4H5C4.05719 4 3.58579 4 3.29289 4.29289C3 4.58579 3 5.05719 3 6V15C3 15.9428 3 16.4142 3.29289 16.7071C3.58579 17 4.05719 17 5 17Z"
              fill="#2A4157"
              fill-opacity="0.24"
              stroke="#222222"
              stroke-width="1.2"
            ></path>{" "}
            <path
              d="M19 17H15C13.3431 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 12.8787 4.87868C13.7574 4 15.1716 4 18 4H19C19.9428 4 20.4142 4 20.7071 4.29289C21 4.58579 21 5.05719 21 6V15C21 15.9428 21 16.4142 20.7071 16.7071C20.4142 17 19.9428 17 19 17Z"
              fill="#2A4157"
              fill-opacity="0.24"
              stroke="#222222"
              stroke-width="1.2"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
    {
      name: "Social",
      url: "#",
      logo: (
        <svg
          viewBox="0 0 24 24"
          width={"16px"}
          height={"16px"}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M5 17H9C10.6569 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 11.1213 4.87868C10.2426 4 8.82843 4 6 4H5C4.05719 4 3.58579 4 3.29289 4.29289C3 4.58579 3 5.05719 3 6V15C3 15.9428 3 16.4142 3.29289 16.7071C3.58579 17 4.05719 17 5 17Z"
              fill="#2A4157"
              fill-opacity="0.24"
              stroke="#222222"
              stroke-width="1.2"
            ></path>{" "}
            <path
              d="M19 17H15C13.3431 17 12 18.3431 12 20V10C12 7.17157 12 5.75736 12.8787 4.87868C13.7574 4 15.1716 4 18 4H19C19.9428 4 20.4142 4 20.7071 4.29289C21 4.58579 21 5.05719 21 6V15C21 15.9428 21 16.4142 20.7071 16.7071C20.4142 17 19.9428 17 19 17Z"
              fill="#2A4157"
              fill-opacity="0.24"
              stroke="#222222"
              stroke-width="1.2"
            ></path>{" "}
          </g>
        </svg>
      ),
    },
  ],
};

export function SidebarLeft({ className, ...props }) {
  return (
    <Sidebar className={cn("", className)} {...props}>
      <SidebarContent className={"gap-[16px]"}>
        {/* first */}
        <div className="flex items-center gap-[8px] p-[4px]">
          <Avatar className={"size-[24px]"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>Bye Wind</h1>
        </div>

        {/* second */}
        <div className="flex flex-col items-start justify-center gap-[4px]">
          <div className="text-sidebar-foreground-muted flex items-center justify-center gap-[8px] [&>button]:px-[8px] [&>button]:py-[4px]">
            {/* for selected make 'text-sidebar-foreground-muted' and for unselected make it - #1C1C1C33 */}
            <button>Favorites</button>
            <button>Recently</button>
          </div>
          <ul className="marker:text-sidebar-foreground-muted list-inside list-disc space-y-[4px]">
            {sidebarData.fav.map((d, i) => (
              <li key={i} className="py-[4px] px-[8px]">{d.name}</li>
            ))}
          </ul>
        </div>

        {/* third */}
        <div className="b-[12px] flex flex-col items-start justify-center gap-[4px]">
          <div className="text-sidebar-foreground-muted px-[12px] py-[4px]">
            Dashboards
          </div>
          <SidebarList data={sidebarData.dashboards} />
        </div>

        {/* third */}
        <div className="b-[12px] flex flex-col items-start justify-center gap-[4px]">
          <div className="text-sidebar-foreground-muted px-[12px] py-[4px]">
            Pages
          </div>
          <SidebarList data={sidebarData.pages} />
        </div>

        {/* <NavFavorites favorites={data.favorites} /> */}
        {/* <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

const SidebarList = ({ data }) => {
  return (
    <SidebarGroup className={"pl-0"}>
      <SidebarGroupContent>
        <SidebarMenu>
          {data.map((d, i) => (
            <SidebarMenuItem>
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
