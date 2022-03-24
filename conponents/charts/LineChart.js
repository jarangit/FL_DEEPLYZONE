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
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      // beginAtZero: true,
      grace: "5%",
      ticks: {
        display: false,
      },
      max: 10,
      grid: {
        zeroLineBorderDashOffset: 9,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};
const labels = moment.months();
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [2, 5, 4, 4, 4, 5],
      borderColor: "rgb(22, 74, 173)",
      backgroundColor: "rgb(22, 74, 173)",
      tension: 0.3,
    },
    {
      label: "Dataset 2",
      data: [3, 5, 3, 8, 1, 6],
      borderColor: "rgb(64, 185, 255)",
      backgroundColor: "rgb(64, 185, 255)",
      tension: 0.3,
    },
    {
      label: "Dataset 3",
      data: [1, 4, 3, 5, 3, 7],
      borderColor: "rgb(140, 82, 255)",
      backgroundColor: "rgb(140, 82, 255)",
      tension: 0.3,
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line options={options} data={data} height={50} />
    </div>
  );
};

export default LineChart;
