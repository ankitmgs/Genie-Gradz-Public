import React from "react";

const AnalyticsSales = (props) => {
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

          <h4 className="header-title mt-0 mb-3">{props.name}</h4>

          <div className="widget-box-2">
            <div className="widget-detail-2 text-end">
              <span className="badge bg-success rounded-pill float-start mt-3">
                32% <i className="mdi mdi-trending-up"></i>{" "}
              </span>
              <h2 className="fw-normal mb-1"> {props.number} </h2>
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
  );
};

export default AnalyticsSales;
