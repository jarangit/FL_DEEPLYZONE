import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = ({ data }) => {
  const [open, setopen] = useState(false);
  const { asPath } = useRouter();
  console.log(asPath);
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
                  <li
                    className={`sideBar_menu_item ${
                      asPath === item.link ? "active" : ""
                    }`}
                  >
                    <Link href={item.link}>
                      <a>
                        <span>{item.class_sty}</span>
                        <p>{item.name}</p>
                      </a>
                    </Link>
                  </li>
                  {item.sub.length !== 0
                    ? item.sub.map((sub_item, key) => (
                        <li
                          key={key}
                          className={`sideBar_menu_item ${
                            asPath === sub_item.link ? "active" : ""
                          }`}
                        >
                          <Link href={sub_item.link}>
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
