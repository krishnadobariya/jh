import React, { useState, useEffect } from "react";

import axios from "axios";
import "../css/signupr.css";
import { NavLink } from "react-router-dom";
import { ToastContainer
  ,toast } from "react-toastify"; 
  import 'react-toastify/dist/ReactToastify.css';

const Signupr = () => {
  const notify =()=> toast.success("Signup Successfully.....",{
    position:toast.POSITION.TOP_CENTER,
    
  })
  //   const [email,setemail] = useState("");
  //   const [c1,correctpsd]= useState(false);
  // function setpsd(e){
  //   let a =e.target.value;

  //   if (validator.isStrongPassword(a, {
  //     minLength: 8, minLowercase: 1,
  //     minUppercase: 1, minNumbers: 1, minSymbols: 1
  //   })) {
  //     setemail('Valid!');
  //     correctpsd(!c1);
  // const [category, setCategory] = useState([]);
  // const getCategory = async () => {
  //   const response = await fetch("http://localhost:8070/category/view");
  //   const data = await response.json();
  //   const alldata = data.data;
  //   setCategory(alldata);
  // };

  // useEffect(() => {
  //   getCategory();
  // }, []);
  // const position1 = ["webdeveloper", "webdesign", "software devloper", "ui/ux devloper", "data analyst", "database administer", "blockchain devloper"]
  const [user, setUser] = useState({
    companyname: "",
    location: "",
    position: [],
    contactno: "",
    email: "",
    password: "",
    cmfpassword: "",
  });
  const [check, changecheck] = useState({
    "web Developer": false,
    "web designer": false,
   " mobiledevloper": false,
    "software devloper": false,
    "ui/ux devloper": false,
    "data analyst": false,
    "Database administer": false,
    "blockchain devloper": false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    check[name] = checked;
    changecheck(check);
    //checkbox value
    var p = Object.keys(check).filter((x) => {
      return check[x];
    });
    setUser({
      ...user,
      position: p,
      [name]: value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    const {
      companyname,
      location,
      position,
      contactno,
      email,
      password,
      cmfpassword,
    } = user;
    if (
      companyname &&
      location &&
      contactno &&
      email &&
      position &&
      password &&
      password === cmfpassword
    ) {
      axios
        .post("http://localhost:8070/auth/signup/recruiter", user)
        .then(
          (res) => {
            if (res.data.status === 201) {
              setTimeout(()=>{
                window.location.href = "/login";
  
              },3000)
              localStorage.setItem("companyname", user.companyname);
              localStorage.setItem("rid", res.data.data._id);
            }
          },
          setUser({
            companyname: "",
            location: "",
            position: [],
            contactno: "",
            email: "",
            password: "",
            cmfpassword: "",
          })
        )
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("err");
    }
  };

  console.log(user);
  return (
    <>
    <ToastContainer/>
      <div className="sign-r">
        <div className="container nav-margin-top back">
          <h1 className="text-center py-md-5 py-3" style={{ color: "#fff" }}>
            Sign up for Recruiter
          </h1>
          <div className="row">
            <div className="container-fluid col-lg-8 col-md-12 mx-auto registerrform">
              <form className="p-3 " onSubmit={register}>
                <div className="mb-3 mt-3">
                  <label htmlFor="cname" className="form-label">
                    <b>Company name:</b>
                  </label>
                  <input
                    type="Name"
                    className="form-control"
                    id="cname"
                    value={user.companyname}
                    placeholder="Enter company name"
                    name="companyname"
                    onChange={handleChange}
                    required
                  />
                  <div class="valid-feedback">Valid.</div>
                  <div class="invalid-feedback">
                    Please fill out First name.
                  </div>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="location">
                    <b>Location:</b>
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    id="location"
                    value={user.location}
                    name="location"
                    onChange={handleChange}
                  ></textarea>
                </div>
                 {/* <label><b>Position  for which you are applying for? :</b></label>
              <div className="row">
                <div className="col-12 col-md-6"> 
                {position1.map((position) => {
                   return( <div class="form-check ">
                      <input class="form-check-input" type="checkbox" id="check1" name={position} onChange={handleChange} checked={check.position} />
                      <label class="form-check-label text-dark">{position}</label>
                    </div>)
                  })} 
                 {category.map((curele) => (
                    <>
                    
                   <div class="form-check ">
                      <input class="form-check-input" type="checkbox" id="check1" name={curele.categoriesname} onChange={handleChange} checked={check.position} />
                      <label class="form-check-label text-dark">{curele.categoriesname}</label>
                    </div>
                
                    </>
                  ))}

</div>
                </div>  */}
                <div className="row">
                  <div className="mb-3 mt-3 col-12 col-md-6">
                    <label htmlFor="contactno" className="form-label">
                      <b>Contact No:</b>
                    </label>
                    <input
                      type="Number"
                      className="form-control"
                      id="contactno"
                      placeholder="Enter Contact number"
                      value={user.contactno}
                      name="contactno"
                      onChange={handleChange}
                      required
                    />
                    <div class="valid-feedback">Valid.</div>
                  </div>
                  <div className="mb-3 mt-3 col-12 col-md-6">
                    <label htmlFor="email" className="form-label">
                      <b>Email:</b>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      value={user.email}
                      name="email"
                      onChange={handleChange}
                      required
                    />
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">
                      Please fill out valid email address.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="pwd" className="form-label form-box">
                      {" "}
                      <b>CreatePassword:</b>
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="pwd1"
                      placeholder="Create password"
                      value={user.password}
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="pwd" className="form-label form-box">
                      <b>ConfirmPassword:</b>
                    </label>
                    <input
                      type="password"
                      className="form-control "
                      id="pwd2"
                      placeholder="Confirm password"
                      value={user.cmfpassword}
                      name="cmfpassword"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <br />
                <button
                  type="submit"
                  onChange={handleChange}
                  class="button-82-pushable mt-3"
                >
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span class="button-82-front text">Sign Up</span>
                </button>

                <br></br>
                <br></br>
                <div className="pt-2">
                  Don't have account?
                  <NavLink
                    to="/login"
                    style={{ color: "#003b46", textDecoration: "none" }}
                  >
                    {" "}
                    Login
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signupr;
