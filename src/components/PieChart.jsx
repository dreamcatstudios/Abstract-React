// PieChart.js

import React, { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { useTooltip, useTooltipInPortal, defaultStyles } from "@visx/tooltip";
import { localPoint } from "@visx/event";

// Custom Tooltip component
const Tooltip = ({ top = 0, left = 0, children }) => (
  <div
    style={{
      position: "absolute",
      top,
      left,
      background: "rgba(0,0,0,0.8)",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      pointerEvents: "none",
    }}
  >
    {children}
  </div>
);

const PieChart = ({ width, height, data }) => {
  const radius = Math.min(width, height) / 2;
  const [tooltipData, setTooltipData] = useState(null);

  const { tooltipOpen, tooltipLeft, tooltipTop, hideTooltip, showTooltip } =
    useTooltip();

  const { containerRef, TooltipInPortal } = useTooltipInPortal();

  const handleMouseOver = (event, datum) => {
    const coords = localPoint(event.target.ownerSVGElement, event);
    showTooltip({
      tooltipLeft: coords.x,
      tooltipTop: coords.y,
      tooltipData: { ...datum, formattedValue: `${datum.value}` }, // Add a formatted value for display
    });
    setTooltipData(datum);
  };

  // Define custom colors for "correct points" and "total points"
  const colors = ["#29bc9b", "#e60000"];

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height} ref={containerRef}>
        <Group top={height / 2} left={width / 2}>
          <Pie
            data={data}
            pieValue={(d) => d.value}
            outerRadius={radius}
            innerRadius={0}
            onMouseOver={(event, datum) => handleMouseOver(event, datum)}
            onMouseLeave={() => handleMouseLeave()}
          >
            {(pie) =>
              pie.arcs.map((arc, index) => (
                <g key={index} className="pie-slice">
                  <path d={pie.path(arc)} fill={colors[index]} />
                </g>
              ))
            }
          </Pie>
        </Group>
      </svg>
      {tooltipOpen && tooltipData && (
        <Tooltip top={tooltipTop} left={tooltipLeft}>
          {`Data: ${tooltipData.formattedValue}`}
        </Tooltip>
      )}

      {tooltipOpen && <TooltipInPortal {...defaultStyles} />}
    </div>
  );
};

export default PieChart;
