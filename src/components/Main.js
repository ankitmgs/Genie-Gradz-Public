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
import RevenueStats from "./RevenueStats";
import AnalyticsSales from "./AnalyticsSales";
import DailySale from "./DailySale";
import Stats from "./Stats";
import TotalRevenue from "./TotalRevenue";
import Profile from "./Profile";
import Inbox from "./Inbox";
import LatestPro from "./LatestPro";
import TopNavMenu from "./TopNavMenu";
import LogoBox from "./LogoBox";
import Navcomponent from "./Navcomponent";
import SideBarMenu from "./SideBarMenu";

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
                <RevenueStats name="Total Revenue" number="2231" />
              </div>
              <div className="col-xl-3 col-md-6">
                <AnalyticsSales name="Sales Analytics" number="8451" />
              </div>
              <div className="col-xl-3 col-md-6">
                <RevenueStats name="Statistics" number="231" />
              </div>

              <div className="col-xl-3 col-md-6">
                <AnalyticsSales name="Daily Sales" number="158" />
              </div>
            </div>
            {/* mid part of website */}
            <div className="row">
              <div className="col-xl-4">
                <DailySale />
              </div>

              <div className="col-xl-4">
                <Stats />
              </div>

              <div className="col-xl-4">
                <TotalRevenue />
              </div>
            </div>
            {/* profile section */}
            <div className="row">
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
            </div>
            {/* Last section */}
            <div className="row">
              <div className="col-xl-4">
                <Inbox />
              </div>

              <div className="col-xl-8">
                <LatestPro />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <script>document.write(new Date().getFullYear())</script>2022 ©
                Adminto theme by <a href="">Coderthemes</a>
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
