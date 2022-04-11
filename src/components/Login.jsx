import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";
import "../css/login.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const Login = (e) => {
    e.preventDefault();
    const { email, password } = user;
    if (email && password) {
      axios
        .post("http://localhost:8070/auth/signin/recruiter", user)
        .then((res) => {
          console.log(res.data);
          cookies.set("jwt", res.data.token, { path: "/" });
          if (res.data.status === 200) {
            window.location.href = "/recruiter";
          }
        })
        .catch((err) => {
          if (err) {
            window.alert("Somthing Went Worng");
            console.log(err);
          }
        });
    } else {
      alert("please enter the username");
    }
    localStorage.setItem("user_info", user);
  };
  console.log(user);
  return (
    <>
      <Helmet>
        <title>Login-JustHire</title>
      </Helmet>
      <div className="grad nav-margin-top ">
        <div className=" ">
          <div className="container">
            <div className="row">
              <h1 className="heading-white text-center py-md-5 py-3">LOG IN</h1>
              <div className="container-fluid col-sm-6 col-10 mx-auto p-3 mb-5 login-form">
                <form
                  className="justify-content-center fs-5 p-5 "
                  onSubmit={Login}
                >
                  <div className="form-group">
                    <label htmlFor="inputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control mt-3"
                      id="inputEmail1"
                      placeholder="Enter email"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div className="form-group  mt-3">
                    <label htmlFor="inputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control mt-3"
                      id="inputPassword1"
                      placeholder="Password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <div className="form-check">
    <input type="checkbox" className="form-check-input" id="check1" name="check"/>
    <label className="form-check-label" for="check1">Check me out</label>
  </div> */}
                  <div className="text-center">
                    <button
                      type="submit"
                      class="button-82-pushable mt-5"
                      role="button"
                    >
                      <span class="button-82-shadow"></span>
                      <span class="button-82-edge"></span>
                      <span class="button-82-front text">Login</span>
                    </button>
                    <br />
                    <div className="pt-2">
                      Don't have account?
                      <NavLink
                        to="/Signup"
                        style={{ color: "#003b46", textDecoration: "none" }}
                      >
                        {" "}
                        sign up
                      </NavLink>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
