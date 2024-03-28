import React, { useState } from "react";
import "../css/Depressinfo.css";

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

export const Depressioninfo = () => {
  const [activeTab, setActiveTab] = useState("London1"); // Change default to null

  const openCity = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName); // Toggle activeTab
  };

  const tabContent1 = {
    London1: {
      heading: (
        <div className="tabContent1headdepress">
          <h3>Let's Beat Depression</h3>
        </div> 
      ),
      text: (
        <div className="tabContent1textdepress">
          <p>
          Depression is a common mental health concern that many people face at
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
        <div className="tabContent1headdepress">
          <h3>Symptoms of Depression?</h3>
        </div>
      ),
      text: (
        <div className="tabContent1textdepress">
          <p>
            Anxiety feels different for everyone. You might experience some of
            the <br />
            physical and mental effects listed on this page, as well as effects
            in <br />
            other areas of your life. Understanding anxiety is the first step in
            managing it.
          </p>{" "}
          <h5>Symptoms of Anxiety include:</h5>
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
        <div className="tabContent1headdepress">
          <h3>
            <strong>Let's Beat Depression</strong>
          </h3>
        </div>
      ),
      text: (
        <div className="tabContent1textdepress">
          <p>
          Depression is a common mental health concern that many people face at
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
          <button class="abdepress" type="button">
            <Link to="/assesment"className="abcdepress">Let's Try</Link>
          </button>
        </div>
      ),
    
    },
    Mumbai1: {
      heading: (
        <div className="tabContent1headdepress">
          <h3>Let's Beat Stress</h3>
        </div>
      ),
      text: (
        <div className="tabContent1textdepress">
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
    Chennai: {
        heading: <h3>Let's Beat Stress</h3>,
        text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
        buttonText: <Link to="/Tabbed"className="tabuttstress">Begin your journey</Link>,
      },
      Kerala: {
        heading: <h3>Let's Beat Stress</h3>,
        text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
        buttonText: <Link to="/Tabbed"className="tabuttstress">Begin your journey</Link>,
      },
      Delhi: {
        heading: <h3>Let's Beat Stress</h3>,
        text: "Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.",
        buttonText: <Link to="/Tabbed"className="tabuttstress">Begin your journey</Link>,
      },
  };
  return (
    <>
      <div className="Tabcondepress">
        <div class="her1depress">
          <table class="home1depress">
            <tr>
              <td>
                <div class="her-text1depress">
                  <p class="btext-21depress">Lets Beat Depression !</p>
                  <p class="btext-31depress">
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
                <img class="herimg21depress" src={pic1} alt="" />
              </td>
            </tr>
          </table>

          <button class="cta11depress" type="button">
            <Link to="/assesment2" className="cta111depress">Begin Assesments</Link>
          </button>
          <img class="heroic13depress" src={pic12} alt="" />
        </div>
        <div>
          <img class="heroic14depress" src={pic13} alt="" />
          <p className="greencontaindepress">Understanding Stress</p>
          <p className="greencontain1sdepress">
            Understanding Anxiety: A Comprehensive Guide
          </p>
        </div>
        <div className="tab1depress">
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
          <div className="tabcontent1depress">
            <table>
              <tr>
                <td>
                  <p className="cardtxt3depress">{tabContent1[activeTab].heading}</p>
                  <p className="cardtxt4depress">{tabContent1[activeTab].text}</p>

                  {/* <button type="button" className="butt11">
                  {tabContent1[activeTab].buttonText}
                </button> */}
                </td>
                <td>
                  <img
                    className="crying121depress"
                    src={disordergirl}
                    alt="crying boy image"
                  />
                </td>
              </tr>
            </table>
          </div>
        )}

        <div class="wave1depress">
          <img class="img91depress" src={pink} alt="girl icon" />
          <p class="cardtxt10depress">Begin your journey</p>
          <p class="cardtxt20depress">
            Explore other mental health concerns and discover more about the{" "}
            <br />
            challenges and solutions related to different disorders.{" "}
          </p>
        </div>

        <div className="tab2depress">
          <img
            src={anxiety1}
            alt="anxiety1"
            onClick={() => openCity1("London2")}
            className={activeTab1 === "London2" ? "active" : ""}
            id="depress"
          />
          <img
            src={anxiety2}
            alt="depression1"
            onClick={() => openCity1("Paris2")}
            className={activeTab1 === "Paris2" ? "active" : ""}
            id="depress"
          />
          <img
            src={anxiety3}
            alt="stress1"
            onClick={() => openCity1("Tokyo2")}
            className={activeTab1 === "Tokyo2" ? "active" : ""}
            id="depress"
          />
          <img
            src={anxiety4}
            alt="anxiety2"
            onClick={() => openCity1("Chennai")}
            className={activeTab1 === "Chennai" ? "active" : ""}
            id="depress"
          />
          <img
            src={anxiety5}
            alt="depression2"
            onClick={() => openCity1("Kerala")}
            className={activeTab1 === "Kerala" ? "active" : ""}
            id="depress"
          />
          <img
            src={anxiety6}
            alt="stress2"
            onClick={() => openCity1("Delhi")}
            className={activeTab1 === "Delhi" ? "active" : ""}
            id="depress"
          />
        </div>

        {/* <!-- Tab content --> */}
        {activeTab1 && (
          <div className="tabcontent2depress">
            <table>
              <tr>
                <td>
                  <p className="cardtxt3depress">{tabContent2[activeTab1].heading}</p>
                  <p className="cardtxt4depress">{tabContent2[activeTab1].text}</p>

                  <button type="button">
                    {tabContent2[activeTab1].buttonText}
                  </button>
                </td>
                <td>
                  <img className="crying122depress" src={cry} alt="crying boy image" />
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
