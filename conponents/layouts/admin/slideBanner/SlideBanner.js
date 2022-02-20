import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = [
  "https://img.freepik.com/free-psd/colorful-discount-sale-podium_125755-675.jpg?w=996",
  "https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg?w=996",
];

const Slideshow = () => {
  return (
    <div>
      <img
        style={{ width: "100%", borderRadius: "20px" ,}}
        src="https://img.freepik.com/free-vector/online-shopping-banner-with-3d-shopping-cart-clouds-social-icons-vector-illustration_548887-100.jpg?w=996"
        alt=""
      />
    </div>
  );
};

export default Slideshow;
