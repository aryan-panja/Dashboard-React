import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card } from "@/components/ui/card";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const data = [
  { month: "Jan", projections: 17, actuals: 4 },
  { month: "Feb", projections: 21, actuals: 5 },
  { month: "Mar", projections: 17, actuals: 6 },
  { month: "Apr", projections: 23, actuals: 6 },
  { month: "May", projections: 16, actuals: 3 },
  { month: "Jun", projections: 21, actuals: 3 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};

export const ChartBarStacked = () => {
  return (
    <Card
      className={
        "flex h-[252px] w-full flex-col gap-[16px] rounded-[16px] p-[24px]"
      }
    >
      <h1 className="text-[14px] font-[600]">Projections vs Actuals</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          barCategoryGap={15}
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="#e5e7eb"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tick={{ fill: "#6b7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#9ca3af", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            label={{
              // value: "30M",
              angle: -90,
              position: "insideLeft",
              offset: 10,
              fill: "#9ca3af",
              fontSize: 12,
            }}
            domain={[0, 30]}
            ticks={[0, 10, 20, 30]}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
            }}
            formatter={(value) => `${value}M`}
          />
          <Bar dataKey="projections" stackId={"a"} fill="var(--chart-1)" />
          <Bar
            dataKey="actuals"
            stackId={"a"}
            fill="var(--chart-2)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
