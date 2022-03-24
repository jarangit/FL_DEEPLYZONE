import React, { useContext, useState, useRef } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import useOutsideClick from "../../items/clickOutside/useOutsideClick";
import { AppProviderContext } from "../../../appState/appProvider";
const SideBar = ({ data }) => {
  const [openSideMenuAdmin, setopenSideMenuAdmin] =
    useContext(AppProviderContext);
  const [open, setopen] = useState(false);
  const { asPath } = useRouter();
  // console.log(asPath);
  const ref = useRef(null);

  function onClickOpenSideMenu() {
    setopenSideMenuAdmin(!openSideMenuAdmin);
  }
  useOutsideClick(ref, () => {
    if (openSideMenuAdmin) setopenSideMenuAdmin(false);
  });
  return (
    <div className="sideBar" ref={ref}>
      <div className={`sideBar_box ${openSideMenuAdmin ? "active" : ""}`}>
        <div className="sideBar_item">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            color="#ffffff"
            onClick={onClickOpenSideMenu}
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
                        <span className={item.icon} />
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
                            <a>{sub_item.name}</a>
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
