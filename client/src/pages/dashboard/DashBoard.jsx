import { PageLayout } from "@/components/custom/PageLayout";
import React from "react";

export const DashBoard = () => {

  // route to default dashboard page
  React.useEffect(() => {
    window.location.href = "/dashboard/default";
  }, []);
  return <PageLayout>DashBoard</PageLayout>;
};
