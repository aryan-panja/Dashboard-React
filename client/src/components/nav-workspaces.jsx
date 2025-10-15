import { ChevronRight, Folder, MoreHorizontal, Plus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavWorkspaces({ workspaces }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspaces</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {workspaces.map((workspace) => (
            <SidebarMenuItem>
              <Collapsible
                className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
                // defaultOpen={name === "components" || name === "ui"}
              >
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton>
                    <ChevronRight className="transition-transform" />
                    <Folder />
                    {workspace.name}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {/* <CollapsibleContent>
                  <SidebarMenuSub>
                    {items.map((subItem, index) => (
                      <Tree key={index} item={subItem} />
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent> */}
              </Collapsible>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="text-sidebar-foreground/70">
              <MoreHorizontal />
              <span>More</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
