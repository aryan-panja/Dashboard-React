import { PageLayout } from "@/components/custom/PageLayout";
import { ChartBarStacked } from "@/components/pages/default/ChartBarStacked";
import { MapCard } from "@/components/pages/default/MapCard";
import { PieChartCard } from "@/components/pages/default/PieChartCard";
import { RevenueChart } from "@/components/pages/default/RevenueChart";
import { TopProductsTable } from "@/components/pages/default/TopProductsTable";
import { Card } from "@/components/ui/card";
import { TrendDownIcon, TrendUpIcon } from "@/icons/MiscIcons";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

const data = [
  {
    heading: "Customers",
    bg: "#E3F5FF",
    count: "3,781",
    percent: "+11.01%",
    hover: "hover:bg-[#D8E9F3]",
    icon: <TrendUpIcon />,
  },
  {
    heading: "Orders",
    bg: "#F7F9FB",
    count: "1,219",
    percent: "-0.03%",
    hover: "hover:bg-[#EBEDEF]",
    icon: <TrendDownIcon />,
    url: "/dashboard/order-list",
  },
  {
    heading: "Revenue",
    bg: "#F7F9FB",
    count: "$695",
    percent: "+15.03%",
    hover: "hover:bg-[#EBEDEF]",
    icon: <TrendUpIcon />,
  },
  {
    heading: "Growth",
    bg: "#E5ECF6",
    count: "30.1%",
    percent: "+6.08%",
    hover: "hover:bg-[#DAE1EA]",
    icon: <TrendUpIcon />,
  },
];

export const Default = () => {
  return (
    <>
      <div>
        <h1 className="font-[600]">eCommerce</h1>
      </div>

      <div className="grid w-[892px] grid-cols-4 gap-[28px]">
        <div className="col-span-2 grid grid-cols-2 gap-[28px]">
          {data.map((item, index) => (
            <DataCard
              key={index}
              heading={item.heading}
              bg={item.bg}
              count={item.count}
              percent={item.percent}
              icon={item.icon}
              hover={item.hover}
              url={item.url}
            />
          ))}
        </div>

        <div className="col-span-2">
          <ChartBarStacked />
        </div>

        <div className="col-span-3">
          <RevenueChart />
        </div>

        <div className="col-span-1">
          <MapCard />
        </div>

        <div className="col-span-3">
          <TopProductsTable />
        </div>

        <div className="col-span-1">
          <PieChartCard />
        </div>
      </div>
    </>
  );
};

const DataCard = ({
  className,
  heading,
  bg,
  count,
  percent,
  icon,
  hover,
  url,
}) => {
  return (
    <Card
      className={cn(
        `flex flex-col justify-center gap-[8px] rounded-[16px] p-[24px]`,
        className,
      )}
      style={{ backgroundColor: bg }}
    >
      <h1 className="font-[600]">{heading}</h1>

      <Link
        to={url}
        className={`flex items-center justify-between rounded-[8px] transition-all hover:flex-row-reverse ${hover}`}
      >
        <h1 className="text-[24px] font-[600]">{count}</h1>

        <div className="flex items-center gap-[4px]">
          <h1 className="text-[12px]">{percent}</h1>

          {icon}
        </div>
      </Link>
    </Card>
  );
};
