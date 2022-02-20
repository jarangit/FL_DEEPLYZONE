import React from "react";
import ShopList from "../../conponents/layouts/admin/shop/ShopList";
import SideBar from "../../conponents/layouts/admin/SideBar";
import Slideshow from "../../conponents/layouts/admin/slideBanner/SlideBanner";
const AdminIndex = () => {
  return (
    <div style={{ display: "flex", narginTop: "76px" }}>
      <SideBar />
      <div className="admin_page">
        <Slideshow />
        <ShopList />
      </div>
    </div>
  );
};
AdminIndex.layout = "admin";

export default AdminIndex;
