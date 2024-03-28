import React, { useEffect, useState, useRef } from "react";
// import "../accounts/journal.css";
import '../css/Journal.css'
// import Happy from "./assets/Happy.png"
import Happy from "../assets/Happy.png"
import Relaxed from "../assets/Relaxed.png"
import Anxious from "../assets/content.png"
import Angry from "../assets/angry.png"
import Low from "../assets/sad.png"
import jour from "../assets/noteimg.png";
import { usePDF } from "react-to-pdf";
import Bold from "../assets/bold.png";
import Italic from "../assets/italic.png";
import Underline from "../assets/underline.png";
import Hyperlink from "../assets/link.png";
import Alignleft from "../assets/left.png"
import Aligncenter from "../assets/center.png"
import AlignRight from "../assets/right.png"
import Bullets from "../assets/bullet-list.png"
import { jsPDF } from 'jspdf';
import axios from 'axios';
// import 'jspdf-a'
import Swal from 'sweetalert2';
import config from '../config.json';

const baseUrl = config.base_url;

const RadioButton = ({ children, onClick, isSelected }) => (
  <button
    className={`custom-button ${isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const saveEntryToServer = async (entryData) => {
  // ... (unchanged saveEntryToServer function)
};

export const Journal = () => {
  const [journalEntry, setJournalEntry] = useState("");
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentDate, setCurrentDate] = useState(getTodayDate());
  const [isSaveSelected, setSaveSelected] = useState(false);
  const [isCancelSelected, setCancelSelected] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null)
  const [text, setText] = useState('');
  const [isBold, setBold] = useState(false);
  const [isItalic, setItalic] = useState(false);
  const [isUnderline, setUnderline] = useState(false);
  const [isHyperLink, setHyperLink] = useState(false);
  const [isLeftAlignment, setLeftAlignment] = useState(false);
  const [isCenterAlignment, setCenterAlignment] = useState(false);
  const [isRightAlignment, setRightAlignment] = useState(false);
  const [isBullets, setBullets] = useState(false);
  const [place, setPlace] = useState("Put Your Thoughts");
  const [journalData, setjournalData] = useState('');
  // const email=localStorage.getItem("email");

  const getPlace = () => {
    if (place === "Put Your Thoughts") setPlace("Empty");
    else setPlace('Red');


  }
  const handleTextChange = (e) => {
    setText(e.target.value);
    // setFormData({...formData, [e.target.name]:e.target.value});

  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        const email = localStorage.getItem('email');

        const response = await fetch(`${baseUrl}/journal?email=${email}`, {
            headers: {
                'Authorization': `Bearer ${token}`, // Include token in the request headers
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const jsonData = await response.json();
        setjournalData(jsonData); // Update state with fetched data
    } catch (error) {
        console.error('Trouble in fetching data', error);
    }
};

  
  

  const downloadPDF = async (e) => {
    try {
      const email=localStorage.getItem("email");
      console.log(email);
      const data = {
        email: email,
        selectJournal: selectedJournal,
        text: text,
        selectTag: selectedTag,
        emoji: selectedEmoji,
        // userID:email
      }
      const resp = await fetch('http://localhost:4000/users/journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
      console.log("Journal:",data);
      console.log(resp);
    } catch (err) {
      console.error(err)
    }

    e.preventDefault();
    if (text.trim() !== '' && selectedEmoji && text && selectedJournal && selectedTag) {
      const email=localStorage.getItem("email");
      const content = `
      ${currentDate},
      ${email},
      ${text},
      ${selectedEmoji},
      ${selectedJournal},
      ${selectedTag}
      `
      const pdf = new jsPDF()
      pdf.text(content, 10, 10);
      Swal.fire({
        title: "Do you want to Download PDF?",
        showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: "Download",
        denyButtonText: `Cancel`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("PDF Dowloaded!", "", "success");
          pdf.save('page.pdf');
        } else if (result.isDenied) {
          Swal.fire("Download Cancel", "", "info");
        }
      });
    }

    else {
      // text('');
      // alert('Textarea is Empty. please write someting.')
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Fields are Empty!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    };
  };


  function getTodayDate() {
    const today = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(getTodayDate());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleJournalChange = (journal) => {
    setSelectedJournal(journal);
  };

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

  // const handleSave = async () => {
  //   const entryData = {
  //     date: currentDate,
  //     content: journalEntry,
  //     journal: selectedJournal,
  //     tag: selectedTag,
  //   };

    // const isSaved = await saveEntryToServer(entryData);

    // if (isSaved) {
    //   setJournalEntry("");
    //   setSelectedJournal(null);
    //   setSelectedTag(null);
    //   setSaveSelected(false);

    // }
  // };

  // const [date, setDate] = useState("");
  // const [content, setContent] = useState("");
  // const [journal, setJournal] = useState("");
  // const [tag, settag] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Check if any required field is empty
  //   if (!date || !content || !journal || !tag) {
  //     alert("Please fill out all fields");
  //     return;
  //   }

  //   // Submit form if all validations pass
  //   console.log(date, content, journal, tag);
  //   fetch(`${baseUrl}/journal`, {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       date, 
  //       content, 
  //       journal, 
  //       tag
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "journal");
  //       if (data.status === "ok") {
  //         console.log(data)
  //       } 
  //     });
  //   }

  const handleCancel = () => {
    setCurrentDate(getTodayDate());
    setJournalEntry("");
    setSelectedJournal(null);
    setSelectedTag(null);
  };

  const handleSaveSelect = () => {
    setSaveSelected(true);
    setCancelSelected(false);
  };

  const handleCancelSelect = () => {
    setSaveSelected(false);
    setCancelSelected(true);
  };

  const emojiFeedback = (e) => {
    setSelectedEmoji(e.target.value)
  };
  const handleToggleBold = () => {
    setBold(!isBold);
  };
  const handleToggleItalic = () => {
    setItalic(!isItalic);
  };
  const handleToggleUnderline = () => {
    setUnderline(!isUnderline);
  };
  const handleToggleHyperlink = () => {
    setHyperLink(!isHyperLink);
  };
  const handleToggleAlignLeft = () => {
    setLeftAlignment(!isLeftAlignment);
  };
  const handleToggleAlignCenter = () => {
    setCenterAlignment(!isCenterAlignment);
  };
  const handleToggleAlignRight = () => {
    setRightAlignment(!isRightAlignment);
  };
  const handleToggleBullets = () => {
    setBullets(!isBullets);
  };
  // };

  // const formattedText = () => {
  //   let result =text
  //   if(isBold){


  //   }
  //   if(isItalic){
  //     result = `*{result}*`;
  //   }
  //   if(isUnderline){
  //     result = `<u>${result}</u>`;
  //   }
  //   return result;
  // }
  return (
    <div className="journal-container">
      <h1 className="journal-title">Create Your Journal</h1>

      <p className="journal-discovery-text">
        "Every entry is a step towards self-discovery."
      </p>
      <div className="journal-actions">
        <p>Pick a Journal to Write In</p>
      </div>
      <table>
        <tr>
          <td>
            <div className="journal-button-group">
              {[
                "My Thoughts",
                "Daily Reflections",
                "Gratitude",
                "Self Discovery",
                "To-Do",
              ].map((journal) => (
                <RadioButton
                  value={selectedJournal}
                  onChange={(e) => setSelectedJournal(e.target.value)}
                  name='selectedTag'
                  key={journal}
                  isSelected={selectedJournal === journal}
                  onClick={() => handleJournalChange(journal)}
                >
                  {journal}
                </RadioButton>
              ))}
            </div>
          </td>
          <td>
            <img src={jour} alt="Journal" />
          </td>
        </tr>
      </table>

      <div className="journal-prompt">
        <p>Eg: What or who are you thankful for today?</p>
      </div>
      <div className="journal-thought-box">
        <textarea
          value={text} onChange={(e) => setText(e.target.value)}

          style={{
            outline: 'none',
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            textDecoration: isUnderline ? 'underline' : 'none',
            justifyContent: isLeftAlignment ? 'left' : "normal",
            listStyle: Bullets ? "outside" : "outside"

          }}

          name='text'
          className="thought-input"
          placeholder={place ? 'Pour Your thoughts' : getPlace ? ' Empty' : ''}
        />


        <div className="text-formating">
          <button onClick={handleToggleBold}>
            <img src={Bold} alt="bold img" />
          </button>
          <button onClick={handleToggleItalic}>
            <img src={Italic} alt="italic img" />
          </button>
          <button onClick={handleToggleUnderline}>
            <img src={Underline} alt="underline img" />
          </button>
          <button onClick={handleToggleHyperlink}>
            <img src={Hyperlink} alt="hyperlink img" />
          </button>
          <button onClick={handleToggleAlignLeft}>
            <img src={Alignleft} alt="alignleft img" />
          </button>
          <button onClick={handleToggleAlignCenter}>
            <img src={Aligncenter} alt="Aligncenter img" />
          </button>
          <button onClick={handleToggleAlignRight}>
            <img className="align-right" src={AlignRight} alt="Alignright img" />
          </button>
          <button onClick={handleToggleBullets}>
            <img src={Bullets} alt="Bullets img" />
          </button>
        </div>
      </div>
      <hr />
      <div className="text-prompt">
        <h2>Select A Tag</h2>
      </div>
      <table>
        <tr>
          <td>
            <div className="tag-button-group">
              {["Career", "Family", "Love", "Social", "Self", "Other"].map(
                (tag) => (
                  <RadioButton
                    name="selectTag"
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    key={tag}
                    isSelected={selectedTag === tag}
                    onClick={() => handleTagChange(tag)}
                  >
                    {tag}
                  </RadioButton>
                )
              )}

            </div>
          </td>
        </tr>
      </table>
      <div className="container">

        <div className="emoji">
          <h2>How Are You Feelling?</h2>

          <div className="emoji-fb">
            <button onClick={emojiFeedback} onChange={(e) => setSelectedEmoji(e.target.value)} value="Happy"><img style={{ pointerEvents: "none", color:"4E4949" }} src={Happy} alt="" />Happy</button>
            <button onClick={emojiFeedback} onChange={(e) => setSelectedEmoji(e.target.value)} value="Relaxed"><img style={{ pointerEvents: "none" }} src={Relaxed} alt="" />Relaxed</button>
            <button onClick={emojiFeedback} onChange={(e) => setSelectedEmoji(e.target.value)} value="Anxious"><img style={{ pointerEvents: "none" }} src={Anxious} alt="" />Anxious</button>
            <button onClick={emojiFeedback} onChange={(e) => setSelectedEmoji(e.target.value)} value="Angry"><img style={{ pointerEvents: "none" }} src={Angry} alt="" />Angry</button>
            <button onClick={emojiFeedback} onChange={(e) => setSelectedEmoji(e.target.value)} value="Low"><img style={{ pointerEvents: "none" }} src={Low} alt="" />Low</button>
          </div>
        </div>
      </div>
      <hr />

      <table className="table21">
        <tr>
          <td>
            <form>
              <div className="date-and-buttons">
                <div className="current-date">
                  <p>{currentDate}</p>
                </div>
              </div>
            </form>
          </td>
          <td className="table22">
            <table>
              <tr>
                <td>
                  <div className="btn">
                    <div className="Save-Button">
                      <button onClick={downloadPDF}>Save</button>
                      {/* <div ref={targetRef}></div> */}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="button-container">
                    {isSaveSelected ? (
                      <button onClick={downloadPDF}>Download PDF</button>
                    ) : (
                      <>
                        <span className="button-spacing"></span>
                        <RadioButton

                          type="button"
                          onClick={handleCancelSelect}
                          selected={isCancelSelected}
                        >
                          Cancel
                        </RadioButton>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <hr />
      <div>
        <h1>Past Thoughts</h1>
              {Array.isArray(journalData) && journalData.map((i, index) => (
                i.email ===localStorage.getItem('email')&&(
          <div className="App" key={index}>
              <div className="book_container">
                  <h5 className="card-title">Email: {i.email}</h5>
                  {/* <p className="card-text">Date: {i.currentDate}</p> */}
                  <p className="card-text">Select Journal: {i.selectJournal}</p>
                  <p className="card-text">Text: {i.text}</p>
                  <p className="card-text">Emoji: {i.emoji}</p>
                  <p className="card-text">Select Tag: {i.selectTag}</p>
              </div>
          </div>
                )
      ))}

      </div>
    </div>
  );
};
