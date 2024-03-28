import React, { useEffect, useState } from "react";
import { faTrash, faSun, faMoon, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import config from '../config.json';
import '../css/admin.css';
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Chart } from 'chart.js/auto';
import Pagination from './Pagination'; 

const baseUrl = config.base_url;
const itemsPerPage = 5;

export default function AdminHome({ userData }) {
  const [admins, setAdmins] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState('Admin');
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState(new Date());
  const [patientCountData, setPatientCountData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getappointinfo();
    fetchData();
  }, [selectedUserType]);

  const token = localStorage.getItem("token");
  const fname = localStorage.getItem("fname");

  useEffect(() => {
    const totalPatients = calculatePatientCount();
    setPatientCountData([...patientCountData, totalPatients]);
  }, [patients, doctors]);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      const adminsData = data.filter(user => user.userType === 'Admin');
      const doctorsData = data.filter(user => user.userType === 'User');
      const patientsData = data.filter(user => user.userType === 'Expert');

      setAdmins(adminsData);
      setDoctors(doctorsData);
      setPatients(patientsData);

      // Update the pie chart with the new data
      updatePieChart(adminsData.length, doctorsData.length, patientsData.length);

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getappointinfo = () => {
    fetch(`${baseUrl}/appointinfo`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        console.error('Error fetching appointment data:', error);
      });
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  const deleteUser = (email, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}`)) {
      fetch(`${baseUrl}/deleteuser`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.data);
          fetchData();
        });
    }
  };

  const calculatePatientCount = () => {
    const totalPatients = patients.length + doctors.length;
    return totalPatients;
  };

  const handleOpenPopup = (email) => {
    const filteredAppointments = appointments.filter((appointment) => appointment.email === email);
    console.log('Filtered Appointments:', filteredAppointments);
    const popup = window.open('', 'appointPopupWindow', 'width=600,height=400');
    popup.document.write(`
      <html>
        <head>
          <title>Appointment Details</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            h2 {
              color: #333;
              border-bottom: 2px solid #333;
              padding-bottom: 10px;
            }
            .appointment {
              margin-bottom: 20px;
              border: 1px solid #ccc;
              padding: 10px;
              border-radius: 5px;
            }
            .appointment p {
              margin: 0;
            }
            .button {
              background-color: #7CAE9E;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
            }
            .button:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <h2>Appointment Details</h2>
          ${filteredAppointments.map((appointment, index) => `
            <div class="appointment" key=${index}>
            <p>Date: ${new Date(appointment.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p>Time: ${appointment.time}</p>
              <p>Availability: ${appointment.availability}</p>
              <p>Type: ${appointment.userRole}</p>
            </div>
          `).join('')}
          <button class="button" onclick="window.close()">Close</button>
        </body>
      </html>
    `);
  };

  const patientCount = doctors.length;
  const userCount = admins.length + doctors.length + patients.length;
  const expertCount = patients.length;
  const appointmentCount = appointments.length;
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const upcomingAppointments = appointments
    .filter(appointment => {
      const appointmentDate = new Date(`${appointment.date}`);
      return appointmentDate >= currentDate;
    })
    .sort((a, b) => {
      const dateA = new Date(`${a.date}`);
      const dateB = new Date(`${b.date}`);
      return dateA - dateB;
    })
    .slice(0, 3);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to update the pie chart with total counts
  const updatePieChart = (adminCount, doctorCount, patientCount) => {
    const ctx = document.getElementById('pieChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Admins', 'Patients', 'Doctors'],
          datasets: [{
            label: 'Total Users',
            data: [adminCount, doctorCount, patientCount],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
  };

  // Logic to get current items for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = doctors.slice(indexOfFirstItem, indexOfLastItem);
  const currentExperts = patients.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const getUserFullName = (email) => {
    const doctor = doctors.find(doc => doc.email === email);
    if (doctor) {
      return `${doctor.fname} ${doctor.lname}`;
    }
    return "Unknown";
  };
  const viewUserAppointments = (email) => {
    console.log("View appointments for user:", email);
  };

  return (
    <>
      <div className={`whole ${darkMode ? 'dark-mode' : ''}`}>
        <div className={`container_admin ${darkMode ? 'dark-mode' : ''}`}>
          <div className={`side_admin ${darkMode ? 'dark-mode' : ''}`}>
            <button onClick={() => setSelectedUserType('Dashboard')}>Dashboard</button>
            <button onClick={() => setSelectedUserType('User')}>User</button>
            <button onClick={() => setSelectedUserType('Expert')}>Expert</button>
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
            <button onClick={logOut}>Log Out</button>
          </div>
          <div className={`content ${darkMode ? 'dark-mode' : ''}`}>
            <div>
              <h3>Welcome {fname}</h3>
              {/* <hr /> */}
              {selectedUserType === 'Dashboard' && (
                <div className="dashboard-container">
                  <div className="dashboard-container-row">
                    <div className="dashboard-block dashboard_item">
                      <h3>Total Users</h3>
                      <p>{userCount}</p>
                    </div>
                    <div className="dashboard-block dashboard_item">
                      <h3>Total Experts</h3>
                      <p>{expertCount}</p>
                    </div>
                    <div className="dashboard-block dashboard_item">
                      <h3>Total Patients</h3>
                      <p>{patientCount}</p>
                    </div>
                    <div className="dashboard-block dashboard_item">
                      <h3>Total Appointments</h3>
                      <p>{appointmentCount}</p>
                    </div>
                  </div>
                  <div className="dashboard-container-row">
                    <div className="dashboard-block upcoming-appointments dashboard_item">
                      <h3 style={{marginTop:'10px'}}>Upcoming Appointments</h3>
                      {upcomingAppointments.length > 0 ? (
                        <ul>
                          {upcomingAppointments.map((appointment, index) => (
                            <li key={index}>
                              <div className="appointment-details">
                              <FontAwesomeIcon className="icon-container" icon={faList} onClick={() => handleOpenPopup(appointment.email)} style={{ cursor: 'pointer' }} />

                                <p>Date: {new Date(appointment.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                <p>User: {getUserFullName(appointment.email)}</p>

                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No upcoming appointments</p>
                      )}
                    </div>
                    {selectedUserType === 'Dashboard' && (
                      <div className="dashboard-block dashboard_item">
                        <div className="dashboard-container_p ">
                          <h3>Doctors</h3>
                          <div className="patient-list-container">
                            <ul className="patient-list">
                              {patients.map((doctor, index) => (
                                <li key={index}>{doctor.fname} {doctor.lname}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="view-all-button">
                            <button onClick={() => setSelectedUserType('Expert')}>View All</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="dashboard-container-row">
                    <div className="dashboard_item">
                      <canvas id="pieChart" width="400" height="400"></canvas>
                    </div>
                    <div>
                      <Calendar
                        onChange={setDate}
                        value={date}
                        calendarType="US"
                        className="small-calendar dashboard_item"
                      />
                    </div>
                  </div>


                </div>
              )}
              {selectedUserType !== 'Dashboard' && (
                <div>
                  <h3>{selectedUserType}s:</h3>
                  <hr />
                  <table>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        {selectedUserType === 'User' && <th>Appointments</th>}
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedUserType === 'User' && currentUsers.map(doctor => (
                        <tr key={doctor.email}>
                          <td>{doctor.fname}</td>
                          <td>{doctor.lname}</td>
                          <td>
                            <button
                              onClick={() => handleOpenPopup(doctor.email)}
                            >
                              Appointments
                            </button>
                          </td>
                          <td>
                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(doctor.email, doctor.fname)} />
                          </td>
                        </tr>
                      ))}
                      {selectedUserType === 'Expert' && currentExperts.map(patient => (
                        <tr key={patient.email}>
                          <td>{patient.fname}</td>
                          <td>{patient.lname}</td>
                          <td>
                            <FontAwesomeIcon icon={faTrash} onClick={() => deleteUser(patient.email, patient.fname)} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Pagination
                    itemsPerPage={itemsPerPage}
                    totalItems={selectedUserType === 'User' ? doctors.length : patients.length}
                    paginate={paginate}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
