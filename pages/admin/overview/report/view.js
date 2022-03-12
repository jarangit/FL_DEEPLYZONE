import React, { useState, useRef } from "react";
import BarChart from "../../../../conponents/charts/BarCharts";
import LineChart from "../../../../conponents/charts/LineChart";
import LineFillChart from "../../../../conponents/charts/LineFillCharts";
import SalesLineChart from "../../../../conponents/charts/SalesLineChart";
import Calendar from "../../../../conponents/items/calendar/Calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import useOutsideClick from "../../../../conponents/items/clickOutside/useOutsideClick";
import Link from "next/link";
const View_page = () => {
  const [show_salesChart, setshow_salesChart] = useState(true);
  const [openDatePicker, setopenDatePicker] = useState(false);

  const ref = useRef(null);
  useOutsideClick(ref, () => {
    if (openDatePicker) setopenDatePicker(false);
  });

  return (
    <div className="view_p">
      <div style={{ display: "flex" }}>
        <div className="prod_booster_box_title_right_item">
          <p>ช่วงเวลาของข้อมล</p>
        </div>
        <div className="prod_booster_box_title_right_item">
          <div className="prod_booster_input_date">
            <div
              className="jr_input_date"
              onClick={() => setopenDatePicker(!openDatePicker)}
            >
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} className="jr_icon" />
              </span>
              ปปปป/ดด/วว
            </div>
            {openDatePicker && (
              <div ref={ref}>
                <Calendar />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="view_p_box_menu">
        <ul>
          <li
            style={{ backgroundColor: "#38B6FF" }}
            className="view_p_menu_item"
            onClick={() => setshow_salesChart(!show_salesChart)}
          >
            <Link href="/admin">
              <a>ยอดขาย</a>
            </Link>
          </li>
          <li
            style={{ backgroundColor: "#004AAD" }}
            className="view_p_menu_item"
          >
            <Link href="/admin">
              <a>ยอดขายสุทธิ</a>
            </Link>
          </li>
          <li
            style={{ backgroundColor: "#8c52ff" }}
            className="view_p_menu_item"
          >
            <Link href="/admin">
              <a>คำสั่งซื้อ</a>
            </Link>
          </li>
          <li className="view_p_menu_item">คำสั่งซื้อที่ยกเลิก</li>
          <li className="view_p_menu_item">จำนวนผู้เยี่ยมชม</li>
          <li className="view_p_menu_item">ยอดชมสินค้า</li>
          <li className="view_p_menu_item">ยอดเฉลี่ยต่อคำสั่งซื้อ</li>
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
            <li className="view_p_box_menu_item active">
              <Link href={"/admin"}>
                <a>ยอดขาย</a>
              </Link>
            </li>
            <li className="view_p_box_menu_item">
              <Link href={"/admin"}>
                <a>จำนวนที่ขายได้</a>
              </Link>
            </li>
            <li className="view_p_box_menu_item">
              <Link href={"/admin"}>
                <a>ยอดขายสินค้า</a>
              </Link>
            </li>
          </ul>

          <div className="view_p_ranking_graph">
            <BarChart />
          </div>
        </div>
        <div className="view_p_box_ranking_graph">
          <p>จัดอันดับสินค้า</p>
          <ul>
            <li className="view_p_box_menu_item active">
              <Link href={"/admin"}>
                <a>ยอดขาย</a>
              </Link>
            </li>
            <li className="view_p_box_menu_item">
              <Link href={"/admin"}>
                <a>จำนวนที่ขายได้</a>
              </Link>
            </li>
            <li className="view_p_box_menu_item">
              <Link href={"/admin"}>
                <a>ยอดขายสินค้า</a>
              </Link>
            </li>
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
