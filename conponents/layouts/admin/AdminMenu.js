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
import A from "../../custormLink/Atag";
import Link from "../../custormLink/custormLink";
const AdminMenu = () => {
  const { asPath } = useRouter();

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
        {asPath !== "/admin" ? (
          <div className="admin_menu_box_left_item">
            <ul>
              <li>
                <Link href={"/admin"}>
                  <A>DeeplyZone</A>
                </Link>
              </li>
              <li>
                <Link href={"/admin/feature/product_booster"}>
                  <A>Feature</A>
                </Link>
              </li>
              <li>
                <Link href={"/admin/overview/report/view"}>
                  <A>ภาพรวม</A>
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="admin_menu_right">
        <ul>
          <li className="admin_menu_item">
            <Link href={"/admin"}>
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
                <Link href={"/admin"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="dropdown_item_icon"
                      />
                    </span>
                    Store 1
                  </a>
                </Link>
              </li>
              <li className="admin_menu_dropdown_item">
                <Link href={"/admin"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="dropdown_item_icon"
                      />
                    </span>
                    Store 1
                  </a>
                </Link>
              </li>
              <div>
                <Link href={"/admin"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        className="dropdown_item_icon"
                      />
                    </span>
                    เพิ่มร้านค้า
                  </a>
                </Link>
              </div>
            </ul>
          </li>
          <li className="admin_menu_item">
            <Link href={"#"}>
              <a>
                <FontAwesomeIcon icon={faBell} size="lg" color="#ffffff" />
              </a>
            </Link>
            <ul className="admin_menu_dropdown">
              <div>Notifications</div>
              <li className="admin_menu_dropdown_item">
                <Link href={"/admin"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="dropdown_item_icon"
                      />
                    </span>
                    item
                  </a>
                </Link>
              </li>
              <li className="admin_menu_dropdown_item">
                <Link href={"/admin"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="dropdown_item_icon"
                      />
                    </span>
                    item
                  </a>
                </Link>
              </li>
              <li className="admin_menu_dropdown_item">
                <Link href={"/admin"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="dropdown_item_icon"
                      />
                    </span>
                    item
                  </a>
                </Link>
              </li>

              <div
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  color: "orange",
                }}
              >
                <Link href={"/admin"}>
                  <a>การแจ้งเดือนทั้งหมด</a>
                </Link>
              </div>
            </ul>
          </li>
          {/* <li className="admin_menu_item">
            <Link href={"#"}>
              <a>
                <img
                  src="https://icons.iconarchive.com/icons/wikipedia/flags/1024/TH-Thailand-Flag-icon.png"
                  alt=""
                  className="def_menu_img_th"
                />
              </a>
            </Link>
          </li> */}
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
                    การเชื่อมต่อ
                  </a>
                </Link>
              </li>
              <li className="admin_menu_dropdown_item">
                <Link href={"/admin/account"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="dropdown_item_icon"
                      />
                    </span>
                    บัญชีของฉัน
                  </a>
                </Link>
              </li>
              <li className="admin_menu_dropdown_item">
                <Link href={"/"}>
                  <a>
                    <span>
                      <FontAwesomeIcon
                        icon={faSignOut}
                        className="dropdown_item_icon"
                      />
                    </span>
                    ออกจากระบบ
                  </a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
