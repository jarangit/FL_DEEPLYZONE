import React from "react";
import SideBar from "../../../conponents/layouts/admin/SideBar";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BasicTable from "../../../conponents/table/basicTable";
import ColumnHiding from "../../../conponents/table/columnHiding";
const OveviewPage = () => {
  return (
    <div style={{ display: "flex", narginTop: "76px" }}>
      <div className="admin_page">
        Oveview page
        <div>
          {/* <BasicTable /> */}
          {/* <ColumnHiding/> */}
        </div>
      </div>
    </div>
  );
};
OveviewPage.layout = "admin";

export default OveviewPage;
