import React, { Component } from 'react'
import config from '../config.json';

const baseUrl = config.base_url;

export default class Login extends Component {
  constructor(props){
    super (props)
    this.state={
      email:"",
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const{email}=this.state;
    console.log(email);
    fetch(`${baseUrl}/forgot-password`,{
      method:"POST",
      crossDomain:true,
      headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
        email,
      }),
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userRegister");
      alert(data.status);
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Forgot Password</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e=>this.setState({email:e.target.value})}
          />
        </div>

        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign up</a>
        </p>
      </form>
    );
  }
}