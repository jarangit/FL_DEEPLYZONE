import React from "react";
import ForgotForm from "../../../conponents/forms/register/Forgot";
import Image from "next/image";
const Forgot_page = () => {
  return (
    <div className="index_banner">
      <div className="index_left">
        <Image
          src="/img/bannerFogot.png"
          alt="banner"
          width={500}
          height={500}
        />
      </div>
      <div className="index_right">
        <ForgotForm />
      </div>
    </div>
  );
};

export default Forgot_page;
