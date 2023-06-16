import React from "react";
import { Line } from "@ant-design/plots";

function BasicLine({ dataAPI }) {
  const config = {
    data: dataAPI,
    xField: "Date",
    yField: "scales",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };
  return <Line {...config} />;
}

export default BasicLine;
