import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import logo from "../src/assets/dummy logo.png"
import Login from './components/login.component'
import SignUp from './components/signup.component'
import UserDetails from './components/userdetails'
import Reset from './components/reset'
import UpdateUser from './components/updateUser'
import UserHome from './components/userHome'
import Payment from './payment/Payment'
import { Journal } from './screens/Journal'
import Profile from './components/profile'
import { Assesment } from './screens/Assesment'
import { TabbedInterface } from './screens/TabbedInterface'
import { Doctor } from './screens/Doctor'
import { Assesment1 } from './screens/Assesment1';
// import { Stressinfo } from './screens/Stressinfo';
// import { Depressioninfo } from './screens/Depressioninfo';
import { DepressionAssesment } from './screens/Depressassesment';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Basic from './components/basic';
import Dropdown from 'react-bootstrap/Dropdown';
import AdHome from './components/adminHome';
import Authentication from './components/login.component'; // Assuming the path to the Authentication component file
import Navigation from './screens/Navigation';
import Patients from './Doctor/Patient';
import Profilescreen from './Doctor/Profilescreen';
import Appointments from './screens/Appointments';
import {Anxiety} from './Disorders/Anxiety';
import { Stress } from './Disorders/Stress';
import { Schizophenia } from './Disorders/Schizophenia';
import { Depression } from './Disorders/Depression';
import {Bipolar} from './Disorders/Bipolar';
import { Assesment2 } from './screens/Assessment2';



function App() {
  const isloggedIn = window.localStorage.getItem("loggedIn");
  const [token, setToken] = useState('');

  // Function to handle token received from the Authentication component
  const handleTokenReceived = (token) => {
    setToken(token);
  };

  const [profileImage, setProfileImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const image = event.target.files[0];
    // You can perform additional validation or processing here
    setProfileImage(image);
  };
  const userRole = localStorage.getItem('role');
  return (
    <Router>
      <div className="App">
        <Navigation userRole={localStorage.getItem('role')} fname={localStorage.getItem('fname')} lname={localStorage.getItem('lname')} email={localStorage.getItem('email')} isLoggedIn={isloggedIn} />

       
        <Routes>
          <Route exact path="/" element={isloggedIn == "true" ? <UserDetails /> : <Login />} />
          {/* <Route 
    exact 
    path="/" 
    element={isLoggedIn === "true" ? 
        (isAdmin ? <AdminDashboard /> : <UserDetails />) : 
        <Login />} 
/> */}

          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userdetails" element={<UserDetails />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/updateUser" element={<UpdateUser />} />
          <Route path="/userHome" element={<UserHome />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/journal" element={<Journal />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/assesment" element={<Assesment />} />
          <Route exact path='/doctor' element={<Doctor />} />
          <Route exact path='/tabbed' element={<TabbedInterface />} />
          <Route exact path='/assesment1' element={<Assesment1 />} />

          {/* <Route exact path='/stressinfo' element={<Stressinfo />} />
          <Route exact path='/depressinfo' element={<Depressioninfo />} /> */}
          <Route exact path='/depressassesment' element={<DepressionAssesment />} />
          <Route exact path='/basic' element={<Basic />} />
          <Route exact path='/adminhome' element={<AdHome />} />
          <Route exact path='/patient' element={<Patients />} />
          <Route exact path='/expert' element={<Profilescreen />} />
          <Route exact path='/anxietyinfo' element={<Anxiety />} />
          <Route exact path='/appoint' element={<Appointments />} />
          <Route exact path='/anxietyinfo' element={<Anxiety />} />
          <Route exact path='/stressinfo' element={<Stress />} />
          <Route exact path='/bipolarinfo' element={<Bipolar />} />
          <Route exact path='/Schizopheniainfo' element={<Schizophenia />} />
          <Route exact path='/depressioninfo' element={<Depression />} />
          <Route exact path='/assesment2' element={<Assesment2 />} />

          








        </Routes>
      </div>
      <div>
        { userRole === 'User' && (
          <footer className="custom-footer" style={{ backgroundColor: '#F8E8E9', color: 'var(--Dark-grey, #4E4949)'}}>
            <div className="footer-container">
              <div className="footer-row">
                <div className="footer-col footer-col-left">
                  <div className="footer-section">
                    <div className="footer-logo">
                      <Link className="navbar-brand" to={'/userDetails'}>
                        <img className="logo" src={logo} alt="" />
                      </Link>
                    </div>
                    <div className="footer-follow">
                      <p className="footer-text">Follow us:</p>
                      <div className="footer-icons">
                        <a href="#" className="footer-icon" ><FaFacebook /></a>
                        <a href="#" className="footer-icon" ><FaInstagram /></a>
                        <a href="#" className="footer-icon" ><FaEnvelope /></a>
                        <a href="#" className="footer-icon" ><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-row footer-row-right">
                  <div className="footer-section">
                    <p className="footer-header">Quick Links</p>
                    <ul className="footer-links">
                      <li><a href="#" className="footer-link">Counselling Sessions</a></li>
                      <li><a href="#" className="footer-link">Meditation & Mindfulness</a></li>
                      <li><a href="#" className="footer-link">Mind Assessment</a></li>
                    </ul>
                  </div>
                  <div className="footer-section">
                    <h5 className="footer-header">Help & Support</h5>
                    <ul className="footer-links">
                      <li><a href="#" className="footer-link">About Team</a></li>
                      <li><a href="#" className="footer-link">Terms Of Use</a></li>
                      <li><a href="#" className="footer-link">Profile Details</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="footer-copyright text-center">&copy; 2024 Your Company Name. All rights reserved.</p>
            </div>
          </footer>
)}
        </div>
    </Router>
  )
}

export default App