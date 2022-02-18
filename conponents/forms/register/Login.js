import React from "react";

const Login = () => {
  return (
    <form className="form_login">
      <div className="login_item">
        <img
          src="https://i.ibb.co/6RKKJzG/LOGO-Deeply-zone-white.png"
          alt=""
          className="lgin_img"
        />
      </div>
      <div className="login_item">
        <h3 className="login_title">เข้าสู่ระบบ</h3>
      </div>
      <div className="login_item">
        <input type="text" placeholder="ซื่อผู้ใช้" />
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
            <a href="#">ลืมรหัสผ่าน</a>
          </strong>
        </div>
      </div>

      <button className="login_but">เข้าสู่ระบบ</button>

      <div className="login_newUser">
        <div>เพิ่งเคยใช้งาน Deeply</div>
        <strong>
          <a href="#">สมัครใหม่</a>
        </strong>
      </div>
    </form>
  );
};

export default Login;
