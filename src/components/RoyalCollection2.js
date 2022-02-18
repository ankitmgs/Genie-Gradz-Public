import React from "react";
import Course from "./Classes/Course";

const RoyalCollection2 = () => {
  return (
    <div>
      <div className="card  mt-4" style={{ height: "30rem" }}>
        <div className="card-body">
          <h4>Royal Collection 2</h4>
          <h2>Total Point Earn: 3,567</h2>
          <div
            className="scrollable"
            style={{ overflowY: "auto", maxHeight: "350px" }}
          >
            <div className="card mt-0" style={{ backgroundColor: "#f7f6f9" }}>
              <div className="card-body">
                <Course title="Complete Python Course" icon="python" />
                <div
                  className="mt-2"
                  style={{ marginLeft: "1rem", color: "gold" }}
                >
                  <i className="fa-solid fa-star fa-2xl" />
                  <i className="fa-solid fa-star fa-2xl" />
                  <i className="fa-solid fa-star fa-2xl" />
                  <i className="fa-solid fa-star-half fa-2xl" />
                </div>
                <div className="">
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mt-0 pb-3"
              style={{ backgroundColor: "#f7f6f9" }}
            >
              <div className="d-flex flex-row">
                <i
                  class="fa-brands fa-python fa-4x m-4"
                  style={{ color: "black" }}
                />
                <h5 className="mt-4">Complete Python Course</h5>
              </div>
              <div
                className=""
                style={{
                  color: "gold",
                  marginTop: "-3rem",
                  marginLeft: "7rem",
                }}
              >
                <i className="fa-solid fa-star fa-2xl" />
                <i className="fa-solid fa-star fa-2xl" />
                <i className="fa-solid fa-star fa-2xl" />
                <i className="fa-solid fa-star-half fa-2xl" />
              </div>
              <h6 className="text-muted mt-3" style={{ marginLeft: "2rem" }}>
                526 point left to complete 4 Star
              </h6>

              <div class="progress" style={{ margin: "0 2rem 0 2rem" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "45%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      45%
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoyalCollection2;
