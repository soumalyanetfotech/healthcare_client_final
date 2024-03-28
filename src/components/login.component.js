import React, { Component } from 'react';
import { toast } from 'react-toastify';
import config from '../config.json';
import pinkbox  from "../assets/rectanglepink - Copy.png"
import '../css/login.css'

const baseUrl = config.base_url;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: "" // New state for error message
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      toast.error("Please fill out all fields");
      return;
    }
    fetch(`${baseUrl}/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "ok") {
        const { role, token1, fname, lname, email } = data;
        toast.success(`${role} Login successful`);
        window.localStorage.setItem("token", token1);
        window.localStorage.setItem("fname", fname);
        window.localStorage.setItem("lname", lname);
        window.localStorage.setItem("email", email);
        window.localStorage.setItem("role", role);
        window.localStorage.setItem("loggedIn", true);
        if (role === "Admin") {
          window.location.href = "./adminhome";
        } else if (role === "User") {
          window.location.href = "./userdetails";
        }
        else if (role === "Expert") {
          window.location.href = "./patient";
        }
      } else {
        if (data.message === "Invalid email") {
          toast.error("Invalid email");
        } else if (data.message === "Invalid password") {
          toast.error("Invalid password");
        } else {
          this.setState({ errorMessage: "Invalid email or password" });
        }
      }
    })
    .catch(error => {
      console.error('Error:', error);
      this.setState({ errorMessage: "Network error. Please try again later." });
    });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="auth-wrapper-login">
        <img class="img100-login" src={pinkbox} alt="banner image 1" />

        <div className="auth-inner-login" >
          <form onSubmit={this.handleSubmit}>
            <p className="login-p1">Sign In</p>
            <hr/>

            <div className="mb-3 login-p2">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="mb-3 login-p2">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
            {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary custom-btn-login">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right" style={{ fontSize: '15px' }}>
              Forgot <a href="./reset" style={{ fontSize: '15px' }}>password?</a>
            </p>
          </form>
        </div>
      </div>
    )
  }
}
