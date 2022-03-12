import React, { useState } from "react";
import { faTrashAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalDelete from "./ModalDelete";
const ShopList = () => {
  const [open, setopen] = useState(false);
  const data_shop = [
    {
      name: "Deeply 01",
      package: "",
      img:"/img/logoIcon.png",
      date: "",
    },
  ];
  return (
    <div className="shop_list">
      <h2 className="shop_list_title">ร้านค้าของคุณ</h2>
      <div className="shop_list_box">
        {data_shop.map((item, key) => (
          <div className="shop_list_item" key ={key}>
            <img src={item.img} alt="" className="shop_img" />
            <div className="shop_item_title">{item.name}</div>
            <div className="shop_item_detail">
              {/* <p>Package:</p> */}
              <p>Date:DD/MM/YYYY</p>
            </div>
            <button className="shop_del_but" onClick={() => setopen(!open)} >
              <span style={{ marginRight: "5px" }}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </span>
              ลบร้านค้า
            </button>
          </div>
        ))}
        <div
          className="shop_list_item"
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faPlus} size="6x" color="#00C3CB" />
          <div>เพิ่มสินค้าของคุณ</div>
        </div>
      </div>
      {open && <ModalDelete  setopen = {setopen}/>}
    </div>
  );
};

export default ShopList;
