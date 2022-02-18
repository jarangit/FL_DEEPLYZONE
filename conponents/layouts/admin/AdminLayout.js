import React from "react";
const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="admin_menu">admin menu</div>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
