import React from 'react';
import signup1 from "../images/rlogin.svg";
import post1 from "../images/meeting.svg";
import find1 from "../images/find.svg";
import hire1 from "../images/chat2.svg";
import "../css/style.css"
const Works = () => {
    return (
             <div className="home-section4">
        <div className="col-lg-8 col-12 mx-auto text-center ">
            <h1 className="py-md-5 py-3 heading  reveal pluse">How JustHire Works?</h1>
            <div className="row">
            <div className="col-lg-3 col-10 mx-auto text-center reveal fade-left">
            <img className="home-sec4-img" src={signup1} alt="signup-img" />
              <h4 className="p-3 sub-heading-blue ">Sing up with JustHire</h4>
            </div>
            <div className="col-lg-3 col-10 mx-auto text-center reveal fade-left">
            <img className="home-sec4-img" src={post1} alt="post-img" />
            <h4 className="p-3 sub-heading-blue ">Recruiter post a job</h4>
            </div>
            <div className="col-lg-3 col-10 mx-auto text-center reveal fade-right">
            <img className="home-sec4-img" src={find1} alt="find-img" />
            <h4 className="p-3 sub-heading-blue ">Job seeker Find a job</h4>
            </div>
            <div className="col-lg-3 col-10 mx-auto text-center reveal fade-right">
            <img className="home-sec4-img" src={hire1} alt="hire-img" />
            <h4 className="p-3 sub-heading-blue ">Get Right Person For Right Job</h4>
            </div>
              </div>
        </div>
      </div>
    );
};

export default Works;