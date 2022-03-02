import React, { useState } from "react";
// import { Collapse } from "react-bootstrap";

const NotesComponent = (props) => {
  return (
    <div class="accordion   mb-4" id="myAccordion ">
      <div class="accordion-item ">
        <h2 class="accordion-header" id={`heading${props.id}`}>
          <button
            type="button"
            class="accordion-button collapsed note "
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${props.id}`}
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
          <div class="card-body">
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

      {/*  <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            type="button"
            class="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
          >
            2. What is Bootstrap?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse show"
          data-bs-parent="#myAccordion"
        >
          <div class="card-body">
            <p>
              Bootstrap is a sleek, intuitive, and powerful front-end framework
              for faster and easier web development. It is a collection of CSS
              and HTML conventions.{" "}
              <a
                href="https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/"
                target="_blank"
              >
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </div>
       <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            type="button"
            class="accordion-button collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
          >
            3. What is CSS?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          data-bs-parent="#myAccordion"
        >
          <div class="card-body">
            <p>
              CSS stands for Cascading Style Sheet. CSS allows you to specify
              various style properties for a given HTML element such as colors,
              backgrounds, fonts etc.{" "}
              <a
                href="https://www.tutorialrepublic.com/css-tutorial/"
                target="_blank"
              >
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </div> */}
    </div>
    // <div className="accordion" id="accordionExample">
    //   <div className="accordion-item">
    //     <h2 className="accordion-header" id="headingOne">
    //       <button
    //         className="accordion-button"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseOne"
    //         aria-expanded="true"
    //         aria-controls="collapseOne"
    //       >
    //         Accordion Item #1
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseOne"
    //       className="accordion-collapse collapse show"
    //       aria-labelledby="headingOne"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div className="accordion-body">
    //         <strong>This is the first item's accordion body.</strong> It is
    //         shown by default, until the collapse plugin adds the appropriate
    //         classNamees that we use to style each element. These classNamees
    //         control the overall appearance, as well as the showing and hiding
    //         via CSS transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div className="accordion-item">
    //     <h2 className="accordion-header" id="headingTwo">
    //       <button
    //         className="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseTwo"
    //         aria-expanded="false"
    //         aria-controls="collapseTwo"
    //       >
    //         Accordion Item #2
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseTwo"
    //       className="accordion-collapse collapse"
    //       aria-labelledby="headingTwo"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div className="accordion-body">
    //         <strong>This is the second item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classNamees that we use to style each element. These classNamees
    //         control the overall appearance, as well as the showing and hiding
    //         via CSS transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    //   <div className="accordion-item">
    //     <h2 className="accordion-header" id="headingThree">
    //       <button
    //         className="accordion-button collapsed"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#collapseThree"
    //         aria-expanded="false"
    //         aria-controls="collapseThree"
    //       >
    //         Accordion Item #3
    //       </button>
    //     </h2>
    //     <div
    //       id="collapseThree"
    //       className="accordion-collapse collapse"
    //       aria-labelledby="headingThree"
    //       data-bs-parent="#accordionExample"
    //     >
    //       <div className="accordion-body">
    //         <strong>This is the third item's accordion body.</strong> It is
    //         hidden by default, until the collapse plugin adds the appropriate
    //         classNamees that we use to style each element. These classNamees
    //         control the overall appearance, as well as the showing and hiding
    //         via CSS transitions. You can modify any of this with custom CSS or
    //         overriding our default variables. It's also worth noting that just
    //         about any HTML can go within the <code>.accordion-body</code>,
    //         though the transition does limit overflow.
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NotesComponent;
