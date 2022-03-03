import React, { useState } from "react";
import CheckBox from "../items/input/checkBox";
const Expenses_table = ({ data, func_select }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data.map((item) => item.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  return (
    <div>
      <div style={{ overflowX: "auto", borderRadius: "10px", width: "100%" }}>
        <table className="expenses_table">
          <thead>
            <tr>
              <th>
                <label className="container_input">
                  <CheckBox
                    type={"checkbox"}
                    name="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                  />
                  <span className="checkmark"></span>
                </label>
              </th>
              <th>สินค้า</th>
              <th>
                <div className="selectdiv">
                  <label>
                    <select onChange={func_select}>
                      <option value="">ประเภทโฆษณา</option>
                      <option value={"Discovery Ads"}>Discovery Ads</option>
                      <option value={"Search Ads"}> Search Ads</option>
                    </select>
                  </label>
                </div>
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
          </thead>

          <tbody>
            {data.map((item, key) => (
              <React.Fragment key={key}>
                <tr>
                  <td>
                    <label className="container_input">
                      <CheckBox
                        type={"checkbox"}
                        name={item.name}
                        id={item.id}
                        handleClick={handleClick}
                        isChecked={isCheck.includes(item.id)}
                      />
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Expenses_table;
