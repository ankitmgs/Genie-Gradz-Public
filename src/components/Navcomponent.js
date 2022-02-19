import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";

const Navcomponent = () => {
  const [showSideBar, setSidebar] = useState(false);
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
      {showSideBar ? (
      <div className="responsiveSidebar">
       <SideBarMenu />
      </div>
      ) : null}
    </div>
  );
};

export default Navcomponent;
