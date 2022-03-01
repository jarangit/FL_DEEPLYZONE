import React from "react";
import "react-slideshow-image/dist/styles.css";
import ImageGallery from "react-image-gallery";
import { faL } from "@fortawesome/free-solid-svg-icons";
const images = [
  {
    original: "https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg",
    thumbnail: "https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg",
  },
  {
    original: "https://www.tricasol.com/wp-content/uploads/2019/09/e-commerce-banner-1024x341.jpg",
    thumbnail: "https://www.tricasol.com/wp-content/uploads/2019/09/e-commerce-banner-1024x341.jpg",
  },
];

const Slideshow = () => {
  return (
    <div style={{marginBottom: "20px"}} >
      <ImageGallery 
      items={images} 
      showBullets={true} 
      showThumbnails={false} 
      showPlayButton={false}
      showFullscreenButton = {false}
      showNav={false}
      />
    </div>
  );
};

export default Slideshow;
