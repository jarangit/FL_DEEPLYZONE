import React from 'react'
import LoginForm from '../../../conponents/forms/register/Login'
const LoginPage = () => {
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
      <LoginForm/>
    </div>
  </div>
  )
}

export default LoginPage