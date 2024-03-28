import { useEffect, useState } from "react";
import doc from "../assets/doc1.png";
import specialization from "../assets/Groupspecialization-logo.png";
import time from "../assets/IoTime.png";
import consultant from "../assets/manimage.png";
import greenwave from "../assets/greenwave.png";

import fb from "../assets/Group 11fb.png";
import insta from "../assets/Group 12insta.png";
import mail from "../assets/Group 14msg.png";
import Twitter from "../assets/Group 13twitter.png";

import "../css/Doctor.css";
import config from '../config.json';

import { Link, useParams } from 'react-router-dom';

const baseUrl = config.base_url;

export const Doctor = () => {
  const [filter, setFilter] = useState("");
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/getprofile`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleCard = (doctorId) => {
    const card = document.getElementById(doctorId);
    if (card) {
      card.classList.toggle("active");
    }
  };

  const options = [
    { value: 1, label: "all" },
    {
      value: 2,
      label: "Cardiologist",
    },
    {
      value: 3,
      label: "Pediatrician",
    },
    {
      value: 4,
      label: "Orthopedic Surgeon",
    },
    {
      value: 5,
      label: "Dermatologist",
    },
    {
      value: 6,
      label: "Neurologist",
    },
    {
      value: 7,
      label: "Psychiatrist",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleFilterInput = (event) => {
    console.log(event);
    setSelectedValue(event?.[0]);
  };

  const filterBySpecialization = (e) => {
    console.log(e);
  };
  return (
    <>
    <div className="heroo">
      <table>
        <tr>
          <td>
            <div className="hero-text_doctor">
              <p className="hero-text1_doctor">Meet Our Counselors</p>
              <p className="hero-text2_doctor">
                Our dedicated team of mental health professionals is here to
                provide support, guidance, and a listening ear. Whether you're
                dealing with anxiety, depression, or any other mental health
                concern, our counselors are ready to help you on your journey
                to well-being.
              </p>
            </div>
          </td>
          <td>
            <img src={consultant} alt="" className="herooimage" />
          </td>
        </tr>
      </table>
    </div>
  
    <img className="green" src={greenwave} alt="" />
    <p className="con-text1">Meet Our Doctors</p>
    <div className="consultant-body" id="consultant">
      {selectedValue?.label === "Dermatologist" ||
      selectedValue?.label === "all" ? (
        <div className="consultant-body" id="doctor6">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="profile-card">
              <div
                className="profile-header"
                onClick={() => toggleCard(`doctor${doctor.id}`)}
              >
                <img src={doctor.imgUrl} alt="Doctor Avatar" className="avatar" />
                <h3 className="profile-title">Doctor Name</h3>
                <div>
                  {Array.from({ length: doctor.starRating }, (_, index) => (
                    <span key={index} className="fa fa-star"></span>
                  ))}
                </div>
              </div>
              <div className="profile-content">
                <p className="con-text2">
                  <img src={specialization} alt="specialization logo" />{" "}
                  <label /> Specialization
                </p>
                <p className="con-text3 specialization">{doctor.specialization}</p>
                <p className="con-text2">
                  <img src={time} alt="Availability logo" />
                  <label /> Availability
                </p>
                <p className="con-text3 availability">{doctor.Availability}</p>
                <p className="con-text2">
                  <img src={time} alt="Availability logo" />
                  <label /> Time Slot
                </p>
                <p className="con-text3 availability">{doctor.Timeslot}</p>
              </div>
              <div className="button-container">
                <div className="action-btn">
                  <Link to="/appoint" style={{ textDecoration: 'none', color: '#FFFFFF' }}>Book</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
    <br />
    <br />
  </>
  
  );
};
