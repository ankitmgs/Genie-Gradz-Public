import React, { Component } from 'react';

class FollowingModal extends Component {
  render() {
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
      {this.props.following.map((following)=> <li className="d-flex justify-content-sm-around justify-content-lg-between" style={{padding: "8px 0px 12px", listStyle: "none", alignItems: "center", display: "flex", overflowX: "hidden", paddingRight: "2rem"}}>
          <div>
            <img src={"http://localhost:8000" + following.avatar} style={{borderRadius: "50%", width: "56px"}} />
          <span style={{color: "black", fontSize: "16px", fontWeight: "500", margin: "0 10px"}}>{following.username}</span>
          </div>
          <button className="d-flex justify-content-end" style={{borderRadius: "30px", padding: "0 12px 0 12px", backgroundColor: "#eeeeee", border: "none", lineHeight: "2rem", fontSize: "medium"}}>Unfollow</button>
        </li>)}
       
        
      </ul>
  </div></div>
    );
  }
}

export default FollowingModal;
