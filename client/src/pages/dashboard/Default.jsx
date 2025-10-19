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

const data = [
  {
    heading: "Customers",
    bg: "#E3F5FF",
    count: "3,781",
    percent: "+11.01%",
    icon: <TrendUpIcon />,
  },
  {
    heading: "Orders",
    bg: "#F7F9FB",
    count: "1,219",
    percent: "-0.03%",
    icon: <TrendDownIcon />,
  },
  {
    heading: "Revenue",
    bg: "#F7F9FB",
    count: "$695",
    percent: "+15.03%",
    icon: <TrendUpIcon />,
  },
  {
    heading: "Growth",
    bg: "#E5ECF6",
    count: "30.1%",
    percent: "+6.08%",
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

const DataCard = ({ className, heading, bg, count, percent, icon }) => {
  return (
    <Card
      className={cn(
        `flex flex-col justify-center gap-[8px] rounded-[16px] p-[24px]`,
        className,
      )}
      style={{ backgroundColor: bg }}
    >
      <h1 className="font-[600]">{heading}</h1>

      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-[600]">{count}</h1>

        <div className="items*center flex gap-[4px]">
          <h1 className="text-[12px]">{percent}</h1>

          {icon}
        </div>
      </div>
    </Card>
  );
};
