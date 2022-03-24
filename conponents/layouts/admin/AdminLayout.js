import React, { useState, useEffect, useContext } from "react";
import { AppProviderContext } from "../../../appState/appProvider";
import AdminMenu from "./AdminMenu";
import SideBar from "./SideBar";
import { useRouter } from "next/router";
import {
  menu_admin_feature,
  menu_admin_overview,
} from "../../../data/menu_api";

const AdminLayout = ({ children }) => {
  const { asPath } = useRouter();
  const find = asPath.search("feature");
  const [openSideMenuAdmin] = useContext(AppProviderContext);
  // console.log(openSideMenuAdmin);
  const [data_side_menu, setdata_side_menu] = useState([]);
  useEffect(() => {
    if (asPath.search("feature") > -1) {
      setdata_side_menu(menu_admin_feature);
    } else if (asPath.search("overview") > -1) {
      setdata_side_menu(menu_admin_overview);
    } else {
      setdata_side_menu([]);
    }
  }, [asPath]);

  return (
    <div>
      <AdminMenu />
      <div style={{ display: "flex", narginTop: "76px" }}>
        <SideBar data={data_side_menu} />
        <div
          className={`addmin_container ${
            openSideMenuAdmin === true ? "active" : ""
          } `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
