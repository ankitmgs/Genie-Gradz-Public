import React, { useState } from "react";
import CourseCertificates from "../components/CourseCertificates";
import ProjectCertificates from "../components/ProjectCertificates";
import SideBarMenu from "./SideBarMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = () => {
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
            <button onClick={handleClick} className="bars disable-btn ">
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
        <div>
          <h1 className="d-flex justify-content-center mt-3">
            Licenses & Certificates
          </h1>
          <CourseCertificates />
          <ProjectCertificates />
        </div>
      </div>
    </>
  );
};

export default Certificates;
