import React from "react";
import SideBar from "../../conponents/layouts/admin/SideBar";
const AdminIndex = () => {
  return (
    <div style={{ display: "flex", narginTop: "76px" }}>
      <SideBar />
      <div className="admin_page">AdminIndex</div>
    </div>
  );
};
AdminIndex.layout = "admin";

export default AdminIndex;
