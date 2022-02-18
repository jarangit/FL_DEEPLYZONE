import React from "react";

const DefualtMenuBar = () => {
  return (
    <div className="def_menu">
      <div className="def_log">
        <img
          src="https://i.ibb.co/NjMzVRF/LOGO-Deeply-zone.png"
          alt=""
          className="def_logo_img"
        />
      </div>

      <div className="def_menu_right">
        <ul>
          <li className="def_menu_item">
            <a href="#">ฟีเจอร์</a>
            <div className="def_dropdown">
              <ul>
                <li className="def_dropdown_item">Product Boosting</li>
                <li className="def_dropdown_item">Neighbor Tracking</li>
                <li className="def_dropdown_item">Data Analysis</li>
              </ul>
            </div>
          </li>
          <li className="def_menu_item">
            <a href="#">แพ็คเกจ</a>
          </li>
          <li className="def_menu_item">
            <a href="#">เกี่ยวกับเรา</a>
          </li>
          <li className="def_menu_item">
            <a href="#">ติดต่อเรา</a>
          </li>
          <li className="def_menu_item">
            <img
              src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/TH-Thailand-Flag-icon.png"
              alt=""
              className="def_menu_img_th"
            />
          </li>
          <li className="def_menu_item active">
            <a href="#">เข้าสู่ระบบ</a>
          </li>
          <li className="def_menu_item">
            <a href="#">ลงชื่อเข้าใช้</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefualtMenuBar;
