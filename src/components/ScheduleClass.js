import React, { useState } from "react";
import { InlineWidget, PopupWidget } from "react-calendly";
import SideBarMenu from "./SideBarMenu";

const ScheduleClass = () => {
  const [showSideBar, setSidebar] = useState(true);
  const handleClick = () => {
    setSidebar(!showSideBar);
  };
  return (
    <div>
<<<<<<< HEAD
      
=======
>>>>>>> 8e71fc21e56e7b2efd6aba4879548b08099cf152
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
<<<<<<< HEAD
      {/* end */}
      
      {/* <InlineWidget url="https://calendly.com/guptankit33440/30min"/>
       */}
       <PopupWidget
        url="https://calendly.com/guptankit33440/30min"
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
=======
      <div className="calendly">
        <InlineWidget url="https://calendly.com/guptankit33440/30min" />
      </div>
>>>>>>> 8e71fc21e56e7b2efd6aba4879548b08099cf152
    </div>
  );
};

export default ScheduleClass;
