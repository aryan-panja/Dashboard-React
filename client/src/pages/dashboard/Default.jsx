import { ChartBarStacked } from "@/components/pages/default/ChartBarStacked";
import { MapCard } from "@/components/pages/default/MapCard";
import { PieChartCard } from "@/components/pages/default/PieChartCard";
import { RevenueChart } from "@/components/pages/default/RevenueChart";
import { TopProductsTable } from "@/components/pages/default/TopProductsTable";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/context/theme-provider";
import { TrendDownIconDark, TrendUpIconDark } from "@/icons/dark/MiscIcons";
import { TrendDownIcon, TrendUpIcon } from "@/icons/MiscIcons";
import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

// data for the data cards
// put them in an array to map through them
// put them outside the component to avoid re-creation on each render

const data = [
  {
    heading: "Customers",
    bg: "var(--color-card-1)",
    count: "3,781",
    percent: "+11.01%",
    hover: "hover:bg-[#D8E9F3] dark:hover:bg-inherit",
    icon: <TrendUpIcon />,
    dark: <TrendUpIconDark />,
  },
  {
    heading: "Orders",
    bg: "var(--color-card-2)",
    count: "1,219",
    percent: "-0.03%",
    hover: "hover:bg-[#EBEDEF] dark:hover:bg-[#3D3D3D]",
    icon: <TrendDownIcon />,
    dark: <TrendDownIconDark />,
    url: "/dashboard/order-list",
  },
  {
    heading: "Revenue",
    bg: "var(--color-card-3)",
    count: "$695",
    percent: "+15.03%",
    hover: "hover:bg-[#EBEDEF] dark:hover:bg-[#3D3D3D]",
    icon: <TrendUpIcon />,
    dark: <TrendUpIconDark stroke="white" />,
  },
  {
    heading: "Growth",
    bg: "var(--color-card-4)",
    count: "30.1%",
    percent: "+6.08%",
    hover: "hover:bg-[#DAE1EA] dark:hover:bg-inherit",
    icon: <TrendUpIcon />,
    dark: <TrendUpIconDark />,
  },
];

export const Default = () => {
  const { theme } = useTheme();

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
              icon={theme === "dark" ? item.dark : item.icon}
              hover={item.hover}
              url={item.url}
              className={item.className}
              index={index}
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

// data card component
const DataCard = ({
  className,
  heading,
  bg,
  count,
  percent,
  icon,
  hover,
  url,
  index,
}) => {
  return (
    <Card
      className={cn(
        `flex flex-col justify-center gap-[8px] rounded-[16px] p-[24px]`,
        className,
      )}
      style={{ backgroundColor: bg }}
    >
      <h1
        className={`font-[600] ${index === 0 || index === 3 ? "dark:text-black" : ""}`}
      >
        {heading}
      </h1>

      <Link
        to={url}
        className={`flex items-center justify-between rounded-[8px] transition-all hover:flex-row-reverse ${hover} ${index === 0 || index === 3 ? "dark:text-black" : ""}`}
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
