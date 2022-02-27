import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import moment from "moment";
export const options = {
  responsive: true,
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
      },
      // beginAtZero: true,
      grace: "5%",
      
      max: 10,
      grid: {
        zeroLineBorderDashOffset: 9,
        display: false,
      },
    },
    x: {
     
    },
  },
};
const labels = ["หมอน", "กระเป๋าเดินทาง", "หมอนข้าง", "รายการ 4", "รายการ 5"];
console.log(moment().locale("th"));
export const data = {
  labels,
  datasets: [
    {
      axis: "y",
      label: "My First Dataset",
      data: [65, 60, 40, 30, 20],
      fill: false,
      backgroundColor: [
        "rgb(49, 53, 110)",
        "rgb(47, 95, 152)",
        "rgb(45, 139, 186)",
        "rgb(65, 184, 213)",
        "rgb(65, 184, 213)",
      ],
      borderColor: [
        "rgb(49, 53, 110)",
        "rgb(47, 95, 152)",
        "rgb(45, 139, 186)",
        "rgb(65, 184, 213)",
        "rgb(65, 184, 213)",
      ],
      borderWidth: 1,
    },
  ],
};

const BarChart = () => {
  return (
    <div>
      <Bar options={options} data={data} width={200} />
    </div>
  );
};

export default BarChart;
