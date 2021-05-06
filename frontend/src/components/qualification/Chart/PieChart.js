import React from "react";
import { Doughnut } from "react-chartjs-2";

function PieChart() {
  const data = {
    labels: ["React", "C++", "Python", "Java", "TypeScript", "SQL", "GraphQL"],
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: [
          "rgba(14,165,233,1)",
          "rgba(0, 0, 128, 1)",
          "rgba(255, 232, 115, 1)",
          "rgba(248, 152, 32, 1)",
          "rgba(0, 122, 204, 1)",
          "rgba(0, 117, 143, 1)",
          "rgba(229, 53, 171, 1)",
        ],
        borderColor: "rgba(220,220,220,0.8)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(14, 165, 233, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(220,220,220,0.75)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const options = {
    responsive: true,
    legend: {
      position: "bottom",
      labels: {
        fontColor: "white",
        boxWidth: 20,
        padding: 20,
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} width={500} height={500} options={options} />
    </div>
  );
}

export default PieChart;
