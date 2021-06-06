import React from "react";
import DesktopCategoryNavbar from "./DesktopCategoryNavbar";
import DesktopTopNavbar from "./DesktopTopNavbar";

const DesktopNavbar = (props) => {
  const { search } = props;

  return (
    <div style={{ width: "100%" }}>
      <DesktopTopNavbar search={search} />
      <DesktopCategoryNavbar />
    </div>
  );
};

export default DesktopNavbar;
