import Link from "next/link";
import React from "react";
import {
  faBell,
  faUserCircle,
  faCog,
  faCaretDown,
  faCircle,
  faLink,
  faUser,
  faSignOut,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
const AdminMenu = () => {
  const router = useRouter();

  return (
    <div className="admin_menu">
      <div className="admin_menu_left">
        <div className="admin_box_log">
          <img
            src="https://i.ibb.co/6RKKJzG/LOGO-Deeply-zone-white.png"
            alt=""
            className="admin_logo_img"
          />
        </div>
        <div className="admin_menu_box_left_item">
          <ul>
            <li
              className={`admin_menu_left_item ${
                router.pathname === "/admin" ? "active" : ""
              }`}
            >
              <Link href={"/admin"}>
                <a>DeeplyZone</a>
              </Link>
            </li>
            <li
              className={`admin_menu_left_item ${
                router.pathname === "/admin/feature" ? "active" : ""
              }`}
            >
              <Link href={"/admin/feature"}>
                <a>Feature</a>
              </Link>
            </li>
            <li
              className={`admin_menu_left_item ${
                router.pathname === "/admin/oveview" ? "active" : ""
              }`}
            >
              <Link href={"/admin/oveview"}>
                <a>ภาพรวม</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="admin_menu_right">
        <ul>
          <li className="admin_menu_item">
            <Link href={"#"}>
              <a>
                <FontAwesomeIcon icon={faBell} size="lg" color="#ffffff" />
              </a>
            </Link>
            <ul className="admin_menu_dropdown">
              <div>Notifications</div>
              <li className="admin_menu_dropdown_item">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="dropdown_item_icon"
                  />
                </span>
                item
              </li>
              <li className="admin_menu_dropdown_item">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="dropdown_item_icon"
                  />
                </span>
                item
              </li>
              <li className="admin_menu_dropdown_item">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="dropdown_item_icon"
                  />
                </span>
                item
              </li>

              <div
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  color: "orange",
                }}
              >
                การแจ้งเดือนทั้งหมด
              </div>
            </ul>
          </li>
          <li className="admin_menu_item">
            <Link href={"#"}>
              <a>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="lg"
                  color="#ffffff"
                />
                <span className="admin_meni_userName">Deeply01</span>
                <FontAwesomeIcon icon={faCaretDown} size="lg" color="#ffffff" />
              </a>
            </Link>
            <ul className="admin_menu_dropdown">
              <div>สลับร้านค้า</div>
              <li className="admin_menu_dropdown_item">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="dropdown_item_icon"
                  />
                </span>
                Store 1
              </li>
              <li className="admin_menu_dropdown_item">
                <span>
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="dropdown_item_icon"
                  />
                </span>
                Store 1
              </li>
              <div>
                <span>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="dropdown_item_icon"
                  />
                </span>
                เพิ่มร้านค้า
              </div>
            </ul>
          </li>
          <li className="admin_menu_item">
            <Link href={"#"}>
              <a>
                <img
                  src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/TH-Thailand-Flag-icon.png"
                  alt=""
                  className="def_menu_img_th"
                />
              </a>
            </Link>
          </li>
          <li className="admin_menu_item">
            <Link href={"#"}>
              <a>
                <FontAwesomeIcon icon={faCog} size="lg" color="#ffffff" />
              </a>
            </Link>

            <ul className="admin_menu_dropdown">
              <div>ตั้งค่า</div>
              <li className="admin_menu_dropdown_item">
                <Link href={"/admin/connect"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faLink}
                        className="dropdown_item_icon"
                      />
                    </span>
                    การเตื่อมต่อ
                  </a>
                </Link>
              </li>
              <li className="admin_menu_dropdown_item">
                <span>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="dropdown_item_icon"
                  />
                </span>
                บัญชีของฉัน
              </li>
              <li className="admin_menu_dropdown_item">
                <span>
                  <FontAwesomeIcon
                    icon={faSignOut}
                    className="dropdown_item_icon"
                  />
                </span>
                ออกจากระบบ
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
