import React, { useState } from "react";
import {
  faBars,
  faBoltLightning,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const SideBar = ({ data }) => {
  const [open, setopen] = useState(false);
  console.log(data);
  return (
    <div className="sideBar">
      <div className={`sideBar_box ${open ? "active" : ""}`}>
        <div className="sideBar_item">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            color="#ffffff"
            onClick={() => setopen(!open)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="sideBar_menu">
          <ul>
            {data &&
              data.map((item, key) => (
                <React.Fragment key={key}>
                  <li className="sideBar_menu_item">
                    <Link href={"/admin/product"}>
                      <a>
                        <span>
                        {item.class_sty}
                        </span>
                        <p>{item.name}</p>
                      </a>
                    </Link>
                  </li>
                  {item.sub.length !== 0
                    ? item.sub.map((sub_item, key) => (
                        <li key={key} className="sideBar_menu_item">
                          <Link href={"/admin/product"}>
                            <a className="sideBar_productBoost">
                              {sub_item.name}
                            </a>
                          </Link>
                        </li>
                      ))
                    : ""}
                </React.Fragment>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
