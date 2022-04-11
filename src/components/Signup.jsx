import React from "react";
import jobseeker from "../images/mod.svg";
import recruiter from "../images/cont.svg";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "../css/signup.css";
import { Helmet } from "react-helmet";
import "animate.css";

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Signup-JustHire</title>
      </Helmet>
      <div className="">
        <div className="col-12">
          <div className="demo text-center text-white pt-4 reveal pluse">
            RECRUITER
            <br />
            or
            <br />
            JOBSEEKER
          </div>
          <div className="d-flex py-5">
            <div className="col-lg-6 col-12  signup-part1  reveal fade-left">
              <h1 className="heading py-md-5 py-3 animate__animated animate__fadeInDown">
                Are you a recruiter?
              </h1>

              <img className="signup-img1" src={recruiter} alt="img-1" />

              <div className="py-3">
                <NavLink to="/Signupr" style={{ textDecoration: "none" }}>
                  <button class="button-30" role="button">
                    SignUp
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-12  signup-part2  reveal fade-right">
              <h1 className="heading py-md-5 py-3 animate__animated animate__fadeInDown ">
                Are you a job seeker?
              </h1>

              <img className="signup-img2" src={jobseeker} alt="img" />

              <div className="py-3">
                <NavLink to="/Signupj" style={{ textDecoration: "none" }}>
                  <button class="button-30" role="button">
                    SignUp
                  </button>
                </NavLink>
                
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-8 mx-auto ">
          <div className="row text-center justify-content-around">
            <div className="col-lg-4 col-md-12 border-top text-center p-3 signup-part1">
              <h1 className="heading py-md-5 py-3">Are you a recruiter?</h1>
              <div style={{ height: "400px", width: "100%" }}>
                <img className="signup-img1" src={recruiter} alt="img-1" />
              </div>
              <div>
                <NavLink to="/Signupr" style={{ textDecoration: "none" }}>
                  <button class="button-30" role="button">
                    SignUp
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 border-top p-3">
              <h1 className="heading py-md-5 py-3">Are you a job seeker?</h1>
              <div style={{ height: "400px", width: "100%" }}>
                <img className="signup-img2" src={jobseeker} alt="img" />
              </div>
              <NavLink to="/Signupj" style={{ textDecoration: "none" }}>
                <button class="button-30" role="button">
                  SignUp
                </button>
              </NavLink>
            </div>
          </div>
        </div> */}
        <Footer />
      </div>
    </>
  );
};
export default Signup;
