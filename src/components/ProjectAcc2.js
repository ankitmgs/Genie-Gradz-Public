import React from "react";

const ProjectAcc2 = () => {
  return (
    <div>
      <div className="card mt-4" style={{ height: "30rem" }}>
        <div className="card-body">
          <h4>Project Accomplished 2</h4>
          <div
            className="scrollable"
            style={{ overflowY: "auto", maxHeight: "400px" }}
          >
            <div className="card mt-4" style={{ backgroundColor: "#f7f6f9" }}>
              <div className="card-body">
                <div className="d-flex flex-row">
                  <i class="fa-solid fa-circle fa-4x" />
                  <h4 className="" style={{ marginLeft: "2rem" }}>
                    Project 1 (Project Name)
                  </h4>
                </div>
                  <h6 className="text-muted mt-2">Sub Text</h6>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "55%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      55%
                    </div>
                  </div>
              </div>
            </div>
            <div className="card mt-4" style={{ backgroundColor: "#f7f6f9" }}>
              <div className="card-body">
                <div className="d-flex flex-row">
                  <i class="fa-solid fa-circle fa-4x" />
                  <h4 className="" style={{ marginLeft: "2rem" }}>
                    Project 2 (Project Name)
                  </h4>
                </div>
                  <h6 className="text-muted mt-2">Sub Text</h6>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "72%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      72%
                    </div>
                  </div>
              </div>
            </div>
            <div className="card mt-4" style={{ backgroundColor: "#f7f6f9" }}>
              <div className="card-body">
                <div className="d-flex flex-row">
                  <i class="fa-solid fa-circle fa-4x" />
                  <h4 className="" style={{ marginLeft: "2rem" }}>
                    Project 3 (Project Name)
                  </h4>
                </div>
                  <h6 className="text-muted mt-2">Sub Text</h6>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "93%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      93%
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAcc2;
