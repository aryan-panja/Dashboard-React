import React from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "@vnedyalk0v/react19-simple-maps";
import { Card } from "@/components/ui/card";

export const MapCard = () => {
  return (
    <Card
      className={
        "flex flex-col items-center justify-center gap-[16px] rounded-[16px] p-[24px]"
      }
    >
      <h1 className="text-[14px] font-[600]">Revenue by Location</h1>

      <Map />

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1>New York</h1>
          <h1>72K</h1>
        </div>
        <div className="w-full rounded-[80px] bg-[#E6EEF5]">
          <div className="size-1 w-[50%] rounded-[80px] bg-[#A8C5DA]" />
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1>New York</h1>
          <h1>72K</h1>
        </div>
        <div className="w-full rounded-[80px] bg-[#E6EEF5]">
          <div className="size-1 w-[50%] rounded-[80px] bg-[#A8C5DA]" />
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1>New York</h1>
          <h1>72K</h1>
        </div>
        <div className="w-full rounded-[80px] bg-[#E6EEF5]">
          <div className="size-1 w-[50%] rounded-[80px] bg-[#A8C5DA]" />
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <h1>New York</h1>
          <h1>72K</h1>
        </div>
        <div className="w-full rounded-[80px] bg-[#E6EEF5]">
          <div className="size-1 w-[50%] rounded-[80px] bg-[#A8C5DA]" />
        </div>
      </div>
    </Card>
  );
};

const geoUrl = "https://unpkg.com/world-atlas@2/countries-110m.json";

const Map = () => {
  return (
    <ComposableMap
      projection="geoEqualEarth"
      projectionConfig={{
        // scale: 147,
        center: [0, 0],
      }}
      className="h-full w-fit"
    >
      {/* World Map */}
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#A8C5DA", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      {/* Markers */}
      {/* USA (approx: longitude -95, latitude 37) */}
      <Marker coordinates={[-95, 37]}>
        <circle r={4} fill="black" />
      </Marker>

      {/* Australia (approx: longitude 133, latitude -25) */}
      <Marker coordinates={[133, -25]}>
        <circle r={4} fill="black" />
      </Marker>
    </ComposableMap>
  );
};
