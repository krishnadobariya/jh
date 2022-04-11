import React, { useState,useEffect } from 'react';
import "../css/signupj.css";
import { NavLink } from 'react-router-dom';
import { Helmet } from "react-helmet";
import axios from "axios";
const Signupj = () => {
  // const [email,setemail] = useState("");
  // const [c1,correctpsd]= useState(false);
  // function setpsd(e){
  //   let a =e.target.value;

  //   if (validator.isStrongPassword(a, {
  //     minLength: 8, minLowercase: 1,
  //     minUppercase: 1, minNumbers: 1, minSymbols: 1
  //   })) {
  //     setemail('Valid!');
  //     correctpsd(!c1);
  //   } else {
  //     setemail('password must be 8 character including minimum 1 lowecase, 1 uppercase,1 special charcter,1 number!!');

  //   }

  // }


  //   const submitForm= async (e) => {
  //     e.preventDefault();
  //     const formData = new FormData();

  //     formData.append("img", fileSelected);
  //     try {
  //       const res = await axios.post("http://192.168.1.9:3000/upload", formData);
  //       console.log(res);
  //     } catch (ex) {
  //       console.log(ex);
  //     }
  //   };

  // const position = [
  //   {
  //     value: "web developer"
  //   },
  //   {
  //     value: "web designer"
  //   },
  //   {
  //     value: "mobile devloper"
  //   },
  //   {
  //     value: "software devloper"
  //   },
  //   {
  //     value: "ui/ux designer"
  //   },
  //   {
  //     value: "data anaylst"
  //   },
  //   {
  //     value: "database adminstrator"
  //   },
  //   {
  //     value: "blockchain devloper"
  //   }
  // ];
  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const response = await fetch("http://localhost:8070/category/view");
    const data = await response.json();
    const alldata = data.data;
    setCategory(alldata);
  };

  useEffect(() => {
    getCategory();
  }, []);
  const [file, setFile] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [mposition, setPosition] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cmfpassword, setCmfpassword] = useState("");
  const [dob, setDob] = useState("");
  const [mode, setMode] = useState("");
  const [work, setWork] = useState("");



  const register = (e) => {
    try {
      e.preventDefault();
      // const {firstname,lastname,gender,address,mobile,email,pwd1,pwd2,file,dob,mode,work}=user;
      const formData = new FormData();
      formData.append("file", file);
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("gender", gender);
      formData.append("address", address);
      formData.append("position", mposition);
      formData.append("mobile", mobile);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("cmfpassword", cmfpassword);
      formData.append("dob", dob);
      formData.append("mode", mode);
      formData.append("work", work);
      console.log(formData);
      axios.post("http://localhost:8070/auth/signup/jobseeker", formData).then(
        (response) => {  
          window.location.href = "/loginj"
          localStorage.setItem("id", response.data.data._id) 
          localStorage.setItem("firstname", firstname);
        }
        )
        .catch(function (error) {
          console.log(error);
        })
      
    }
    catch (error) {
      console.log(error);
    }
  
  }
  return (
    <>
      <Helmet>
        <title>Signup Jobseeker-JustHire</title>
      </Helmet>
      <div className='registerjob'>
        <div className='nav-margin-top'>
          <h1 className="text-center py-md-5 py-3" style={{ color: "#fff" }}>Sign up for Jobseeker</h1>
          <div className='row'>
            <div className="container-fluid  col-lg-6 col-md-6 mx-auto registerrform">
              <form className='p-3 ' onSubmit={register} encType="multipart/form-data">
                <div className="row">
                  <div className="mb-3 mt-3 col-12 col-md-6">
                    <label htmlFor="firstname" className="form-label"><b>Firstname:</b></label>
                    <input type="Name" className="form-control" id="firstame" placeholder="Enter firstname" value={firstname} name="firstname" onChange={(e) => setFirstName(e.target.value)} required />
                    <div class="valid-feedback">Valid.</div>

                  </div>
                  <div className="mb-3 mt-3 col-12 col-md-6">
                    <label htmlFor="lastname" className="form-label"><b>Lastname:</b></label>
                    <input type="Name" className="form-control" id="lastame" placeholder="Enter lastname" value={lastname} name="lastname" onChange={(e) => setLastName(e.target.value)} required />
                    <div class="valid-feedback">Valid.</div>

                  </div>
                </div>
                <div className="d-flex">
                  <label htmlFor="gender" className="form-label"><b>Gender:</b></label>

                  <div className="form-check ps-5">
                    <input type="radio" className="form-check-input" id="male" name="gender" onChange={(e) => setGender(e.target.value)} value="male" /> Male
                    <label className="form-check-label" htmlFor="male"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input type="radio" className="form-check-input" id="female" name="gender" onChange={(e) => setGender(e.target.value)} value="female" />female
                    <label className="form-check-label" htmlFor="female"></label>
                  </div></div>
                <div className="mb-3 mt-3">
                  <label htmlFor="Address"><b>Address:</b></label>
                  <textarea className="form-control" rows="5" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor='c1'><b>Position for which you are applying for?</b></label>
                  <select className="form-select form-select-md" name="position" value={mposition} onChange={(e) => setPosition(e.target.value)}>
                    <option value="">Select</option>
                    {category.map((curele, key) => {
                        return (
                          <option
                            key={key}
                            value={curele.categoriesname}
                            name="position"
                          >
                            {curele.categoriesname}{" "}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="row">
                  <div className="mb-3 mt-3 col-12 col-md-6">
                    <label htmlFor="Mobileno" className="form-label"><b>Mobile No:</b></label>
                    <input type="Number" className="form-control" id="mobileno" placeholder="Enter Mobile number" value={mobile} name="mobile" onChange={(e) => setMobile(e.target.value)} required />
                    <div class="valid-feedback">Valid.</div>

                  </div>
                  <div className="mb-3 mt-3 col-12 col-md-6">
                    <label htmlFor="email" className="form-label"><b>Email:</b></label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <div class="valid-feedback">Valid.</div>

                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="pwd" className="form-label"> <b>CreatePassword:</b></label>
                    <input type="password" className="form-control" id="pwd1" placeholder="Create password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {/* { c1?<span className = "text-success" > {email}</span>:<span className = "text-danger" > {email}</span>} */}
                  </div>
                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="pwd" className="form-label"><b>ConfirmPassword:</b></label>
                    <input type="password" className="form-control" id="pwd2" placeholder="Confirm password" name="cmfpassword" value={cmfpassword} onChange={(e) => setCmfpassword(e.target.value)} />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="file" className="form-label"><b>Attach Resume:</b></label>
                    <input type="file" className="form-control" id="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please attach your resume.</div>
                  </div>
                  <div className="mb-3 col-12 col-md-6">
                    <label htmlFor="dob" className="form-label"><b>Date of birth:</b></label>
                    <input type="date" className="form-control" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                  </div>
                </div>
                <div className="d-md-flex">
                  <label htmlFor="mode" className="form-label"><b>Preferred working mode :</b></label>
                  <div className="form-check ps-5">
                    <input type="radio" className="form-check-input" id="fulltime" name="mode" onChange={(e) => setMode(e.target.value)} value="fulltime" /> Fulltime
                    <label className="form-check-label" htmlFor="fulltime"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input type="radio" className="form-check-input" id="parttime" name="mode" onChange={(e) => setMode(e.target.value)} value="parttime" />Parttime
                    <label className="form-check-label" htmlFor="parttime"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input type="radio" className="form-check-input" id="remote" name="mode" onChange={(e) => setMode(e.target.value)} value="remote" />Remote
                    <label className="form-check-label" htmlFor="remote"></label>
                  </div>
                </div>
                <div className="d-md-flex">
                  <label htmlFor="mode" className="form-label"><b>Have you previously worked us? :</b></label>
                  <div className="form-check ps-5">
                    <input type="radio" className="form-check-input" id="yes" name="work" value="yes" onChange={(e) => setWork(e.target.value)} />Yes
                    <label className="form-check-label" htmlFor="yes"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input type="radio" className="form-check-input" id="no" name="work" value="No" onChange={(e) => setWork(e.target.value)} />No
                    <label className="form-check-label" htmlFor="no"></label>
                  </div>
                </div>
                <br />
                <button type='submit' class="button-82-pushable mt-3" >
                  <span class="button-82-shadow"></span>
                  <span class="button-82-edge"></span>
                  <span class="button-82-front text">
                    Sign Up
                  </span>
                </button>
                <br>
                </br>
                <br></br>
                <div className="pt-2">Don't have account?<NavLink to="/loginj" style={{ color: "#003b46", textDecoration: "none" }} > Login</NavLink></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signupj;
