import React, { useContext, useEffect, useState } from "react";
import "../css/style.css";
import "../css/recruiter.css";
import { NavLink } from "react-router-dom";
import rec from "../images/hirology1.svg";
import Typewriter from "typewriter-effect";
import s1 from "../images/verify.svg";
import s2 from "../images/jobpost.svg";
import s3 from "../images/chat2.svg";
import rs3 from "../images/38281-team.gif";
import girl from "../images/girl.gif";
import Footer from "./Footer";
import Flowr from "./Flowr";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-slideshow-image/dist/styles.css";
import { Helmet } from "react-helmet";
import { userContext } from "../App";

const Recruiter = () => {
  const [category, setCategory] = useState([]);
  const [feedback, setFeedback] = useState([]);

  const getCategory = async () => {
    const response = await fetch("http://localhost:8070/category/view");
    const data = await response.json();
    const alldata = data.data;
    setCategory(alldata);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const getFeedback = async () => {
    const response = await fetch("http://localhost:8070/feedback/view");
    const data = await response.json();
    const alldata = data.data;
    setFeedback(alldata);
  };

  useEffect(() => {
    getFeedback();
  }, []);

  const { state, dispatch } = useContext(userContext);
  dispatch({ type: "USER", payload: true });

  return (
    <>
      <Helmet>
        <title>Recruiter-JustHire</title>
      </Helmet>
      <div className="nav-margin-top recruiter-part">
        <div className="col-11 col-lg-8 mx-auto ">
          <div className=" text-center mt-5 ">
            <h1 className="heading  pt-3 pt-md-5">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter

                    .typeString("Do you want to hire?")

                    .pauseFor(500)
                    .deleteAll()
                    .typeString("The quickest way to hire here!")
                    .start();
                }}
              />
            </h1>
            
            <h5 className="mt-lg-4 mt-2 header1 sub-heading-gray">
              <b>If organization is hiring </b>, kindly sign up with us and our
              team will get in touch with us.{" "}
            </h5>
            <NavLink
              to="/selectcategory"
              className="btn rounded-pill m-2 btn-blue mt-5"
            >
              Show all jobseeker
            </NavLink>
          </div>
        </div>

        {/* 
        <div className="col-11 col-sm-8 mx-auto">
          <div className="row">
            <div className="col-12 col-lg-6">
              <form className="justify-content-center was-validated mt-lg-5 mt-3 p-xl-5 p-3  form ">
                <div className="form-group">
                  <h2 className="sub-heading-blue text-center">
                    {" "}
                    Your next hire is right here. Get started
                  </h2>

                  <label htmlFor="inputEmail1 " className=" para-black mt-1 mt-xl-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control mt-lg-2 mt-0"
                    id="inputEmail1"
                    placeholder="Enter email"
                    name="email"
                    required
                  />
                  <small id="emailHelp" className=" fs-6 form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                  <div className=" fs-6 invalid-feedback">
                    please fill out this field
                  </div>
                </div>
                <div className="form-group  mt-lg-2 mt-0">
                  <label htmlFor=" inputPassword1" className="para-black ">Password</label>
                  <input
                    type="password"
                    className="form-control mt-lg-2 mt-0"
                    id="inputPassword1"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <div className=" fs-6 invalid-feedback">
                    please fill out this field
                  </div>
                </div>
                <div className="form-check">
    <input type="checkbox" className="form-check-input" id="check1" name="check"/>
    <label className="form-check-label" for="check1">Check me out</label>
  </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn rounded-pill recruiter-sec1-btn-login mt-xl-2 mt-1"
                    name="login"
                  >
                    LOG IN
                  </button>
                  <div className="pt-2 para-black ">
                    Don't have account? <NavLink to="/signupr">sign up</NavLink>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12 col-lg-6">
              <img src={rec} alt="recruiter " className="recruiter-section1-img" />
            </div>
          </div>
        </div> */}

        <div className="col-11 col-lg-8 mx-auto mt-5">
          <div className="text-center pt-md-5 pt-3">
            <h1 className="heading col-lg-8 col-11 mx-auto">
              Hirect helps you to find the right employee in{" "}
              <span className="step1">3 easy steps:</span>
            </h1>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-12 col-sm-4 ">
              <h1 className="step2 mx-auto">1</h1>
            </div>
            <div className="col-12 col-sm-4">
              <h1 className="step4 mx-auto">2</h1>
            </div>
            <div className="col-12 col-sm-4">
              <h1 className="step5 mx-auto">3</h1>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12 col-sm-4">
              <p className="step3 sub-heading-gray mt-4 ">
                Signup on Justhire as Requiter
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <p className="step3 sub-heading-gray mt-4 ">
                Post your jobs & requirement for FREE
              </p>
            </div>
            <div className="col-12 col-sm-4">
              <p className="step3 sub-heading-gray mt-4 pb-sm-0 pb-5">
                Instantly chat with best candidates.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-12 col-sm-4">
              <img src={s1} alt="signup " className="s1" />
            </div>
            <div className="col-12 col-sm-4">
              <img src={s2} alt="signup " className="s1" />
            </div>
            <div className="col-12 col-sm-4">
              <img src={s3} alt="signup " className="s1" />
            </div>
          </div>
        </div>

        <div className="  cat3   pb-md-5 pb-3 ">
          <h1 className="text-center py-md-5 py-3  heading">
            Get right Candidate for right categories
          </h1>
          <div className="cat4 col-10 col-sm-8 mx-auto">
            {category.map((curElem) => (
              <>
                <div className="cat2">{curElem.categoriesname}</div>
              </>
            ))}
          </div>
        </div>
        <div className="heading text-center py-md-5 py-3">
          <h1>Join over 30 Million businesses that hire on JustHire.</h1>
        </div>
        <Carousel>
          {feedback.map((feedback, index) => (
            <>
              <div className="col-lg-8 col-10 mx-auto ">
                <div className="job-sec4 row py-0">
                  <div className="col-12 col-lg-4 mx-auto mx-lg-0 ">
                    <img src={girl} alt="girl" className="job-sec4-img" />
                  </div>
                  <div className="col-12 col-lg-8 my-auto text-center ">
                    <p className="job-sec4-4  sub-heading-gray pt-xl-3">
                      "{feedback.feedback}"
                    </p>
                    <h1 className="job-sec4-1 ">{feedback.firstname}</h1>
                    <p className="job-sec4-2 ">
                      <span className="job-sec4-3 ">
                        {" "}
                        {feedback.companyname}{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </Carousel>
        <Flowr />
        <div className="recruiter-section6">
          <div className="col-11 col-lg-8 mx-auto  py-3">
            <div className="row my-5">
              <div className="col-12 mt-4 mt-xl-5 rs32">
                <h1 className="rs34  text-white">I am looking to hire staff</h1>

                <p
                  className="mt-1 mt-xl-3  rs33 text-white"
                  style={{ fontSize: "20px" }}
                >
                  Get a hire for your company within 24 hours
                </p>
                <NavLink to="/login">
                  {" "}
                  <button className="btn btn4-4 btn-4  px-5 mt-xl-2 ">
                    <b>Get Started </b>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Recruiter;
