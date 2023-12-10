import React from "react";
import { VictoryPie } from "victory";

const Points = () => {
  const userPoints = 10; // Assuming you have a way to get the user's points

  const data = [
    { x: "Points Earned", y: userPoints },
    { x: "Points Remaining", y: 100 - userPoints }, // Assuming a maximum of 100 points
  ];

  return (
    <div className="container">
      <div
        className="border border-[#333] mt-7"
        style={{ textAlign: "center" }}
      >
        <h2 className="text-3xl font-bold mt-7">Total Points </h2>
        <div style={{ width: "300px", margin: "auto" }}>
          <VictoryPie
            data={data}
            colorScale={["#0761d1", "#e60000"]}
            innerRadius={70}
            labelRadius={100}
            style={{
              labels: { fill: "white", fontSize: 17, fontWeight: "bold" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Points;
