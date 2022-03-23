import { Button } from "@mui/material";
import {createPost} from "../actions/auth";

import React, { Component } from 'react';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state={
      postMessage:'post'
    }
  }
  handlePost = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const payload = new FormData();
    payload.append("avatar", formData.get("avatar"));
    payload.append("content", formData.get("content"));
    payload.append("userId", this.props.user._id);
    this.props.dispatch(createPost(payload));
   
    this.setState({
      postMessage:'posted'
    })
  };
  render() {
    return (
      <div>
      <div>
        <h3 className="mb-5">Create New Post</h3>
      </div>
      <form
        id="new-post-form"
        method="POST"
        encType="multipart/form-data"
        onSubmit={this.handlePost}
      >
        <input name="userId" value={this.props.user._id} hidden />
        <div class="mb-3">
          <label class="form-label" style={{ fontWeight: "700" }}>
            Upload Media
          </label>
          <input
            class="form-control"
            name="avatar"
            type="file"
            accept="image/*,video/*"
            multiple
          />
        </div>
        <div class="mb-3">
          <label class="form-label" style={{ fontWeight: "700" }}>
            Description
          </label>
          <textarea
            class="form-control"
            rows="4"
            name="content"
            placeholder="Enter Description"
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" variant="contained" className="w-100 post-button">
            {this.state.postMessage}
          </button>
        </div>
      </form>
    </div>
    );
  }
}

export default CreatePost;

