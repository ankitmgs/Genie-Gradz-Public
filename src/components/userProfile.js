import React, { Component } from "react";
import "../assets/css/userProfile.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RoyalCollection from "./RoyalCollection";
import UserProfileImageTab from "./UserProfileImageTab";
import UserProfileVideoTab from "./UserProfileVideoTab";
import Modal from "react-modal";
import FollowersModal from "./FollowersModal";
import FollowingModal from "./FollowingModal";
import { Button } from "@mui/material";
import CreatePost from "./CreatePost";
import { connect } from "react-redux";
import { fetchUser } from "../actions/auth";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

class userProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      value: 0,
      followersmodelIsOpen: false,
      followingmodelIsOpen: false,
      postmodelIsOpen: false,
    };
  }

  async componentDidMount() {
    // console.log(this.props.auth.user._id);
    // await this.props.dispatch(fetchUser(this.props.auth.user._id));
  }

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      value: index,
    });
  };
  handlePostModelOpen = () => {
    this.setState({
      postmodelIsOpen: true,
    });
  };
  handlePostModelClose = () => {
    this.setState({
      postmodelIsOpen: false,
    });
  };
  handleFollowersModelOpen = () => {
    this.setState({
      followersmodelIsOpen: true,
    });
  };
  handleFollowersModelClose = () => {
    this.setState({
      followersmodelIsOpen: false,
    });
  };
  handleFollowingModelOpen = () => {
    this.setState({
      followingmodelIsOpen: true,
    });
  };
  handleFollowingModelClose = () => {
    this.setState({
      followingmodelIsOpen: false,
    });
  };

  render() {
    const user = this.props.auth.user;
    const posts = this.props.auth.user.posts;

    if (user.following === undefined) {
      return <div>Loading...</div>;
    } else
      return (
        <div>
          <div class="ec ed ee ef eg" style={{ backgroundColor: "white" }}>
            <div class="el em cq af en ag eo ep eq">
              <div class="ae ap aq ar as at au av">
                <div data-baseweb="block" class="er">
                  <img
                    src={"http://localhost:8000" + user.avatar}
                    alt="Lucinda Kerr"
                    class="es et c9 cp eu ev ew ex"
                  />
                </div>
                <div class="af ey ax ez f0 f1 f2 f3 er f4">
                  <div data-baseweb="block" class="">
                    <h3 class="bj f5 ds f6 e0 f7 f8">{user.username}</h3>
                    <p class="bj bk bl bm be">Art &amp; Social Activist</p>
                  </div>
                  <Button
                    variant="contained"
                    onClick={this.handlePostModelOpen}
                  >
                    Create Post
                  </Button>
                  <Modal
                    className="mx-auto"
                    isOpen={this.state.postmodelIsOpen}
                    onRequestClose={this.handlePostModelClose}
                    style={{
                      overlay: { zIndex: "1000" },
                      content: {
                        backgroundColor: "white",
                        position: "absolute",
                        top: "40px",
                        left: "40px",
                        right: "40px",
                        bottom: "40px",
                        border: "1px solid #ccc",
                        overflow: "auto",
                        borderRadius: "4px",
                        outline: "none",
                        padding: "20px",
                        maxWidth: "500px",
                        margin: "16px",
                        overflowX: "hidden",
                      },
                    }}
                  >
                    <button
                      className="btn btn-primary float-end"
                      onClick={this.handlePostModelClose}
                    >
                      Close
                    </button>
                    <CreatePost />
                  </Modal>
                  <ul class="profile-menu af f9">
                    <li
                      class="active b7 fa fb b0 be bj bk bl bm bi fc bd bx"
                      style={{
                        fontFamily:
                          "system-ui, Helvetica Neue, Helvetica, Arial, sans-serif",
                      }}
                    >
                      Posts <strong class="e0">24</strong>
                    </li>
                    <li
                      class="b7 fa fb b0 be bj bk bl bm bi fc bd bx"
                      style={{
                        fontFamily:
                          "system-ui, Helvetica Neue, Helvetica, Arial, sans-serif",
                        fontWeight: "normal",
                      }}
                      onClick={this.handleFollowersModelOpen}
                    >
                      Followers{" "}
                      <strong class="e0">{user.followers.length}</strong>
                    </li>
                    <Modal
                      className="mx-auto"
                      isOpen={this.state.followersmodelIsOpen}
                      onRequestClose={this.handleFollowersModelClose}
                      style={{
                        overlay: { zIndex: "1000" },
                        content: {
                          backgroundColor: "white",
                          position: "absolute",
                          top: "40px",
                          left: "40px",
                          right: "40px",
                          bottom: "40px",
                          border: "1px solid #ccc",
                          overflow: "auto",
                          borderRadius: "4px",
                          outline: "none",
                          padding: "20px",
                          maxWidth: "500px",
                          margin: "16px",
                          overflowX: "hidden",
                        },
                      }}
                    >
                      <button
                        className="btn btn-primary float-end"
                        onClick={this.handleFollowersModelClose}
                      >
                        Close
                      </button>
                      <FollowersModal />
                    </Modal>
                    <li
                      class="b7 fa fb b0 be bj bk bl bm bi fc bd bx"
                      style={{
                        fontFamily:
                          "system-ui, Helvetica Neue, Helvetica, Arial, sans-serif",
                        fontWeight: "normal",
                      }}
                      onClick={this.handleFollowingModelOpen}
                    >
                      Following{" "}
                      <strong class="e0">{user.following.length}</strong>
                    </li>
                    <Modal
                      className="mx-auto"
                      isOpen={this.state.followingmodelIsOpen}
                      onRequestClose={this.handleFollowingModelClose}
                      style={{
                        overlay: { zIndex: "1000" },
                        content: {
                          backgroundColor: "white",
                          position: "absolute",
                          top: "40px",
                          left: "40px",
                          right: "40px",
                          bottom: "40px",
                          border: "1px solid #ccc",
                          overflow: "auto",
                          borderRadius: "4px",
                          outline: "none",
                          padding: "20px",
                          maxWidth: "500px",
                          margin: "16px",
                          overflowX: "hidden",
                        },
                      }}
                    >
                      <button
                        className="btn btn-primary float-end"
                        onClick={this.handleFollowingModelClose}
                      >
                        Close
                      </button>
                      <FollowingModal following={user.following} />
                    </Modal>
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
                <AppBar position="static">
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="none"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Images" {...a11yProps(0)} />
                    <Tab label="Videos" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={
                    this.state.theme.direction === "rtl" ? "x-reverse" : "x"
                  }
                  index={this.state.value}
                  onChangeIndex={this.handleChangeIndex}
                >
                  <TabPanel
                    value={this.state.value}
                    index={0}
                    dir={this.state.theme.direction}
                  >
                    <UserProfileImageTab posts={posts} />
                  </TabPanel>
                  <TabPanel
                    value={this.state.value}
                    index={1}
                    dir={this.state.theme.direction}
                  >
                    <UserProfileVideoTab />
                  </TabPanel>
                  <TabPanel
                    value={this.state.value}
                    index={2}
                    dir={this.state.theme.direction}
                  >
                    Item Three
                  </TabPanel>
                </SwipeableViews>
              </Box>
            </div>
          </div>
          <footer class="ae" style={{ backgroundColor: "white" }}>
            <div class="ae ap aq ar as at au av">
              <p class="ae eh ei be ej ek bj cd bl bm">
                Inst ©2022 Created by RedQ, Inc
              </p>
            </div>
          </footer>
        </div>
      );
  }
}

function mapstatetoprops(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapstatetoprops)(userProfile);
