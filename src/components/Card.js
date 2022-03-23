import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            {/* <a
              href="#"
              className="dropdown-toggle arrow-none card-drop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            > */}
            {/* </a> */}
              <a style={{cursor: "pointer", color: "gray"}} href="#"><i className="mdi mdi-dots-vertical" /></a>
          </div>

          <h4 className="header-title mt-0 mb-4">{props.name}</h4>

          <div className="widget-chart-1">
            <div className="widget-chart-box-1 float-start" dir="ltr">
              <span style={{ color: props.iconColor }}>
                <i className={`fa-3x fa-solid fa-${props.icon}`}></i>
              </span>
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

export default Card;
