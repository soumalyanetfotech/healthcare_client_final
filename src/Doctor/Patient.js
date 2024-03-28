import React, { useEffect, useState } from "react";
import config from '../config.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import '../css/patient.css';

const baseUrl = config.base_url;

function Patients({ userData }) {
    const [data, setData] = useState([]);
    const [basicdata, setBasicData] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [journalData, setJournalData] = useState([]);
    const [asseseement, setAssessment]= useState([]);
    const [depression , setDepression] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        getUser();
        getbasicinfo();
        fetchData();
    }, []);

    const token = localStorage.getItem("token");
    const fname = localStorage.getItem("fname"); 
    const lname = localStorage.getItem("lname"); 
    const itemsPerPage = 5; // You can adjust this value as needed

    const fetchData = async () => {
        try {
            const response = await fetch(`${baseUrl}/journal`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch journal data');
            }

            const jsonData = await response.json();
            setJournalData(jsonData);
        } catch (error) {
            console.error('Error fetching journal data:', error);
        }


        try {
            const response = await fetch(`${baseUrl}/assessmentinfo`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch assessment score');
            }

            const jsonData = await response.json();
            setAssessment(jsonData);
        } catch (error) {
            console.error('Error fetching assessment score:', error);
        }

        try {
            const response = await fetch(`${baseUrl}/depressioninfo`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch assessment score');
            }

            const jsonData = await response.json();
            setDepression(jsonData);
        } catch (error) {
            console.error('Error fetching assessment score:', error);
        }
        

    };


    const getUser = () => {
        fetch(`${baseUrl}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    };

    const getbasicinfo = () => {
        fetch(`${baseUrl}/getbasicinfo`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setBasicData(data);
            })
            .catch((error) => {
                console.error('Error fetching basic info:', error);
            });
    };

    const handleOpenPopup = (email) => {
        const filteredPersonalData = basicdata.filter((basic) => basic.email === email);
        const popup = window.open('', 'basicPopupWindow', 'width=600,height=400');
        popup.document.write(`
            <html>
            <head>
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
            .basic_ex {
              margin-bottom: 20px;
              border: 1px solid #ccc;
              padding: 10px;
              border-radius: 5px;
            }
            .basic_ex p {
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
                background-color: #EBFFF5;
                color: #4E4949;
                border-color: #7CAE9E;
            }
          </style>
                <title>Details</title>
            </head>
            <body>
                <h2>Personal Details</h2>
                ${filteredPersonalData.map((basic, index) => `
                    <div class ='basic_ex' key=${index}>
                        <p>Select Journal: ${basic.name}</p>
                        <p>Text: ${basic.email}</p>
                        <p>Emoji: ${basic.age}</p>
                        <p>Select Tag: ${basic.gender}</p>
                        <p>Marital: ${basic.marital}</p>
                <p>Education: ${basic.education}</p>
                <p>Occupation: ${basic.occupation}</p>
                <p>Economic: ${basic.economic}</p>
                <p>Informant: ${basic.informant}</p>
                    </div>
                `).join('')}
                <button class='button' onclick="window.close()">Close</button>
            </body>
            </html>
        `);
        
        
    };

    const handleOpenJournalPopup = (email) => {
        const filteredJournalData = journalData.filter((journal) => journal.email === email);
        const popup = window.open('', 'journalPopupWindow', 'width=600,height=400');
        popup.document.write(`
            <html>
            <head>
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
            .journal_ex {
              margin-bottom: 20px;
              border: 1px solid #ccc;
              padding: 10px;
              border-radius: 5px;
            }
            .journal_ex p {
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
                background-color: #EBFFF5;
                color: #4E4949;
                border-color: #7CAE9E;
            }
          </style>
                <title>Journal Details</title>
            </head>
            <body>
                <h2>Journal Details</h2>
                ${filteredJournalData.map((journal, index) => `
                    <div class='journal_ex' key=${index}>
                    <p>Date: ${journal.date}</p>
                        <p>Select Journal: ${journal.selectJournal}</p>
                        <p>Text: ${journal.text}</p>
                        <p>Emoji: ${journal.emoji}</p>
                        <p>Select Tag: ${journal.selectTag}</p>
                    </div>
                `).join('')}
                <button class='button' onclick="window.close()">Close</button>
            </body>
            </html>
        `);
    };


    const handleOpenAssessmentPopup = (email) => {
        const filteredAssessmentData = asseseement.filter((assessmentinfo) => assessmentinfo.email === email);
        const popup = window.open('', 'assessmentPopupWindow', 'width=600,height=400');
        popup.document.write(`
            <html>
            <head>
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
            .anxiety_ex {
              margin-bottom: 20px;
              border: 1px solid #ccc;
              padding: 10px;
              border-radius: 5px;
            }
            .anxiety_ex p {
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
                background-color: #EBFFF5;
                color: #4E4949;
                border-color: #7CAE9E;
            }
          </style>
                <title>Assessment Score for Anxiety</title>
            </head>
            <body>
                <h2>Assessment Score for Anxiety</h2>
                ${filteredAssessmentData.map((assessmentinfo, index) => `
                    <div class='anxiety_ex' key=${index}>
                        
                        <p>Total Score: ${assessmentinfo.totalScore}</p>
                    </div>
                `).join('')}
                <button class='button' onclick="window.close()">Close</button>
            </body>
            </html>
        `);
    };


    const handleOpenDepressionPopup = (email) => {
        const filtereddepressionData = depression.filter((depressioninfo) => depressioninfo.email === email);
        const popup = window.open('', 'depressionPopupWindow', 'width=600,height=400');
        popup.document.write(`
            <html>
            <head>
                <title>Assessment Score for Depression</title>
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
            .depress_ex {
              margin-bottom: 20px;
              border: 1px solid #ccc;
              padding: 10px;
              border-radius: 5px;
            }
            .depress_ex p {
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
                background-color: #EBFFF5;
                color: #4E4949;
                border-color: #7CAE9E;
            }
          </style>
            </head>
            <body>
                <h2>Assessment Score for Depression</h2>
                ${filtereddepressionData.map((depressioninfo, index) => `
                    <div class='depress_ex' key=${index}>
                        
                        <p>Total Score: ${depressioninfo.totalScore}</p>
                    </div>
                `).join('')}
                <button class='button' onclick="window.close()">Close</button>
            </body>
            </html>
        `);
    };

    const handlePageClick = (data) => {
        const selectedPage = data.selected;
        setCurrentPage(selectedPage);
    };

    
    return (
        <>
            <div className="content_ex"> 
                <div>
                    <h3>Welcome {fname} {lname} </h3>
                    {/* <hr /> */}
                    <table style={{ width: 600, marginBottom: '20px' }}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>History</th>
                                <th>Journal</th>
                                <th>Anxiety</th>
                                <th>Depression</th>
                            </tr>
                        </thead>
                        <tbody>


                        {Array.isArray(data) && data
                        .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
                        .map((user, userIndex) => (
    <tr key={userIndex}>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>
            <button
                // style={{ backgroundColor: '#7CAE9E', color: 'white' }}
                onClick={() => handleOpenPopup(user.email)}
            >
                History
            </button>
        </td>
        <td>
            <button
                // style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => handleOpenJournalPopup(user.email)}
            >
                Journal
            </button>
        </td>
         {/* Placeholder for Disorder */}
        <td>
        <button
                // style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => handleOpenAssessmentPopup(user.email)}
                // onClick={()=>handleOpenDepressionPopup(user.email)}
            >
                Anxiety
            </button>
            </td>

            <td>
        <button
                // style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={() => handleOpenDepressionPopup(user.email)}
            >
                Depression
            </button>
            </td>
    </tr>
))}

                        </tbody>
                    </table>
                    <ReactPaginate
                        pageCount={Math.ceil(data.length / itemsPerPage)}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                    
                </div>
            </div>
        </>
    );
}

export default Patients;
