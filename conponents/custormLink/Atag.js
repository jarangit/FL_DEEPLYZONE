import React, { AnchorHTMLAttributes, forwardRef, Ref } from "react";

// eslint-disable-next-line react/display-name
const A = forwardRef(({ children, onClick, href, className }, ref) => {


  // useEffect(() => {
  //   setActiveClass(false)
  //   if (asPath.length > 6) {
  //     console.log("Find");
  //     const slice = href.slice(6);
  //     console.log({ dataSlice: slice });
  //     const find = asPath.includes(slice);
  //     if (find && asPath === href) {
  //       setActiveClass(true);
  //     }
  //   } else {
  //     asPath === href ? setActiveClass(true) : "";
  //   }
  // }, [asPath, href]);
  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={className ? `${className} admin_menu_left_item `: "admin_menu_left_item "}
    >
      {children}
    </a>
  );
});

export default A;
