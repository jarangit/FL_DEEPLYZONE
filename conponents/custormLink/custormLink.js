import React, { cloneElement, useEffect, useState, Children } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import A from "./Atag";

const CustormLink = ({ href, children, ...props }) => {
  const [isActive, setisActive] = useState(false)
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";
  const className = isActive ? `${childClassName} active` : childClassName;


  useEffect(() => {
    setisActive(false)
    if (asPath.length > 6) {
      // console.log("Find");
      const slice = href.slice(6);
      // console.log({ dataSlice: slice });
      const find = asPath.includes(slice);
      // console.log(find)
      if (find && slice !== "") {
        setisActive(true);
      }
    } else {
      asPath === href ? setisActive(true) : "";
    }
  }, [asPath, href]);
  // console.log(asPath);
  // console.log(href);


  
  return (
    <Link href={href} {...props}>
    {cloneElement(child, {
      className: className || null,
    })}
  </Link>
  );
};

export default CustormLink;
