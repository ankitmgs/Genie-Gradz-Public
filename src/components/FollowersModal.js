// import '../assets/css/userProfile.css';
import React, { Component } from "react";
import { unfollow, follow } from "../actions/auth";
import { fetchUser } from "../actions/auth";
import { connect } from "react-redux";


class FollowersModal extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.auth.user._id));
  }
  
  handleFollow = (id) => {
    this.props.dispatch(follow(this.props.auth.user._id, id));
  };
  handleUnfollow = (id) => {
    this.props.dispatch(unfollow(this.props.auth.user._id, id));
  };
  checkIfUserIsFollowed = (id) => {
    const followers = this.props.auth.user.following;
    const index = followers.map((u) => u._id).indexOf(id);
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    const followers=this.props.auth.user.followers;
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

        <ul
          style={{
            paddingRight: "35px",
            width: "calc(100% + 35px)",
            overflowY: "scroll",
            maxHeight: "449px",
            overflow: "hidden",
          }}
        >
          {followers.map((follower) => (
            <li
              className="d-flex justify-content-sm-around justify-content-lg-between"
              style={{
                padding: "8px 0px 12px",
                listStyle: "none",
                alignItems: "center",
                display: "flex",
                overflowX: "hidden",
                paddingRight: "2rem",
              }}
            >
              <div>
                <img
                  src={"http://localhost:8000" + follower.avatar}
                  style={{ borderRadius: "50%", width: "56px" }}
                />
                <span
                  style={{
                    color: "black",
                    fontSize: "16px",
                    fontWeight: "500",
                    margin: "0 10px",
                  }}
                >
                  {follower.username}
                </span>
              </div>
              {!this.checkIfUserIsFollowed(follower._id) && (
                <button
                  className="d-flex justify-content-end"
                  style={{
                    borderRadius: "30px",
                    padding: "0 12px 0 12px",
                    backgroundColor: "#eeeeee",
                    border: "none",
                    lineHeight: "2rem",
                    fontSize: "medium",
                  }}
                  onClick={() => {
                    this.handleFollow(follower._id);
                  }}
                >
                  Follow
                </button>
              )}
              {this.checkIfUserIsFollowed(follower._id) && (
                <button
                  className="d-flex justify-content-end"
                  style={{
                    borderRadius: "30px",
                    padding: "0 12px 0 12px",
                    backgroundColor: "#eeeeee",
                    border: "none",
                    lineHeight: "2rem",
                    fontSize: "medium",
                  }}
                  onClick={() => {
                    this.handleUnfollow(follower._id);
                  }}
                >
                  
                    Unfollow
                 
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(FollowersModal);
