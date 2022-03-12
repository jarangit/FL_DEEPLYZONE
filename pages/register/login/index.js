import React from 'react'
import LoginForm from '../../../conponents/forms/register/Login'
import Image from 'next/image'
const LoginPage = () => {
  return (
    <div className="index_banner">
    <div className="index_left">
    <Image src = "/img/banner.png" alt = "banner" width={500} height={500} />

    </div>
    <div className="index_right">
      <LoginForm/>
    </div>
  </div>
  )
}

export default LoginPage