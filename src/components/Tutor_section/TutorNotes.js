import React, { useState } from "react";
import TutorSideBar from "./TutorSideBar";
import TutorNoteComponent from "./TutorNoteComponent";
import axios from "axios";
const Notes = () => {
  const [showSideBar, setSidebar] = useState(true);
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:3000/uploadFile";
    const formData = new FormData();
    console.log(file);
    formData.append("file", file);
    formData.append("fileName", file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
  }
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
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Notes;
