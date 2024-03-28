import React, { useState } from "react";
import "../css/Stress.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import pink from "../assets/rectanglepink.png";
import disordergirl from "../assets/Disorders.png";
import pic1 from "../assets/cryingpicleft.png";
import pic12 from "../assets/rectanglewave.png";
import pic13 from "../assets/greenwave.png";
import Stress1 from "../assets/Property 1=stress.png";
import Stress2 from "../assets/Property 1=stress.png";
import Stress3 from "../assets/Property 1=stress.png";
import Stress4 from "../assets/Property 1=stress.png";
import Stress5 from "../assets/Property 1=stress.png";
import Stress6 from "../assets/Property 1=stress.png";
import cry from "../assets/crying_boy.png";
import assessmentpink from "../assets/Group 18ANX.png";
import green from "../assets/greenwave.png";

export const Stress = () => {
  const [activeTab, setActiveTab] = useState("London1");

  const openCity = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  const tabContent1 = {
    London1: {
      heading: (
        <div className="tabContent1head_Stress">
          <h3>Let's Beat Stress</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Stress">
          <p className="tabContent1text_p1_Stress">
            Stress is a common mental health concern that many people face at
            some point in their lives. It can manifest in various ways, from
            general unease to intense panic. Understanding Stress is the first
            step in managing it.
          </p>
          <p className="tabContent1text_p2_Stress">
            Potential causes of Stress include:
          </p>
          <ul>
            <li>
              Genetics: where a family history of Stress disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>
          
        </div>
      ),
    },
    Paris1: {
      heading: (
        <div className="tabContent1head_Stress">
          <h3>Symptoms of Stress?</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Stress">
          <p className="tabContent1text_p1_Stress">
            Stress feels different for everyone. You might experience some of
            the physical and mental effects listed on this page, as well as
            effects in other areas of your life. Understanding Stress is the
            first step in managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Stress">
            Symptoms of Stress include:
          </p>
          <ul>
            <li>A churning feeling in your stomach.</li>
            <li>Feeling light-headed or dizzy.</li>
            <li>Faster breathing.</li>
            <li>needing the toilet more or less often</li>
          </ul>
          ,
        </div>
      ),
    },
    Tokyo1: {
      heading: (
        <div className="tabContent1head_Stress">
          <h3>Let's Beat Stress</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Stress">
          <p className="tabContent1text_p1_Stress">
            Stress is a common mental health concern that many people face at
            some point in their lives. It can manifest in various ways, from
            general unease to intense panic. Understanding Stress is the first
            step in managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Stress">
            Potential causes of Stress include:
          </p>
          <ul>
            <li>
              Genetics: where a family history of Stress disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>
          {/* <button class="ab_Stress" type="button">
            <Link to="/assesment" className="abc_Stress">
              Let's Try
            </Link>
          </button> */}
        </div>
      ),
    },
    Mumbai1: {
      heading: (
        <div className="tabContent1head_Stress">
          <h3>Let's Beat Stress</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Stress">
          <p className="tabContent1text_p1_Stress">
            Stress is a common mental health concern that many people face at
            some point in <br />
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            <br /> Understanding Stress is the first step in managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Stress">
            Potential causes of Stress include:
          </p>
          <ul>
            <li>
              Genetics: where a family history of Stress disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>
        </div>
      ),
    },
  };

  const [activeTab1, setActiveTab1] = useState("London2"); // Change default to null

  const openCity1 = (tabName) => {
    setActiveTab1(tabName === activeTab1 ? null : tabName); // Toggle activeTab
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleBeginClick = () => {
    setShowPopup(true);
  };

  const handleCancelClick = () => {
    setShowPopup(false);
  };

  const handlePrimaryAction = () => {
    // alert("You clicked the primary button");
    setShowPopup(false);
  };

  const tabContent2 = {
    London2: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Stress is the first step in managing it.",
      buttonText: (
        <Link to="/stressinfo" className="tabutt_Stress">
          Begin your journey
        </Link>
      ),
    },
    Paris2: {
      heading: <h3>Let's Beat Depression</h3>,
      text: "Depression is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Stress is the first step in managing it.",
      buttonText: (
        <Link to="/depressioninfo" className="tabutt_Stress">
          Begin your journey
        </Link>
      ),
    },
    Tokyo2: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Stress is the first step in managing it.",
      buttonText: (
        <Link to="/stressinfo" className="tabutt_Stress">
          Begin your journey
        </Link>
      ),
    },
  };
  return (
    <>
      <div className="Tabcon_tabbed_Stress">
        <div class="her_tabbed_Stress">
          <img className="assessmentpink_tabbed_Stress" src={assessmentpink} />
          <table class="home_tabbed_Stress">
            <tr>
              <td>
                <div class="content_left_tabbed_Stress">
                  <div class="her1_tabbed_Stress">
                    <p className="tabbed-p1_Stress">Let's Beat Stress!</p>
                    <p className="tabbed-p2_Stress">
                      Curious about your Stress levels? Take our assessment test
                      to gain insights into your current situation. It's the
                      first step toward understanding and addressing your
                      Stress.
                    </p>
                  </div>
                  <button
                    className="assessment_hero_button_Stress"
                    type="button"
                    variant="primary"
                    onClick={handleBeginClick}
                  >
                    Let's Begin
                  </button>
                  {/* Pop-up */}
                  {showPopup && (
                    <div className="custom-popup_stress">
                      <h2>Hello Friend !!</h2>
                      <p>Consult our experts</p>
                      <div className="popup-buttons_stress">
                        <button onClick={handleCancelClick}>Cancel</button>
                        <Link to="/doctor">
                          <button onClick={handlePrimaryAction}>Connect</button>
                        </Link>{" "}
                      </div>
                    </div>
                  )}{" "}
                </div>
              </td>
            </tr>
          </table>
        </div>
        <img src={green} className="green_img_tabbed_Stress" />
        <div className="greenimage_p_Stress">
          <p className="tabbed_p3">Understanding Stress</p>
          <p className="tabbed_p4_Stress">
            Understanding Stress: A Comprehensive Guide
          </p>
        </div>

        <div className="tab1_Stress">
          <button
            alt="Stress1"
            onClick={() => openCity("London1")}
            className={activeTab === "London1" ? "active" : ""}
          >
            Overview
          </button>

          <button
            alt="depression1"
            onClick={() => openCity("Paris1")}
            className={activeTab === "Paris1" ? "active" : ""}
          >
            Symptoms
          </button>

          <button
            alt="stress1"
            onClick={() => openCity("Tokyo1")}
            className={activeTab === "Tokyo1" ? "active" : ""}
          >
            Assesments
          </button>

          <button
            alt="Stress2"
            onClick={() => openCity("Mumbai1")}
            className={activeTab === "Mumbai1" ? "active" : ""}
          >
            Treatment
          </button>

          {activeTab && (
            <div className="tabcontent1_Stress">
              <table>
                <tr>
                  <td>
                    <p className="cardtxt1_Stress">
                      {tabContent1[activeTab].heading}
                    </p>
                    <p className="cardtxt2_Stress">
                      {tabContent1[activeTab].text}
                    </p>

                    {/* <button type="button" className="butt11">
                  {tabContent1[activeTab].buttonText}
                </button> */}
                  </td>
                  <td>
                    <img
                      className="crying121_Stress"
                      src={disordergirl}
                      alt="crying boy image"
                    />
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>

        {/* <!-- Tab content --> */}

        <div class="wave1_Stress">
          <img class="img91_tabbed_Stress" src={pink} alt="girl icon" />
          <p class="cardtxt10_Stress">Begin your journey</p>
          <p class="cardtxt20_Stress">
            Explore other mental health concerns and discover more about the{" "}
            challenges and solutions related to different disorders.{" "}
          </p>
        </div>

        <div className="tab2_Stress">
          <span>
            <img
              src={Stress1}
              alt="Stress1"
              onClick={() => openCity1("London2")}
              className={activeTab1 === "London2" ? "active" : ""}
            />
            <p>Stress</p>
          </span>
          <span>
            <img
              src={Stress2}
              alt="depression1"
              onClick={() => openCity1("Paris2")}
              className={activeTab1 === "Paris2" ? "active" : ""}
            />
            <p>Depression</p>
          </span>
          <span>
            <img
              src={Stress3}
              alt="stress1"
              onClick={() => openCity1("Tokyo2")}
              className={activeTab1 === "Tokyo2" ? "active" : ""}
            />
            <p>Stress</p>
          </span>
          <span>
            <img
              src={Stress4}
              alt="Stress2"
              onClick={() => openCity1("London2")}
              className={activeTab1 === "London2" ? "active" : ""}
            />
            <p>Stress</p>
          </span>
          <span>
            <img
              src={Stress5}
              alt="depression2"
              onClick={() => openCity1("Paris2")}
              className={activeTab1 === "Paris2" ? "active" : ""}
            />
            <p>Stress</p>
          </span>
          <span>
            <img
              src={Stress6}
              alt="stress2"
              onClick={() => openCity1("Tokyo2")}
              className={activeTab1 === "Tokyo2" ? "active" : ""}
            />
            <p>Stress</p>
          </span>
        </div>

        {/* <!-- Tab content --> */}
        {activeTab1 && (
          <div className="tabcontent2_Stress">
            <table>
              <tr>
                <td>
                  <p className="cardtxt3_Stress">
                    {tabContent2[activeTab1].heading}
                  </p>
                  <p className="cardtxt4_Stress">
                    {tabContent2[activeTab1].text}
                  </p>

                  <button type="button_Stress">
                    {tabContent2[activeTab1].buttonText}
                  </button>
                </td>
                <td>
                  <img
                    className="crying122_Stress"
                    src={cry}
                    alt="crying boy image"
                  />
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
