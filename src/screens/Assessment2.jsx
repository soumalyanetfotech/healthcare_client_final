import React, { useState } from "react";
import { ProgressBar, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import config from '../config.json';
import "../css/Assesment2.css";
import pink from "../assets/rectanglepink.png";

const baseUrl = config.base_url;


export const Assesment2 = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(14).fill(null));
  const [submitted, setSubmitted] = useState(false);
  
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

  console.log(totalScore);

  const handleSubmit = () => {
    const submitAssessment = async () => {
      const email = localStorage.getItem("email"); 
      try {
        const response = await fetch(`${baseUrl}/depressioninfo`, {
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

  const questions = [
    {
      question: "Feeling sad or down in the dumps",
      options: [
        "Absent",
        "These feeling are often absent",
        "These feeling are often present",
        "These feeling are present most of the time",
        "These feeling are always present"
      ],
    },
    {
      question: "Decreased appetite or weight loss",
      options: [
        "Absent",
        "These problems are often absent",
        "These problems are often present",
        "These problems are present most of the time",
        "These problems are always present"
      ],
    },
    {
      question: "Trouble sleeping",
      options: [
        "Absent",
        "These problems are often absent",
        "These problems are often present",
        "These problems are present most of the time",
        "These problems are always present"
      ],
    },
    {
      question: "Feeling slowed down",
      options: [
        "Absent",
        "These feelings are often absent",
        "These feelings are often present",
        "These feelings are present most of the time",
        "These feelings are always present"
      ],
    },
    {
      question: "Feeling agitated",
      options: [
        "Absent",
        "These feelings are often absent",
        "These feelings are often present",
        "These feelings are present most of the time",
        "These feelings are always present"
      ],
    },
    {
      question: "Lack of interest in sex",
      options: [
        "Absent",
        "These problems are often absent",
        "These problems are often present",
        "These problems are present most of the time",
        "These problems are always present"
      ],
    },
    {
      question: "Feeling fatigued",
      options: [
        "Absent",
        "These feelings are often absent",
        "These feelings are often present",
        "These feelings are present most of the time",
        "These feelings are always present"
      ],
    },
    {
      question: "Feeling of worthlessness or guilt",
      options: [
        "Absent",
        "These feelings are often absent",
        "These feelings are often present",
        "These feelings are present most of the time",
        "These feelings are always present"
      ],
    },
    {
      question: "Difficulty in concentrating or making decisions",
      options: [
        "Absent",
        "These problems are often absent",
        "These problems are often present",
        "These problems are present most of the time",
        "These problems are always present"
      ],
    },
    {
      question: "Suicidal thoughts",
      options: [
        "Absent",
        "These thoughts are often absent",
        "These thoughts are often present",
        "These thoughts are present most of the time",
        "These thoughts are always present"
      ],
    },
    {
      question: "Loss of interest in work or other activities",
      options: [
        "Absent",
        "These problems are often absent",
        "These problems are often present",
        "These problems are present most of the time",
        "These problems are always present"
      ],
    },
    {
      question: "Decrease in sexual interest or activity",
      options: [
        "Absent",
        "These problems are often absent",
        "These problems are often present",
        "These problems are present most of the time",
        "These problems are always present"
      ],
    },
    {
      question: "Psychomotor retardation",
      options: [
        "Absent",
        "These problems are often absent",
        "These problems are often present",
        "These problems are present most of the time",
        "These problems are always present"
      ],
    },
    {
      question: "Feeling of hopelessness",
      options: [
        "Absent",
        "These feelings are often absent",
        "These feelings are often present",
        "These feelings are present most of the time",
        "These feelings are always present"
      ],
    },
    {
      question: "Depressed mood",
      options: [
        "Absent",
        "These feelings are often absent",
        "These feelings are often present",
        "These feelings are present most of the time",
        "These feelings are always present"
      ],
    },
  ];


  return (
    <>
      <div className="banner0_HAM-D">
        <img className="img01_HAM-D" src={pink} alt="banner image 1" />
        <div className="hero-text0_HAM-D">
          <p>Anxiety Assessment</p>
          <div className="container-fluid0_HAM-D">
            <div className="progress0_HAM-D ">
              <ProgressBar
                className="custom-progress-bar_HAM-D"
                striped
                now={progressBarProps.now}
                label={`${totalScore}/56`}
                style={{ transition: 'background-color 0.5s ease-in-out' }}
                variant={progressBarProps.variant}
              />
            </div>
          </div>
        </div>
        <div className="text0_HAM-D">
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
                  <td className="questions_assessment_Depression">{questionObj.question}</td>
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
    </>
  );
};

