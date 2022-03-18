import React from "react";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ConnectPage = () => {
  return (
    <div className="connect">
      <h3>การเชื่อต่อ</h3>
      <div className="connect_nav">
        <ul>
          <li className="connect_nav_item active ">กาลังเชื่อมต่อ 1</li>
          <li className="connect_nav_item">ถูกระงับ 0</li>
          <li className="connect_nav_item">หมดอายุ 0</li>
          <li className="connect_nav_item">หยุดเชื่อมต่อ 0</li>
        </ul>
      </div>
      <div>รายชื่อการเชื่อมต่อ Deeply ไปยัง Data Source</div>
      <div className="connect_nav2">
        <ul>
          <li className="connect_nav_item">โซเชียลมีเดีย</li>
          <li className="connect_nav_item active">มาร์เก็ตเพลส</li>
          <li className="connect_nav_item">เว็บไชค์ร้านค้า</li>
          <li className="connect_nav_item">ระบบขายหน้าร้าน</li>
        </ul>
        <button className="jr_but_blue connect_add_shop">+เพิ่มร้านค้า</button>
      </div>

      <table className="connect_table">
        <thead>
          <tr>
            <th>ช่องทาง</th>
            <th>สถานะ</th>
            <th>วันหมดอายุ</th>
            <th>ดำเนินการ</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                style={{ maxWidth: "100px" }}
                src="https://www.wogi.sg/uploads/brands/123/list_logo.jpg"
                alt=""
              />
            </td>
            <td>
              <div>
                <input
                  className="icon_toggle"
                  type={"checkbox"}
                  id="check_toggle"
                />
                <label htmlFor="check_toggle">เชื่อมต่อ</label>
              </div>
            </td>
            <td>31-12-2022</td>
            <td>
              <FontAwesomeIcon
                icon={faExclamation}
                size="lg"
                color="#354767"
                className="connect_icon_exclamation"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
ConnectPage.layout = "admin";

export default ConnectPage;
