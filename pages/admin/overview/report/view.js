import React from "react";

const View_page = () => {
  return (
    <div className="view_p">
      <div className="view_p_box_title">
        <p>ช่วงเวลาข้อมูล</p>
        <input type="date" />
      </div>

      <div className="view_p_box_menu">
        <ul>
          <li style={{ backgroundColor: "#38B6FF" }} className="view_p_menu_item">
            item
          </li>
          <li style={{ backgroundColor: "#004AAD" }} className="view_p_menu_item">item</li>
          <li style={{ backgroundColor: "#8c52ff" }} className="view_p_menu_item">item</li>
          <li className="view_p_menu_item">item</li>
          <li className="view_p_menu_item">item</li>
          <li className="view_p_menu_item">item</li>
          <li className="view_p_menu_item">item</li>
        </ul>
      </div>

      <div className="view_p_box_gaph">
        <p>แนวโน้นของตัวชี้วัดที่เลือก</p>
        <div className="view_p_graph">GRAPH</div>
      </div>

      <div className="view_p_box_ranking">
        <div className="view_p_box_ranking_graph">
          <p>จัดอันดับสินค้า</p>
          <ul>
            <li className="view_p_box_menu_item active">ยอดขาย</li>
            <li className="view_p_box_menu_item">จำนวนที่ขายได้</li>
            <li className="view_p_box_menu_item">ยอดขายสินค้า</li>
          </ul>

          <div className="view_p_ranking_graph">GRAPH</div>
        </div>
        <div className="view_p_box_ranking_graph">
          <p>จัดอันดับสินค้า</p>
          <ul>
            <li className="view_p_box_menu_item active">ยอดขาย</li>
            <li className="view_p_box_menu_item">จำนวนที่ขายได้</li>
            <li className="view_p_box_menu_item">ยอดขายสินค้า</li>
          </ul>

          <div className="view_p_ranking_graph">GRAPH</div>
        </div>
      </div>


    </div>
  );
};
View_page.layout = "admin";
export default View_page;
