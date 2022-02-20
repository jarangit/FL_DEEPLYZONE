import React from "react";

const ConnectPage = () => {
  return (
    <div className="connect">
      <h3>การเชื่อต่อ</h3>
      <div className="connect_nav">
        <ul>
          <li className="connect_nav_item">กาลังเชื่อมต่อ 0</li>
          <li className="connect_nav_item">ถูกระงับ 0</li>
          <li className="connect_nav_item">หมดอายุ 0</li>
          <li className="connect_nav_item">หยุดเชื่อมต่อ 0</li>
        </ul>
      </div>
      <div>รายชื่อการเชื่อทต่อ Deeply ไปยัง Data Source</div>
      <div className="connect_nav2">
        <ul>
          <li className="connect_nav_item">โซเชียลมีเดีย</li>
          <li className="connect_nav_item">สถานะ</li>
          <li className="connect_nav_item">วันหมดอายุ</li>
          <li className="connect_nav_item">ดำเนินการ</li>
        </ul>
        <button className="jr_but_blue connect_add_shop">+เพิ่มร้านค้า</button>
      </div>

      <table className="connect_table" >
        <tr>
          <th>ช่องทาง</th>
          <th>สถานะ</th>
          <th>วันหมดอายุ</th>
          <th>ดำเนินการ</th>
        </tr>
        <tr>
          <td>ช่องทาง</td>
          <td>ช่องทาง</td>
          <td>ช่องทาง</td>
          <td>ช่องทาง</td>
        </tr>
      </table>
    </div>
  );
};
ConnectPage.layout = "admin";

export default ConnectPage;
