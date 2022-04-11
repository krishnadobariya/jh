import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../css/style.css";
import "../css/home.css";
import "../css/footer.css";
import Works from "../components/Works";
import homeright from "../images/main.jpg";
import office from "../images/office.png";
import office1 from "../images/office1.png";

import candidate from "../images/can.svg";
import response from "../images/chart.svg";
import verified from "../images/res.svg";
import nospam from "../images/lock.svg";
import instant from "../images/profile.svg";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home-JustHire</title>
      </Helmet>
      <div className="home nav-margin-top">
        {/* section1 */}

        <div className="home-section1-left">
          <div className="col-6 offset-2 text-center home-section1-text reveal fade-in">
            <h1 className="main-heading-white ">
              The LINK between The Employee & Employment Company
            </h1>
            <h5 className="sub-heading-white">
              We builds pathways for <br />
              both employer and employee.
              <br />- we helps you to build your career
            </h5>
            <NavLink to="/login" className="btn mt-4 btn4-4 btn-4">
              Log in
            </NavLink>
            <NavLink
              to="/signup"
              className="btn mt-4 ms-lg-4 ms-1 btn41-43 btn-43"
            >
              Sign up
            </NavLink>
          </div>
          <div>
            <img
              className="home-section1-right-img reveal fade-right"
              src={homeright}
              alt="home-section1-right-img"
            />
            <img
              className="home-section1-left-img reveal fade-left"
              src={office}
              alt="home-section1-right-img"
            />
            <img
              className="home-section1-center-img reveal fade-bottom"
              src={office1}
              alt="home-section1-right-img"
            />

            <div className="round-border1"></div>
            <div className="round-border2"></div>
            <div className="round-border3"></div>
            <div className="round-border4"></div>
            <div className="round-border5"></div>
          </div>
        </div>

        {/* <div className="d-lg-flex home-section1-left">
          <div className="col p-1 ">
            <div className="home-section1-left-part1">
              <h1 className="main-heading">
                The LINK between The Employee & Employment Company
              </h1>
              <h5 className="sub-heading-white">
                We builds pathways for both employer and employee.we helps you
                to build your career
              </h5>
              <NavLink to="/login" className="btn mt-4 btn4-4 btn-4">
                Log in
              </NavLink>
              <NavLink
                to="/signup"
                className="btn mt-4 ms-lg-4 ms-1 btn41-43 btn-43"
              >
                Sign up
              </NavLink>
            </div>
          </div>
          <div className="home-section1-right">
            <img
              className="home-section1-right-img"
              src={homeright}
              alt="home-section1-right-img"
            />
          </div>
        </div> */}
        {/* section2 */}
        <div className="d-flex justify-content-center py-md-5 py-3">
          <div className="col-sm-2 text-center sec-img reveal fade-left">
            <img className="sec2-icon" src={candidate} alt="home-sec2" />
            <h5 className="para-blue">matching candidate only</h5>
          </div>
          <div className="col-sm-2 text-center sec-img reveal fade-left">
            <img className="sec2-icon" src={response} alt="home-sec2" />
            <h5 className="para-blue">Quick response</h5>
          </div>
          <div className="col-sm-2 text-center sec-img reveal fade-bottom">
            <img className="sec2-icon" src={verified} alt="home-sec2" />
            <h5 className="para-blue">All verified profiles</h5>
          </div>
          <div className="col-sm-2 text-center sec-img reveal fade-right">
            <img className="sec2-icon" src={nospam} alt="home-sec2" />
            <h5 className="para-blue">No Spamming</h5>
          </div>
          <div className="col-sm-2 text-center sec-img reveal fade-right">
            <img className="sec2-icon" src={instant} alt="home-sec2" />
            <h5 className="para-blue">Instant Hiring</h5>
          </div>
        </div>
        {/* section3 */}
        <div className="home-section3 p-lg-5 p-3">
          <div className="col-lg-8 col-11 mx-auto text-center py-md-5 py-3">
            <h1 className="heading">
              Builds pathways for both employer and employee
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-8 col-11 mx-auto text-center">
              <div className="row">
                <div className="col-lg-4 col-10 mx-auto text-center">
                  <h1 className="pb-lg-3 pb-2">20</h1>
                  <h3 className="pb-lg-3 pb-2" style={{ color: "#003b46" }}>
                    Companies with us
                  </h3>
                </div>
                <div className="col-lg-4 col-10 mx-auto text-center">
                  <h1 className="pb-lg-3 pb-2">50</h1>
                  <h3 className="pb-lg-3 pb-2 " style={{ color: "#003b46" }}>
                    People with us
                  </h3>
                </div>
                <div className="col-lg-4 col-10 mx-auto text-center">
                  <h1 className="pb-lg-3 pb-2">20%</h1>
                  <h3 className="pb-lg-3 pb-2 " style={{ color: "#003b46" }}>
                    hiring by Justhire
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section4 */}
        {/* <div className="home-section4">
        <div className="col-lg-8 col-12 mx-auto text-center ">
            <h1 className="py-md-5 py-3 heading">How JustHire Works?</h1>
            <div className="row">
            <div className="col-lg-3 col-10 mx-auto text-center">
            <img className="home-sec4-img" src={signup1} alt="signup-img" />
              <h4 className="p-3 sub-heading-blue">Sing up with JustHire</h4>
            </div>
            <div className="col-lg-3 col-10 mx-auto text-center">
            <img className="home-sec4-img" src={post1} alt="post-img" />
            <h4 className="p-3 sub-heading-blue">Recruiter post a job</h4>
            </div>
            <div className="col-lg-3 col-10 mx-auto text-center">
            <img className="home-sec4-img" src={find1} alt="find-img" />
            <h4 className="p-3 sub-heading-blue">Job seeker Find a job</h4>
            </div>
            <div className="col-lg-3 col-10 mx-auto text-center">
            <img className="home-sec4-img" src={hire1} alt="hire-img" />
            <h4 className="p-3 sub-heading-blue">Get Right Person For Right Job</h4>
            </div>
              </div>
        </div>
      </div> */}
        <Works />
        {/* section5 */}
        <div className=" home-sec5">
          <div className="col-sm-8 col-10 mx-auto text-center">
            <h2 className="heading-white reveal pluse ">Get Started</h2>
            <p className="sub-heading-gray">
              Trust us ! We Will bulid your sucess
            </p>
            <NavLink to="/login" className="btn rounded-pill btn-green">
              LOG IN
            </NavLink>
          </div>
          <div className="square"></div>
          <div className="rec"></div>
          <div className="tri"></div>
          <div className="circle"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
