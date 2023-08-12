import user from "../assets/images/users/user-1.jpg";
import { logout} from "../actions/auth";
import user4 from "../assets/images/users/user-4.jpg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Component } from 'react';

class TopNavMenu extends Component {
  handleLogout = () => {
    localStorage.removeItem("token");
    this.props.dispatch(logout());
  };
  render() {
    const {auth}=this.props;
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
          {!auth.isLoggedIn&&<Link className="btn btn-outline-warning" to="/login ">
            Login
          </Link>}
          {auth.isLoggedIn&&<span className="btn btn-outline-warning" onClick={this.handleLogout}>
            Logout
          </span>}
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
            <img src={"http://localhost:8000"+auth.user.avatar} className="rounded-circle" />
            <span className="pro-user-name ms-1">
              Your Profile
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
  }
}


function mapstatetoprops(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapstatetoprops)(TopNavMenu);