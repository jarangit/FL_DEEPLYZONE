import React from "react";

const Expenses_table = () => {
  return (
    <div  style={{overflowX: "auto",borderRadius: "10px", width: "100%"}}>
      <table className="expenses_table">
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>สินค้า</th>
          <th>ประเภทโฆษณา</th>
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

        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </table>
    </div>
  );
};

export default Expenses_table;
