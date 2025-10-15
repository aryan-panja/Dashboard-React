import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <SidebarProvider>
      <SidebarLeft
        className={
          "bg-sidebar w-[212px] gap-[16px] border-r-[1px] border-[#1C1C1C1A] px-[16px] py-[20px]"
        }
      />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex h-14 shrink-0 items-center gap-2 border-b-1 border-b-[#1C1C1C1A]">
          <div className="flex flex-1 items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">
                    Project Management & Task Tracking
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {/* <div className="bg-muted/50 mx-auto h-24 w-full max-w-3xl rounded-xl" />
          <div className="bg-muted/50 mx-auto h-[100vh] w-full max-w-3xl rounded-xl" /> */}

          <Outlet />
        </div>
      </SidebarInset>
      <SidebarRight />
    </SidebarProvider>
  );
};
