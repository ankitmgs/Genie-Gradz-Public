import React, { useState } from "react";
import user from "../../assets/images/users/user-1.jpg";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const TutorSideBar = () => {
  return (
    <div>
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
                style={{
                  height: "100%",
                  overflow: "hidden scroll",
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                <div
                  className="simplebar-content"
                  style={{ paddingTop: "40px" }}
                >
                  <div className="user-box text-center">
                    <img
                      src={user}
                      alt="user-img"
                      title="Mat Helme"
                      className="rounded-circle img-thumbnail avatar-md"
                    />
                    <div className="dropdown">
                      <Link
                        to="/profile"
                        className="user-name dropdown-toggle h5 mt-2 mb-1 d-block"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Tutor
                      </Link>
                      <div className="dropdown-menu user-pro-dropdown">
                        <Link to="#" className="dropdown-item notify-item">
                          <i className="fe-user me-1"></i>
                          <span>My Account</span>
                        </Link>

                        <Link to="#" className="dropdown-item notify-item">
                          <i className="fe-settings me-1"></i>
                          <span>Settings</span>
                        </Link>

                        <Link to="#" className="dropdown-item notify-item">
                          <i className="fe-lock me-1"></i>
                          <span>Lock Screen</span>
                        </Link>

                        <Link to="#" className="dropdown-item notify-item">
                          <i className="fe-log-out me-1"></i>
                          <span>Logout</span>
                        </Link>
                      </div>
                    </div>

                    <p className="text-muted left-user-info">Tutor Pannel</p>

                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link to="#" className="text-muted left-user-info">
                          <i className="mdi mdi-cog"></i>
                        </Link>
                      </li>

                      <li className="list-inline-item">
                        <Link to="#">
                          <i className="mdi mdi-power"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div id="sidebar-menu" className="show">
                    <ul id="side-menu">
                      <li className="menu-title">Navigation</li>

                      <li className="menuitem-active">
                        <Link to="/tutor/dashboard" className="active">
                          <i className="mdi mdi-view-dashboard-outline"></i>
                          <span className="badge bg-success rounded-pill float-end">
                            9+
                          </span>
                          <span>Tutor Dashboard </span>
                        </Link>
                      </li>

                      <li className="menu-title mt-2">Tutor Side Pannel</li>

                      <li>
                        <Link to="/tutor/Sechedule">
                          <Icon icon="fluent:certificate-24-regular" />
                          <span> Sechedule a class </span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/tutor/lecture">
                          <i className="mdi mdi-calendar-blank-outline"></i>
                          <span>Add a recorded lecture </span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/tutor/notes">
                          <i className="mdi mdi-forum-outline"></i>
                          <span className="text-center">
                            Notes and Assignment
                          </span>
                        </Link>
                      </li>
                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header>
                            <i
                              className="mdi mdi-email-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Add Project
                          </Accordion.Header>

                          <Accordion.Body>
                            <Link to="/project">New Project</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            <Link to="/project">Update Existing one</Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        {/* <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-clipboard-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Tasks
                          </Accordion.Header>
                          <Accordion.Body>
                            {" "}
                            <Link to="/kanbanboard">Kanban Board</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="/details">Details</Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <li>
                        <Link to="/project">
                          <i className="mdi mdi-briefcase-variant-outline"></i>
                          <span> Projects </span>
                        </Link>
                      </li>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-book-open-page-variant-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Tasks
                          </Accordion.Header>
                          <Accordion.Body>
                            {" "}
                            <Link to="memberlist">Member List</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="/profile">Profile</Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <li className="menu-title mt-2">Custom</li>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-account-multiple-plus-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Auth Pages
                          </Accordion.Header>
                          <Accordion.Body>
                            {" "}
                            <Link to="/login">Login</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="/register">Register</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="/recoverpassword">Recover Password</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="/lockscreen">Lock Screen</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="/confirmmail">Confirm Mail</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="#">Logout</Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-file-multiple-outline"
                              style={{ marginRight: "1rem" }}
                            />
                            Extra Pages
                          </Accordion.Header>
                          <Accordion.Body>
                            {" "}
                            <Link to="#">Stater</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="#">Pricing</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="#">Timeline</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            {" "}
                            <Link to="#">Invoice</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            <Link to="#">FAQs</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            <Link to="#">Gallery</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            <Link to="#">Error 404</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            <Link to="#">Error 505</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            <Link to="#">Maintainance</Link>
                          </Accordion.Body>
                          <Accordion.Body>
                            <Link to="#">Coming Soon</Link>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-dock-window"
                              style={{ marginRight: "1rem" }}
                            />
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
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-briefcase-outline"
                              style={{ marginRight: "1rem" }}
                            />
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
                        <Link to="widgets.html">
                          <i className="mdi mdi-gift-outline"></i>
                          <span> Widgets </span>
                        </Link>
                      </li>

                      <li>
                        <Link to="#sidebarExtendedui" data-bs-toggle="collapse">
                          <i className="mdi mdi-layers-outline"></i>
                          <span className="badge bg-info float-end">Hot</span>
                          <span> Extended UI </span>
                        </Link>
                        <div className="collapse" id="sidebarExtendedui">
                          <ul className="nav-second-level">
                            <li>
                              <Link to="extended-range-slider.html">
                                Range Slider
                              </Link>
                            </li>
                            <li>
                              <Link to="extended-sweet-alert.html">
                                Sweet Alert
                              </Link>
                            </li>
                            <li>
                              <Link to="extended-draggable-cards.html">
                                Draggable Cards
                              </Link>
                            </li>
                            <li>
                              <Link to="extended-tour.html">Tour Page</Link>
                            </li>
                            <li>
                              <Link to="extended-notification.html">
                                Notification
                              </Link>
                            </li>
                            <li>
                              <Link to="extended-treeview.html">Tree View</Link>
                            </li>
                          </ul>
                        </div>
                      </li>

                      <Accordion flush>
                        <Accordion.Item
                          eventKey="0"
                          style={{ backgroundColor: "white" }}
                        >
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-shield-outline"
                              style={{ marginRight: "1rem" }}
                            />
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
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-texture"
                              style={{ marginRight: "1rem" }}
                            />
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
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-table"
                              style={{ marginRight: "1rem" }}
                            />
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
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-chart-donut-variant"
                              style={{ marginRight: "1rem" }}
                            />
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
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-map-outline"
                              style={{ marginRight: "1rem" }}
                            />
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
                          <Accordion.Header
                            style={{ backgroundColor: "white" }}
                          >
                            <i
                              className="mdi mdi-share-variant"
                              style={{ marginRight: "1rem" }}
                            />
                            Multi Level
                          </Accordion.Header>
                          <Accordion.Body>Second Level</Accordion.Body>
                          <Accordion.Body>Third Level</Accordion.Body>
                        </Accordion.Item> */}
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
  );
};

export default TutorSideBar;
