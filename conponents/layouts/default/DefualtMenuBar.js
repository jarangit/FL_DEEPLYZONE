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
          <li className="def_menu_item">ฟีเจอร์</li>
          <li className="def_menu_item">แพ็คเกจ</li>
          <li className="def_menu_item">เกี่ยวกับเรา</li>
          <li className="def_menu_item">ติดต่อเรา</li>
          <li className="def_menu_item">
            <img
              src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/TH-Thailand-Flag-icon.png"
              alt=""
              className="def_menu_img_th"
            />
          </li>
          <li className="def_menu_item">เข้าสู่ระบบ</li>
          <li className="def_menu_item">ลงชื่อเข้าใช้</li>
        </ul>
      </div>
    </div>
  );
};

export default DefualtMenuBar;
