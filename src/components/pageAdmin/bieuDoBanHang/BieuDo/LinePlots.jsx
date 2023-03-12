import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/plots";

function LinePlots({ dataChart }) {
  const maxValue = Math.max(...dataChart.map((d) => d.scales));
  const averageValue =
    dataChart.map((d) => d.scales).reduce((a, b) => a + b, 0) /
    dataChart.length;
  const config = {
    data: dataChart,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
    annotations: [
      {
        type: "line",

        /** 起始位置 */
        start: ["min", maxValue],

        /** 结束位置 */
        end: ["max", maxValue],
        text: {
          content: "Giá trị lớn nhất",
          position: "right",
          offsetY: 18,
          style: {
            textAlign: "right",
          },
        },
        style: {
          lineDash: [4, 4],
        },
      },
      {
        type: "line",

        /** 起始位置 */
        start: ["min", averageValue],

        /** 结束位置 */
        end: ["max", averageValue],
        text: {
          content: "Đường trung bình",
          position: "left",
          offsetY: -6,
          style: {
            textAlign: "left",
            fill: "lightblue",
          },
        },
        style: {
          lineDash: [4, 4],
          stroke: "lightblue",
        },
      },
    ],
  };
  return (
    <div>
      <Line {...config} />
    </div>
  );
}

export default LinePlots;
