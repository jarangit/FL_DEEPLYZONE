import Head from "next/head";
import Login from "../conponents/forms/register/Login";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="index_banner">
        <div className="index_left">
          <img
            src="https://i.ibb.co/hdPSjJr/5500659.png"
            alt=""
            className="index_img"
          />
        </div>
        <div className="index_right">
          <Login/>
        </div>
      </div>
    </div>
  );
}
