import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";

const Navcomponent = () => {
  const [showSideBar, setSidebar] = useState(true);
  const handleClick = () => {
    setSidebar(!showSideBar);
  };
  return (
    <div>
      <ul className={"list-unstyled topnav-menu topnav-menu-left mb-0"}>
        <li>
          <button
            className="button-menu-mobile disable-btn waves-effect"
            onClick={handleClick}
          >
            <i className="fe-menu"></i>
          </button>
        </li>

        <li>
          <h4 className="page-title-main">Dashboard</h4>
        </li>
      </ul>
      <div className="responsiveSidebar">
      {showSideBar ? <SideBarMenu /> : null}
      </div>
    </div>
  );
};

export default Navcomponent;
