import React, { AnchorHTMLAttributes, forwardRef, Ref } from "react";

const A = forwardRef(({ children, onClick, href, className }, ref) => {

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
