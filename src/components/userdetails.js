import React, { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import "../css/userDetails.css";
import { Link } from "react-router-dom";
import hero from "../assets/Group 10heroimg1.png";
import girl from "../assets/girl image.png";
import pink from "../assets/rectanglepink - Copy.png";
import anxiety1 from "../assets/Property 1=anxiety.png";
import anxiety2 from "../assets/Property 1=depression.png";
import anxiety3 from "../assets/Property 1=depression.png";
import anxiety4 from "../assets/Property 1=anxiety.png";
import anxiety5 from "../assets/Property 1=anxiety.png";
import anxiety6 from "../assets/Property 1=stress.png";
import cry from "../assets/crying_boy.png";
import frame1 from "../assets/Frame 63wellness img.jpg";
import frame2 from "../assets/Frame 67chat.png";
import frame3 from "../assets/Frame 70call.png";
import frame4 from "../assets/Frame 71Vcall.png";
import talk from "../assets/consultantimg.png";
import med from "../assets/Group 23meditation.png";
import green1 from "../assets/Group 16pink quote.png";
import team1 from "../assets/greenwave.png";
import team2 from "../assets/aboutteamimage.png";
import team3 from "../assets/unsplash_8YG31Xn4dSw.png";
import green from "../assets/green quote.png";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      activeTab: "Axniety_home" // Change default to null
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }

  Disorders_home_buttons = (tabName) => {
    this.setState(prevState => ({
      activeTab: prevState.activeTab === tabName ? null : tabName
    }));
  };

  render() {
    const { activeTab } = this.state;

    const tabContent = {
      Axniety_home: {
        heading: <h3>Let's Beat Anxiety</h3>,
        text: <p>Anxiety is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.</p>,
        buttonText: <Link to="/anxietyinfo" className="tabutt11"><span>Begin your journey</span></Link>,
      },
      Depression_home: {
        heading: <h3>Let's Beat Depression</h3>,
        text: <p>Depression is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.</p>,
        buttonText: <Link to="/depressioninfo" className="tabutt11">Begin your journey</Link>,
      },
      Stress_home: {
        heading: <h3>Let's Beat Stress</h3>,
        text: <p>Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.</p>,
        buttonText: <Link to="/stressinfo" className="tabutt11">Begin your journey</Link>,
      },
      Bipolar_home: {
        heading: <h3>Let's Beat Bipolar</h3>,
        text: <p>Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.</p>,
        buttonText: <Link to="/bipolarinfo" className="tabutt11">Begin your journey</Link>,
      },
      Schizophenia_home: {
        heading: <h3>Let's Beat Schizophenia</h3>,
        text: <p>Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.</p>,
        buttonText: <Link to="/schizopheniainfo" className="tabutt11">Begin your journey</Link>,
      },
      Sleep_disorder_home: {
        heading: <h3>Let's Beat Sleep Disorder</h3>,
        text: <p>Stress is a common mental health concern that many people face at some point in their lives. It can manifest in various ways, from general unease to intense panic. Understanding anxiety is the first step in managing it.</p>,
        buttonText: <Link to="/anxietyinfo" className="tabutt11">Begin your journey</Link>,
      },
    };

    return (
      <div>
        <div class="her">
          <img class="herimg1" src={hero} alt="" />
          {/* <div class="content-left"> */}
          <div class="her-text">
            <p class="btext-1">Take care of Your</p>
            <p class="btext-2">Mental Health</p>
            <p class="btext-3">
              A specialized medical facility that <br />
              provides diagnostic, therapeutic and <br />
              surgical services related to the eyes and<br />
              vision
            </p>
            <Button variant="primary" size="lg" className="btn btn-primary custom_btn_Home" >Get Started</Button>
          </div>
          {/* </div> */}
        </div>


        <div class="wave">
          <img class="img9" src={pink} alt="girl icon" />
          <p class="cardtxt1">Begin your journey</p>
          <p class="cardtxt2">
            Select the Disorder relevant to you and we will guide you
          </p>
        </div>

        <div className='tab_home'>
          <div className="tab">
            <span>
              <img
                src={anxiety1}
                alt="anxiety1"
                onClick={() => this.Disorders_home_buttons("Axniety_home")}
                className={activeTab === "Axniety_home" ? "active" : ""}
                id="anxiety111"
              />
              <p>Anxiety</p>
            </span>
            <span>
              <img
                src={anxiety2}
                alt="depression1"
                onClick={() => this.Disorders_home_buttons("Depression_home")}
                className={activeTab === "Depression_home" ? "active" : ""}
                id="anxiety111"
              />
              <p>Depression</p>
            </span>
            <span>
              <img
                src={anxiety3}
                alt="stress1"
                onClick={() => this.Disorders_home_buttons("Stress_home")}
                className={activeTab === "Stress_home" ? "active" : ""}
                id="anxiety111"
              />
              <p>Stress</p>
            </span>
            <span>

              <img
                src={anxiety4}
                alt="anxiety2"
                onClick={() => this.Disorders_home_buttons("Bipolar_home")}
                className={activeTab === "Bipolar_home" ? "active" : ""}
                id="anxiety111"
              />
              <p>Bipolar</p>
            </span>
            <span>
              <img
                src={anxiety5}
                alt="depression2"
                onClick={() => this.Disorders_home_buttons("Schizophenia_home")}
                className={activeTab === "Schizophenia_home" ? "active" : ""}
                id="anxiety111"
              />
              <p>Schizophenia</p>
            </span>
            <span>
              <img
                src={anxiety6}
                alt="stress2"
                onClick={() => this.Disorders_home_buttons("Sleep_disorder_home")} // Use this.Disorders_home_buttons instead of Disorders_home_buttons
                className={activeTab === "Sleep_disorder_home" ? "active" : ""}
                id="anxiety111"
              />
              <p>Sleep Disorder</p>
            </span>
          </div>

          {/* <!-- Tab content --> */}
          {activeTab && (
            <div className="tabcontent">
              <table>
                <tr>
                  <td>
                    <p className="cardtxt3">{tabContent[activeTab].heading}</p>
                    <p className="cardtxt4">{tabContent[activeTab].text}</p>
                    <p type="button">
                      {tabContent[activeTab].buttonText}
                    </p>
                  </td>
                  <td>
                    <img className='crying12' src={cry} alt="crying boy image" />
                  </td>
                </tr>
              </table>
            </div>
          )}
        </div>


        <div className="quotes1">
          <img src={green} alt="green quote" />
          <p>
            Healing may not be easy, but it's possible. Every small step forward
            is a victory.
          </p>
        </div>

        <div class="well">
          <p class="well1">Your Path To wellness</p>
          <p class="well2">Step By Step Guidance Towards Wellness</p>
          <img src={frame1} alt="wellnes image" />
        </div>

        <div class="lets_talk">
          <div class="talk_row">
            <div class="talk_column">
              <p class="talk1">Talk It Out</p>
              <p class="talk2">
                Easily access our licensed counselors and experts. Instant guidance and support tailored to your needs, whenever you need it. Your well-being, your way.
              </p>
              <div class='lets_talk_img'>
                <img class="talk-img" src={frame2} alt="chat" />
                <img class="talk-img" src={frame3} alt="call" />
                <img class="talk-img" src={frame4} alt="video call" />
              </div>
              <div>
              <Button variant="primary" size="lg" className="btn btn-primary btalk-button"  href='/doctor'>
                  Let's Connect
                </Button>
              </div>
            </div>
            <div class="talk_column">
              <img class="talk-img1" src={talk} alt="computer image" />
            </div>
          </div>
        </div>

        <div class="meditation">
          <p class="m1">Meditation & Mindfulness</p>
          <p class="m2">Your Path To Inner Calm Starts Here</p>
          <p class="m3">
            Begin your meditation journey and discover moments of tranquility and
            self-discovery. Dive into our Meditation Section with a range of
            meditation themes to choose from.
          </p>
          <img src={med} alt="meditation image" />
          <button type="button">Let's Explore</button>
        </div>

        <div class="quotes2">
          <img src={green1} alt="green quote" />
          <p>
            Healing may not be easy, but it's possible. Every small step forward
            is a victory.
          </p>
        </div>

        <div class="team">
          <div>
            <img class="team-img1" src={team1} alt="green" />
            <p class="team-text">About Team</p>
            <img class="team-img2" src={team2} alt=" team" />
          </div>

          <div>
            <img class="team-img team-img3" src={team3} alt="member-1" />
            <img class="team-img team-img4" src={team3} alt="member-2" />
            <img class="team-img team-img5" src={team3} alt="member-3" />
          </div>



          <p class="team-text team-text3">Name</p>
          <p class="team-text team-text4">designation</p>
          <p class="team-text team-text5">Name</p>
          <p class="team-text team-text6">designation</p>
          <p class="team-text team-text7">Name</p>
          <p class="team-text team-text8">designation</p>
        </div>
      </div>
    );
  }
}