import React, { useState } from "react";
import { Link } from "react-router-dom";
import config from '../config.json';
import pinkbox from "../assets/rectanglepink - Copy.png"
import '../css/Appoint.css';
import Form from 'react-bootstrap/Form';
import pop from '../assets/popupimg.png';

const baseUrl = config.base_url;

export default function Appointments() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [availability, setAvailable] = useState("");
    const [userRole, setUserRole] = useState("");
    const [showPopup, setShowPopup] = useState(false);


    const setEmailToLocalStorage = (email) => {
        localStorage.setItem("email", email);
      };

      const handleEmailChange = (e) => {
        setEmailToLocalStorage(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date || !time || !availability || !userRole) {
            alert("Please fill out all fields");
            return;
        }
        setShowPopup(true);
        console.log(date,time,availability,userRole);
        const email = localStorage.getItem("email");
        fetch(`${baseUrl}/appointinfo`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            date,
            time,
            availability,
            userRole,
          }),
        })

    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="auth-wrapper" >
            <img className="img100-signup" src={pinkbox} alt="banner image 1" />
            <div className="auth-inner">
                <form onSubmit={handleSubmit}>
                    <p className="signup-p1">Confirm Booking</p>
                    <hr />
                    <div className="register-as1">
                        Preferred Medium
                    </div>
                    <div className="connect">
                        <input
                            type="radio"
                            name="UserRole"
                            value="Call"
                            onChange={(e) => setUserRole(e.target.value)}
                        />
                        Call
                        <input
                            type="radio"
                            name="UserRole"
                            value="Chat"
                            onChange={(e) => setUserRole(e.target.value)}
                        />
                        Chat
                        <input
                            type="radio"
                            name="UserRole"
                            value="Video"
                            onChange={(e) => setUserRole(e.target.value)}
                        />
                        Video Call
                    </div>

                    <div className="mb-3 signup-p2 ">
                        <label>Date</label>
                        <input
                            type="date"
                            className="form-control d-flex justify-content-between"
                            placeholder="dd--mm--yyyy"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 signup-p2">
                        <label>Time Slots</label>
                        <Form.Select aria-label="Default select example" className="form-control" onChange={(e) => setTime(e.target.value)}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>

                    <div className="mb-3 signup-p2">
                        <label>Availability</label>
                        <Form.Select aria-label="Default select example" className="form-control" onChange={(e) => setAvailable(e.target.value)}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>

                    <div>
                        <button type="submit" className="d-grid1 ">
                            Confirm Session
                        </button>
                    </div>
                    <p className="appoint-text">
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
                </form>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p className="popup-content_a">Session Confirmed! </p>
                        <p className="popup-content_b">Let’s Talk It Out</p>
                        <img src={pop} className="popup-content_c"/>
                        <p className="popup-content_d">Let’s get Started</p>
                        <Link to='/userdetails'><button>Go back to homepage</button></Link>
                    </div>
                </div>
            )}
        </div>
    );
}
