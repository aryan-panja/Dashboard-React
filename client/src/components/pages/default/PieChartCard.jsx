import { Card } from "@/components/ui/card";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export const description = "A donut chart";
const COLORS = [
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-6)",
  "var(--chart-7)",
];
const data = [
  { name: "Direct", value: 300.56, percentage: 38.6 },
  { name: "Affiliate", value: 135.18, percentage: 17.4 },
  { name: "Sponsored", value: 154.02, percentage: 19.8 },
  { name: "E-mail", value: 48.96, percentage: 6.3 },
];

export const PieChartCard = () => {
  return (
    <Card
      className={
        "flex flex-col justify-center gap-[16px] rounded-[16px] p-[24px]"
      }
    >
      <h1 className="text-[14px] font-[600]">Total Sales</h1>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <div className="h-[120px] w-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="border-0"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex w-full flex-col justify-center gap-[12px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="hover:bg-muted-background-2 flex justify-between rounded-[8px]"
            >
              {/* Left side */}
              <div className="flex min-w-0 items-center py-[2px] pr-[8px] pl-[4px]">
                <div className="relative aspect-square size-[16px] flex-shrink-0">
                  <div
                    className="absolute top-1/2 left-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                </div>
                <div className="truncate text-[12px]">{item.name}</div>
              </div>

              {/* Right side */}
              <h1 className="py-[2px] pr-[8px] pl-[4px] text-right text-[12px] tabular-nums">
                ${item.value.toFixed(2)}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
