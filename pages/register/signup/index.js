import React from "react";
import SignupForm from "../../../conponents/forms/register/Signup";
import Image from "next/image";
const SignupPage = () => {
  return (
    <div className="index_banner">
      <div className="index_left">
        <Image src="/img/banner.png" alt="banner" width={500} height={500} />
      </div>
      <div className="index_right">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
