import React, { Component } from "react";
import { getProjectList } from "../actions/auth";
import { connect } from "react-redux";

class ProjectAcc2 extends Component {
  componentDidMount() {
    console.log("Project");
    this.props.dispatch(getProjectList(this.props.auth.user._id));
  }
  render() {
    const projects = this.props.auth.projects;
    return (
      <div>
        <div className="card mt-4" style={{ height: "30rem" }}>
          <div className="card-body">
            <h4>Project Accomplished 2</h4>
            <div
              className="scrollable"
              style={{ overflowY: "auto", maxHeight: "400px" }}
            >
              {projects?.map((project) => {
                return (
                  <div
                    className="card mt-4"
                    style={{ backgroundColor: "#f7f6f9" }}
                  >
                    <div className="card-body">
                      <div className="d-flex flex-row">
                        <i className="fa-solid fa-circle fa-4x" />
                        <h4 className="" style={{ marginLeft: "2rem" }}>
                          {project.name}
                        </h4>
                      </div>
                      <h6 className="text-muted mt-2">{project.description}</h6>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${project.completed}` }}
                          aria-valuenow={`${project.completed}`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {project.completed}%
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default connect(mapstatetoprops)(ProjectAcc2);
