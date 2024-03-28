import React, { useState } from "react";
import config from '../config.json';

const baseUrl = config.base_url;

export default function Basic() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [marital, setMarital] = useState("");
  const [education, setEducation] = useState("");
  const [occupation, setOccupation] = useState("");
  const [economic, setEconomic] = useState("");
  const [informant, setInformant] = useState("");

  const setEmailToLocalStorage = (email) => {
    localStorage.setItem("email", email);
  };

  const handleEmailChange = (e) => {
    setEmailToLocalStorage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !name ||
      !age ||
      !gender ||
      !marital ||
      !education ||
      !occupation ||
      !economic ||
      !informant
    ) {
      alert("Please fill out all fields");
      return;
    }

    console.log(
      name,
      age,
      gender,
      marital,
      education,
      occupation,
      economic,
      informant
    );
    const email = localStorage.getItem("email");
    fetch(`${baseUrl}/basicinfo`, {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        name,
        age,
        gender,
        marital,
        education,
        occupation,
        economic,
        informant,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "basicInfo");
        if (data.status === "ok") {
          alert("Information Collection Successful");
          window.location.href = "/sign-in";
        } else {
          alert("Something went wrong");
        }
      });
  };

  return (
    <div className="auth-wrapper" style={{ width: "auto" }}>
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>User Details Collection</h3>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="abc@gmail.com"
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div>
            Gender
            <input
              type="radio"
              name="UserType"
              value="Male"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Male
            <input
              type="radio"
              name="UserType"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Female
            <input
              type="radio"
              name="UserType"
              value="Prefer not to say"
              onChange={(e) => setGender(e.target.value)}
              required
            />
            Prefer not to say
          </div>

          <div className="mb-3">
            <label>Marital Status</label>
            <input
              type="text"
              className="form-control"
              placeholder="Married"
              onChange={(e) => setMarital(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Educational Qualification</label>
            <input
              type="text"
              className="form-control"
              placeholder="B.Tech"
              onChange={(e) => setEducation(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Occupational Status</label>
            <input
              type="text"
              className="form-control"
              placeholder="business"
              onChange={(e) => setOccupation(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Socio-economic status</label>
            <input
              type="text"
              className="form-control"
              placeholder="Lower-middle Class"
              onChange={(e) => setEconomic(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label>Informant</label>
            <input
              type="text"
              className="form-control"
              placeholder="Father/Friend"
              onChange={(e) => setInformant(e.target.value)}
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
