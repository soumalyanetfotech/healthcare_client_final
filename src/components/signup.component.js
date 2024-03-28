import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from '../config.json';
import pinkbox  from "../assets/rectanglepink - Copy.png"
import '../css/signup.css';

const baseUrl = config.base_url;

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fname || !lname || !email || !password || !userType) {
      alert("Please fill out all fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError("Invalid email address");
      return;
    } else {
      setEmailError("");
    }

    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    } else {
      setPasswordError("");
    }

    console.log(fname, lname, email, password);
    fetch(`${baseUrl}/register`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
        userType,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Registration Successful");
          if (userType === "User") {
            window.location.href = "/basic";
          } else if (userType === "Expert") {
            window.location.href = `/expert/${fname}/${lname}/${email}`; // Redirect expert to login page
          }
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div className="auth-wrapper" >
      <img class="img100-signup" src={pinkbox} alt="banner image 1" />
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <p className="signup-p1">Sign Up</p>
          <hr/>
          <div className="register-as">
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            User
            <input
              type="radio"
              name="UserType"
              value="Expert"
              onChange={(e) => setUserType(e.target.value)}
            />
            Expert
          </div>

          <div className="mb-3 signup-p2">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name(or nickname)"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3 signup-p2">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className={`form-control ${emailError ? 'is-invalid' : ''}`} // Add 'is-invalid' class if email is invalid
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && (
              <div className="invalid-feedback">{emailError}</div>
            )}
          </div>

          <div className="mb-3 signup-p2">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${passwordError ? "is-invalid" : ""}`}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
