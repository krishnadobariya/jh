import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import "../css/footer.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  });
  return (
    <>
      <div>
        <div className="footer text-light pb-md-0 pb-3">
          <div className="col-lg-8 col-11 mx-auto  pt-3 pb-3">
            <div className="row">
              <div className="col-lg-6 col-12 p-3">
                <h3>We're Here to Help You</h3>
                <p className="footer-p">
                  Visit our Help Center for answers to common questions or
                  contact us directly.
                </p>
               <div>
               <NavLink className="btn3-3 btn btn-3" to="/help">Help</NavLink>
               <NavLink className="btn14-34 btn btn-34 ms-3" to="/contact">Contact</NavLink>
               </div>
              </div>
              <div className="col-lg-2 col-4 mt-3">
                <h6>WHY JUSTHIRE?</h6>
                 <NavLink className="flink" to="/recruiter">Hire the Best candidate</NavLink><br/>
                 <NavLink className="flink" to="/jobseeker">Get Hire for your dream job</NavLink><br/>
              </div>
              <div className="col-lg-2 col-4 mt-3">
                <h6>RESOURCES</h6>
                 <NavLink className="flink" to="/howworks">How It Works?</NavLink><br/>
                 <NavLink className="flink" to="/faq">FAQ</NavLink>
              </div>
              <div className="col-lg-2 col-4 mt-3">
                <h6>COMPANY</h6>
                <NavLink className="flink" to="/career">Careers</NavLink><br/>
                 <NavLink className="flink" to="/about">About</NavLink><br/>
                 <NavLink className="flink" to="/contact">Contact</NavLink>
              </div>
            </div>
            <hr style={{color:"#66a5ab"}}/>
            <div className="p-md-4 p-3"> 
            <span onClick={()=> window.open("https://www.linkedin.com/login")} ><NavLink to="/" className="p-1 licon"><LinkedInIcon/></NavLink></span>
            <span onClick={()=> window.open("https://twitter.com/login?lang=en")}><NavLink to="/" className="p-1 ticon"><TwitterIcon/></NavLink></span>
            <span onClick={()=> window.open("https://www.facebook.com/")}><NavLink to="/" className="p-1 ficon"><FacebookIcon/></NavLink></span>
            <span onClick={()=> window.open("https://www.instagram.com/accounts/login/?")}><NavLink to="/" className="p-1 iicon"><InstagramIcon/></NavLink></span>
                <span className="float-md-end float-start pt-md-0 pt-2 foot-span">Ⓒ 2022 <NavLink className="flink" to="/">JustHire</NavLink> | <NavLink className="flink" to="/privacy"> Privacy </NavLink> | <NavLink className="flink" to="/terms">Terms</NavLink></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;