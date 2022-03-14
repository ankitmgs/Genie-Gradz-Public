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
        <div className="">
          <h2 className="d-flex justify-content-center mt-3">
            Licenses & Certificates
          </h2>
          {/* <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-md-6">
            <div className="card p-1" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <div className="card p-1" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <div className="card p-1" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <div className="card p-1" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-6">
            <div className="card p-1" style={{borderRadius: "3px"}}>
              <div className="mx-auto mt-1 ">
              <iframe src="https://drive.google.com/file/d/1RRKbvLJwCdizUPvdq3hAQF7xf6wY7ikf/preview" allow="autoplay" />
              </div>
              <div className="card-body">
                <h4>Certificate Name</h4>
                <p className="card-text">Credential Id - 3602936532906</p>
                <p className="card-text">Issued jan 2021 - No Expiration</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
          <CourseCertificates />
          <ProjectCertificates />
        </div>
      </div>
    </>
  );
};

export default Certificates;
