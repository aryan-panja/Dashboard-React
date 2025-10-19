import { Card } from "@/components/ui/card";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export const description = "A donut chart";
const COLORS = ["#1a1a1a", "#6366f1", "#93c5fd", "#86efac"];
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
        "flex flex-col items-center justify-center gap-[16px] rounded-[16px] p-[24px]"
      }
    >
      <h1 className="text-[14px] font-[600]">Total Sales</h1>

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
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}

            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col justify-center gap-[12px]">
        <div className="flex items-center gap-[48px]">
          <div className="flex items-center justify-center py-[2px] pr-[8px] pl-[4px]">
            <div className="relative aspect-square size-[16px]">
              <div className="absolute top-1/2 left-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
            </div>
            <div>Direct</div>
          </div>

          <h1>$300.56</h1>
        </div>

        <div className="flex items-center gap-[48px]">
          <div className="flex items-center justify-center py-[2px] pr-[8px] pl-[4px]">
            <div className="relative aspect-square size-[16px]">
              <div className="absolute top-1/2 left-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
            </div>
            <div>Direct</div>
          </div>

          <h1>$300.56</h1>
        </div>

        <div className="flex items-center gap-[48px]">
          <div className="flex items-center justify-center py-[2px] pr-[8px] pl-[4px]">
            <div className="relative aspect-square size-[16px]">
              <div className="absolute top-1/2 left-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
            </div>
            <div>Direct</div>
          </div>

          <h1>$300.56</h1>
        </div>

        <div className="flex items-center gap-[48px]">
          <div className="flex items-center justify-center py-[2px] pr-[8px] pl-[4px]">
            <div className="relative aspect-square size-[16px]">
              <div className="absolute top-1/2 left-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
            </div>
            <div>Direct</div>
          </div>

          <h1>$300.56</h1>
        </div>
      </div>
    </Card>
  );
};

// "use client";

// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
// import { Card } from "@/components/ui/card";

// const data = [
//   { name: "Direct", value: 300.56, percentage: 38.6 },
//   { name: "Affiliate", value: 135.18, percentage: 17.4 },
//   { name: "Sponsored", value: 154.02, percentage: 19.8 },
//   { name: "E-mail", value: 48.96, percentage: 6.3 },
// ];

// const COLORS = ["#1a1a1a", "#6366f1", "#93c5fd", "#86efac"];

// export const PieChartCard = () => {
//   const totalSales = data.reduce((sum, item) => sum + item.value, 0);

//   return (
//     <Card className="w-full max-w-sm bg-white p-6">
//       <div className="flex flex-col items-center">
//         {/* Title */}
//         <h2 className="mb-6 text-xl font-semibold text-gray-900">
//           Total Sales
//         </h2>

//         {/* Donut Chart */}
//         <div className="relative flex h-64 w-64 items-center justify-center">
//           <div className="h-[120px] w-[120px]">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={data}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={40}
//                   outerRadius={60}
//                   paddingAngle={2}
//                   dataKey="value"
//                   startAngle={90}
//                   endAngle={-270}
//                 >
//                   {data.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index]} />
//                   ))}
//                 </Pie>
//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Center Percentage */}
//           <div className="absolute inset-0 flex items-end justify-center pb-8">
//             <div className="rounded bg-gray-700 px-3 py-1 text-sm font-semibold text-white">
//               38.6%
//             </div>
//           </div>
//         </div>

//         {/* Legend */}
//         <div className="mt-8 w-full space-y-3">
//           {data.map((item, index) => (
//             <div key={item.name} className="flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <div
//                   className="h-2 w-2 rounded-full"
//                   style={{ backgroundColor: COLORS[index] }}
//                 />
//                 <span className="text-sm text-gray-700">{item.name}</span>
//               </div>
//               <span className="text-sm font-semibold text-gray-900">
//                 ${item.value.toFixed(2)}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Card>
//   );
// };
