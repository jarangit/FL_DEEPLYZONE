import React, { useState } from "react";
import CheckBox from "../items/input/checkBox";
const TalkingSkuTable = ({ data }) => {
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsCheck(data.map((item) => item.id));
    if (isCheckAll) {
      setIsCheck([]);
    }
  };
  console.log(isCheck);
  const handleClick = (e) => {
    const { id, checked } = e.target;
    console.log(checked);
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };

  return (
    <table className="taking_filter_table">
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
      </thead>
      <tbody>
        {data.map((item, key) => (
          <tr key={key}>
            <td>
              <label className="container_input">
                <CheckBox
                  type={"checkbox"}
                  name={item.name}
                  id={item.id}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(item.id)}
                />
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
            </td>
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
      </tbody>
    </table>
  );
};

export default TalkingSkuTable;
