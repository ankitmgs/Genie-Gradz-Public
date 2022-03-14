import React from "react";
import Course from "./Classes/Course";

const EnrolledClasses = (props) => {
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
            >
            </a> */}
              <i className="mdi mdi-dots-vertical"></i>
          </div>
          <h4 className="header-title mt-0">{props.name}</h4>
          <div className="list-group mt-3 enrolled ">
            <Course
              title="Complete Python Course"
              icon="python"
              color="dodgeblue"
              content="This course complete the basic of python "
              author="Amit Pant"
            />
            <Course
              title="Complete Javascript Course is here"
              icon="js"
              color="yellow"
              content="This course complete the basic of python "
              author="shivam khotari"
            />
            <Course
              title="Blockchain Developer"
              icon="ethereum"
              content="This course complete Blockchain development web-3.0 "
              author="Prajwal karakoti"
            />

            <Course
              title="Intro mongodb Course"
              icon="node-js"
              color="lightgreen"
              content="This course complete the basic of Data base "
              author="Sachin Aswal"
            />
            <Course
              title="React Course Zero to Hero.."
              icon="react"
              color="blue"
              content="This course complete the basic of python "
              author="shivam khotari"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledClasses;
