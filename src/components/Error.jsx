import React from 'react';
import { NavLink } from "react-router-dom";
import "../css/error.css";
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <>
    <Helmet>
          <title>Page not found-JustHire</title>
        </Helmet>
      <div className="nav-margin-top">
      <div className="text-center col-lg-8 col-11 mx-auto pt-lg-5  pt-3">
        <h1 className="heading">Uh-Oh...</h1>
        <p className="sub-heading-blue col-lg-6 col-11 mx-auto">The page you are looking for may have been moved, deleted, or possibly never existed.</p>
        <h1 className="error-404">404</h1>
        <NavLink to="/home" className="btn rounded-pill btn-green mb-lg-5 mb-3">Take me to the Home Page</NavLink>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Error;
