import React, { useState } from "react";

const SignupForm = () => {
  const [agree, setagree] = useState(false);
  return (
    <div>
      <form className="form_login">
        <div className="login_item">
          <h3 className="login_title">สมัครสมาชิก</h3>
        </div>
        <div className="login_item">
          <label>ชื่อผู้ใช้</label>
          <input type="text" placeholder="ชื่อผู้ใช้" />
        </div>
        <div className="login_item">
          <label>อีเมล</label>
          <input type="text" placeholder="อีเมล" />
        </div>
        <div className="login_item">
          <label>เบอร์โทรศัพท์</label>
          <input type="text" placeholder="เบอร์โทรศัพท์" />
        </div>
        <div className="login_item">
          <label>รหัสผ่าน</label>
          <input type="password" placeholder="รหัสผ่าน" />
          <input type="password" placeholder="ยืนยันรหัสผ่าน" />
        </div>
        <div className="login_item_select">
          <label>รู้จัก DeeplyZone จากช่องทางไหน</label>
          <select name="socail" id="socail" className="select_socail">
            <option value="">กรุณเลือก</option>
            <option value="facebook">Facebook</option>
            <option value="youtue">Youtue</option>
            <option value="friends">เพื่อนแนะนำ</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>
        <div className="login_item">
          <label>{"โค้ดแนะนำ (Code)"}</label>
          <input type="text" placeholder="รหัสแนะนำ/โค้คส่วนลด" />
        </div>
        <div className="login_item_checked">
          <div className="login_checkbox_agree">
            <input type="checkbox" onChange={() => setagree(!agree)} />
            <label>
              ยอมรับข้อตกลงการให้บริการ <span>และ</span> นโยบายความเป็นส่วนตัว
            </label>
          </div>
        </div>
        <button
          disabled={agree === true ? false : true}
          className={`login_but  ${agree === true ? "" : "disable"}`}
        >
          สมัครบิรการ
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
