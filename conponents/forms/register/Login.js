import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div>
      <form className="form_login">
        <div className="login_box_img">
          <img
            src="https://i.ibb.co/6RKKJzG/LOGO-Deeply-zone-white.png"
            alt=""
            className="login_img"
          />
        </div>
        <div className="login_item">
          <h3 className="login_title">เข้าสู่ระบบ</h3>
        </div>
        <div className="login_item">
          <input type="email" placeholder="ซื่อผู้ใช้" />
        </div>
        <div className="login_item">
          <input type="password" placeholder="รหัสผ่าน" />
        </div>
        <div className="login_item_checked">
          <div className="login_checkbox">
            <input type="checkbox" placeholder="รหัสผ่าน" />
            <label> จำรหัสผ่าน </label>
          </div>
          <div className="login_fogotPass">
            <strong>
              <Link href="/register/forgot">
                <a>ลืมรหัสผ่าน</a>
              </Link>
            </strong>
          </div>
        </div>

        <button className="login_but">เข้าสู่ระบบ</button>

        <div className="login_newUser">
          <strong>
            <a href="/register/signup">
              <div>เพิ่งเคยใช้งาน DeeplyZone</div>สมัครใหม่
            </a>
          </strong>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
