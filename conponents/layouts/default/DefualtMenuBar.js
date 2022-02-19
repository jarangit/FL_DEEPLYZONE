import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const DefualtMenuBar = () => {
  const [active, setactive] = useState(false);
  const router = useRouter();
  console.log(router);

  return (
    <div className="def_menu">
      <div className="def_log">
        <Link href={"/"}>
          <a>
            <img
              src="https://i.ibb.co/NjMzVRF/LOGO-Deeply-zone.png"
              alt=""
              className="def_logo_img"
            />
          </a>
        </Link>
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
          <li
            className={`def_menu_item ${
              router.pathname === "/register/login" ? "active" : ""
            }`}
          >
            <Link href="/register/login">
              <a>ลงชื่อเข้าใช้</a>
            </Link>
          </li>
          <li
            className={`def_menu_item ${
              router.pathname === "/register/signup" ? "active" : ""
            }`}
          >
            <Link href="/register/signup">
              <a onClick={() => setactive(!active)}>ลงชื่อเข้าใช้</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefualtMenuBar;
