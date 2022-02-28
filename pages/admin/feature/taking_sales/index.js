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
const TakingSales_page = () => {
  const [openDatePicker, setopenDatePicker] = useState(false);
  // console.log(data_product_taking);
  const ref = useRef(null);
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

      <div className="taking_box_filter">
        <p>ข้อมูลติดตาม</p>
        <ul>
          <li className="taking_filter_item">
            <label className="container_input_text">
              ชื่อสินค้า
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <label className="container_input_text">
              ราคาสินค้า
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <label className="container_input_text">
              คะแนนสินค้า
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <label className="container_input_text">
              ยอดขาย
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <label className="container_input_text">
              หมวดหมู่สินค้า
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <label className="container_input_text">
              การกดถูกใจ
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <label className="container_input_text">
              คะแนนรีวิว
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <label className="container_input_text">
              ที่ตั้งร้ายค้า
              <input type="checkbox" />
              <span className="checkmark_left"></span>
            </label>
          </li>
          <li className="taking_filter_item">
            <button className="jr_but_gray">ลบสินค้า</button>
          </li>
          <li className="taking_filter_item">
            <button
              style={{ fontSize: "16px" }}
              className="taking_filter_but_advance"
            >
              <span>
                <FontAwesomeIcon icon={faSliders} />
              </span>
              ค้าหาขั้นสูง
            </button>
          </li>
        </ul>
      </div>

      <table className="taking_filter_table">
        <tr>
          <th>
            <label className="container_input">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </th>
          <th>ชื่อสินค้า</th>
          <th>ราคาสินค้า</th>
          <th>คะแนนสินค้า</th>
          <th>ยอดขาย</th>
          <th>หมวดหมู่สินค้า</th>
          <th>การกดถูกใจ</th>
          <th>คะแนนรีวิว</th>
          <th>ที่ตั้งร้ายค้า</th>
          <th>สถานะ</th>
        </tr>
        {data_product_taking.length !== 0 ? (
          <React.Fragment>
            {data_product_taking.map((item, key) => (
              <tr key={key}>
                <td>
                  <label className="container_input">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </td>
                <td>{item.name}</td>
                <td>
                  {item.price}
                  <div
                    style={{
                      color: `${item.price_rate >= 0 ? "#31e500" : "red"}`,
                    }}
                    className="price_change"
                  >
                    [<span>{item.price_rate >= 0 ? "+" : ""}</span>
                    {item.price_rate}%]
                  </div>
                </td>
                <td>{item.rate}</td>
                <td>
                  {item.sales}
                  <div
                    style={{
                      color: `${item.sales_rate >= 0 ? "#31e500" : "red"}`,
                    }}
                    className="price_change"
                  >
                    [<span>{item.sales_rate >= 0 ? "+" : ""}</span>
                    {item.sales_rate}%]
                  </div>
                </td>{" "}
                <td>{item.category}</td>
                <td>{item.like}</td>
                <td>
                  {item.rate_review.map((review_item, key) => (
                    <div key={key} className="taking_table_review">
                      <p>{review_item.star}</p>
                      <p>ดาว</p>
                      <p>{review_item.socre}</p>
                    </div>
                  ))}
                </td>
                <td>{item.address}</td>
                <td className="taking_table_status">
                  {item.status}
                  <div>
                    <button disabled>
                      <a href="#">ข้อมูล</a>
                    </button>
                  </div>
                  <div>
                    <button disabled>ลบ</button>
                  </div>
                </td>
              </tr>
            ))}
          </React.Fragment>
        ) : (
          ""
        )}
      </table>
    </div>
  );
};
TakingSales_page.layout = "admin";
export default TakingSales_page;
