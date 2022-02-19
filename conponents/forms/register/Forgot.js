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
          <h3 className="login_title">กู้คืนรหัสผ่านของคุณ</h3>
        </div>
        <div className="login_item">
          <label>อีเมล</label>
          <input type="text" placeholder="อีเมล" />
        </div>
        <button className="login_but">รับลิ้งกู้คืนทางอีเมล</button>
      </form>
    </div>
  );
};

export default ForgotForm;
