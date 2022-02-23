import React from "react";
import Progress_bar from "../../../../conponents/items/Progress_bar";
import { faEye, faHeart, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProductBooster_page = () => {
  return (
    <div className="prod_booster">
      <div className="prod_booster_title">
        <div>
          <h2>Product Booster</h2>
          <p>สร้าง Auto Bot ในร้านของคุณ</p>
        </div>
        <div className="prod_booster_box_title_right">
          <div className="prod_booster_box_title_right_item">
            <p>ช่วงเวลาของข้อมล</p>
          </div>
          <div className="prod_booster_box_title_right_item">
            <div className="prod_booster_input_date">
              <input
                type="date"
                name="date_booster"
                value="2018-07-22"
                id="start"
                min="2018-01-01"
                max="2018-12-31"
              />
            </div>
          </div>
          <div className="prod_booster_box_title_right_item">
            <button className="jr_but_blue">+ สร้าง</button>
          </div>
        </div>
      </div>

      <div className="prod_booster_nav">
        <ul>
          <li className="prod_booster_nav_item">ทั้งหมด</li>
          <li className="prod_booster_nav_item">กำลังดำเนินการ</li>
          <li className="prod_booster_nav_item">เร็วๆนี้</li>
          <li className="prod_booster_nav_item">หทดอายุ</li>
        </ul>
        <button style={{ borderRadius: "10px" }} className="jr_but_gray">
          รายงาน
        </button>
      </div>

      <div className="prod_booster_label">กำลังดำเนินการ</div>

      <div className="prod_booster_box_product">
        {Array.apply(null, { length: 5 }).map((item, key) => (
          <div  key = {key} className="prod_booster_product_item">
            <div className="prod_item_img">
              <img src="#" alt="" />
            </div>
            <div className="prod_item_detail">
              <p>ชื่อสินค้า</p>
              <p>
                <span>
                  <FontAwesomeIcon
                    icon={faEye}
                    color="#00c3cb"
                    size="sm"
                    style={{ marginRight: "5px" }}
                  />
                </span>
                0
              </p>
              <p>
                <span>
                  <FontAwesomeIcon
                    icon={faHeart}
                    color="#00c3cb"
                    size="sm"
                    style={{ marginRight: "5px" }}
                  />
                </span>
                0
              </p>
              <div className="prod_item_progressBar">
                <Progress_bar bgcolor="#00c3cb" progress="60" height={10} />
              </div>
              <div className="prod_item_status">
                <span>
                  <FontAwesomeIcon
                    color="green"
                    icon={faCircle}
                    size="sm"
                    style={{ marginRight: "10px" }}
                  />
                </span>
                กำลังดำเนินการ
              </div>
            </div>
          </div>
        ))}
      </div>

      <table className="prod_booster_table">
        <tr>
          <th>รอยเวลา</th>
          <th>สินค้า</th>
          <th>จำนวนผู้เข้าชม</th>
          <th>สถานะ</th>
          <th>ข้อมูล</th>
        </tr>

        <tr>
          <td>30-3-2022</td>
          <td>Product1</td>
          <td>30</td>
          <td>Online</td>
          <td>-</td>
        </tr>
      </table>
    </div>
  );
};
ProductBooster_page.layout = "admin";

export default ProductBooster_page;
