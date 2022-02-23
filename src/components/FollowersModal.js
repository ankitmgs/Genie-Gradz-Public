import React from "react";
// import '../assets/css/userProfile.css';

const FollowersModal = () => {
  return (
    <div
      style={{
        maxWidth: "500px",
        width: "30rem",
        marginTop: "2rem",
        fontSize: "30px",
        fontWeight: "500",
      }}
    >
      <h4 className="mb-3">Followers</h4>
      {/* <ul className="followers-list jx e8 jy jz k0">
        <li className="b7 af aw k1">
          <div className="af aw bj hd ds bm e0">
            <div data-baseweb="avatar" className="ch ci cj ck cl cm">
              <img
                alt="Leo Gill"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="ch ci cj ck cl ak k2 k3 cp"
                style={{ width: "56px" }}
              />
            </div>
            <span style={{ margin: "0px 10px", fontSize: "16px" }}>
              Leo Gill
            </span>
          </div>
          <button
            data-baseweb="button"
            className="az d3 aw cg d5 d6 d7 d8 d9 da db dc dd de df bf dg dh di dj b0 dk dl dm dn do dp dq bj bk ds dt k4 k5 k6 k7 bg bh dy dz e0 j8 j9 ja"
            style={{ borderRadius: "30px", marginLeft: "4rem" }}
          >
            Follow
          </button>
        </li>
      </ul> */}
      <ul style={{paddingRight: "35px", width: "calc(100% + 35px)", overflowY: "scroll", maxHeight: "449px", overflow: "hidden"}}>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Leo Grill</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Follow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src="	https://randomuser.me/api/portraits/women/44.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>June Cha</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Follow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/women/65.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Renee Sims</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Follow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/43.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Jonathan Cha</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Follow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/97.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Thomson Stock</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Follow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/women/26.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Vetti Seppanen</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Follow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Leo Grill</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Follow</button>
        </li>
      </ul>
    </div>
  );
};

export default FollowersModal;
