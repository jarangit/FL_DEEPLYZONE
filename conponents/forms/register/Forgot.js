import React from "react";

const ForgotForm = () => {
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
          <h3 className="login_title">ตั้งรหัสผ่านใหม่</h3>
        </div>
        <div className="login_item ">
          <label>กรุณระบุอีเมล หรือหมายเลขโทรศัพท์ที่คุณใช้ลงทะเบียน</label>
          <input type="text" placeholder="อีเมล/หมายเลขโทรศัพท์" />
        </div>
        <button className="login_but">ตั้งรหัสผ่านใหม่</button>
      </form>
    </div>
  );
};

export default ForgotForm;
