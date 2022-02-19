import React from 'react'
import SignupForm from '../../../conponents/forms/register/Signup'
const SignupPage = () => {
  return (
    <div className="index_banner">
    <div className="index_left">
      <img
        src="https://i.ibb.co/hdPSjJr/5500659.png"
        alt=""
        className="index_img"
      />
    </div>
    <div className="index_right">
      <SignupForm/>
    </div>
  </div>
  )
}

export default SignupPage;