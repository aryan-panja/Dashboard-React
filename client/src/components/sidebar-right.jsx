import * as React from "react";
import { Folder, Plus } from "lucide-react";

import { Calendars } from "@/components/calendars";
import { DatePicker } from "@/components/date-picker";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarBlock, SidebarBlockHeading } from "./custom/CustomSidebar";
import { BroadCastIcon, BugIcon, PersonIcon } from "@/icons/SidebarIcons";

// This is sample data.
const data = {
  notif: [
    {
      name: "You have a bug that needs to be fixed.",
      time: "Just Now",
      logo: <BugIcon />,
    },
    {
      name: "New user registered",
      time: "59 minutes ago",
      logo: <PersonIcon />,
    },
    {
      name: "You have a bug that needs to be fixed.",
      time: "12 Hours ago",
      logo: <BugIcon />,
    },
    {
      name: "You have a bug that needs to be fixed.",
      time: "Today 11:59 AM",
      logo: <BroadCastIcon />,
    },
  ],
  activities: [
    {
      name: "You have a bug that needs to be fixed.",
      time: "Just Now",
      avatar: "src/assets/activities/1.png",
    },
    {
      name: "Released a new version",
      time: "59 minutes ago",
      avatar: "src/assets/activities/2.png",
    },
    {
      name: "Submitted a bug",
      time: "12 Hours ago",
      avatar: "src/assets/activities/3.png",
    },
    {
      name: "Modified A data in page X",
      time: "Today 11:59 AM",
      avatar: "src/assets/activities/4.png",
    },
    {
      name: "Deleted A page in project X",
      time: "Feb 2, 2023",
      avatar: "src/assets/activities/5.png",
    },
  ],
  contacts: [
    {
      name: "Natali Craig",
      avatar: "src/assets/contacts/1.png",
    },
    {
      name: "Drew Cano",
      avatar: "src/assets/contacts/2.png",
    },
    {
      name: "Orlando Diggs",
      avatar: "src/assets/contacts/3.png",
    },
    {
      name: "Andi Lane",
      avatar: "src/assets/contacts/4.png",
    },
    {
      name: "Kate Morrison",
      avatar: "src/assets/contacts/5.png",
    },
    {
      name: "Koray Okumus",
      avatar: "src/assets/contacts/6.png",
    },
  ],
};

export function SidebarRight({ className, ...props }) {
  return (
    <Sidebar
      collapsible="none"
      className={cn("sticky top-0 hidden h-svh border-l lg:flex", className)}
      {...props}
    >
      <SidebarContent className={"bg-background gap-[24px] overflow-x-hidden"}>
        {/* first */}
        <SidebarBlock className={"gap-[8px]"}>
          {/* First */}
          <SidebarList heading={"Notifications"} data={data.notif} />

          {/* Second */}
          <SidebarList heading={"Activities"} data={data.activities} stepper />

          {/* Third */}
          <SidebarList heading={"Contacts"} data={data.contacts} />
        </SidebarBlock>
      </SidebarContent>
    </Sidebar>
  );
}

const SidebarList = ({ heading, data, stepper = false }) => {
  return (
    <>
      <SidebarBlockHeading
        className={"text-foreground px-[4px] py-[8px] font-[600]"}
      >
        {heading}
      </SidebarBlockHeading>
      {data.map((n, i) => (
        <div className="flex items-start gap-[8px] p-[4px]" key={i}>
          <div className="relative">
            {n.logo && (
              // <div className="rounded-[8px] bg-[#E3F5FF] p-[4px]">{n.logo}</div>
              <>{n.logo}</>
            )}
            {n.avatar && (
              <Avatar className={"size-[24px]"}>
                <AvatarImage
                  src={n.avatar || "https://github.com/shadcn.png"}
                  alt="@shadcn"
                />
                <AvatarFallback>{n.name}</AvatarFallback>
              </Avatar>
            )}

            {stepper && i !== data.length - 1 && (
              <div className="absolute top-full left-1/2 h-[14px] w-[1px] -translate-x-1/2 bg-[#1C1C1C1A]" />
            )}
          </div>

          <div className="flex flex-col">
            <h1 className="truncate">{n.name}</h1>
            {n.time && (
              <h1 className="text-sidebar-foreground-muted text-[12px]">
                {n.time}
              </h1>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
