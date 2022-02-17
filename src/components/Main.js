import React from "react";
import "../assets/css/appDark.css";
import "../assets/css/app.css";
import user from "../assets/images/users/user-1.jpg";
import user2 from "../assets/images/users/user-2.jpg";
import user3 from "../assets/images/users/user-3.jpg";
import user4 from "../assets/images/users/user-4.jpg";
// import user5 from "../assets/images/users/user-5.jpg";
// import user10 from "../assets/images/users/user-10.jpg";
// import { Accordion } from "react-bootstrap";
import Card from "./Card";
import Attendence from "./Attendence";
import Stats from "./Stats";
import EnrolledClasses from "./EnrolledClasses";
import Profile from "./Profile";
import RoyalCollection from "./RoyalCollection";
import ProjectAcc from "./ProjectAcc";
import TopNavMenu from "./TopNavMenu";
import LogoBox from "./LogoBox";
import Navcomponent from "./Navcomponent";
import SideBarMenu from "./SideBarMenu";
import RoyalCollection2 from "./RoyalCollection2";
import ProjectAcc2 from "./ProjectAcc2";

const SideBar = () => {
  return (
    <div id="wrapper" className="show">
      {/* navBar component */}
      <div className="navbar-custom">
        <TopNavMenu />
        <LogoBox />
        <Navcomponent />
      </div>
      <div className="left-side-menu">
        <SideBarMenu />
      </div>
      {/* main content */}
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <Card
                  name="Platform Activity"
                  number="2231"
                  icon="envelope"
                  iconColor="#3AA76D"
                />
              </div>
              <div className="col-xl-3 col-md-6">
                <Card
                  name="Goals"
                  number="8451"
                  icon="wallet"
                  iconColor=" #FF0080"
                />
              </div>
              <div className="col-xl-3 col-md-6">
                <Card
                  name="Number of Problem Solved"
                  number="231"
                  icon="cart-shopping"
                  iconColor="#0070F3"
                />
              </div>

              <div className="col-xl-3 col-md-6">
                <Card
                  name="NGR (network growth rate)"
                  number="158"
                  icon="envelope"
                  iconColor="rgba(121, 40, 202, 0.85)"
                />
              </div>
            </div>
            {/* mid part of website */}
            <div className="row">
              <div className="col-xl-6">
                <EnrolledClasses />
              </div>
              <div className="col-xl-6">
                <Attendence />
              </div>

              {/* <div className="col-xl-4">
                <Stats />
              </div> */}
            </div>
            {/* profile section */}
            {/* <div className="row">
              <div className="col-xl-3 col-md-6">
                <Profile name="deepank joshi" image={user} role="admin" />
              </div>

              <div className="col-xl-3 col-md-6">
                <Profile name="ashutosh" image={user2} role="support lead" />
              </div>

              <div className="col-xl-3 col-md-6">
                <Profile name="Stillnotdavid" image={user3} role="designer" />
              </div>

              <div className="col-xl-3 col-md-6">
                <Profile name="claranotdavid" image={user4} role="Developer" />
              </div>
            </div> */}
            {/* Last section */}

            <div className="row">
              <div className="col-xl-6">
                <RoyalCollection />
              </div>
              <div className="col-xl-6">
                <ProjectAcc />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <RoyalCollection2 />
              </div>
              <div className="col-xl-6">
                <ProjectAcc2 />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <Stats />
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

export default SideBar;
