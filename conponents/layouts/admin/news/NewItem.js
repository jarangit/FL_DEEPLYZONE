import React from "react";
import { Link } from "react-router-dom";

const NewItem = ({ name, thumbnail }) => {
  return (
    // <Link to="/" passHref>
      <a href="/admin" >
        <div className="news_item">
          <img src={thumbnail} alt="" className="news_item_img" />
          <div className="news_item_name">{name}</div>
        </div>
      </a>
    // </Link>
  );
};

export default NewItem;
