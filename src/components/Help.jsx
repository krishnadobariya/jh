import React, { useState } from "react";
import Footer from "./Footer";
import Emoji from "reactjs-emojis";
import "../css/help.css";
import help from "../images/help.svg";
import helparrow from "../images/helparrow.svg";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer
  ,toast } from "react-toastify"; 
  import 'react-toastify/dist/ReactToastify.css';

const Help = () => {
  const notify =()=> toast.info("Thank you for giving the feedback",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:3000
    
  })
  const companyname = localStorage.getItem("companyname");
  const firstname = localStorage.getItem("firstname");
  const rid = localStorage.getItem("rid");

  const [feed , setFeedback] = useState({
    companyname: "",
    firstname:"",
    rid:"", 
    feedback:""

  })
  const handleChange = (e) => {
    e.preventDefault();
    const {name , value} = e.target
    setFeedback({
      ...feed,
        [name]: value,
        companyname:companyname,
        firstname:firstname,
        rid:rid
    })
  }

  const feedback = (e) => {
    e.preventDefault();
    // notify()
    axios.post("http://localhos:8070/feedback/give", feed).then(
      (res) => 
      setFeedback({
        feedback:""
      }),
      notify()
    ).catch((err) => {
      console.log(err);
    })
  }
  return (
    <>
    <ToastContainer/>
      <Helmet>
        <title>Help-JustHire</title>
      </Helmet>
      <div className="nav-margin-top">
        {/* section1 */}
        <div className="col-sm-8 col-11 mx-auto getpart">
          <div className="d-lg-flex text-lg-right text-center py-md-5 py-3">
            <div className="col p-xl-5 reveal fade-left">
              <h1 className="sub-heading-blue">Help for Recruiter</h1>
              <NavLink to="/signupr">Signup for Recruiter</NavLink>
              <br />
              <br />
              <NavLink to="/faq">FAQ for Recruiter</NavLink>
            </div>
            <div className="col reveal pluse">
              <img className="help-img" src={help} alt="img-help" />
            </div>
            <div className="col p-xl-5 p-4 reveal fade-right">
              <h1 className="sub-heading-blue">Help for JobSeeker</h1>
              <a>
                <NavLink to="/signupj">Signup for JobSeeker</NavLink>
              </a>
              <br />
              <br />
              <a>
                <NavLink to="/faq">FAQ for JobSeeker</NavLink>
              </a>
            </div>
          </div>
        </div>

        {/* section2 */}
        <div className="help-section2">
          <div className="col-md-8 col-11 mx-auto text-center p-5">
            <NavLink to="/login" className="btn rounded-pill m-2 btn-blue">
              Get Started
            </NavLink>
            <div>
              <img
                className="img-help-arrow"
                src={helparrow}
                alt="help_arrow"
              />
            </div>
          </div>
        </div>

        {/* section3 */}
        <div className="col-sm-8 col-11 mx-auto text-center">
          <div className="d-lg-flex m-3 help-section3">
            <div className="col-12 pt-3">
              <h1 className="heading">
                Was this page helpful? please Give FeedBack
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 ">
              <div className="container">
                <form method="POST" onSubmit={feedback}>
                <div className="form-group">
                 
                    <input type="text" className="form-control mt-3" placeholder="Enter feddback" name="feedback" value={feed.feedback} onChange={handleChange} required />
                  
                  </div>
    <br />
                  <button type='submit' class="button-82-pushable mt-2 mb-5" role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
   Submit
  </span>
</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Help;
