"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const data = [
  { month: "Jan", currentWeek: 12000000, previousWeek: 10000000 },
  { month: "Feb", currentWeek: 11000000, previousWeek: 18000000 },
  { month: "Mar", currentWeek: 9500000, previousWeek: 17000000 },
  { month: "Apr", currentWeek: 13000000, previousWeek: 12000000 },
  { month: "May", currentWeek: 18000000, previousWeek: 14000000 },
  { month: "Jun", currentWeek: 21000000, previousWeek: 22000000 },
];

export const RevenueChart = () => {
  return (
    <Card className="flex h-full w-full flex-col gap-[16px] rounded-[16px] p-[24px]">
      <div className="flex items-center gap-[16px]">
        <h1 className="text-[14px] font-[600]">Revenue</h1>

        {"|"}

        <div className="flex items-center py-[2px] pr-[8px] pl-[4px]">
          <div className="relative aspect-square size-[16px]">
            <div className="absolute top-1/2 left-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--chart-3)]"></div>
          </div>
          <span className="text-foreground text-[12px]">
            Current Week <span className="text-[12px] font-[600]">$58,211</span>
          </span>
        </div>

        <div className="flex items-center py-[2px] pr-[8px] pl-[4px]">
          <div className="relative aspect-square size-[16px]">
            <div className="absolute top-1/2 left-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--chart-1)]"></div>
          </div>
          <span className="text-foreground text-[12px]">
            Previous Week{" "}
            <span className="text-[12px] font-[600]">$68,768</span>
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 0, right: 30, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="0"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            stroke="#999"
            style={{ fontSize: "12px" }}
            axisLine={true}
            tickLine={false}
          />
          <YAxis
            stroke="#999"
            style={{ fontSize: "12px" }}
            tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
            domain={[0, 30000000]}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            formatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #ccc",
            }}
          />
          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke="var(--chart-3)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            strokeDasharray="5, 5"
          />
          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="var(--chart-1)"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
