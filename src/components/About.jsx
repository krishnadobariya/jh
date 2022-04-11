import React from "react";
import "../css/style.css";
import Typewriter from "typewriter-effect";
import about from "../images/aboutus.gif";
import one from "../images/one.svg";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import chat from "../images/chat2.svg";
import free from "../images/port.svg";
import feedback from "../images/feedback.svg";
import meeting from "../images/meeting.svg";
import grow from "../images/grow.svg";
import ChatIcon from '@material-ui/icons/Chat';
import MoneyIcon from '@material-ui/icons/Money';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import "../css/about.css";
import { Helmet } from 'react-helmet';


const About = () => {
  const section2 = [
    {
      icon: <ChatIcon />,
      head: "Instant Chat",
      subhead: "One-click to chat directly with candidates in just 15 seconds.",
      src: chat
    },
    {
      icon: <MoneyIcon />,
      head: "100% FREE",
      subhead: "No subscription nor any hidden fees. Post unlimited positions on JustHire for absolutely free.",
      src: free
    },
    {
      icon: <ThumbUpAltIcon />,
      head: "FeedBack",
      subhead: " Instantly get the Feedback from both the sides, candidate and company.",
      src: feedback
    },
    {
      icon: <EventAvailableIcon />,
      head: "Schedule Meeting",
      subhead: "Schedule meeting at your time and get the best result.",
      src: meeting
    },
  ]
  return (
    <>
      <Helmet>
        <title>About us-JustHire</title>
      </Helmet>
      <div className="nav-margin-top">
        <div className="col-lg-8 col-12 mx-auto text-center">
          <h1 className="py-md-5 py-3 heading reveal fade-in">Who We Are?</h1>
          <div className="row about-section1 pb-lg-5 pb-0">
            <div className="col-lg-7 col-12 about-section1-left reveal fade-left">
              <div className="one">
                <img className="img-one" src={one} alt="one" />
                <h2 className="sub-heading-blue">
                  <Typewriter

                    onInit={(typewriter) => {

                      typewriter
                        .typeString(" The Link Between the Employee & Employment Company")
                        .start();
                    }} />
                </h2>
                <img className="img-grow " src={grow} alt="grow" />
                <div className="about-list p-3">
                  <li className="para-blue1">We build Pathways for both employer and employee</li>
                  <li className="para-blue1">Get skilled employees from here</li>
                  <li className="para-blue1">Get your Dream job</li>
                  <li className="para-blue1 ">Trust us! We will build your Sucess</li>
                </div>
              </div>
            </div>
            <div className="col-lg-5  col-12 text-center my-auto reveal fade-right">
              <img className="about-img" src={about} alt="about" />
            </div>
          </div>
        </div>
        <div className="about-section3 ">
          <div className="col-lg-6 col-11 mx-auto">
            <h1 className="text-center py-md-5 py-3 heading">Meet Your Growth Needs</h1>
            {section2.map((section2, index) => (
              <>

                <div className="col p-3 reveal fade-bottom">
                  <div className="row about-section3-box p-3">
                    <div className="col-8 text-right p-lg-3 p-0">
                      <div className="about-section2-icon">{section2.icon}</div>
                      <h1 className="sub-heading-blue">{section2.head}</h1>
                      <div className="para-black">{section2.subhead}</div>
                    </div>
                    <div className="col-4 my-auto">
                      <img className="img1" src={section2.src} alt="chat" />
                    </div>
                  </div>
                </div>

              </>
            ))}
          </div>
        </div>
        <div className="about-section4 p-md-5 p-3">
          <div className="col-lg-8 col-11 mx-auto text-center p-5">
            <p className="heading reveal pluse">Show your talent ! Grab a job </p>
            <NavLink to="/contact" className="btn rounded-pill m-2 btn-blue ">Contact us</NavLink>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default About;
