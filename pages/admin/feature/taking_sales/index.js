import React, { useState, useEffect, useRef } from "react";
import {
  faCalendarAlt,
  faL,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data_product_taking } from "../../../../data/products";
import Calendar from "../../../../conponents/items/calendar/Calendar";
import useOutsideClick from "../../../../conponents/items/clickOutside/useOutsideClick";
import TalkingSkuTable from "../../../../conponents/table/talkingSkuTable";
import ColumnHiding from "../../../../conponents/table/columnHiding";
const TakingSales_page = () => {
  const [openDatePicker, setopenDatePicker] = useState(false);
  const [data, setdata] = useState(data_product_taking);
  // console.log(data_product_taking);
  const ref = useRef(null);

  function onChecked(e) {
    if (e) {
      console.log(e.target.name);
      const del = data_product_taking.forEach((ob) => {
        delete ob[e.target.name];
      });
      setdata(del);
    }
    console.log(data);
  }

  // useEffect(() => {
  //   setdata(data_product_taking);
  // }, [data])

  console.log(data);
  useOutsideClick(ref, () => {
    if (openDatePicker) setopenDatePicker(false);
  });
  return (
    <div className="taking">
      <div className="taking_box_title">
        <div className="taking_box_title_L">
          <h1>Talking SKU</h1>
          <p>สินค้า</p>
        </div>

        <div className="taking_box_title_R">
          <p>ช่วงเวลาของข้อมล</p>
          <div
            className="jr_input_date"
            onClick={() => setopenDatePicker(true)}
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
      <div className="taking_box_add_sku">
        <p>ลิงค์สินค้า</p>
        <input type="text" placeholder="www.shopee.con" />
        <button className="jr_but_blue">
          <p>+ เพิ่ม SKU</p>
        </button>
        <button className="jr_but_gray">
          <p>รายงาน</p>
        </button>
      </div>
      <div style={{marginTop: "20px"}} >
        <p>ข้อมูลการติดตาม</p>
        <ColumnHiding />
      </div>
    </div>
  );
};
TakingSales_page.layout = "admin";
export default TakingSales_page;
