import React from "react";
import DefualtMenuBar from "./DefualtMenuBar";
const DefaultLayout = ({ children }) => {
  return (
    <div className="container">
      <DefualtMenuBar/>
      <div className="">{children}</div>
    </div>
  );
};

export default DefaultLayout;
