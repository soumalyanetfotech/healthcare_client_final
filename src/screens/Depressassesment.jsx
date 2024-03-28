import "../css/Depressassesment.css";
// import { Assesment1 } from '../accounts/Assesment1';
// import flower1 from "../assets/flower1.png";
// import flower2 from "../accounts/assets1/flower2.png";
// import flower3 from "../assets/flower3.png";
// import brain from "../assets/brain.png";
import pink from "../assets/rectanglepink.png";
// import ProgressBar from "react-bootstrap/ProgressBar"; // import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const DepressionAssesment = () => {
  const [selectedOptions, setSelectedOptions] = useState(Array(7).fill(null));
  const [answersSubmitted, setAnswersSubmitted] = useState(false);

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const allQuestionsAnswered = selectedOptions.every(
    (option) => option !== null
  );

  const calculateTotalScore = () => {
    return selectedOptions.reduce((total, option) => total + option, 0);
  };

  const interpretAnxietySeverity = (totalScore) => {
    if (totalScore >= 0 && totalScore <= 4) {
      return "Minimal depression";
    } else if (totalScore >= 5 && totalScore <= 9) {
      return "Mild depression";
    } else if (totalScore >= 10 && totalScore <= 14) {
      return "Moderate depression";
    }
    else if (totalScore >= 15 && totalScore <= 19) {
    return "Moderately severe depression";
  }
    else {
      return "Severe depression";
    }
  };

  const handleSaveClick = () => {
    const newTotalScore = calculateTotalScore();
    const newAnxietySeverity = interpretAnxietySeverity(newTotalScore);

    setAnswersSubmitted(true);

    // Display modal with score and severity information, along with the new question about seeing a doctor
    const modal = document.getElementById("myModal");
    const modalContent = document.getElementById("modalContent");

    modal.style.display = "block";
    modalContent.innerHTML = `
        <h2>Total Score: ${newTotalScore}/27</h2>
        <h2>Anxiety Severity: ${newAnxietySeverity}</h2>
        <h2>Would you like to see a doctor?</h2>
        <button>Yes</button>
        <button><Link to="/doctor">No</Link></button>

    `;
  };

  const closeModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const questions = [
    {
      question: "Over the last two weeks, how often have you been bothered by little interest or pleasure in doing things?",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Over the last two weeks, how often have you been bothered by feeling down, depressed, or hopeless?",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Over the last two weeks, how often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Over the last two weeks, how often have you been bothered by feeling tired or having little energy?",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Over the last two weeks, how often have you been bothered by poor appetite or overeating?",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Over the last two weeks, how often have you been bothered by feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
      question: "Over the last two weeks, how often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching TV?",
      options: [
        "Not at all",
        "Several Days",
        "More Than Half the Days",
        "Nearly Every day",
      ],
    },
    {
        question: "Over the last two weeks, how often have you been bothered by moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
        options: [
          "Not at all",
          "Several Days",
          "More Than Half the Days",
          "Nearly Every day",
        ],
      },
      {
        question: "Over the last two weeks, how often have you been bothered by thoughts that you would be better off dead or of hurting yourself in some way?",
        options: [
          "Not at all",
          "Several Days",
          "More Than Half the Days",
          "Nearly Every day",
        ],
      },
  ];

  return (
    <>
      <div class="banner0de">
        <img class="img01de" src={pink} alt="banner image 1" />

        <div class="hero-text0de">
          <h2>Anxiety Assessment</h2>
          {/* <img class="brain0de" src={brain} alt="banner image 1" /> */}
          {/* <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"> */}
          <div class="container-fluid0de">
            {/* <div className="progress0de">
              <ProgressBar striped variant="success" now={50} />
            </div> */}
          </div>
        </div>
        {/* <div class="wave0">
          <img class="img0" src={flower1} alt="girl icon" />
          <img class="img00" src={flower2} alt="girl icon" />
        </div> */}
        <div className="text0de">
          {questions.map((questionObj, questionIndex) => (
            <div key={questionIndex}>
              <p className="abcd1234de">{`Q${questionIndex + 1}: ${
                questionObj.question
              }`}</p>
              {questionObj.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  <p className="abcd123de">
                    <input
                                type="radio"
                                name={`question${questionIndex}`}
                                value={optionIndex}
                                checked={selectedOptions[questionIndex] === optionIndex}
                                onChange={() => handleOptionSelect(questionIndex, optionIndex)}
                            />
                    {` ${option}`}
                  </p>
                </label>
              ))}
            </div>
          ))}

          <button
            onClick={handleSaveClick}
            disabled={!allQuestionsAnswered}
            className="button_space2de"
          >
            Save
          </button>

          <div id="myModalde" className="modalde">
            <div className="modal-contentde" id="modalContent">
              <span className="closede" onClick={closeModal}>
                &times;
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
