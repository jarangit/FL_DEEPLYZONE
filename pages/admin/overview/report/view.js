import React, { useState } from "react";
import BarChart from "../../../../conponents/charts/BarCharts";
import LineChart from "../../../../conponents/charts/LineChart";
import LineFillChart from "../../../../conponents/charts/LineFillCharts";
import SalesLineChart from "../../../../conponents/charts/SalesLineChart";

const View_page = () => {
  const [show_salesChart, setshow_salesChart] = useState(false);
  return (
    <div className="view_p">
      <div className="view_p_box_title">
        <p>ช่วงเวลาข้อมูล</p>
        <input type="date" />
      </div>

      <div className="view_p_box_menu">
        <ul>
          <li
            style={{ backgroundColor: "#38B6FF" }}
            className="view_p_menu_item"
            onClick={()=>setshow_salesChart(!show_salesChart)}
          >
            ยอดขาย
          </li>
          <li
            style={{ backgroundColor: "#004AAD" }}
            className="view_p_menu_item"
          >
            item
          </li>
          <li
            style={{ backgroundColor: "#8c52ff" }}
            className="view_p_menu_item"
          >
            item
          </li>
          <li className="view_p_menu_item">item</li>
          <li className="view_p_menu_item">item</li>
          <li className="view_p_menu_item">item</li>
          <li className="view_p_menu_item">item</li>
        </ul>
      </div>

      <div className="view_p_box_gaph">
        {show_salesChart ? (
          <React.Fragment>
            <p>แนวโน้นของตัวชี้วัดที่เลือก</p>
            <div className="view_p_graph">
              <LineChart />
            </div>
          </React.Fragment>
        ) : (
          <SalesLineChart />
        )}
      </div>

      <div className="view_p_box_ranking">
        <div className="view_p_box_ranking_graph">
          <p>จัดอันดับสินค้า</p>
          <ul>
            <li className="view_p_box_menu_item active">ยอดขาย</li>
            <li className="view_p_box_menu_item">จำนวนที่ขายได้</li>
            <li className="view_p_box_menu_item">ยอดขายสินค้า</li>
          </ul>

          <div className="view_p_ranking_graph">
            <BarChart />
          </div>
        </div>
        <div className="view_p_box_ranking_graph">
          <p>จัดอันดับสินค้า</p>
          <ul>
            <li className="view_p_box_menu_item active">ยอดขาย</li>
            <li className="view_p_box_menu_item">จำนวนที่ขายได้</li>
            <li className="view_p_box_menu_item">ยอดขายสินค้า</li>
          </ul>

          <div className="view_p_ranking_graph">
            <LineFillChart />
          </div>
        </div>
      </div>
    </div>
  );
};
View_page.layout = "admin";
export default View_page;
