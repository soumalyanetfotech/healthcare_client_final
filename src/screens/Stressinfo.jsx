import React, { useState } from "react";
import "../css/Stressinfo.css";

import { Link } from "react-router-dom";
import pink from "../assets/rectanglepink.png";
import disordergirl from "../assets/Disorders.png";
import pic1 from "../assets/cryingpicleft.png";
import pic12 from "../assets/rectanglewave.png";
import pic13 from "../assets/greenwave.png";
import anxiety1 from "../assets/Property 1=anxiety.png";
import anxiety2 from "../assets/Property 1=depression.png";
import anxiety3 from "../assets/Property 1=depression.png";
import anxiety4 from "../assets/Property 1=anxiety.png";
import anxiety5 from "../assets/Property 1=anxiety.png";
import anxiety6 from "../assets/Property 1=stress.png";
import cry from "../assets/crying_boy.png";

export const Stressinfo = () => {
  const [activeTab, setActiveTab] = useState("London1"); // Change default to null

  const openCity = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName); // Toggle activeTab
  };

  const tabContent1 = {
    London1: {
      heading: (
        <div className="tabContent1headstress">
          <h3>Let's Beat Stress</h3>
        </div> 
      ),
      text: (
        <div className="tabContent1textstress">
          <p>
            Stress is a common mental health concern that many people face at
            some point in <br />
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            <br /> Understanding anxiety is the first step in managing it.
          </p>
          <h5>Potential causes of anxiety include:</h5>
          <ul>
            <li>
              Genetics: where a family history of anxiety disorders may increase
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
        <div className="tabContent1headstress">
          <h3>Symptoms of Stress?</h3>
        </div>
      ),
      text: (
        <div className="tabContent1textstress">
          <p>
            Stress feels different for everyone. You might experience some of
            the <br />
            physical and mental effects listed on this page, as well as effects
            in <br />
            other areas of your life. Understanding anxiety is the first step in
            managing it.
          </p>{" "}
          <h5>Symptoms of Stress include:</h5>
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
        <div className="tabContent1headstress">
          <h3>
            <strong>Let's Beat Stress</strong>
          </h3>
        </div>
      ),
      text: (
        <div className="tabContent1textstress">
          <p>
          Stress is a common mental health concern that many people face at
            some point in <br />
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            <br /> Understanding anxiety is the first step in managing it.
          </p>{" "}
          <h5>Potential causes of Stress include:</h5>
          <ul>
            <li>
              Genetics: where a family history of anxiety disorders may increase
              the risk.
            </li>
            <li>Life experiences, such as traumatic events.</li>
            <li>chronic stress</li>
            <li>Imbalances in brain chemistry and neurotransmitters</li>
          </ul>
          <button class="abstress" type="button">
            <Link to="/assesment"className="abcStress">Let's Try</Link>
          </button>
        </div>
      ),
    
    },
    Mumbai1: {
      heading: (
        <div className="tabContent1headstress">
          <h3>Let's Beat Stress</h3>
        </div>
      ),
      text: (
        <div className="tabContent1textstress">
          <p>
          Stress is a common mental health concern that many people face at
            some point in <br />
            their lives. It can manifest in various ways, from general unease to
            intense panic.
            <br /> Understanding anxiety is the first step in managing it.
          </p>{" "}
          <h5>Potential causes of Stress include:</h5>
          <ul>
            <li>
              Genetics: where a family history of stress disorders may increase
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
      heading: <h3>Let's Beat Anxiety</h3>,
      text: "Anxiety is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/Tabbed" className="tabuttstress">Begin your journey</Link>,
    },
    Paris2: {
      heading: <h3>Let's Beat Depression</h3>,
      text: "Depression is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/Tabbed"className="tabuttstress">Begin your journey</Link>,
    },
    Tokyo2: {
      heading: <h3>Let's Beat Stress</h3>,
      text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
      buttonText: <Link to="/Tabbed"className="tabuttstress">Begin your journey</Link>,
    },
  };
  return (
    <>
      <div className="Tabconstress">
        <div class="her1stress">
          <table class="home1stress">
            <tr>
              <td>
                <div class="her-text1stress">
                  <p class="btext-21stress">Lets Beat Stress !</p>
                  <p class="btext-31stress">
                    <table>
                      <tr>
                        <td>
                          <p>Curious about your anxiety levels? Take our assessment test
                    to</p>
                  <p>
                    gain insights into your current situation. It's the first
                    step toward
                  </p>
                  <p>understanding and addressing your anxiety."</p>
                  </td>
                    
                      </tr>
                    </table>
                    
                  </p>
                </div>
              </td>
              <td>
                <img class="herimg21stress" src={pic1} alt="" />
              </td>
            </tr>
          </table>

          <button class="cta11stress" type="button">
            <Link to="/assesment"className="cta111stress">Begin Assesments</Link>
          </button>
          <img class="heroic13stress" src={pic12} alt="" />
        </div>
        <div>
          <img class="heroic14stress" src={pic13} alt="" />
          <p className="greencontainstress">Understanding Stress</p>
          <p className="greencontain1stress">
            Understanding Anxiety: A Comprehensive Guide
          </p>
        </div>
        <div className="tab1stress">
          <button
            alt="anxiety1"
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
            alt="anxiety2"
            onClick={() => openCity("Mumbai1")}
            className={activeTab === "Mumbai1" ? "active" : ""}
          >
            Treatment
          </button>
        </div>

        {/* <!-- Tab content --> */}
        {activeTab && (
          <div className="tabcontent1stress">
            <table>
              <tr>
                <td>
                  <p className="cardtxt3stress">{tabContent1[activeTab].heading}</p>
                  <p className="cardtxt4stress">{tabContent1[activeTab].text}</p>

                  {/* <button type="button" className="butt11">
                  {tabContent1[activeTab].buttonText}
                </button> */}
                </td>
                <td>
                  <img
                    className="crying121stress"
                    src={disordergirl}
                    alt="crying boy image"
                  />
                </td>
              </tr>
            </table>
          </div>
        )}

        <div class="wave1stress">
          <img class="img91stress" src={pink} alt="girl icon" />
          <p class="cardtxt10stress">Begin your journey</p>
          <p class="cardtxt20stress">
            Explore other mental health concerns and discover more about the{" "}
            <br />
            challenges and solutions related to different disorders.{" "}
          </p>
        </div>

        <div className="tab2stress">
          <img
            src={anxiety1}
            alt="anxiety1"
            onClick={() => openCity1("London2")}
            className={activeTab1 === "London2" ? "active" : ""}
          />
          <img
            src={anxiety2}
            alt="depression1"
            onClick={() => openCity1("Paris2")}
            className={activeTab1 === "Paris2" ? "active" : ""}
          />
          <img
            src={anxiety3}
            alt="stress1"
            onClick={() => openCity1("Tokyo2")}
            className={activeTab1 === "Tokyo2" ? "active" : ""}
          />
          <img
            src={anxiety4}
            alt="anxiety2"
            onClick={() => openCity1("London2")}
            className={activeTab1 === "London2" ? "active" : ""}
          />
          <img
            src={anxiety5}
            alt="depression2"
            onClick={() => openCity1("Paris2")}
            className={activeTab1 === "Paris2" ? "active" : ""}
          />
          <img
            src={anxiety6}
            alt="stress2"
            onClick={() => openCity1("Tokyo2")}
            className={activeTab1 === "Tokyo2" ? "active" : ""}
          />
        </div>

        {/* <!-- Tab content --> */}
        {activeTab1 && (
          <div className="tabcontent2stress">
            <table>
              <tr>
                <td>
                  <p className="cardtxt3stress">{tabContent2[activeTab1].heading}</p>
                  <p className="cardtxt4stress">{tabContent2[activeTab1].text}</p>

                  <button type="button">
                    {tabContent2[activeTab1].buttonText}
                  </button>
                </td>
                <td>
                  <img className="crying122stress" src={cry} alt="crying boy image" />
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
