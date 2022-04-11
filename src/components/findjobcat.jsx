import React , {useContext} from "react";
import "../css/style.css";
import "../css/career.css";
import card11 from "../images/webdevlopment.svg";
import card21 from "../images/webdesign.svg";
import card31 from "../images/mobileapp.svg";
import card41 from "../images/sowfware.svg";
import card51 from "../images/uiux.svg";
import card61 from "../images/data.svg";
import card71 from "../images/admi.svg";
import card81 from "../images/blockchain.svg";
import { NavLink, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import { userContext } from "../App";
const Findjobcat = () => {

  const { state, dispatch } = useContext(userContext);
dispatch({ type: "USER", payload: false });
  const careercard = [
    {
      src: card11,
      heading: "Web Development",
    },
    {
      src: card21,
      heading: "Web Designing",
    },
    {
      src: card31,
      heading: "App Development",
    },
    {
      src: card41,
      heading: "Software Development",
    },
    {
      src: card51,
      heading: "UI-UX designing",
    },
    {
      src: card61,
      heading: "Data Analyst",
    },
    {
      src: card71,
      heading: "Database Administrator",
    },
    {
      src: card81,
      heading: "Blockchain Development",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Career-JustHire</title>
      </Helmet>
      <div className="nav-margin-top ">
        <div className="col-md-8 col-10 mx-auto text-center">
          <h1 className="py-md-5 py-3 heading">
        Recommended for you
          </h1>
          <div className="row">
            {careercard.map((careercard, index) => (
              <div className="col-md-4">
                <div className="card">
                  <Link to={`/findjob/${careercard.heading}`}>
                    <div className="img-part">
                      <img src={careercard.src} />
                    </div>
                    <div className="overlay">
                      <div className="content">
                        <h4>{careercard.heading}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
       
        <Footer />
      </div>
    </>
  );
};
export default Findjobcat;
