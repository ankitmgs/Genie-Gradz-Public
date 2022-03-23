import React from "react";

const Student = () => {
  return (
    <div>
      <div className="card" style={{ height: "30.5rem" }}>
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

          <h4 className="header-title mt-0">Students</h4>
          <h1>Student Section inside tutor pannel</h1>
          {/* <div className="widget-chart text-center">
            <ReactApexChart
              options={object.options}
              series={object.series}
              type="radialBar"
              height={350}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Student;
