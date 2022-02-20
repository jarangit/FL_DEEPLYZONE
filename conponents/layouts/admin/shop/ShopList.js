import React from "react";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ShopList = () => {
  const data_shop = [
    {
      name: "Deeply 01",
      package: "",
      img: "data:image/png;base64,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",
      date: "",
    },
  ];
  return (
    <div className="shop_list">
      <h2 className="shop_list_title">ร้านค้าของคุณ</h2>
      <div className="shop_list_box">
        {data_shop.map((item, key) => (
          <div className="shop_list_item">
            <img src={item.img} alt="" className="shop_img" />
            <div className="shop_item_title">{item.name}</div>
            <div className="shop_item_detail">
              <p>Package:</p>
              <p>Date:</p>
            </div>
            <button className="shop_del_but">
              <span style={{ marginRight: "5px" }}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              ลบร้านค้า
            </button>
          </div>
        ))}
        <div
          className="shop_list_item"
          style={{ textAlign: "center", cursor: "pointer"}}
        >
          <FontAwesomeIcon icon={faPlus} size="6x" color="#00C3CB" />
          <div>เพิ่มสินค้าของคุณ</div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
