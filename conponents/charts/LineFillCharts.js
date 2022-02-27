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
  
  radius: 0,

  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grace: "5%",
      grid: {
        zeroLineBorderDashOffset: 9,
      },
    },
    x: {
      grid: {
        display: false,
      },
      max: 3,
    },
  },
};
const labels = moment.months();
console.log(moment().locale("th"));
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 25, 27, 3, 7],
      borderColor: "rgb(100, 212, 225, 0.7)",
      backgroundColor: "rgb(100, 212, 225, 0.7)",
      fill: true,
      border: false,
    },
    {
      label: "Dataset 2",
      data: [15, 30, 35, 50, 1, 6],
      borderColor: "rgb(84, 182, 212, 0.7)",
      backgroundColor: "rgb(84, 182, 212, 0.7)",
      fill: true,
    },
    {
      label: "Dataset 3",
      data: [25, 30, 60, 125, 3, 7],
      borderColor: "rgb(119, 180, 210, 0.9)",
      backgroundColor: "rgb(119, 180, 210, 0.9)",
      fill: true,
    },
  ],
};

const LineFillChart = () => {
  return (
    <div>
      <Line options={options} data={data} width={200} />
    </div>
  );
};

export default LineFillChart;
