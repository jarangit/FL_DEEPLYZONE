import React from "react";
import SideBar from "../../../conponents/layouts/admin/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBoltLightning,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Calendar from "../../../conponents/items/calendar/Calendar";
import ClickOutside from "../../../conponents/items/clickOutside/ClickOutside";
import LineChart from "../../../conponents/charts/LineChart";
import BarChart from "../../../conponents/charts/BarChart";
const FeaturePage = () => {
  const menu_items = [
    {
      name: "Product Booster",
      link: "/admin/feature/product_booster",
      class_sty: [
        <FontAwesomeIcon
          key={"faBoltLightning"}
          icon={faBoltLightning}
          className="sideBar_icon_item"
        />,
      ],
      sub: [],
    },
    {
      name: "Taking Sales",
      link: "sales",
      class_sty: [
        <span key={"sideBar_sku"} className="sideBar_sku">
          SKU
        </span>,
      ],
      sub: [],
    },
  ];
  return (
    <div >
      <div className="admin_page">
        Feature mune
        <div>
          <LineChart/>
          <BarChart/>
          {/* <ClickOutside/> */}
          {/* <Calendar /> */}
        </div>
      </div>
    </div>
  );
};
FeaturePage.layout = "admin";

export default FeaturePage;
