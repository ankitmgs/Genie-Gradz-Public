import React, { useState } from "react";
import TutorSideBar from "./TutorSideBar";
import TutorNoteComponent from "./TutorNoteComponent";

const Notes = () => {
  const [showSideBar, setSidebar] = useState(true);

  const [file, setFile] = useState([]);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    setSidebar(!showSideBar);
  };
  return (
    <>
      <div>
        <ul className={"list-unstyled topnav-menu topnav-menu-left mb-0"}>
          <li
            style={
              showSideBar ? { backgroundColor: "black", width: "240px " } : null
            }
          >
            <button className="bars disable-btn " onClick={handleClick}>
              <span style={{ fontSize: "10px", color: "Dodgerblue" }}>
                <i class="fa-solid fa-bars fa-2x"></i>
              </span>
            </button>
          </li>
        </ul>

        {showSideBar ? (
          <div className="responsiveSidebar float-start">
            <TutorSideBar />
          </div>
        ) : null}
        {/* end */}
      </div>
      <div>
        <h1 className="text-center">Notes and Assignment</h1>
        <div className="parent-container my-4 ">
          <div>
            <TutorNoteComponent
              pdfTitle="Python full course Zero to Hero"
              author="Akansha"
              id="One"
            />

            <TutorNoteComponent
              pdfTitle="Core java Notes basic to Advance "
              author="Sachin"
              id="Two"
            />
            <TutorNoteComponent
              pdfTitle="Advance java Notes basic to Advance "
              author="Lokesh Singh"
              id="Three"
            />
            <TutorNoteComponent
              pdfTitle="Advance java Notes basic to Advance "
              author="Lokesh Singh"
            />
          </div>
        </div>
        <div className="text-center">
          {/* here our note uploaded */}
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <form method="post" action="#" id="#">
                  <div class="form-group files">
                    <input
                      type="file"
                      onChange={handleChange}
                      className="form-control"
                      multiple=""
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
