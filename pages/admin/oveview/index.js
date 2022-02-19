import React from "react";
import SideBar from "../../../conponents/layouts/admin/SideBar";
const OveviewPage = () => {
  const menu_items = [
    {
      name: "รายงาน",
      link: "report",
      class: "oveview_report",
      sub:[
        {
          name: "items",
          link: "items"
        },
        {
          name: "items",
          link: "items"
        },
        {
          name: "items",
          link: "items"
        },
        {
          name: "items",
          link: "items"
        },
        {
          name: "items",
          link: "items"
        },
      ]
    },
  ];
  return (
    <div style={{ display: "flex", narginTop: "76px" }}>
      <SideBar data = {menu_items} />
      <div className="admin_page" >Oveview page</div>
    </div>
  );
};
OveviewPage.layout = "admin";

export default OveviewPage;
