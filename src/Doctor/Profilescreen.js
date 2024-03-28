import React, { useState } from 'react';
import '../css/Profilescreen.css';
import config from '../config.json';

import { Link, useParams } from 'react-router-dom';

const baseUrl = config.base_url;

function ProfileScreen() {
  // State variables to hold form data
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [degree, setDegree] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [languages, setLanguages] = useState('');
  const [fileUrl, setVerificationDoc] = useState('');
  const [filename, setVerificationDocname] = useState('');
  const [imgUrl, setProfilePicture] = useState('');
  const [Availability, setAvailability] = useState('');
  const [Timeslot, setTimeSlots] = useState('');
  const [About, setAbout] = useState('');
  const [imgname, setimgname] = useState('');
  const [image,setImage]=useState("");
  const [image1,setImage1]=useState("");

  function convertToBase64(e){
    console.log(e);
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror=error=>{
      console.log("Error: ",error);
    };
  }

  function convertToBase641(e){
    console.log(e);
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      console.log(reader.result);
      setImage1(reader.result);
    };
    reader.onerror=error=>{
      console.log("Error: ",error);
    };
  }
  // const token = localStorage.getItem("token");
  const handleSubmit =  (event) => {
    event.preventDefault();
      fetch(`${baseUrl}/doctor`, {
      method: "POST",
      crossDomain: true,
      headers: {
        // 'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
      fname,
      lname,
      email,
      phone,
      gender,
      country,
      degree,
      languages,
      filename,
      fileUrl:image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(fileUrl, "profile");
      });

      fetch(`${baseUrl}/postprofile`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          Availability,
          specialization,
          Timeslot,
          About,
          imgname,
          imgUrl:image1
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(imgUrl, "profile");
          
        });
        alert("Successfully submitted your information");
  };

  return (
    <div className="profile-screen">
      <div className="sidebar">
    {/* <Link to="/dashboard" className="nav-item-docprofile" style={{ backgroundColor: '#FFF', color: '#4E4949', textDecoration: 'none', display: 'block',marginBottom:'10px' }}>Dashboards</Link> */}
    <Link to="/patient" className="nav-item-docprofile" style={{ backgroundColor: '#FFF', color: '#4E4949', textDecoration: 'none', display: 'block', marginBottom:'10px' }}>Patients</Link>
    <Link to="/myprofile" className="nav-item-docprofile" style={{ backgroundColor: '#FFF', color: '#4E4949', textDecoration: 'none', display: 'block', marginBottom:'10px' }}>My Profile</Link>
</div>

      <table className='docprofile-table'>
        <tbody>
          <tr>
            <td>
              <div className="main-content">
                <form onSubmit={handleSubmit}>
                  <div className="form-section account-details-docprofile">
                    <h2>Account Details</h2>
                    <hr />
                    <label className='docprofile-label'>First Name:</label>
                    <input className='docprofile-input' type="text" placeholder="First Name" value={fname} onChange={(e) => setfname(e.target.value)}/>
                    <label className='docprofile-label'>Last Name:</label>
                    <input className='docprofile-input' type="text" placeholder="Last Name" value={lname} onChange={(e) => setlname(e.target.value)}/>
                    <label className='docprofile-label'>Email:</label>
                    <input className='docprofile-input' type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)}/>
                    <label className='docprofile-label'>Phone No:</label>
                    <input className='docprofile-input' type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <label className='docprofile-label'>
                      Gender:
                      <input type="radio" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} /> Male
                      <input type="radio" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} /> Female
                    </label>
                    <label className='docprofile-label'>Country:</label>
                    <input className='docprofile-input' type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    <label className='docprofile-label'>Degree</label>
                    <input className='docprofile-input' type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
      
                    <label className='docprofile-label'>Languages:</label>
                    <input className='docprofile-input' type="text" placeholder="Preferred Languages" value={languages} onChange={(e) => setLanguages(e.target.value)} />
                    {/* <input className='docprofile-input' type="text" placeholder="Documentation Name" value={filename} onChange={(e) => setVerificationDocname(e.target.value)} /> */}
                    <label className='docprofile-label'>Place your documents for verification:</label>
                    <input className='docprofile-input' type="file" onChange={convertToBase64} />
                    {image==""||image==null?"": <img width={100} height={100} src={image}></img>}
                  </div>
                  <button>submit</button>
                </form>
              </div>
            </td>
            <td>
              <div className="profile-details">
                <div className="form-section">
                  <h2>Profile Picture</h2>
                  <hr />
                  <input type="file" onChange={convertToBase641} />
                  {image1==""||image1==null?"": <img width={100} height={100} src={image1}></img>}
                </div>

                <div className="form-section">
                  <h2>Image Name</h2>
                  <hr />
                  <input type="text" placeholder="imgname" onChange={(e) => setimgname(e.target.value)} />
                </div>

                <div className="form-section">
                  <h2>Availability</h2>
                  <input type="text" placeholder="Availability" value={Availability} onChange={(e) => setAvailability(e.target.value)} />
                </div>
                <div>
                <h2 >Specialization:</h2>
                <input type="text" placeholder="Preferred Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} />
                </div>
                <div className="form-section">
                  <h2>Time Slots</h2>
                  <input type="text" placeholder="Time Slots" value={Timeslot} onChange={(e) => setTimeSlots(e.target.value)} />
                </div>

                <div className="form-section">
                  <h2>About</h2>
                  <textarea placeholder="About" value={About} onChange={(e) => setAbout(e.target.value)} />
                </div>
              </div>
            </td>
          </tr>
         
        </tbody>
      </table>
      
    </div>
  );
}

export default ProfileScreen;
