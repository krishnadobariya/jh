import React , {useState} from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import { NavLink } from "react-router-dom";
import "../css/contact.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import axios from "axios";

const Contact = () => {
    const [contact, setContact] = useState({
      fullname:"",
      email:"",
      message:""
      });
    
    
      const handlechange = e => {
        const { name, value } = e.target
    
        setContact({
          ...contact,
          [name]: value
    
        })
      }
      const contac = e => {
        e.preventDefault();
          axios.post("http://localhost:8070/contact/saved", contact).then(
            (res) => {

              console.log(res.data);
              setContact({
                fullname:"",
                email:"",
                message:""
              })
            })
            .catch((err) => {
              if (err) {
                window.alert("Somthing Went Worng")
              }
            })
        }
  return (
    <>
      <Helmet>
        <title>Contact-JustHire</title>
      </Helmet>
      <div className="nav-margin-top">
        <div className="contact">
          <div className="text-center m-lg-5 m-3">
            <h1
              className=" pt-md-5 pt-3 reveal pluse"
              style={{ color: "#c4dfe6" }}
            >
              {" "}
              Contact Us{" "}
            </h1>
            <span style={{ color: "#c4dfe6", fontSize: "20px" }}>
              Get in touch with us
            </span>
          </div>

          <div className="col-11 col-lg-8 mx-auto">
            <div className="row">
              <div className="col-11 col-lg-6 mx-auto">
                <div className="contact1 my-5 reveal fade-left">
                  <div className="contact2">
                    <EmailIcon />
                  </div>
                  <div className="ps-5 arrow">
                    <h3 className="sub-heading-blue1">Email</h3>
                    <span
                      onClick={() => window.open("mailto:Justhire@gmail.com")}
                    >
                      <NavLink to="/contact" className="contact5">
                        {" "}
                        Justhire@gmail.com
                      </NavLink>
                    </span>
                  </div>
                </div>
                <div className="contact1 my-5 reveal fade-left">
                  <div className="contact2">
                    <CallIcon />
                  </div>
                  <div className="ps-5">
                    <h3 className="sub-heading-blue1">Toll-free Number</h3>
                    <span onClick={() => window.open("tel: 7654298432")}>
                      <NavLink to="/contact" className="contact5">
                        7654298432
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-11 col-lg-6 mx-auto contact4 p-5 mb-5 reveal fade-right">
                <form onSubmit={contac}>
                  <div className="form-floating mb-3 mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      placeholder="Enter fullname"
                      name="fullname"
                      onChange={handlechange}
                      value={contact.fullname}
                    />
                    <label htmlFor="email">Fullname</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter Email"
                      name="email"
                      onChange={handlechange}
                      value={contact.email}
                    />
                    <label htmlFor="pwd">Email</label>
                  </div>
                  <div className="form-floating mt-3 mb-3">
                    <textarea
                      class="form-control"
                      id="comment"
                      name="message"
                      onChange={handlechange}
                      placeholder="Type your message"
                      value={contact.message}
                    ></textarea>
                    <label htmlFor="pwd">Type your message</label>
                  </div>
                  <button type="submit" className="btn rounded-pill btn-blue">
                    Submit
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

export default Contact;
