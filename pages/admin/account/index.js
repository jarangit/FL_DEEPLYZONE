import React from "react";
import {
  faUser,
  faMobilePhone,
  faEnvelope,
  faLock,
  faStoreAlt,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Account_page = () => {
  return (
    <div className="account">
      <div className="account_box_title">
        <p className="account_page_title">บัญชี</p>
        <p>แก้ไขข้อมูลเบื้องต้นเกี่ยวกับบัญชีของคุณ</p>
      </div>

      <div className="account_box_grid">
        <div className="account_grid_item">
          <div className="account_icon">
            <FontAwesomeIcon icon={faUser} size="3x"  className = "jr_color_blue" />
          </div>
          <div className="account_icon_title">โปรไฟล์</div>
        </div>
        <div className="account_grid_item">
          <div className="account_user_data_item">Deeply_SHS</div>
        </div>
        <div className="account_grid_item">
          <button className="jr_but_gray">แก้ไข</button>
        </div>

        <div className="account_grid_item">
          <div className="account_icon">
            <FontAwesomeIcon icon={faMobilePhone} size="3x"  className = "jr_color_blue" />
          </div>
          <div className="account_icon_title">เบอร์โทรศัพท์</div>
        </div>
        <div className="account_grid_item">
          <div className="account_user_data_item">088-88-8888</div>
        </div>
        <div className="account_grid_item">
          <button className="jr_but_gray">แก้ไข</button>
        </div>

        <div className="account_grid_item">
          <div className="account_icon">
            <FontAwesomeIcon icon={faEnvelope} size="3x"  className = "jr_color_blue" />
          </div>
          <div className="account_icon_title">E-mail</div>
        </div>
        <div className="account_grid_item">
          <div className="account_user_data_item">test@gmail.com</div>
        </div>
        <div className="account_grid_item">
          <button className="jr_but_gray">แก้ไข</button>
        </div>

        <div className="account_grid_item">
          <div className="account_icon">
            <FontAwesomeIcon icon={faLock} size="3x"  className = "jr_color_blue" />
          </div>
          <div className="account_icon_title">รหัสผ่าน</div>
        </div>
        <div className="account_grid_item">
          <div className="account_user_data_item">**********</div>
        </div>
        <div className="account_grid_item">
          <button className="jr_but_gray">แก้ไข</button>
        </div>
        <div className="account_grid_item">
          <div className="account_icon">
            <FontAwesomeIcon
              className="account_icon_store"
              icon={faStoreAlt}
              size="3x"
              className = "jr_color_blue"
            />
          </div>
          <div className="account_icon_title_store">เพิ่มร้านค้า</div>
        </div>
        <div className="account_grid_item">
          <div className="account_user_data_item">
            <span className="account_icon">
              <FontAwesomeIcon icon={faCircle} size="2x"  className = "jr_color_blue" />
            </span>
            Store 1
          </div>
        </div>
        <div className="account_grid_item">
          <button className="jr_but_gray">แก้ไข</button>
        </div>
        <div className="account_grid_item">
          <div className="jr_but_blue">+ เพิ่มร้านค้า </div>
        </div>
        <div className="account_grid_item">
          <div className="account_user_data_item">
            <span className="account_icon">
              <FontAwesomeIcon icon={faCircle} size="2x"  className = "jr_color_blue" />
            </span>
            Store 2
          </div>
        </div>
        <div className="account_grid_item">
          <button className="jr_but_gray">แก้ไข</button>
        </div>
      </div>
    </div>
  );
};
Account_page.layout = "admin";

export default Account_page;
