import Head from "next/head";
import ForgotForm from "../conponents/forms/register/Forgot";
import LoginForm from "../conponents/forms/register/Login";
import SignupForm from "../conponents/forms/register/Signup";
import Image from "next/image";
import { useRouter } from "next/router";
export default function Home() {
  const { asPath } = useRouter();
  // console.log(asPath);
  return (
    <div>
      <Head>
        <title>Deeply Zone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/logoIcon.png" />
      </Head>

      <div className="index_banner">
        <div className="index_left">
          <Image src="/img/banner.png" alt="banner" width={500} height={500} />
          {/* <img
            src="./public/img/banner.png"
            alt=""
            className="index_img"
          /> */}
        </div>
        <div className="index_right">
          <LoginForm />
          {/* <ForgotForm/> */}
          {/* <SignupForm/> */}
        </div>
      </div>
    </div>
  );
}
