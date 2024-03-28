import React, { Component, useEffect, useState } from "react";
import UserHome from './userHome'
import AdHome from './adminHome';
import config from '../config.json';

const baseUrl = config.base_url;

export default function UserDetails() {
  const [data, setData] = useState([]);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    getAllUser();
  }, []); 

  const token = localStorage.getItem("token");
  const role=localStorage.getItem("role");
  const fname=localStorage.getItem("fname");
  const lname=localStorage.getItem("lname");
  const email=localStorage.getItem("email");

  const getAllUser = () => {
    fetch(`${baseUrl}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((data) => {
      // console.log( role, ":Role");
      // console.log("Token:",token);
      setData({fname,email});
      console.log("Data",data);
      if (role == "Admin") {
                setAdmin(true);
      }
      // Handle response data
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
    });
  };
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  // const [userData, setUserData] = useState("");
  // const [admin, setAdmin] = useState(false);

  // useEffect(() => {
  //   fetch("${baseUrl}", {
  //     method: "GET",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     // body: JSON.stringify({
  //     //   token: window.localStorage.getItem("token"),
  //     //   fname: window.localStorage.getItem("fname"),
  //     //   email: window.localStorage.getItem("email"),
  //     // }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userData");
  //       // if (data.data.userType == "Admin") {
  //       //   setAdmin(true);
  //       // }

  //       setUserData(data.data);

  //       if (data.data == "token expired") {
  //         alert("Token expired login again");
  //         window.localStorage.clear();
  //         window.location.href = "./sign-in";
  //       }
  //     });
  // }, []);

  return (
    admin?<div>
    Name <h1>{fname}{lname}</h1>
     Email <h1>{email}</h1>
     <br />
     <button onClick={logOut} className="btn btn-primary">
       Log Out
     </button>
   </div>:<UserHome userData={data} />
  );
}