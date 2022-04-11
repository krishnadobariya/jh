import React from "react";
import "../css/flowr.css";
import fj11 from "../images/rlogin.svg";
import fj21 from "../images/pj.svg";
import fj31 from "../images/rc.svg";
import fj41 from "../images/pinfo.svg";
import fj51 from "../images/hire1.svg";
import fj61 from "../images/hire.svg";

const Flowj = () => {
  return (
    <>
    <h1 className="heading  py-3 text-center">Flow for Jobseeker</h1>
      <div className="col-lg-5 col-10 mx-auto m-5">
        <div className="abc">
          {/* 1 */}
          <div className="row">
            <div className="col-md-5 col-5 text-center mx-auto">
              <div className="left-box para-blue pt-3 pt-xl-5">
                <p>1.</p>
                <p>Sign up as JobSeeker</p>
              </div>
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border1">
                <div className="circler1"></div>
              </div>
            </div>
            <div className="col-md-5 col-5">
              <img className="fr" src={fj11} alt="fr1" />
            </div>
          </div>

          {/* 2 */}
          <div className="row text-center">
            <div className="col-md-5 col-5">
              <img className="fr" src={fj21} alt="fr1" />
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border2">
                <div className="circler2"></div>
              </div>
            </div>
            <div className="col-md-5 col-5 text-center mx-auto">
              <div className="left-box  para-blue pt-3 pt-lg-5">
                <p>2.</p>
                <p>Post your Skill</p>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="row text-center">
            <div className="col-md-5 col-5 text-center mx-auto">
              <div className="left-box  para-blue pt-3 pt-lg-4">
                <p>3.</p>
                <p>
                   And Explore our Recruiter Companies
                </p>
              </div>
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border1">
                <div className="circler1"></div>
              </div>
            </div>
            <div className="col-md-5 col-5">
              <img className="fr" src={fj31} alt="fr1" />
            </div>
          </div>

          {/* 4 */}
          <div className="row text-center">
            <div className="col-md-5 col-5">
              <img className="fr" src={fj41} alt="fr1" />
            </div>

            <div className="col-md-2 col-2 line">
              <div className="border2">
                <div className="circler2"></div>
              </div>
            </div>
            <div className="col-md-5 col-5  text-center mx-auto">
              <div className="left-box  para-blue pt-3 pt-lg-4">
                <p>4.</p>
                <p>
                  Instant Chat with Recruiter Company
                </p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="row text-center">
            <div className="col-md-5 col-5  text-center mx-auto">
              <div className="left-box  para-blue pt-3 pt-lg-5">
                <p>5.</p>
                <p>Scheduled Your meeting</p>
              </div>
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border1">
                <div className="circler1"></div>
              </div>
            </div>
            <div className="col-md-5 col-5">
              <img className="fr" src={fj51} alt="fr1" />
            </div>
          </div>

          {/* 6 */}
          <div className="row text-center">
            <div className="col-md-5 col-5 align-right">
              <img className="fr" src={fj61} alt="fr6" />
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border2">
                <div className="circler2"></div>
              </div>
            </div>
            <div className="col-md-5 col-5  text-center mx-auto">
              <div className="left-box  para-blue  pt-3 pt-lg-5">
                <p >6.</p>
                <p>Grab a Job</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Flowj;
