import React from "react";
import "../assets/css/appDark.css";
import "../assets/css/app.css";
import user from "../assets/images/users/user-1.jpg";
import user2 from "../assets/images/users/user-2.jpg";
import user3 from "../assets/images/users/user-3.jpg";
import user4 from "../assets/images/users/user-4.jpg";
import user5 from "../assets/images/users/user-5.jpg";
import user10 from "../assets/images/users/user-10.jpg";
import { Accordion } from "react-bootstrap";

const SideBar = () => {
  return (
    <div id="wrapper" className="show">
      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-end mb-0">
          <li className="d-none d-lg-block">
            <form className="app-search">
              <div className="app-search-box">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    id="top-search"
                  />
                  <button className="btn input-group-text" type="submit">
                    <i className="fe-search"></i>
                  </button>
                </div>
                <div className="dropdown-menu dropdown-lg" id="search-dropdown">
                  <div className="dropdown-header noti-title">
                    <h5 className="text-overflow mb-2">Found 22 results</h5>
                  </div>

                  <a href="#" className="dropdown-item notify-item">
                    <i className="fe-home me-1"></i>
                    <span>Analytics Report</span>
                  </a>

                  <a href="#" className="dropdown-item notify-item">
                    <i className="fe-aperture me-1"></i>
                    <span>How can I help you?</span>
                  </a>

                  <a href="#" className="dropdown-item notify-item">
                    <i className="fe-settings me-1"></i>
                    <span>User profile settings</span>
                  </a>

                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow mb-2 text-uppercase">Users</h6>
                  </div>

                  <div className="notification-list">
                    <a href="#" className="dropdown-item notify-item">
                      <div className="d-flex align-items-start">
                        <img
                          className="d-flex me-2 rounded-circle"
                          src={user2}
                          alt="Generic placeholder image"
                          height="32"
                        />
                        <div className="w-100">
                          <h5 className="m-0 font-14">Erwin E. Brown</h5>
                          <span className="font-12 mb-0">UI Designer</span>
                        </div>
                      </div>
                    </a>

                    <a href="#" className="dropdown-item notify-item">
                      <div className="d-flex align-items-start">
                        <img
                          className="d-flex me-2 rounded-circle"
                          src={user5}
                          alt="Generic placeholder image"
                          height="32"
                        />
                        <div className="w-100">
                          <h5 className="m-0 font-14">Jacob Deo</h5>
                          <span className="font-12 mb-0">Developer</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </form>
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

              <div className="noti-scroll" data-simplebar="init">
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
              </div>

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
            <a
              className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img src={user} alt="user-image" className="rounded-circle" />
              <span className="pro-user-name ms-1">
                Nowak <i className="mdi mdi-chevron-down"></i>
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
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
            </div>
          </li>

          <li className="dropdown notification-list">
            <a
              href="#"
              className="nav-link right-bar-toggle waves-effect waves-light"
            >
              <i className="fe-settings noti-icon"></i>
            </a>
          </li>
        </ul>

        <div className="logo-box">
          <a href="index.html" className="logo logo-light text-center">
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-light.png" alt="" height="16" />
            </span>
          </a>
          <a href="index.html" className="logo logo-dark text-center">
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-dark.png" alt="" height="16" />
            </span>
          </a>
        </div>

        <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
          <li>
            <button className="button-menu-mobile disable-btn waves-effect">
              <i className="fe-menu"></i>
            </button>
          </li>

          <li>
            <h4 className="page-title-main">Dashboard</h4>
          </li>
        </ul>

        <div className="clearfix"></div>
      </div>
      <div className="left-side-menu">
        <div className="h-100 menuitem-active" data-simplebar="init">
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
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div className="simplebar-content" style={{ padding: "0px" }}>
                    <div className="user-box text-center">
                      <img
                        src={user}
                        alt="user-img"
                        title="Mat Helme"
                        className="rounded-circle img-thumbnail avatar-md"
                      />
                      <div className="dropdown">
                        <a
                          href="#"
                          className="user-name dropdown-toggle h5 mt-2 mb-1 d-block"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Nowak Helme
                        </a>
                        <div className="dropdown-menu user-pro-dropdown">
                          <a href="#" className="dropdown-item notify-item">
                            <i className="fe-user me-1"></i>
                            <span>My Account</span>
                          </a>

                          <a href="#" className="dropdown-item notify-item">
                            <i className="fe-settings me-1"></i>
                            <span>Settings</span>
                          </a>

                          <a href="#" className="dropdown-item notify-item">
                            <i className="fe-lock me-1"></i>
                            <span>Lock Screen</span>
                          </a>

                          <a href="#" className="dropdown-item notify-item">
                            <i className="fe-log-out me-1"></i>
                            <span>Logout</span>
                          </a>
                        </div>
                      </div>

                      <p className="text-muted left-user-info">Admin Head</p>

                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a href="#" className="text-muted left-user-info">
                            <i className="mdi mdi-cog"></i>
                          </a>
                        </li>

                        <li className="list-inline-item">
                          <a href="#">
                            <i className="mdi mdi-power"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div id="sidebar-menu" className="show">
                      <ul id="side-menu">
                        <li className="menu-title">Navigation</li>

                        <li className="menuitem-active">
                          <a href="index.html" className="active">
                            <i className="mdi mdi-view-dashboard-outline"></i>
                            <span className="badge bg-success rounded-pill float-end">
                              9+
                            </span>
                            <span> Dashboard </span>
                          </a>
                        </li>

                        <li className="menu-title mt-2">Apps</li>

                        <li>
                          <a href="apps-calendar.html">
                            <i className="mdi mdi-calendar-blank-outline"></i>
                            <span> Calendar </span>
                          </a>
                        </li>

                        <li>
                          <a href="apps-chat.html">
                            <i className="mdi mdi-forum-outline"></i>
                            <span> Chat </span>
                          </a>
                        </li>
                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header>
                              <i className="mdi mdi-email-outline" style={{marginRight: "1rem"}}/>
                              Email
                            </Accordion.Header>
                            <Accordion.Body>Inbox</Accordion.Body>
                            <Accordion.Body>Email Template</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>


                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-clipboard-outline" style={{marginRight: "1rem"}}/>
                              Tasks
                            </Accordion.Header>
                            <Accordion.Body>Kanban Board</Accordion.Body>
                            <Accordion.Body>Details</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        

                        <li>
                          <a href="apps-projects.html">
                            <i className="mdi mdi-briefcase-variant-outline"></i>
                            <span> Projects </span>
                          </a>
                        </li>


                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-book-open-page-variant-outline" style={{marginRight: "1rem"}}/>
                              Tasks
                            </Accordion.Header>
                            <Accordion.Body>Member List</Accordion.Body>
                            <Accordion.Body>Profile</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <li className="menu-title mt-2">Custom</li>



                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-account-multiple-plus-outline" style={{marginRight: "1rem"}}/>
                              Auth Pages
                            </Accordion.Header>
                            <Accordion.Body>Login</Accordion.Body>
                            <Accordion.Body>Register</Accordion.Body>
                            <Accordion.Body>Recover Password</Accordion.Body>
                            <Accordion.Body>Lock Screen</Accordion.Body>
                            <Accordion.Body>Confirm Mail</Accordion.Body>
                            <Accordion.Body>Logout</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>


                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-file-multiple-outline" style={{marginRight: "1rem"}}/>
                              Extra Pages
                            </Accordion.Header>
                            <Accordion.Body>Stater</Accordion.Body>
                            <Accordion.Body>Pricing</Accordion.Body>
                            <Accordion.Body>Timeline</Accordion.Body>
                            <Accordion.Body>Invoice</Accordion.Body>
                            <Accordion.Body>FAQs</Accordion.Body>
                            <Accordion.Body>Gallery</Accordion.Body>
                            <Accordion.Body>Error 404</Accordion.Body>
                            <Accordion.Body>Error 505</Accordion.Body>
                            <Accordion.Body>Maintainance</Accordion.Body>
                            <Accordion.Body>Coming Soon</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        
                        
                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-dock-window" style={{marginRight: "1rem"}}/>
                              Layouts
                            </Accordion.Header>
                            <Accordion.Body>Horizontal</Accordion.Body>
                            <Accordion.Body>Preloder</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>


                        <li className="menu-title mt-2">Components</li>


                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-briefcase-outline" style={{marginRight: "1rem"}}/>
                              Base UI
                            </Accordion.Header>
                            <Accordion.Body>Buttons</Accordion.Body>
                            <Accordion.Body>Cards</Accordion.Body>
                            <Accordion.Body>Avatar</Accordion.Body>
                            <Accordion.Body>Tabs & Accordions</Accordion.Body>
                            <Accordion.Body>Models</Accordion.Body>
                            <Accordion.Body>Progress</Accordion.Body>
                            <Accordion.Body>Notifications</Accordion.Body>
                            <Accordion.Body>Offcanvas</Accordion.Body>
                            <Accordion.Body>Placeholders</Accordion.Body>
                            <Accordion.Body>Spinners</Accordion.Body>
                            <Accordion.Body>Images</Accordion.Body>
                            <Accordion.Body>Carousel</Accordion.Body>
                            <Accordion.Body>Embed Video</Accordion.Body>
                            <Accordion.Body>Dropdowns</Accordion.Body>
                            <Accordion.Body>Tooltips & Popovers</Accordion.Body>
                            <Accordion.Body>General UI</Accordion.Body>
                            <Accordion.Body>Typography</Accordion.Body>
                            <Accordion.Body>Grid</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <li>
                          <a href="widgets.html">
                            <i className="mdi mdi-gift-outline"></i>
                            <span> Widgets </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="#sidebarExtendedui"
                            data-bs-toggle="collapse"
                          >
                            <i className="mdi mdi-layers-outline"></i>
                            <span className="badge bg-info float-end">Hot</span>
                            <span> Extended UI </span>
                          </a>
                          <div className="collapse" id="sidebarExtendedui">
                            <ul className="nav-second-level">
                              <li>
                                <a href="extended-range-slider.html">
                                  Range Slider
                                </a>
                              </li>
                              <li>
                                <a href="extended-sweet-alert.html">
                                  Sweet Alert
                                </a>
                              </li>
                              <li>
                                <a href="extended-draggable-cards.html">
                                  Draggable Cards
                                </a>
                              </li>
                              <li>
                                <a href="extended-tour.html">Tour Page</a>
                              </li>
                              <li>
                                <a href="extended-notification.html">
                                  Notification
                                </a>
                              </li>
                              <li>
                                <a href="extended-treeview.html">Tree View</a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-shield-outline" style={{marginRight: "1rem"}}/>
                              Icons
                            </Accordion.Header>
                            <Accordion.Body>Feather Icons</Accordion.Body>
                            <Accordion.Body>Material Design Icons</Accordion.Body>
                            <Accordion.Body>Dripicons</Accordion.Body>
                            <Accordion.Body>Font Awesome 5</Accordion.Body>
                            <Accordion.Body>Themify</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        
                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-texture" style={{marginRight: "1rem"}}/>
                              Forms
                            </Accordion.Header>
                            <Accordion.Body>General Elements</Accordion.Body>
                            <Accordion.Body>Advanced</Accordion.Body>
                            <Accordion.Body>Validation</Accordion.Body>
                            <Accordion.Body>Wizard</Accordion.Body>
                            <Accordion.Body>Quilis Editor</Accordion.Body>
                            <Accordion.Body>Picker</Accordion.Body>
                            <Accordion.Body>File Uploads</Accordion.Body>
                            <Accordion.Body>X Editable</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-table" style={{marginRight: "1rem"}}/>
                              Tables
                            </Accordion.Header>
                            <Accordion.Body>Basics Tables</Accordion.Body>
                            <Accordion.Body>Data Tables</Accordion.Body>
                            <Accordion.Body>Editable Tables</Accordion.Body>
                            <Accordion.Body>Responsive Tables</Accordion.Body>
                            <Accordion.Body>TablesawTables</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-chart-donut-variant" style={{marginRight: "1rem"}}/>
                              Charts
                            </Accordion.Header>
                            <Accordion.Body>Flot Charts</Accordion.Body>
                            <Accordion.Body>Morris Charts</Accordion.Body>
                            <Accordion.Body>Chartjs Charts</Accordion.Body>
                            <Accordion.Body>Chatist Charts</Accordion.Body>
                            <Accordion.Body>Sparkline Charts</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-map-outline" style={{marginRight: "1rem"}}/>
                              Maps
                            </Accordion.Header>
                            <Accordion.Body>Google Maps</Accordion.Body>
                            <Accordion.Body>Vector Maps</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                        <Accordion flush>
                          <Accordion.Item
                            eventKey="0"
                            style={{ backgroundColor: "white" }}
                          >
                            <Accordion.Header style={{backgroundColor: "white"}}>
                            <i className="mdi mdi-share-variant" style={{marginRight: "1rem"}}/>
                              Multi Level
                            </Accordion.Header>
                            <Accordion.Body>Second Level</Accordion.Body>
                            <Accordion.Body>Third Level</Accordion.Body>
                          </Accordion.Item>
                        </Accordion>

                      </ul>
                    </div>

                    <div className="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: "1272px" }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                width: "0px",
                display: "none",
                transform: "translate3d(0px, 0px, 0px)",
              }}
            ></div>
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: "294px",
                transform: "translate3d(0px, 0px, 0px)",
                display: "block",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mt-0 mb-4">Total Revenue</h4>

                    <div className="widget-chart-1">
                      <div className="widget-chart-box-1 float-start" dir="ltr">
                        <div
                          style={{
                            display: "inline",
                            width: "70px",
                            height: "70px",
                          }}
                        >
                          <canvas
                            width="87"
                            height="87"
                            style={{ width: "70px", height: "70px" }}
                          ></canvas>
                          <input
                            data-plugin="knob"
                            data-width="70"
                            data-height="70"
                            data-fgcolor="#f05050 "
                            data-bgcolor="#F9B9B9"
                            value="58"
                            data-skin="tron"
                            data-angleoffset="180"
                            data-readonly="true"
                            data-thickness=".15"
                            readOnly="readonly"
                            style={{
                              width: "39px",
                              height: "23px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "23px",
                              marginLeft: "-54px",
                              border: "0px",
                              background: "none",
                              font: "bold 14px Arial",
                              textAlign: "center",
                              color: "rgb(240, 80, 80)",
                              padding: "0px",
                              appearance: "none",
                            }}
                          />
                        </div>
                      </div>

                      <div className="widget-detail-1 text-end">
                        <h2 className="fw-normal pt-2 mb-1"> 256 </h2>
                        <p className="text-muted mb-1">Revenue today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mt-0 mb-3">Sales Analytics</h4>

                    <div className="widget-box-2">
                      <div className="widget-detail-2 text-end">
                        <span className="badge bg-success rounded-pill float-start mt-3">
                          32% <i className="mdi mdi-trending-up"></i>{" "}
                        </span>
                        <h2 className="fw-normal mb-1"> 8451 </h2>
                        <p className="text-muted mb-3">Revenue today</p>
                      </div>
                      <div className="progress progress-bar-alt-success progress-sm">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="77"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "77%" }}
                        >
                          <span className="visually-hidden">77% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mt-0 mb-4">Statistics</h4>

                    <div className="widget-chart-1">
                      <div className="widget-chart-box-1 float-start" dir="ltr">
                        <div
                          style={{
                            display: "inline",
                            width: "70px",
                            height: "70px",
                          }}
                        >
                          <canvas
                            width="87"
                            height="87"
                            style={{ width: "70px", height: "70px" }}
                          ></canvas>
                          <input
                            data-plugin="knob"
                            data-width="70"
                            data-height="70"
                            data-fgcolor="#ffbd4a"
                            data-bgcolor="#FFE6BA"
                            value="80"
                            data-skin="tron"
                            data-angleoffset="180"
                            data-readonly="true"
                            data-thickness=".15"
                            readOnly="readonly"
                            style={{
                              width: "39px",
                              height: "23px",
                              position: "absolute",
                              verticalAlign: "middle",
                              marginTop: "23px",
                              marginLeft: "-54px",
                              border: "0px",
                              background: "none",
                              font: "bold 14px Arial",
                              textAlign: "center",
                              color: "rgb(255, 189, 74)",
                              padding: "0px",
                              appearance: "none",
                            }}
                          />
                        </div>
                      </div>
                      <div className="widget-detail-1 text-end">
                        <h2 className="fw-normal pt-2 mb-1"> 4569 </h2>
                        <p className="text-muted mb-1">Revenue today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mt-0 mb-3">Daily Sales</h4>

                    <div className="widget-box-2">
                      <div className="widget-detail-2 text-end">
                        <span className="badge bg-pink rounded-pill float-start mt-3">
                          32% <i className="mdi mdi-trending-up"></i>{" "}
                        </span>
                        <h2 className="fw-normal mb-1"> 158 </h2>
                        <p className="text-muted mb-3">Revenue today</p>
                      </div>
                      <div className="progress progress-bar-alt-pink progress-sm">
                        <div
                          className="progress-bar bg-pink"
                          role="progressbar"
                          aria-valuenow="77"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: "77%" }}
                        >
                          <span className="visually-hidden">77% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mt-0">Daily Sales</h4>

                    <div className="widget-chart text-center">
                      <div
                        id="morris-donut-example"
                        dir="ltr"
                        style={{ height: "245px" }}
                        className="morris-chart"
                      >
                        <svg
                          height="245"
                          version="1.1"
                          width="705"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            left: "-0.1875px",
                            top: "-0.8px",
                          }}
                        >
                          <desc
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          >
                            Created with Raphaël 2.3.0
                          </desc>
                          <defs
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></defs>
                          <path
                            fill="none"
                            stroke="#ff8acc"
                            d="M352.5,197.5A75,75,0,0,0,423.53058844420985,146.57603591269296"
                            strokeWidth="2"
                            opacity="0"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              opacity: "0",
                            }}
                          ></path>
                          <path
                            fill="#ff8acc"
                            stroke="#000000"
                            d="M352.5,200.5A78,78,0,0,0,426.3718119819782,147.53907734920068L454.31051010336745,157.00898480819325A107.5,107.5,0,0,1,352.5,230Z"
                            strokeOpacity="0"
                            strokeWidth="3"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></path>
                          <path
                            fill="none"
                            stroke="#5b69bc"
                            d="M423.53058844420985,146.57603591269296A75,75,0,0,0,285.24290809410627,89.31139369659871"
                            strokeWidth="2"
                            opacity="1"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              opacity: "1",
                            }}
                          ></path>
                          <path
                            fill="#5b69bc"
                            stroke="#000000"
                            d="M426.3718119819782,147.53907734920068A78,78,0,0,0,282.55262441787056,87.98384944446265L251.61436214115946,72.71709054489806A112.5,112.5,0,0,1,459.0458826663148,158.61405386903942Z"
                            strokeOpacity="0"
                            strokeWidth="3"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></path>
                          <path
                            fill="none"
                            stroke="#35b8e0"
                            d="M285.24290809410627,89.31139369659871A75,75,0,0,0,352.4764380554856,197.4999962988984"
                            strokeWidth="2"
                            opacity="0"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              opacity: "0",
                            }}
                          ></path>
                          <path
                            fill="#35b8e0"
                            stroke="#000000"
                            d="M282.55262441787056,87.98384944446265A78,78,0,0,0,352.47549557770503,200.49999615085432L352.46622787952936,229.99999469508768A107.5,107.5,0,0,1,256.09816826821907,74.92966429845814Z"
                            strokeOpacity="0"
                            strokeWidth="3"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                          ></path>
                          <text
                            x="352.5"
                            y="112.5"
                            textAnchor="middle"
                            fontFamily='"Arial"'
                            fontSize="15px"
                            stroke="none"
                            fill="#000000"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "middle",
                              fontFamily: "Arial",
                              fontSize: "15px",
                              fontWeight: "800",
                            }}
                            fontWeight="800"
                            transform="matrix(1.3504,0,0,1.3504,-123.5209,-42.5001)"
                            strokeWidth="0.7405367815936054"
                          >
                            <tspan
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                              dy="4.7999982833862305"
                            >
                              In-Store Sales
                            </tspan>
                          </text>
                          <text
                            x="352.5"
                            y="132.5"
                            textAnchor="middle"
                            fontFamily="Arial"
                            fontSize="14px"
                            stroke="none"
                            fill="#000000"
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              textAnchor: "middle",
                              fontFamily: "Arial",
                              fontSize: "14px",
                            }}
                            transform="matrix(1.5625,0,0,1.5625,-198.2813,-70.0313)"
                            strokeWidth="0.64"
                          >
                            <tspan
                              style={{
                                WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                              }}
                              dy="4.799995422363281"
                            >
                              30
                            </tspan>
                          </text>
                        </svg>
                      </div>
                      <ul className="list-inline chart-detail-list mb-0">
                        <li className="list-inline-item">
                          <h5 style={{ color: "#ff8acc" }}>
                            <i className="fa fa-circle me-1"></i>Series A
                          </h5>
                        </li>
                        <li className="list-inline-item">
                          <h5 style={{ color: "#5b69bc" }}>
                            <i className="fa fa-circle me-1"></i>Series B
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <h4 className="header-title mt-0">Statistics</h4>
                    <div
                      id="morris-bar-example"
                      dir="ltr"
                      style={{
                        height: "280px",
                        position: "relative",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      }}
                      className="morris-chart"
                    >
                      <svg
                        height="280"
                        version="1.1"
                        width="705"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          left: "-0.3875px",
                          top: "-0.8px",
                        }}
                      >
                        <desc
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
                          Created with Raphaël 2.3.0
                        </desc>
                        <defs
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></defs>
                        <text
                          x="30.787988662719727"
                          y="240.5999994277954"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            0
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,240.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="186.69999957084656"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999992847442627"
                          >
                            25
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,186.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="132.7999997138977"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="4.000000953674316"
                          >
                            50
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,132.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="78.89999985694885"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.999994993209839"
                          >
                            75
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,78.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="25"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.999999523162842"
                          >
                            100
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,25.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="626.9406657218933"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2015
                          </tspan>
                        </text>
                        <text
                          x="520.8219971656799"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2014
                          </tspan>
                        </text>
                        <text
                          x="414.70332860946655"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2013
                          </tspan>
                        </text>
                        <text
                          x="308.5846600532532"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2012
                          </tspan>
                        </text>
                        <text
                          x="202.4659914970398"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2011
                          </tspan>
                        </text>
                        <text
                          x="96.34732294082642"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2010
                          </tspan>
                        </text>
                        <rect
                          x="85.73545608520507"
                          y="78.89999985694885"
                          width="21.223733711242676"
                          height="161.69999957084656"
                          rx="0"
                          ry="0"
                          fill="#188ae2"
                          stroke="none"
                          fillOpacity="1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: "1",
                          }}
                        ></rect>
                        <rect
                          x="191.85412464141845"
                          y="150.04799966812135"
                          width="21.223733711242676"
                          height="90.55199975967406"
                          rx="0"
                          ry="0"
                          fill="#188ae2"
                          stroke="none"
                          fillOpacity="1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: "1",
                          }}
                        ></rect>
                        <rect
                          x="297.97279319763186"
                          y="78.89999985694885"
                          width="21.223733711242676"
                          height="161.69999957084656"
                          rx="0"
                          ry="0"
                          fill="#188ae2"
                          stroke="none"
                          fillOpacity="1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: "1",
                          }}
                        ></rect>
                        <rect
                          x="404.09146175384524"
                          y="158.67199964523314"
                          width="21.223733711242676"
                          height="81.92799978256227"
                          rx="0"
                          ry="0"
                          fill="#188ae2"
                          stroke="none"
                          fillOpacity="1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: "1",
                          }}
                        ></rect>
                        <rect
                          x="510.2101303100586"
                          y="199.63599953651428"
                          width="21.223733711242676"
                          height="40.963999891281134"
                          rx="0"
                          ry="0"
                          fill="#188ae2"
                          stroke="none"
                          fillOpacity="1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: "1",
                          }}
                        ></rect>
                        <rect
                          x="616.328798866272"
                          y="40.09199995994567"
                          width="21.223733711242676"
                          height="200.50799946784974"
                          rx="0"
                          ry="0"
                          fill="#188ae2"
                          stroke="none"
                          fillOpacity="1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            fillOpacity: "1",
                          }}
                        ></rect>
                      </svg>
                      <div
                        className="morris-hover morris-default-style"
                        style={{ left: "251px", top: "108px", display: "none" }}
                      >
                        <div className="morris-hover-row-label">2015</div>
                        <div
                          className="morris-hover-point"
                          style={{ color: "#188ae2" }}
                        >
                          Statistics: 93
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <h4 className="header-title mt-0">Total Revenue</h4>
                    <div
                      id="morris-line-example"
                      dir="ltr"
                      style={{
                        height: "280px",
                        position: "relative",
                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                      }}
                      className="morris-chart"
                    >
                      <svg
                        height="280"
                        version="1.1"
                        width="705"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        style={{
                          overflow: "hidden",
                          position: "relative",
                          left: "-0.775px",
                          top: "-0.8px",
                        }}
                      >
                        <desc
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        >
                          Created with Raphaël 2.3.0
                        </desc>
                        <defs
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></defs>
                        <text
                          x="30.787988662719727"
                          y="240.5999994277954"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            0
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,240.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="186.69999957084656"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999992847442627"
                          >
                            25
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,186.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="132.7999997138977"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="4.000000953674316"
                          >
                            50
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,132.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="78.89999985694885"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.999994993209839"
                          >
                            75
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,78.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="30.787988662719727"
                          y="25"
                          textAnchor="end"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "end",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.999999523162842"
                          >
                            100
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#adb5bd"
                          d="M43.28798866271973,25.5H680"
                          strokeOpacity="0.1"
                          strokeWidth="0.5"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <text
                          x="680"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2015
                          </tspan>
                        </text>
                        <text
                          x="589.1122862189646"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2014
                          </tspan>
                        </text>
                        <text
                          x="498.22457243792934"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2013
                          </tspan>
                        </text>
                        <text
                          x="407.0878512218775"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2012
                          </tspan>
                        </text>
                        <text
                          x="316.2001374408422"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2011
                          </tspan>
                        </text>
                        <text
                          x="225.31242365980688"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2010
                          </tspan>
                        </text>
                        <text
                          x="134.42470987877158"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2009
                          </tspan>
                        </text>
                        <text
                          x="43.28798866271973"
                          y="253.0999994277954"
                          textAnchor="middle"
                          fontFamily="sans-serif"
                          fontSize="12px"
                          stroke="none"
                          fill="#888888"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            textAnchor: "middle",
                            fontFamily: "sans-serif",
                            fontSize: "12px",
                            fontWeight: "normal",
                          }}
                          fontWeight="normal"
                          transform="matrix(1,0,0,1,0,7.2)"
                        >
                          <tspan
                            style={{
                              WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                            }}
                            dy="3.9999899864196777"
                          >
                            2008
                          </tspan>
                        </text>
                        <path
                          fill="none"
                          stroke="#188ae2"
                          d="M43.28798866271973,240.5999994277954C66.07216896673269,213.64999949932098,111.64052957475862,154.38949350064823,134.42470987877158,132.7999997138977C157.1466383240304,111.26949361508913,202.59049521454807,68.11999988555908,225.31242365980688,68.11999988555908C248.0343521050657,68.11999988555908,293.4782089955834,113.9349997639656,316.2001374408422,132.7999997138977C338.922065886101,151.6649996638298,384.3659227766187,216.3486862226648,407.0878512218775,219.03999948501587C429.87203152589046,221.7386862083597,475.44039213391636,165.1547465500525,498.22457243792934,154.35999965667725C520.9465008831882,143.59474660727295,566.3903577737058,140.88499969244003,589.1122862189646,132.7999997138977C611.8342146642235,124.71499973535538,657.2780715547411,100.4599997997284,680,89.67999982833862"
                          strokeWidth="3"
                          className="line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <path
                          fill="none"
                          stroke="#10c469"
                          d="M43.28798866271973,132.7999997138977C66.07216896673269,119.32499974966049,111.64052957475862,73.50262641026123,134.42470987877158,78.89999985694885C157.1466383240304,84.282626381651,202.59049521454807,169.18249961733818,225.31242365980688,175.9199995994568C248.0343521050657,182.6574995815754,293.4782089955834,144.9274996817112,316.2001374408422,132.7999997138977C338.922065886101,120.67249974608421,384.3659227766187,78.89999985694885,407.0878512218775,78.89999985694885C429.87203152589046,78.89999985694885,475.44039213391636,132.7999997138977,498.22457243792934,132.7999997138977C520.9465008831882,132.7999997138977,566.3903577737058,92.37499982118607,589.1122862189646,78.89999985694885C611.8342146642235,65.42499989271164,657.2780715547411,38.47499996423721,680,25"
                          strokeWidth="3"
                          className="line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></path>
                        <circle
                          cx="43.28798866271973"
                          cy="240.5999994277954"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="134.42470987877158"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="225.31242365980688"
                          cy="68.11999988555908"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="316.2001374408422"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="407.0878512218775"
                          cy="219.03999948501587"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="498.22457243792934"
                          cy="154.35999965667725"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="589.1122862189646"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="680"
                          cy="89.67999982833862"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_1"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="43.28798866271973"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="134.42470987877158"
                          cy="78.89999985694885"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="225.31242365980688"
                          cy="175.9199995994568"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="316.2001374408422"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="407.0878512218775"
                          cy="78.89999985694885"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="498.22457243792934"
                          cy="132.7999997138977"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="589.1122862189646"
                          cy="78.89999985694885"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                        <circle
                          cx="680"
                          cy="25"
                          r="0"
                          fill="#ffffff"
                          stroke="#999999"
                          strokeWidth="1"
                          className="circle_line_0"
                          style={{
                            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                          }}
                        ></circle>
                      </svg>
                      <div
                        className="morris-hover morris-default-style"
                        style={{ display: "none" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body widget-user">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-lg me-3">
                        <img
                          src={user3}
                          className="img-fluid rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="mt-0 mb-1">Chadengle</h5>
                        <p className="text-muted mb-2 font-13 text-truncate">
                          coderthemes@gmail.com
                        </p>
                        <small className="text-warning">
                          <b>Admin</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body widget-user">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-lg me-3">
                        <img
                          src={user2}
                          className="img-fluid rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="mt-0 mb-1"> Michael Zenaty</h5>
                        <p className="text-muted mb-2 font-13 text-truncate">
                          coderthemes@gmail.com
                        </p>
                        <small className="text-pink">
                          <b>Support Lead</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body widget-user">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-lg me-3">
                        <img
                          src={user}
                          className="img-fluid rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="mt-0 mb-1">Stillnotdavid</h5>
                        <p className="text-muted mb-2 font-13 text-truncate">
                          coderthemes@gmail.com
                        </p>
                        <small className="text-success">
                          <b>Designer</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-md-6">
                <div className="card">
                  <div className="card-body widget-user">
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 avatar-lg me-3">
                        <img
                          src={user10}
                          className="img-fluid rounded-circle"
                          alt="user"
                        />
                      </div>
                      <div className="flex-grow-1 overflow-hidden">
                        <h5 className="mt-0 mb-1">Tomaslau</h5>
                        <p className="text-muted mb-2 font-13 text-truncate">
                          coderthemes@gmail.com
                        </p>
                        <small className="text-info">
                          <b>Developer</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mb-3">Inbox</h4>

                    <div className="inbox-widget">
                      <div className="inbox-item">
                        <a href="#">
                          <div className="inbox-item-img">
                            <img
                              src={user}
                              className="rounded-circle"
                              alt="/"
                            />
                          </div>
                          <h5 className="inbox-item-author mt-0 mb-1">
                            Chadengle
                          </h5>
                          <p className="inbox-item-text">
                            Hey! there I'm available...
                          </p>
                          <p className="inbox-item-date">13:40 PM</p>
                        </a>
                      </div>

                      <div className="inbox-item">
                        <a href="#">
                          <div className="inbox-item-img">
                            <img
                              src={user2}
                              className="rounded-circle"
                              alt="/"
                            />
                          </div>
                          <h5 className="inbox-item-author mt-0 mb-1">
                            Tomaslau
                          </h5>
                          <p className="inbox-item-text">
                            I've finished it! See you so...
                          </p>
                          <p className="inbox-item-date">13:34 PM</p>
                        </a>
                      </div>

                      <div className="inbox-item">
                        <a href="#">
                          <div className="inbox-item-img">
                            <img
                              src={user3}
                              className="rounded-circle"
                              alt="/"
                            />
                          </div>
                          <h5 className="inbox-item-author mt-0 mb-1">
                            Stillnotdavid
                          </h5>
                          <p className="inbox-item-text">
                            This theme is awesome!
                          </p>
                          <p className="inbox-item-date">13:17 PM</p>
                        </a>
                      </div>

                      <div className="inbox-item">
                        <a href="#">
                          <div className="inbox-item-img">
                            <img
                              src={user4}
                              className="rounded-circle"
                              alt="/"
                            />
                          </div>
                          <h5 className="inbox-item-author mt-0 mb-1">
                            Kurafire
                          </h5>
                          <p className="inbox-item-text">Nice to meet you</p>
                          <p className="inbox-item-date">12:20 PM</p>
                        </a>
                      </div>

                      <div className="inbox-item">
                        <a href="#">
                          <div className="inbox-item-img">
                            <img
                              src={user5}
                              className="rounded-circle"
                              alt="/"
                            />
                          </div>
                          <h5 className="inbox-item-author mt-0 mb-1">
                            Shahedk
                          </h5>
                          <p className="inbox-item-text">
                            Hey! there I'm available...
                          </p>
                          <p className="inbox-item-date">10:15 AM</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-8">
                <div className="card">
                  <div className="card-body">
                    <div className="dropdown float-end">
                      <a
                        href="#"
                        className="dropdown-toggle arrow-none card-drop"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="mdi mdi-dots-vertical"></i>
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className="dropdown-item">
                          Action
                        </a>

                        <a href="#" className="dropdown-item">
                          Another action
                        </a>

                        <a href="#" className="dropdown-item">
                          Something else
                        </a>

                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>

                    <h4 className="header-title mt-0 mb-3">Latest Projects</h4>

                    <div className="table-responsive">
                      <table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Project Name</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th>Assign</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Adminto Admin v1</td>
                            <td>01/01/2017</td>
                            <td>26/04/2017</td>
                            <td>
                              <span className="badge bg-danger">Released</span>
                            </td>
                            <td>Coderthemes</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Adminto Frontend v1</td>
                            <td>01/01/2017</td>
                            <td>26/04/2017</td>
                            <td>
                              <span className="badge bg-success">Released</span>
                            </td>
                            <td>Adminto admin</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Adminto Admin v1.1</td>
                            <td>01/05/2017</td>
                            <td>10/05/2017</td>
                            <td>
                              <span className="badge bg-pink">Pending</span>
                            </td>
                            <td>Coderthemes</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Adminto Frontend v1.1</td>
                            <td>01/01/2017</td>
                            <td>31/05/2017</td>
                            <td>
                              <span className="badge bg-purple">
                                Work in Progress
                              </span>
                            </td>
                            <td>Adminto admin</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Adminto Admin v1.3</td>
                            <td>01/01/2017</td>
                            <td>31/05/2017</td>
                            <td>
                              <span className="badge bg-warning">
                                Coming soon
                              </span>
                            </td>
                            <td>Coderthemes</td>
                          </tr>

                          <tr>
                            <td>6</td>
                            <td>Adminto Admin v1.3</td>
                            <td>01/01/2017</td>
                            <td>31/05/2017</td>
                            <td>
                              <span className="badge bg-primary">
                                Coming soon
                              </span>
                            </td>
                            <td>Adminto admin</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
