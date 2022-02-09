import React from "react";

const RevenueStats = (props) => {
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

          <h4 className="header-title mt-0 mb-4">{props.name}</h4>

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
              <h2 className="fw-normal pt-2 mb-1"> {props.number} </h2>
              <p className="text-muted mb-1">Revenue today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueStats;
