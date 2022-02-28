import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";
const Calender = () => {
  const [showSideBar, setSidebar] = useState(true);
  const handleClick = () => {
    setSidebar(!showSideBar);
  };
  return (
    <>
      <div>
        <ul className={"list-unstyled topnav-menu topnav-menu-left mb-0"}>
          <li
            style={
              showSideBar ? { backgroundColor: "black", width: "240px " } : null
            }
          >
            <button className="bars disable-btn " onClick={handleClick}>
              <span style={{ fontSize: "10px", color: "Dodgerblue" }}>
                <i class="fa-solid fa-bars fa-2x"></i>
              </span>
            </button>
          </li>
        </ul>

        {showSideBar ? (
          <div className="responsiveSidebar float-start">
            <SideBarMenu />
          </div>
        ) : null}
        {/* end */}
      </div>
      <h2>Licenses & Certificates</h2>
    </>
  );
};

export default Calender;
