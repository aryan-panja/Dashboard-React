import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  Inbox,
  MessageCircleQuestion,
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
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme Inc",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
    {
      title: "Ask AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Home",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Project Management & Task Tracking",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Family Recipe Collection & Meal Planning",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Fitness Tracker & Workout Routines",
      url: "#",
      emoji: "💪",
    },
    {
      name: "Book Notes & Reading List",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Sustainable Gardening Tips & Plant Care",
      url: "#",
      emoji: "🌱",
    },
    {
      name: "Language Learning Progress & Resources",
      url: "#",
      emoji: "🗣️",
    },
    {
      name: "Home Renovation Ideas & Budget Tracker",
      url: "#",
      emoji: "🏠",
    },
    {
      name: "Personal Finance & Investment Portfolio",
      url: "#",
      emoji: "💰",
    },
    {
      name: "Movie & TV Show Watchlist with Reviews",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Daily Habit Tracker & Goal Setting",
      url: "#",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "Personal Life Management",
      emoji: "🏠",
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
      name: "Professional Development",
      emoji: "💼",
      pages: [
        {
          name: "Career Objectives & Milestones",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Skill Acquisition & Training Log",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Networking Contacts & Events",
          url: "#",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "Creative Projects",
      emoji: "🎨",
      pages: [
        {
          name: "Writing Ideas & Story Outlines",
          url: "#",
          emoji: "✍️",
        },
        {
          name: "Art & Design Portfolio",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "Music Composition & Practice Log",
          url: "#",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "Home Management",
      emoji: "🏡",
      pages: [
        {
          name: "Household Budget & Expense Tracking",
          url: "#",
          emoji: "💰",
        },
        {
          name: "Home Maintenance Schedule & Tasks",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "Family Calendar & Event Planning",
          url: "#",
          emoji: "📅",
        },
      ],
    },
    {
      name: "Travel & Adventure",
      emoji: "🧳",
      pages: [
        {
          name: "Trip Planning & Itineraries",
          url: "#",
          emoji: "🗺️",
        },
        {
          name: "Travel Bucket List & Inspiration",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "Travel Journal & Photo Gallery",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ],
};

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
    },
    {
      name: "Projects",
      url: "#",
    },
    {
      name: "Online Courses",
      url: "#",
    },
  ],
};

export function SidebarLeft({ className, ...props }) {
  return (
    <Sidebar className={cn("border-r-0", className)} {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader> */}

      <SidebarContent>
        {/* <div className="flex flex-col items-start justify-center gap-[16px]"> */}
        {/* first */}
        <div className="flex items-center gap-[8px] p-[4px]">
          <Avatar className={"size-[24px]"}>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>Bye Wind</h1>
        </div>

        {/* second */}
        <div className="b-[12px] flex flex-col items-start justify-center gap-[4px]">
          <div className="text-sidebar-foreground-muted flex items-center justify-center gap-[8px]">
            {/* for selected make 'text-sidebar-foreground-muted' and for unselected make it - #1C1C1C33 */}
            <button>Favourites</button>
            <button>Recently</button>
          </div>
          <ul className="marker:text-sidebar-foreground-muted mt-[8px] list-inside list-disc space-y-[8px]">
            {sidebarData.fav.map((d, i) => (
              <li key={i}>{d.name}</li>
            ))}
          </ul>
        </div>

        {/* third */}
        <div className="b-[12px] flex flex-col items-start justify-center gap-[4px]">
          <div className="text-sidebar-foreground-muted">Dashboards</div>
          <ul className="marker:text-sidebar-foreground-muted mt-[8px] list-inside list-disc space-y-[8px]">
            {sidebarData.dashboards.map((d, i) => (
              <li>{d.name}</li>
            ))}
          </ul>
        </div>

        {/* <NavFavorites favorites={data.favorites} /> */}
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
