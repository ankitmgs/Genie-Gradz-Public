import { Button } from "@mui/material";
import React from "react";

const CreatePost = () => {
  return (
    <div>
      <div>
        <h3 className="mb-5">Create New Post</h3>
      </div>
      <div class="mb-3">
        <label class="form-label" style={{ fontWeight: "700" }}>
          Upload Media
        </label>
        <input
          class="form-control"
          type="file"
          accept="image/*,video/*"
          multiple
        />
      </div>
      <div class="mb-3">
        <label class="form-label" style={{fontWeight: "700"}}>
          Description
        </label>
        <textarea
          class="form-control"
          rows="4"
          placeholder="Enter Description"
        />
      </div>
      <div style={{textAlign: "center"}}>
      <Button variant="contained" className="w-100">Post</Button>
      </div>
    </div>
  );
};

export default CreatePost;
