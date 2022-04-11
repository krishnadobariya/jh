import React from 'react';
import { NavLink } from "react-router-dom";
import "../css/style.css";
import "../css/howworks.css";
import Works from "../components/Works";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const HowWorks = () => {
    return (
            <>
                <Helmet>
          <title>How it works?-JustHire</title>
        </Helmet>
            <div className="nav-margin-top">
                <Works/>
                <div className="howworks-section2 text-center p-5">
                    <h1 className="heading"> We Are Here to Help You! </h1>
                    <NavLink to="/help" className="btn rounded-pill btn-blue p-3">Help</NavLink>
                </div>
                <Footer/>
            </div>
        </>
    )
}
export default HowWorks;