import React from "react";
import "../css/style.css";
import "../css/faq.css";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";
import Faqr from "./Faqr";
import Faqj from "./Faqj";

const FAQ = () => {
  return (
    <>
    <Helmet>
          <title>FAQ-JustHire</title>
        </Helmet>
    <div className="nav-margin-top ">
      <Faqr/>
      <Faqj/>
      <div className="p-5 faq-sec2">
        <div className="col-sm-8 col-10 mx-auto text-center">
          <h2 style={{color:"#fff"}}>
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Still have questions? Contact us")
                  .start();
              }}
            />
          </h2>
          <NavLink
            to="/contact"
            className="btn  m-sm-5 m-3 btn-contact"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default FAQ;
