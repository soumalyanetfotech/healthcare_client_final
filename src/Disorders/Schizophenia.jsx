import React, { useState } from "react";
import "../css/Schizophenia.css"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import pink from "../assets/rectanglepink.png";
import disordergirl from "../assets/Disorders.png";
import pic1 from "../assets/cryingpicleft.png";
import pic12 from "../assets/rectanglewave.png";
import pic13 from "../assets/greenwave.png"
import Schizophenia1 from "../assets/Property 1=anxiety.png";
import Schizophenia2 from "../assets/Property 1=anxiety.png";
import Schizophenia3 from "../assets/Property 1=anxiety.png";
import Schizophenia4 from "../assets/Property 1=anxiety.png";
import Schizophenia5 from "../assets/Property 1=anxiety.png";
import Schizophenia6 from "../assets/Property 1=stress.png";
import cry from "../assets/crying_boy.png";
import assessmentpink from "../assets/Group 18ANX.png"
import green from "../assets/greenwave.png"

export const Schizophenia = () => {
  const [activeTab, setActiveTab] = useState("London1"); // Change default to null

  const openCity = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName); // Toggle activeTab
  };

  const tabContent1 = {
    London1: {
      heading: (
        <div className="tabContent1head_Schizophenia">
          <h3>Let's Beat Schizophenia</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Schizophenia">
          <p className="tabContent1text_p1_Schizophenia">
            Schizophenia is a common mental health concern that many people face at
            some point in 
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            Understanding Schizophenia is the first step in managing it.
          </p>
          <p className="tabContent1text_p2_Schizophenia">Potential  causes  of  Schizophenia   include:</p>
          <ul>
            <li>
              Genetics: where a family history of Schizophenia disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>
          ,
        </div>
      ),

    },
    Paris1: {
      heading: (
        <div className="tabContent1head_Schizophenia">
          <h3>Symptoms of Schizophenia?</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Schizophenia">
          <p className="tabContent1text_p1_Schizophenia">
            Schizophenia feels different for everyone. You might experience some of
            the
            physical and mental effects listed on this page, as well as effects
            in
            other areas of your life. Understanding Schizophenia is the first step in
            managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Schizophenia">Symptoms of Schizophenia include:</p>
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
        <div className="tabContent1head_Schizophenia">
          <h3>
            Let's Beat Schizophenia
          </h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Schizophenia">
          <p className="tabContent1text_p1_Schizophenia">
            Schizophenia is a common mental health concern that many people face at
            some point in 
            their lives. It can manifest in various ways, from general unease to
            intense panic.
             Understanding Schizophenia is the first step in managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Schizophenia">Potential causes of Schizophenia include:</p>
          <ul>
            <li>
              Genetics: where a family history of Schizophenia disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>
          <button class="ab_Schizophenia" type="button">
            <Link to="/assesment" className="abc_Schizophenia">Let's Try</Link>
          </button>
        </div>
      ),

    },
    Mumbai1: {
      heading: (
        <div className="tabContent1head_Schizophenia">
          <h3>Let's Beat Schizophenia</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Schizophenia">
          <p className="tabContent1text_p1_Schizophenia">
            Schizophenia is a common mental health concern that many people face at
            some point in <br />
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            <br /> Understanding Schizophenia is the first step in managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Schizophenia">Potential causes of Schizophenia include:</p>
          <ul>
            <li>
              Genetics: where a family history of Schizophenia disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>

        </div>
      ),
      // buttonText: <Link to="/Tabbed">Begin your journey</Link>,
    },
  };

  const [activeTab1, setActiveTab1] = useState("London2"); // Change default to null

  const openCity1 = (tabName) => {
    setActiveTab1(tabName === activeTab1 ? null : tabName); // Toggle activeTab
  };

  const tabContent2 = {
    London2: {
      heading: <h3>Let's Beat Schizophenia</h3>,
      text: "Schizophenia is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Schizophenia is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="tabutt_Schizophenia">Begin your journey</Link>,
    },
    Paris2: {
      heading: <h3>Let's Beat Depression</h3>,
      text: "Depression is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Schizophenia is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="tabutt_Schizophenia">Begin your journey</Link>,
    },
    Tokyo2: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Schizophenia is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="tabutt_Schizophenia">Begin your journey</Link>,
    },
  };
  return (
    <>
      <div className="Tabcon_tabbed_Schizophenia">
        <div class="her_tabbed_Schizophenia">
          <img className="assessmentpink_tabbed_Schizophenia" src={assessmentpink} />
          <table class="home_tabbed_Schizophenia">
            <tr>
              <td>
                <div class="content_left_tabbed_Schizophenia">
                  <div class="her1_tabbed_Schizophenia">
                    <p className="tabbed-p1_Schizophenia">Let's Beat Schizophenia!</p>
                    <p className="tabbed-p2_Schizophenia">Curious about your Schizophenia levels? Take our assessment test to gain insights into your current situation. It's the first step toward understanding and addressing your Schizophenia.</p>
                  </div>
                  <button class="assessment_hero_button_Schizophenia" type="button" variant="primary">Block level button</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
<img src={green} className="green_img_tabbed_Schizophenia" />
<div className="greenimage_p_Schizophenia">
<p className="tabbed_p3">Understanding Schizophenia</p>
          <p className="tabbed_p4_Schizophenia">Understanding Schizophenia: A Comprehensive Guide</p>
          </div>      

        <div className="tab1_Schizophenia">
          <button
            alt="Schizophenia1"
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
            alt="Schizophenia2"
            onClick={() => openCity("Mumbai1")}
            className={activeTab === "Mumbai1" ? "active" : ""}
          >
            Treatment
          </button>

          {activeTab && (
            <div className="tabcontent1_Schizophenia">
              <table>
                <tr>
                  <td>
                    <p className="cardtxt3_Schizophenia">{tabContent1[activeTab].heading}</p>
                    <p className="cardtxt4_Schizophenia">{tabContent1[activeTab].text}</p>

                    {/* <button type="button" className="butt11">
                  {tabContent1[activeTab].buttonText}
                </button> */}
                  </td>
                  <td>
                    <img
                      className="crying121_Schizophenia"
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


        <div class="wave1_Schizophenia">
          <img class="img91_tabbed_Schizophenia" src={pink} alt="girl icon" />
          <p class="cardtxt10_Schizophenia">Begin your journey</p>
          <p class="cardtxt20_Schizophenia">
            Explore other mental health concerns and discover more about the{" "}
            challenges and solutions related to different disorders.{" "}
          </p>
        </div>

        <div className="tab2_Schizophenia">
          <span>
          <img
            src={Schizophenia1}
            alt="Schizophenia1"
            onClick={() => openCity1("London2")}
            className={activeTab1 === "London2" ? "active" : ""}
          />
          <p>Schizophenia</p>
          </span>
          <span>
          <img
            src={Schizophenia2}
            alt="depression1"
            onClick={() => openCity1("Paris2")}
            className={activeTab1 === "Paris2" ? "active" : ""}
          />
          <p>Depression</p>
          </span>
          <span>
          <img
            src={Schizophenia3}
            alt="stress1"
            onClick={() => openCity1("Tokyo2")}
            className={activeTab1 === "Tokyo2" ? "active" : ""}
          />
          <p>Stress</p>
          </span>
          <span>
          <img
            src={Schizophenia4}
            alt="Schizophenia2"
            onClick={() => openCity1("London2")}
            className={activeTab1 === "London2" ? "active" : ""}
          />
          <p>Schizophenia</p>
          </span>
          <span>
          <img
            src={Schizophenia5}
            alt="depression2"
            onClick={() => openCity1("Paris2")}
            className={activeTab1 === "Paris2" ? "active" : ""}
          />
          <p>Schizophenia</p>
          </span>
          <span>
          <img
            src={Schizophenia6}
            alt="stress2"
            onClick={() => openCity1("Tokyo2")}
            className={activeTab1 === "Tokyo2" ? "active" : ""}
          />
          <p>Schizophenia</p>
          </span>
        </div>

        {/* <!-- Tab content --> */}
        {activeTab1 && (
          <div className="tabcontent2_Schizophenia">
            <table>
              <tr>
                <td>
                  <p className="cardtxt3_Schizophenia">{tabContent2[activeTab1].heading}</p>
                  <p className="cardtxt4_Schizophenia">{tabContent2[activeTab1].text}</p>

                  <button type="button_Schizophenia">
                    {tabContent2[activeTab1].buttonText}
                  </button>
                </td>
                <td>
                  <img className="crying122_Schizophenia" src={cry} alt="crying boy image" />
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
