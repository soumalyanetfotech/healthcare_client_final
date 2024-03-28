import React, { useState } from "react";
import "../css/Bipolar.css"
// import "../css/TabbedInterface.css";
import Button from 'react-bootstrap/Button';

import { Link } from "react-router-dom";
import pink from "../assets/rectanglepink.png";
import disordergirl from "../assets/Disorders.png";
import pic1 from "../assets/cryingpicleft.png";
import pic12 from "../assets/rectanglewave.png";
import pic13 from "../assets/greenwave.png"
import Bipolar1 from "../assets/Property 1=stress.png";
import Bipolar2 from "../assets/Property 1=depression.png";
import Bipolar3 from "../assets/Property 1=depression.png";
import Bipolar4 from "../assets/Property 1=stress.png";
import Bipolar5 from "../assets/Property 1=stress.png";
import Bipolar6 from "../assets/Property 1=stress.png";
import cry from "../assets/crying_boy.png";
import assessmentpink from "../assets/Group 18ANX.png"
import green from "../assets/greenwave.png"

export const Bipolar = () => {
  const [activeTab, setActiveTab] = useState("London1"); // Change default to null

  const openCity = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName); // Toggle activeTab
  };

  const tabContent1 = {
    London1: {
      heading: (
        <div className="tabContent1head_Bipolar">
          <h3>Let's Beat Bipolar</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Bipolar">
          <p className="tabContent1text_p1_Bipolar">
            Bipolar is a common mental health concern that many people face at
            some point in 
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            Understanding Bipolar is the first step in managing it.
          </p>
          <p className="tabContent1text_p2_Bipolar">Potential  causes  of  Bipolar   include:</p>
          <ul>
            <li>
              Genetics: where a family history of Bipolar disorders may increase
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
        <div className="tabContent1head_Bipolar">
          <h3>Symptoms of Bipolar?</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Bipolar">
          <p className="tabContent1text_p1_Bipolar">
            Bipolar feels different for everyone. You might experience some of
            the
            physical and mental effects listed on this page, as well as effects
            in
            other areas of your life. Understanding Bipolar is the first step in
            managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Bipolar">Symptoms of Bipolar include:</p>
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
        <div className="tabContent1head_Bipolar">
          <h3>
            Let's Beat Bipolar
          </h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Bipolar">
          <p className="tabContent1text_p1_Bipolar">
            Bipolar is a common mental health concern that many people face at
            some point in 
            their lives. It can manifest in various ways, from general unease to
            intense panic.
             Understanding Bipolar is the first step in managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Bipolar">Potential causes of Bipolar include:</p>
          <ul>
            <li>
              Genetics: where a family history of Bipolar disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>
          <button class="ab_Bipolar" type="button">
            <Link to="/assesment" className="abc_Bipolar">Let's Try</Link>
          </button>
        </div>
      ),

    },
    Mumbai1: {
      heading: (
        <div className="tabContent1head_Bipolar">
          <h3>Let's Beat Bipolar</h3>
        </div>
      ),
      text: (
        <div className="tabContent1text_Bipolar">
          <p className="tabContent1text_p1_Bipolar">
            Bipolar is a common mental health concern that many people face at
            some point in <br />
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            <br /> Understanding Bipolar is the first step in managing it.
          </p>{" "}
          <p className="tabContent1text_p2_Bipolar">Potential causes of Bipolar include:</p>
          <ul>
            <li>
              Genetics: where a family history of Bipolar disorders may increase
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
      heading: <h3>Let's Beat Bipolar</h3>,
      text: "Bipolar is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Bipolar is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="tabutt_Bipolar">Begin your journey</Link>,
    },
    Paris2: {
      heading: <h3>Let's Beat Depression</h3>,
      text: "Depression is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Bipolar is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="tabutt_Bipolar">Begin your journey</Link>,
    },
    Tokyo2: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding Bipolar is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="tabutt_Bipolar">Begin your journey</Link>,
    },
  };
  return (
    <>
      <div className="Tabcon_tabbed_Bipolar">
        <div class="her_tabbed_Bipolar">
          <img className="assessmentpink_tabbed_Bipolar" src={assessmentpink} />
          <table class="home_tabbed_Bipolar">
            <tr>
              <td>
                <div class="content_left_tabbed_Bipolar">
                  <div class="her1_tabbed_Bipolar">
                    <p className="tabbed-p1_Bipolar">Let's Beat Bipolar!</p>
                    <p className="tabbed-p2_Bipolar">Curious about your Bipolar levels? Take our assessment test to gain insights into your current situation. It's the first step toward understanding and addressing your Bipolar.</p>
                  </div>
                  <button class="assessment_hero_button_Bipolar" type="button" variant="primary">Block level button</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
<img src={green} className="green_img_tabbed_Bipolar" />
<div className="greenimage_p_Bipolar">
<p className="tabbed_p3">Understanding Bipolar</p>
          <p className="tabbed_p4_Bipolar">Understanding Bipolar: A Comprehensive Guide</p>
          </div>      

        <div className="tab1_Bipolar">
          <button
            alt="Bipolar1"
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
            alt="Bipolar2"
            onClick={() => openCity("Mumbai1")}
            className={activeTab === "Mumbai1" ? "active" : ""}
          >
            Treatment
          </button>

          {activeTab && (
            <div className="tabcontent1_Bipolar">
              <table>
                <tr>
                  <td>
                    <p className="cardtxt3_Bipolar">{tabContent1[activeTab].heading}</p>
                    <p className="cardtxt4_Bipolar">{tabContent1[activeTab].text}</p>

                    {/* <button type="button" className="butt11">
                  {tabContent1[activeTab].buttonText}
                </button> */}
                  </td>
                  <td>
                    <img
                      className="crying121_Bipolar"
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


        <div class="wave1_Bipolar">
          <img class="img91_tabbed_Bipolar" src={pink} alt="girl icon" />
          <p class="cardtxt10_Bipolar">Begin your journey</p>
          <p class="cardtxt20_Bipolar">
            Explore other mental health concerns and discover more about the{" "}
            challenges and solutions related to different disorders.{" "}
          </p>
        </div>

        <div className="tab2_Bipolar">
          <span>
          <img
            src={Bipolar1}
            alt="Bipolar1"
            onClick={() => openCity1("London2")}
            className={activeTab1 === "London2" ? "active" : ""}
          />
          <p>Bipolar</p>
          </span>
          <span>
          <img
            src={Bipolar2}
            alt="depression1"
            onClick={() => openCity1("Paris2")}
            className={activeTab1 === "Paris2" ? "active" : ""}
          />
          <p>Depression</p>
          </span>
          <span>
          <img
            src={Bipolar3}
            alt="stress1"
            onClick={() => openCity1("Tokyo2")}
            className={activeTab1 === "Tokyo2" ? "active" : ""}
          />
          <p>Stress</p>
          </span>
          <span>
          <img
            src={Bipolar4}
            alt="Bipolar2"
            onClick={() => openCity1("London2")}
            className={activeTab1 === "London2" ? "active" : ""}
          />
          <p>Bipolar</p>
          </span>
          <span>
          <img
            src={Bipolar5}
            alt="depression2"
            onClick={() => openCity1("Paris2")}
            className={activeTab1 === "Paris2" ? "active" : ""}
          />
          <p>Bipolar</p>
          </span>
          <span>
          <img
            src={Bipolar6}
            alt="stress2"
            onClick={() => openCity1("Tokyo2")}
            className={activeTab1 === "Tokyo2" ? "active" : ""}
          />
          <p>Bipolar</p>
          </span>
        </div>

        {/* <!-- Tab content --> */}
        {activeTab1 && (
          <div className="tabcontent2_Bipolar">
            <table>
              <tr>
                <td>
                  <p className="cardtxt3_Bipolar">{tabContent2[activeTab1].heading}</p>
                  <p className="cardtxt4_Bipolar">{tabContent2[activeTab1].text}</p>

                  <button type="button_Bipolar">
                    {tabContent2[activeTab1].buttonText}
                  </button>
                </td>
                <td>
                  <img className="crying122_Bipolar" src={cry} alt="crying boy image" />
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
