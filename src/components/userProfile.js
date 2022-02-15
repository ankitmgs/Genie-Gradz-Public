import React from "react";
import "../assets/css/userProfile.css";
import img from "../assets/images/logo-sm.png";
import img2 from "../assets/images/profile-post-1.jpg";

const UserProfile =  () => {
  return (
    <div>
      <div className="top-row">
        <div className="row container">
          <div className="col-xl-2">{/* <img src={img} /> */}</div>
          <div className="col-xl-2 img-box">
            <img src={img} />
            <p className="name-txt">Lucinda Kerr</p>
            <p className="sub-title-txt">
              Art & Social Activist
            </p>
          </div>
          <div className="col-xl-5"></div>
          <div
            className="col-xl-3 post-section"
          >
            <p style={{ color: "black" }}>
              Posts <b>24</b>
            </p>
            <p style={{ color: "black" }}>
              Followers <b>12</b>
            </p>
            <p style={{ color: "black" }}>
              Following <b>8</b>
            </p>
          </div>
        </div>
      </div>
      <div className="top-second-row container-xxl">
          <div className="row">
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
                <div className="col-xl-4 col-sm-6" style={{marginRight: "0"}}>
                    <img src={img2} className="profile-post-img" width="380px" />
                </div>
          </div>
          <div className="" style={{textAlign: "center"}}>
              <button className="load-more-btn">Check More Posts</button>
          </div>
      </div>
    </div>
  );
};

export default UserProfile;
