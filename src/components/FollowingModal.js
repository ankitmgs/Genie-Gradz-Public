import React from 'react'

const FollowingModal = () => {
  return (
    <div>    <div
    style={{
      maxWidth: "500px",
      width: "30rem",
      marginTop: "2rem",
      fontSize: "30px",
      fontWeight: "500",
    }}
  >
    <h4 className='mb-3'>Following</h4>
    <ul style={{paddingRight: "35px", width: "calc(100% + 35px)", overflowY: "scroll", maxHeight: "449px", overflow: "hidden"}}>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Leo Grill</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden"}}>
          <div>
            <img src="	https://randomuser.me/api/portraits/women/44.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>June Cha</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/women/65.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Renee Sims</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/43.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Jonathan Cha</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/97.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Thomson Stock</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/women/26.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Vetti Seppanen</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>
        <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden"}}>
          <div>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>Leo Grill</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>
      </ul>
  </div></div>
  )
}

export default FollowingModal