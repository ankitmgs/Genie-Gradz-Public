import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
const NotesComponent = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="card-structure mb-4">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className=" mb-3 "
          style={{ maxWidth: "40rem" }}
        >
          <i class="fa-solid fa-circle-user fa-3x float-start py-2 px-2"></i>

          <div className="">
            <p className="py-2 ">
              <b>{props.author} </b>posted a new Assignment as well as notes
              <small class="text-muted float-end">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
          <div>
            <Collapse in={open}>
              <div id="example-collapse-text " className="pdf-container">
                <div className=" justify-content-center my-3 pdf">
                  <a
                    className=""
                    target="_blank"
                    aria-label="Attachment: PDF: Physics 3rd paper 6th sem.pdf"
                    jsaction="LWntbc"
                    href="https://drive.google.com/file/d/1KzgEhtnF1wGO0M_FQOvP9JIJuMaELQMr/view?usp=drive_web&amp;authuser=0"
                    title={props.pdfTitle}
                    data-focus-id="hSRGPd-auswjd-1KzgEhtnF1wGO0M_FQOvP9JIJuMaELQMr-https://drive.google.com/file/d/1KzgEhtnF1wGO0M_FQOvP9JIJuMaELQMr/view?usp=drive_web&amp;authuser=0"
                    data-attachment-id="1KzgEhtnF1wGO0M_FQOvP9JIJuMaELQMr"
                  >
                    <div>
                      <i className="fa fa-clipboard-list fa-3x float-start  mx-auto pe-4"></i>
                    </div>
                    <div>
                      <div>
                        <p>{props.pdfTitle}</p>
                      </div>
                      <div>
                        <div>PDF</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesComponent;
