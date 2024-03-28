import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/dummy logo.png";

const Navigation = ({ userRole, fname, lname, email, isLoggedIn }) => {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">

        
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">

            {userRole === 'Admin' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={'/adminhome'}>
                    Admin Dashboard
                  </Link>
                </li>
              </>
            )}

            {userRole === 'User' && (
              <>
              <Link className="navbar-brand" to={'/userdetails'}>
          <img className="logo" src={logo} alt="" />
        </Link>
                <li className="nav-item">
                  <Link className="nav-link" to={'/assesment2'}>
                    Assesment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/journal'}>
                    Journal
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/payment'}>
                    Payment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/profile'}>
                    Profile
                  </Link>
                </li>
              </>
            )}

            {userRole === 'Expert' && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={'/patient'}>
                    Patient Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`/expert`}>
                    Profile Screen
                  </Link>
                </li>
              </>
            )}

            {/* Render login and sign-up buttons in the same column with space */}
            <li className="nav-item">
              {!isLoggedIn && (
                <div className="nav-link">
                  <Link to={'/sign-in'}>
                    Login
                  </Link>
                  <span className="mx-3">|</span>
                  <Link to={'/sign-up'}>
                    Sign-Up
                  </Link>
                </div>
              )}
              {isLoggedIn && (
                <button onClick={logOut} className="btn btn-primary" style={{backgroundColor:'#7CAE9E'}}>
                  Log Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
