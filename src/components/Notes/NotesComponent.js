import React, { useState } from "react";
// import { Collapse } from "react-bootstrap";

const NotesComponent = (props) => {
  return (
    <div class="accordion notes   mb-4" id="myAccordion ">
      <div class="accordion-item   notes-item" style={{ borderRadius: "10px" }}>
        <h2 class="accordion-header" id={`heading${props.id}`}>
          <button
            type="button"
            class="accordion-button collapsed note "
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${props.id}`}
            style={{ borderRadius: "10px" }}
          >
            <i class="fa-solid fa-circle-user fa-3x px-2"></i>
            <p>
              <b>{props.author} </b>just posted notes on java zero to hero
              course
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </p>
          </button>
        </h2>
        <div
          id={`collapse${props.id}`}
          class="accordion-collapse collapse"
          data-bs-parent="#myAccordion"
        >
          <div class="card-body" style={{ borderRadius: "10px" }}>
            <div class="card-structure mx-4 ">
              <a
                class=""
                target="_blank"
                aria-label="Attachment: PDF: CamScanner 10-24-2021 21.42.pdf"
                jsaction="LWntbc"
                href="https://drive.google.com/file/d/1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH/view?usp=drive_web&amp;authuser=0"
                title="CamScanner 10-24-2021 21.42.pdf"
                data-focus-id="hSRGPd-auswjd-1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH-https://drive.google.com/file/d/1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH/view?usp=drive_web&amp;authuser=0"
                data-attachment-id="1rPV176RkX89Pv5iek7EsOaUH7s6PsFIH"
              >
                <div class="d-flex  ">
                  <i class="fa-solid fa-book fa-2x px-3"></i>
                  <div class="">
                    <div class="assignment">{props.pdfTitle}</div>
                    <div>
                      <div>PDF</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesComponent;
