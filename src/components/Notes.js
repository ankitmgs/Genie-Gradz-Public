import React, { useState } from "react";
import SideBarMenu from "./SideBarMenu";

import NotesComponent from "./Notes/NotesComponent";
const Notes = () => {
  const [showSideBar, setSidebar] = useState(true);
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
            <SideBarMenu />
          </div>
        ) : null}
        {/* end */}
      </div>
      <div>
        <h1 className="text-center">Notes (pdf,ppt,worksheets)</h1>
        <div className="parent-container my-4 ">
          <div>
            <NotesComponent
              pdfTitle="Python full course Zero to Hero"
              author="Akansha"
              id="One"
            />

            <NotesComponent
              pdfTitle="Core java Notes basic to Advance "
              author="Sachin"
              id="Two"
            />
            <NotesComponent
              pdfTitle="Advance java Notes basic to Advance "
              author="Lokesh Singh"
              id="Three"
            />
            <NotesComponent
              pdfTitle="Advance java Notes basic to Advance "
              author="Lokesh Singh"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
