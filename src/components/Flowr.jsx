import React from "react";
import "../css/flowr.css";
import fr11 from "../images/rlogin.svg";
import fr21 from "../images/jobpost.svg";
import fr31 from "../images/res.svg";
import fr41 from "../images/chat2.svg";
import fr51 from "../images/interview.svg";
import fr61 from "../images/hire.svg";

const Flowr = () => {
  return (
    <>
   <h1 className="heading py-md-5 py-3 text-center">Flow for Recruiter</h1>
      <div className="col-lg-5 col-10 mx-auto m-5">
      <div className="abc">
        {/* 1 */}
        <div className="row">
          <div className="col-md-5 col-5 text-center mx-auto">
            <div className="left-box para-blue pt-0 pt-md-3 pt-lg-5">
              <p >1.</p>
              <p className="my-auto">Sign up as Recruiter</p>
            </div>
          </div>
          <div className="col-md-2 col-2 line">
            <div className="border1 gradient-border">
              <div className="circler1"></div>
            </div>
          </div>
          <div className="col-md-5 col-5">
            <img className="fr" src={fr11} alt="fr" />
          </div>
        </div>

        {/* 2 */}
        <div className="row text-center">
          <div className="col-md-5 col-5">
            <img className="fr" src={fr21} alt="fr" />
          </div>
          <div className="col-md-2 col-2 line">
            <div className="border2">
              <div className="circler2"></div>
            </div>
          </div>
          <div className="col-md-5 col-5 text-center mx-auto">
            <div className="left-box para-blue pt-0 pt-md-3 pt-lg-5">
              <p >2.</p>
              <p className="my-auto">Post your Job</p>
            </div>
          </div>
          </div>

          {/* 3 */}
          <div className="row text-center">
            <div className="col-md-5 col-5 text-center mx-auto">
              <div className="left-box para-blue pt-0 pt-md-3 pt-lg-5 ">
                <p >3.</p>
                <p className="my-auto">
                  Explore our Candidates
                </p>
              </div>
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border1">
                <div className="circler1"></div>
              </div>
            </div>
            <div className="col-md-5 col-5">
              <img className="fr" src={fr31} alt="fr" />
            </div>
          </div>

          {/* 4 */}
          <div className="row text-center">
            <div className="col-md-5 col-5">
              <img className="fr" src={fr41} alt="fr" style={{height:"200px"}} />
            </div>

            <div className="col-md-2 col-2 line">
              <div className="border2">
                <div className="circler2"></div>
              </div>
            </div>
            <div className="col-md-5 col-5  text-center mx-auto">
              <div className="left-box para-blue pt-0 pt-md-3 pt-lg-5">
                <p >4.</p>
                <p className="my-auto">
                  Instant Chat with Our Candidate
                </p>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="row text-center">
            <div className="col-md-5 col-5  text-center mx-auto">
              <div className="left-box para-blue pt-0 pt-md-3 pt-lg-4 ">
                <p >5.</p>
                <p className="my-auto ">
                  Scheduled Interview with Candidate
                </p>
              </div>
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border1">
                <div className="circler1"></div>
              </div>
            </div>
            <div className="col-md-5 col-5">
              <img className="fr" src={fr51} alt="fr" />
            </div>
          </div>

          {/* 6 */}
          <div className="row text-center">
            <div className="col-md-5 col-5 align-right">
              <img className="fr" src={fr61} alt="fr6" />
            </div>
            <div className="col-md-2 col-2 line">
              <div className="border2">
                <div className="circler2"></div>
              </div>
            </div>
            <div className="col-md-5 col-5  text-center mx-auto">
              <div className="left-box para-blue pt-0 pt-md-3 pt-lg-5">
                <p >6.</p>
                <p >Hire Candidate</p>
              </div>
            </div>
          </div>
      
      </div>
      </div>
      </>
  );
};

export default Flowr;
