import React from "react";
import { fake_data_table_overview } from "../../data/data_table_overview";
const Expenses_table = () => {
  return (
    <div style={{ overflowX: "auto", borderRadius: "10px", width: "100%" }}>
      <table className="expenses_table">
        <tr>
          <th>
            <label className="container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </th>
          <th>สินค้า</th>
          <th>
            <select name="type_product" id="">
              <option value="">ประเภทโฆษณา</option>
              <option value="siscovery">Discovery Ads</option>
              <option value="searchAds">Seach Ads</option>
            </select>
          </th>
          <th>งบประมาณ</th>
          <th>การมองเห็น</th>
          <th>จำนวนคลิก</th>
          <th>อัตราการคลิก(CTR)</th>
          <th>ค่าโฆษณา</th>
          <th>การสั่งซื้อ</th>
          <th>สินค้าที่ขายแล้ว</th>
          <th>ยอดขาย</th>
          <th>ผลตอบแทนการลงทุน</th>
          <th>อัตราการโฆษาณาต่อรายได้(CIR)</th>
          <th>อัตราการสั่งซื้อ</th>
          <th>ราคาต่อการสั่งซื้อ</th>
        </tr>

        {fake_data_table_overview.map((item, key) => (
          <React.Fragment key={key}>
            <tr>
              <td>
                <label className="container">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </td>
              <td>
                <img src={item.img} width={50} alt="" />
                <div>{item.name}</div>
              </td>
              <td>{item.type}</td>
              <td>{item.bodget}</td>
              <td>{item.view}</td>
              <td>{item.qty_click}</td>
              <td>{item.ctr_click}</td>
              <td>{item.ads}</td>
            </tr>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};

export default Expenses_table;
