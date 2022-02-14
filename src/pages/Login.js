import { Card, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Login.css";

const Signup = () => {
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };

  return (
    <div className="top">
      <Container>
        <div className="col-md-6 mx-auto">
          <Card className="card">
            <div className="signin-txt" style={{ textAlign: "center" }}>
              SIGN IN
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ margin: "1%" }}>
                <label className="email-label">Email address</label>
                <div style={{ textAlign: "center" }}>
                  <input
                    className="email-input"
                    type="text"
                    name="email :"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <label className="password-label">Password</label>
                <div style={{ textAlign: "center" }}>
                  <input
                    className="password-input"
                    type="password"
                    name="password :"
                    placeholder="Enter Your Password"
                    required
                  />
                </div>
                <input className="checkbox" type="checkbox" id="checkbox" />
                Remember me <br />
                <div style={{ textAlign: "center" }}>
                  <button className="login-btn" type="submit">
                    log In
                  </button>
                </div>
                <div
                  className=""
                  style={{
                    textAlign: "right",
                    marginRight: "3.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  Not Register Yet?<Link to="/register">Register</Link>
                </div>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
