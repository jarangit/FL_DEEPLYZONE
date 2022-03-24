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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCaretUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { fake_data_card_sales_charts } from "../../data/card_sales_charts";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      text: "Chart.js Line Chart - Cubic interpolation mode",
    },
  },
  scales: {
    y: {
      grace: "5%",
      ticks: {
        display: false,
      },
      max: 10,
      grid: {
        zeroLineBorderDPashOffset: 9,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};
const labels = ["1", "5", "10", "15", "20"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [2, 5, 4, 4, 4, 5],
      borderColor: "rgb(249, 106, 69)",
      backgroundColor: "rgb(249, 106, 69)",
    },
    {
      label: "Dataset 2",
      data: [3, 5, 3, 8, 1, 6],
      borderColor: "rgb(93, 112, 146)",
      backgroundColor: "rgb(93, 112, 146)",
    },
    {
      label: "Dataset 3",
      data: [1, 4, 3, 5, 3, 7],
      borderColor: "rgb(88, 183, 241)",
      backgroundColor: "rgb(88, 183, 241)",
    },
  ],
};

const SalesLineChart = () => {
  return (
    <div className="sale_charts">
      <div className="sales_charts_title">
        <p>ตัวชี้วัดที่เลือก</p>
      </div>

      <div className="sales_charts_card">
        {fake_data_card_sales_charts &&
          fake_data_card_sales_charts.map((item, key) => (
            <div key={key} className="salse_charts_card_item">
              <p>
                {item.title}
                <span className="salse_charts_card_item_icon">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                </span>
              </p>
              <div className="sales_charts_item_num">$ {item.value}</div>
              <div className="sales_charts_item_compare ">
                <div>เที่ยบกับ 7 วันที่ผ่านมา</div>
                <div
                  className="compare_value"
                  style={{
                    color: item.compare_value > 0 ? "#008000" : "#ff0000",
                  }}
                >
                  <span className="salse_charts_card_item_icon">
                    <FontAwesomeIcon
                      size="lg"
                      icon={item.compare_value > 0 ? faCaretUp : faCaretDown}
                      color={item.compare_value > 0 ? "#008000" : "#ff0000"}
                    />
                  </span>
                  {item.compare_value} %
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="sales_charts_box_chart">
        <p>แนวโน้นของตัวชี้วัดที่เลือก</p>
        <Line options={options} data={data} height={50} />
      </div>
    </div>
  );
};

export default SalesLineChart;
