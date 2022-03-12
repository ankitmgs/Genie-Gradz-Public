import React, { Component } from "react";
import { getClassList } from "../actions/auth";
import Course from "./Classes/Course";
import { connect } from "react-redux";

class EnrolledClasses extends Component {
  componentDidMount() {
    this.props.dispatch(getClassList(this.props.auth.user._id));
  }
  render() {
    const classList = this.props.auth.classes;
    return (
      <div>
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
            </div>
            <h4 className="header-title mt-0">Enrolled Classes</h4>
            <div className="list-group mt-3 enrolled ">
              {classList?.map(
                ({ name, description, teacher: { firstName, lastName } }) => (
                  <Course
                    title={name}
                    icon="js"
                    color="yellow"
                    content={description}
                    author={`${firstName} ${lastName}`}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(EnrolledClasses);
