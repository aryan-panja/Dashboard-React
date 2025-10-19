import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "@vnedyalk0v/react19-simple-maps";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/context/theme-provider";

const markers = [
  { name: "New York", coordinates: [-120, 37], value: "72K", width: "80%" },
  { name: "San Francisco", coordinates: [-80, 37], value: "39K", width: "45%" },
  { name: "Sydney", coordinates: [140, -25], value: "25K", width: "55%" },
  {
    name: "Singapore",
    coordinates: [103.8198, 1.3521],
    value: "61K",
    width: "70%",
  },
];

export const MapCard = () => {
  const { theme } = useTheme();
  return (
    <Card
      className={
        "flex flex-col items-center justify-center gap-[16px] rounded-[16px] p-[24px]"
      }
    >
      <h1 className="text-[14px] font-[600]">Revenue by Location</h1>

      <Map fill={theme === "dark" ? "#677680" : "#A8C5DA"} />

      {markers.map(({ name, value, width }, index) => (
        <div className="w-full" key={index}>
          <div className="flex items-center justify-between">
            <h1>{name}</h1>
            <h1>{value}</h1>
          </div>
          <div className="h-[2px] w-full rounded-[80px] bg-[#E6EEF5] dark:bg-[#373B3E]">
            <div
              className="h-[2px] rounded-[80px] bg-[#A8C5DA]"
              style={{ width }}
            />
          </div>
        </div>
      ))}
    </Card>
  );
};

// world map geo url
const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

const Map = ({ fill }) => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        center: [0, 0],
      }}
      className="h-full w-full"
    >
      {/* World Map */}
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo, i) => (
            <Geography
              key={i}
              geography={geo}
              style={{
                default: { fill: fill, outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Markers */}
      {markers.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={15} fill="black" stroke="#fff" strokeWidth={8} />
        </Marker>
      ))}
    </ComposableMap>
  );
};
