import React from "react";
import SideBar from "../../../conponents/layouts/admin/SideBar";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const OveviewPage = () => {
  const menu_items = [
    {
      name: "รายงาน",
      link: "report",
      class_sty: [
        <FontAwesomeIcon  key = {"faClock_sideBar_icon_item"} icon={faClock} className="sideBar_icon_item" />,
      ],
      sub: [
        {
          name: "items",
          link: "items",
        },
        {
          name: "items",
          link: "items",
        },
        {
          name: "items",
          link: "items",
        },
        {
          name: "items",
          link: "items",
        },
        {
          name: "items",
          link: "items",
        },
      ],
    },
  ];
  return (
    <div style={{ display: "flex", narginTop: "76px" }}>
      <div className="admin_page">Oveview page</div>
    </div>
  );
};
OveviewPage.layout = "admin";

export default OveviewPage;
