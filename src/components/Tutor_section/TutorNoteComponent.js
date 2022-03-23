import React, { useState } from "react";
// import { Collapse } from "react-bootstrap";

const TutorNoteComponent = (props) => {
  const handleDeleteFunc = () => {
    console.log("delete");
  };
  return (
    <>
      <div className="accordion  mb-4" id="myAccordion ">
        <div
          className="accordion-item  notes "
          style={{ borderRadius: "10px" }}
        >
          <h2 className="accordion-header" id={`heading${props.id}`}>
            <button
              style={{ borderRadius: "10px" }}
              type="button"
              className="accordion-button collapsed note "
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${props.id}`}
            >
              <i className="fa-solid fa-circle-user fa-3x px-2"></i>
              <p>
                <b>{props.author} </b>just posted notes on java zero to hero
                course
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </p>
            </button>
          </h2>
          <div
            id={`collapse${props.id}`}
            class="accordion-collapse collapse"
            data-bs-parent="#myAccordion"
          >
            <div class="card-body">
              <div class="card-structure mx-4 ">
                <div>
                  <div className="d-flex ">
                    <i className="fa-solid fa-book fa-2x px-3"></i>
                    <div>
                      <a
                        className="assignment  "
                        target="_blank"
                        aria-label="Attachment: PDF: CamScanner 10-24-2021 21.42.pdf"
                        jsaction="LWntbc"
                        href="https://drive.google.com/file/d/1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH/view?usp=drive_web&amp;authuser=0"
                        title="CamScanner 10-24-2021 21.42.pdf"
                        data-focus-id="hSRGPd-auswjd-1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH-https://drive.google.com/file/d/1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH/view?usp=drive_web&amp;authuser=0"
                        data-attachment-id="1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH"
                      >
                        {props.pdfTitle}
                      </a>
                      <div>
                        <div>PDF</div>
                      </div>
                    </div>
                    <span
                      style={{
                        color: "red",
                        fontSize: "22px",
                        position: "relative",
                        left: "200px",
                        cursor: "pointer",
                      }}
                    >
                      <i
                        className="fa-solid fa-trash"
                        onClick={handleDeleteFunc}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorNoteComponent;
