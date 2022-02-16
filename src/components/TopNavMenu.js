import React from "react";
import user from "../assets/images/users/user-1.jpg";

import user4 from "../assets/images/users/user-4.jpg";

import { Link } from "react-router-dom";
const TopNavMenu = () => {
  return (
    <div>
      {/*  */}
      <ul className="list-unstyled topnav-menu float-end mb-0">
        <li className="d-none d-lg-block">
          <form className="app-search">
            <div className="app-search-box">
              <div className="input-group"></div>
            </div>
          </form>
        </li>
        <li className="align-self-center my-2">
          <Link className="btn btn-outline-warning" to="/Login ">
            Login
          </Link>
        </li>
        <li className="dropdown notification-list topbar-dropdown">
          <a
            className="nav-link dropdown-toggle waves-effect waves-light"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="fe-bell noti-icon"></i>
            <span className="badge bg-danger rounded-circle noti-icon-badge">
              9
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-end dropdown-lg">
            <div className="dropdown-item noti-title">
              <h5 className="m-0">
                <span className="float-end">
                  <a href="" className="text-dark">
                    <small>Clear All</small>
                  </a>
                </span>
                Notification
              </h5>
            </div>

            {/* <div className="noti-scroll" data-simplebar="init">
              <div className="simplebar-wrapper" style={{ margin: "0px" }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: "0px", bottom: "0px" }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      tabIndex="0"
                      role="region"
                      aria-label="scrollable content"
                      style={{ height: "auto", overflow: "hidden" }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: "0px" }}
                      >
                        <a
                          href="#"
                          className="dropdown-item notify-item active"
                        >
                          <div className="notify-icon">
                            <img
                              src={user}
                              className="img-fluid rounded-circle"
                              alt=""
                            />{" "}
                          </div>
                          <p className="notify-details">Cristina Pride</p>
                          <p className="text-muted mb-0 user-msg">
                            <small>
                              Hi, How are you? What about our next meeting
                            </small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-primary">
                            <i className="mdi mdi-comment-account-outline"></i>
                          </div>
                          <p className="notify-details">
                            Caleb Flakelar commented on Admin
                            <small className="text-muted">1 min ago</small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon">
                            <img
                              src={user4}
                              className="img-fluid rounded-circle"
                              alt=""
                            />{" "}
                          </div>
                          <p className="notify-details">Karen Robinson</p>
                          <p className="text-muted mb-0 user-msg">
                            <small>
                              Wow ! this admin looks good and awesome design
                            </small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-warning">
                            <i className="mdi mdi-account-plus"></i>
                          </div>
                          <p className="notify-details">
                            New user registered.
                            <small className="text-muted">5 hours ago</small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-info">
                            <i className="mdi mdi-comment-account-outline"></i>
                          </div>
                          <p className="notify-details">
                            Caleb Flakelar commented on Admin
                            <small className="text-muted">4 days ago</small>
                          </p>
                        </a>

                        <a href="#" className="dropdown-item notify-item">
                          <div className="notify-icon bg-secondary">
                            <i className="mdi mdi-heart"></i>
                          </div>
                          <p className="notify-details">
                            Carlos Crouch liked
                            <b>Admin</b>
                            <small className="text-muted">13 days ago</small>
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: "0px", height: "0px" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: "0px", display: "none" }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: "hidden" }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ height: "0px", display: "none" }}
                ></div>
              </div>
            </div> */}

            <a
              href="#"
              className="dropdown-item text-center text-primary notify-item notify-all"
            >
              View all
              <i className="fe-arrow-right"></i>
            </a>
          </div>
        </li>

        <li className="dropdown notification-list topbar-dropdown">
          <Link
            className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
            data-bs-toggle="dropdown"
            to="/profile"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img src={user} alt="user-image" className="rounded-circle" />
            <span className="pro-user-name ms-1">
              Your Profile <i className="mdi mdi-chevron-down"></i>
            </span>
          </Link>
          {/* <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
            <div className="dropdown-header noti-title">
              <h6 className="text-overflow m-0">Welcome !</h6>
            </div>

            <a
              href="contacts-profile.html"
              className="dropdown-item notify-item"
            >
              <i className="fe-user"></i>
              <span>My Account</span>
            </a>

            <a
              href="auth-lock-screen.html"
              className="dropdown-item notify-item"
            >
              <i className="fe-lock"></i>
              <span>Lock Screen</span>
            </a>

            <div className="dropdown-divider"></div>

            <a href="auth-logout.html" className="dropdown-item notify-item">
              <i className="fe-log-out"></i>
              <span>Logout</span>
            </a>
          </div> */}
        </li>

        <li className="dropdown d-inline-block d-lg-none">
          <a
            className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="fe-search noti-icon"></i>
          </a>
          <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
            <form className="p-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search ..."
                aria-label="Recipient's username"
              />
            </form>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TopNavMenu;
