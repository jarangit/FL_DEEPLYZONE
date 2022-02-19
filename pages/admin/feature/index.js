import React from "react";
import SideBar from "../../../conponents/layouts/admin/SideBar";
const FeaturePage = () => {
  const menu_items = [
    {
      name: "Product Booster",
      link: "product",
      class: "product_booster",
      sub: [],
    },
    {
      name: "Taking Sales",
      link: "sales",
      class: "sku_taking",
      sub: [],
    },
  ];
  return (
    <div style={{ display: "flex", narginTop: "76px" }}>
      <SideBar data={menu_items} />
      <div className="admin_page" >Feature mune</div>
    </div>
  );
};
FeaturePage.layout = "admin";

export default FeaturePage;
