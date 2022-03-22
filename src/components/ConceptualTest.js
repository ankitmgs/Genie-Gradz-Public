import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";
const ConceptualTest = () => {
  const [showSideBar, setSidebar] = useState(true);
  const handleClick = () => {
    setSidebar(!showSideBar);
  };
  return (
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
        <div className="responsiveSidebar  float-start">
          <SideBarMenu />
        </div>
      ) : null}
      {/* end */}
      <div className="main">
        <h2
          className="d-flex justify-content-center mt-3"
          style={showSideBar ? { transition: "2s all ease-in-out" } : null}
        >
          Conceptual Test
        </h2>
      </div>
    </div>
  );
};

export default ConceptualTest;
