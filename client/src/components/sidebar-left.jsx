import * as React from "react";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import {
  SidebarBlock,
  SidebarBlockHeading,
  SidebarList,
} from "./custom/CustomSidebar";
import {
  AccountIcon,
  BagIcon,
  BookIcon,
  FolderIcon,
  OpenBookIcon,
  PeopleIcon,
  PieChartIcon,
  ProfileIcon,
  SocialIcon,
} from "@/icons/SidebarIcons";
import { useLocation } from "react-router";
import {
  AccountIconDark,
  BagIconDark,
  BookIconDark,
  FolderIconDark,
  OpenBookIconDark,
  PeopleIconDark,
  PieChartIconDark,
  ProfileIconDark,
  SocialIconDark,
} from "@/icons/dark/SidebarIcons";

// data for sidebar
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
      logo: <PieChartIcon />,
      dark: <PieChartIconDark />,
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
      logo: <BagIcon />,
      dark: <BagIconDark />,
    },
    {
      name: "Projects",
      url: "#",
      logo: <FolderIcon />,
      dark: <FolderIconDark />,
    },
    {
      name: "Online Courses",
      url: "#",
      logo: <OpenBookIcon />,
      dark: <OpenBookIconDark />,
    },
  ],
  pages: [
    {
      name: "User Profile",
      url: "#",
      logo: <ProfileIcon />,
      dark: <ProfileIconDark />,
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
      logo: <AccountIcon />,
      dark: <AccountIconDark />,
    },
    {
      name: "Corporate",
      url: "#",
      logo: <PeopleIcon />,
      dark: <PeopleIconDark />,
    },
    {
      name: "Blog",
      url: "#",
      logo: <BookIcon />,
      dark: <BookIconDark />,
    },
    {
      name: "Social",
      url: "#",
      logo: <SocialIcon />,
      dark: <SocialIconDark />,
    },
  ],
};

const tabs = [
  { id: 1, name: "Favorites", data: sidebarData.fav },
  { id: 2, name: "Recently", data: sidebarData.recents },
];

export function SidebarLeft({ className, ...props }) {
  const location = useLocation();

  const active = location.pathname.split("/").filter(Boolean).pop(); // "default"
  // console.log("Last Segment:", lastSegment);

  const [tab, setTab] = React.useState(1);

  const tabData = tab === 1 ? sidebarData.fav : sidebarData.recents;
  return (
    <Sidebar className={cn("", className)} {...props}>
      <SidebarContent className={"bg-background gap-[16px]"}>
        {/* first */}
        <div className="flex items-center gap-[8px] p-[4px]">
          <Avatar className={"size-[24px]"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>Bye Wind</h1>
        </div>

        {/* second */}
        <SidebarBlock>
          <div className="flex items-center justify-center gap-[8px] [&>button]:px-[8px] [&>button]:py-[4px]">
            {/* for selected make 'text-sidebar-foreground-muted' and for unselected make it - #1C1C1C33 */}
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`${t.id === tab ? "text-sidebar-foreground-muted" : "text-[#1C1C1C33] dark:text-[#FFFFFF33]"} hover:bg-muted-background rounded-[8px]`}
                onClick={() => setTab(t.id)}
              >
                {t.name}
              </button>
            ))}
          </div>
          <ul className="marker:text-sidebar-foreground-muted list-inside list-disc space-y-[4px]">
            {tabData.map((d, i) => (
              <li key={i} className="px-[8px] py-[4px]">
                {d.name}
              </li>
            ))}
          </ul>
        </SidebarBlock>

        {/* third */}
        <SidebarBlock>
          <SidebarBlockHeading>Dashboards</SidebarBlockHeading>
          <SidebarList data={sidebarData.dashboards} active={active} />
        </SidebarBlock>

        {/* fourht */}
        <SidebarBlock>
          <SidebarBlockHeading>Pages</SidebarBlockHeading>
          <SidebarList data={sidebarData.pages} />
        </SidebarBlock>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
