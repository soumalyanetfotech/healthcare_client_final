
import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Add this line to import faUserPlus icon
import { useNavigate } from "react-router-dom";
import config from '../config.json';

const baseUrl = config.base_url;

export default function UserHome() {
    const navigate = useNavigate();
    const fname=localStorage.getItem("fname");
    const lname=localStorage.getItem("lname");
    const email=localStorage.getItem("email");
    const [userData,setUserData]=useState("");
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
useEffect(()=>{
    fetch(`${baseUrl}`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })

    .then((res) => res.json())
      .then((data) =>{
        setUserData(data.data);
        console.log(data);

      });
},[]);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{width:"auto"}}>
        <FontAwesomeIcon icon={faUserPlus} onClick={()=>navigate("/updateUser",{state:userData})}/>
        <div>
         Name <h1>{fname}{lname}</h1>
          Email <h1>{email}</h1>
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
