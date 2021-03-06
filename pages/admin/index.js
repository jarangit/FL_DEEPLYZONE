import React from "react";
import NewList from "../../conponents/layouts/admin/news/NewList";
import ShopList from "../../conponents/layouts/admin/shop/ShopList";
import Slideshow from "../../conponents/layouts/admin/slideBanner/SlideBanner";
const AdminIndex = () => {
  return (
    <div style={{ display: "flex", narginTop: "76px" }}>
      <div className="admin_page">
        <Slideshow />
        <ShopList />
        <NewList />
      </div>
    </div>
  );
};
AdminIndex.layout = "admin";

export default AdminIndex;
