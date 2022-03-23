import React, { useState } from "react";
import "../../assets/css/appDark.css";
import "../../assets/css/app.css";
import Card from "../Card";

import Stats from "../Stats";
import EnrolledClasses from "../EnrolledClasses";
import TopNavMenu from "../TopNavMenu";
import LogoBox from "../LogoBox";

import TutorSideBar from "../Tutor_section/TutorSideBar";
import RoyalCollection2 from "../RoyalCollection2";
import ProjectAcc2 from "../ProjectAcc2";
import Student from "./Student";

const TutorDashboard = () => {
  const [showSideBar, setSidebar] = useState(false);
  const handleClick = () => {
    setSidebar(!showSideBar);
  };
  return (
    <div id="wrapper" className="show">
      {/* navBar component */}
      <div className="navbar-custom">
        <TopNavMenu />
        <LogoBox />
        {/* <Navcomponent /> */}
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
            <h4 className="page-title-main">Tutor Dashboard</h4>
          </li>
        </ul>

        {showSideBar ? (
          <div className="responsiveSidebar">
            <TutorSideBar />
          </div>
        ) : null}
      </div>
      <div className="left-side-menu">
        <TutorSideBar />
      </div>
      {/* main content */}
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <Card
                  name="Classes Scheduled"
                  number="2231"
                  icon="envelope"
                  iconColor="#3AA76D"
                />
              </div>
              <div className="col-xl-3 col-md-6">
                <Card
                  name="Hours Spend"
                  number="8451"
                  icon="wallet"
                  iconColor=" #FF0080"
                />
              </div>
              <div className="col-xl-3 col-md-6">
                <Card
                  name="Assignment Given"
                  number="231"
                  icon="cart-shopping"
                  iconColor="#0070F3"
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <Card
                  name="Notes Given"
                  number="158"
                  icon="envelope"
                  iconColor="rgba(121, 40, 202, 0.85)"
                />
              </div>
            </div>
            {/* mid part of website */}
            <div className="row">
              <div className="col-xl-6">
                <EnrolledClasses name="Classes student can enrolled" />
              </div>
              <div className="col-xl-6">
                <Student />
              </div>
            </div>

            {/* <div className="row">
              <div className="col-xl-6">
                <RoyalCollection2 />
              </div>
              <div className="col-xl-6">
                <ProjectAcc2 />
              </div>
            </div> */}
            <div className="row">
              <div className="col-xl-12">
                <Stats name="Performance" />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <script>document.write(new Date().getFullYear())</script>2022 ©
                genie web <a href=""></a>
              </div>
              <div className="col-md-6">
                <div className="text-md-end footer-links d-none d-sm-block">
                  <a href="#">About Us</a>
                  <a href="#">Help</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TutorDashboard;
