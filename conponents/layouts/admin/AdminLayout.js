import React from "react";
import AdminMenu from "./AdminMenu";
import SideBar from "./SideBar";
const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminMenu /> 
      <div style={{flex: "4",}} >{children}</div>
    </div>
  );
};

export default AdminLayout;
