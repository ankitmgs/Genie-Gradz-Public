import React from "react";

const Course = (props) => {
  return (
    <div>
      <a
        href="#"
        className="list-group-item list-group-item-action d-flex  "
        aria-current="true"
      >
        <span style={{ fontSize: "3em", color: props.color }}>
          <i className={`fa-brands fa-${props.icon} mx-4`}></i>
        </span>
        <div>
          <div className="d-flex w-100 justify-content-between ">
            <h5 className="mb-1">{props.title}</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">{props.content}</p>
          <small className="text-muted">
            Created by-<b>{props.author}</b>
          </small>
        </div>
      </a>
    </div>
  );
};

export default Course;
