import React, { useState } from "react";
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import config from '../config.json';
import "../css/Assesment1.css";
import pink from "../assets/rectanglepink.png";

const baseUrl = config.base_url;

export const Assesment1 = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(14).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State for showing the pop-up

  const setEmailToLocalStorage = (email) => {
    localStorage.setItem("email", email);
  };

  const handleEmailChange = (e) => {
    setEmailToLocalStorage(e.target.value);
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const calculateTotalScore = () => {
    const scores = {
      0: 0, // Not present
      1: 1, // Mild
      2: 2, // Moderate
      3: 3, // Severe
      4: 4, // Very severe
    };
    return selectedOptions.reduce((total, option) => total + scores[option], 0);
  };

  const calculateProgress = () => {
    const totalScore = calculateTotalScore();
    const scorePercentage = (totalScore / 56) * 100;
    let variant;
    let anxietyLevel;
    if (scorePercentage <= 30) {
      variant = "success"; // Green
      anxietyLevel = "Mild anxiety";
    } else if (scorePercentage <= 60) {
      variant = "warning"; // Yellow
      anxietyLevel = "Moderate anxiety";
    } else {
      variant = "danger"; // Red
      anxietyLevel = "Severe anxiety";
    }
    return { now: scorePercentage, variant, totalScore, anxietyLevel };
  };

  const totalScore = calculateTotalScore();
  const progressBarProps = submitted ? calculateProgress() : { now: 0, variant: "success" };
  const allQuestionsAnswered = selectedOptions.every(option => option !== null);

  const handleSubmit = () => {
    const submitAssessment = async () => {
      const email = localStorage.getItem("email");
      try {
        const response = await fetch(`${baseUrl}/assessmentinfo`, {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            totalScore,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result); // Handle success, e.g., show a success message
          setSubmitted(true); // Update the state after successful submission
          setShowPopup(true); // Show the pop-up after successful submission
        } else {
          console.error("Error submitting assessment");
          // Handle error, e.g., show an error message to the user
        }
      } catch (error) {
        console.error("Error submitting assessment", error);
        // Handle error, e.g., show an error message to the user
      }
    };

    submitAssessment();
  };

  const handlePopupButtonClick = (action) => {
    // Handle the action from the pop-up buttons
    if (action === "doctorPage") {
      window.location.href = "/doctor"; // Redirect to the doctor page using React Router's route path
    } else if (action === "cancel") {
      setShowPopup(false); // Close the pop-up
    }
  };
  
  // Pop-up content
  const popupContent = (
    <div className="popup_assesment1">
      <p>Do you want to connect to doctor</p>
      <Button onClick={() => handlePopupButtonClick("doctorPage")}>Connect</Button>
      <Button onClick={() => handlePopupButtonClick("cancel")}>Cancel</Button>
    </div>
  );
  
  const questions = [
    {
      question: "Feeling tense, anxious, or nervous",
      options: [
        "Not present",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
    {
      question: "Feeling of panic",
      options: [
        "None",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
    // Add your remaining questions here
    {
      question: "Worrying too much about different things",
      options: [
        "Not at all",
        "A little",
        "Moderately",
        "Quite a lot",
        "Very much"
      ],
    },
    {
      question: "Trouble relaxing",
      options: [
        "Not at all",
        "A little",
        "Moderately",
        "Quite a lot",
        "Very much"
      ],
    },
    {
      question: "Feeling restless",
      options: [
        "Not at all",
        "A little",
        "Moderately",
        "Quite a lot",
        "Very much"
      ],
    },
    {
      question: "Feeling nervous or apprehensive",
      options: [
        "Not at all",
        "A little",
        "Moderately",
        "Quite a lot",
        "Very much"
      ],
    },
    {
      question: "Feeling fearful",
      options: [
        "Not at all",
        "A little",
        "Moderately",
        "Quite a lot",
        "Very much"
      ],
    },
    {
      question: "Feeling like something awful is going to happen",
      options: [
        "Not at all",
        "A little",
        "Moderately",
        "Quite a lot",
        "Very much"
      ],
    },
    {
      question: "Hands trembling",
      options: [
        "None",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
    {
      question: "Feeling dizzy or faint",
      options: [
        "None",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
    {
      question: "Feeling your heart racing or pounding",
      options: [
        "None",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
    {
      question: "Feeling your face or body flush or hot",
      options: [
        "None",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
    {
      question: "Feeling short of breath or smothering sensations",
      options: [
        "None",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
    {
      question: "Feeling tense muscles",
      options: [
        "None",
        "Mild",
        "Moderate",
        "Severe",
        "Very severe"
      ],
    },
  ];

  return (
    <>
      <div className="banner0">
        <img className="img01" src={pink} alt="banner image 1" />
        <div className="hero-text0">
          <p>Anxiety Assessment</p>
          <div className="container-fluid0">
            <div className="progress0 ">
              <ProgressBar
                className="custom-progress-bar"
                striped
                now={progressBarProps.now}
                label={`${totalScore}/56`}
                style={{ transition: 'background-color 0.5s ease-in-out' }}
                variant={progressBarProps.variant}
              />
            </div>
          </div>
        </div>
        <div className="text0">
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Option 5</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((questionObj, index) => (
                <tr key={index}>
                  <td className="questions_assessment_anxiety">{questionObj.question}</td>
                  {questionObj.options.map((option, optionIndex) => (
                    <td key={optionIndex}>
                      <label>
                        <input
                          type="radio"
                          name={`question${index}`}
                          value={optionIndex}
                          checked={selectedOptions[index] === optionIndex}
                          onChange={() => handleOptionSelect(index, optionIndex)}
                        />
                        {option}
                      </label>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <Button onClick={handleSubmit} disabled={!allQuestionsAnswered} className={`${allQuestionsAnswered ? '' : 'disabled'}`}>Submit</Button>
          </div>
        </div>
      </div>
      {showPopup && popupContent} {/* Render the pop-up if showPopup is true */}
    </>
  );
};
