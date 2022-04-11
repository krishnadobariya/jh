import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import { userContext } from "../App";

import Cookies from "universal-cookie";
export const Navbar = () => {
  const { state, dispatch } = useContext(userContext);

  //   const [c1,changetoggle]=useState("");
  //   const [c2,changetrue]=useState(true);
  //   function toggle() {
  //     changetrue(!c2);
  //     if (c2 === true) {
  //         return changetoggle("collapse1");
  //     }
  //     else {
  //         return changetoggle("collapse-no");
  //     }
  // }
  const [navbar, changenavbar] = useState(false);
  const changeback = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 45) {
      changenavbar(true);
    } else {
      changenavbar(false);
    }
  };

  useEffect(() => {
    changeback();
    window.addEventListener("scroll", changeback);
  }, [navbar]);
  const cookies = new Cookies();

  const logout=()=>{
    cookies.remove("jwt");
    // localStorage.removeItem("user_info")
    window.location.href = "/signup";
  }

  console.log("login", state);
  const RenderMenu = () => {
    if (state == null) {
      return (
        <>
          <div className="nav1">
            <nav
              className={`navbar navbar-expand-lg text-center navbar-light col-lg-12 col-12    ${
                navbar ? "nav2" : ""
              }`}
            >
              <div
                className={`${navbar ? "container" : "container"} ${
                  navbar ? "bcknav" : ""
                }`}
              >
                {/* <a className="navbar-brand" href="javascript:void(0)">JustHire</a> */}
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <h2 className="h2">
                    <span className="jh">J</span>ust
                    <span className="jh">H</span>ire
                  </h2>
                  {/* <img className="logo-img my-auto" src={logo} alt="logo"/> */}
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mynavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                  <div className="navbar-nav ms-auto navi">
                    <NavLink className="navlink" to="/jobseeker">
                      <span>jobseeker</span>
                    </NavLink>
                    <NavLink className="navlink" to="/recruiter">
                      <span>Recruiter</span>
                    </NavLink>
                    <NavLink className="navlink" to="/about">
                      <span>About us</span>
                    </NavLink>
                    <NavLink className="navlink" to="/help">
                      <span> Help</span>
                    </NavLink>
                  </div>

                  <NavLink to="/signup" className=" ms-auto">
                    <button
                      className="btn bg-default rounded-pill loginbtn"
                      role="button"
                    >
                      Login
                    </button>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </>
      );
    } else if (state === true) {
      return (
        <>
          <div className="nav1">
            <nav
              className={`navbar navbar-expand-lg text-center navbar-light col-lg-12 col-12  ${
                navbar ? "nav2" : ""
              }`}
            >
              <div
                className={`${navbar ? "container" : "container"} ${
                  navbar ? "bcknav" : ""
                }`}
              >
                {/* <a className="navbar-brand" href="javascript:void(0)">JustHire</a> */}
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <h2 className="h2">
                    <span className="jh">J</span>ust
                    <span className="jh">H</span>ire
                  </h2>
                  {/* <img className="logo-img my-auto" src={logo} alt="logo"/> */}
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mynavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                  <div className="navbar-nav ms-auto navi">
                    <NavLink className="navlink" to="/recruiter">
                      <span>Recruiter</span>
                    </NavLink>


                    <NavLink className="navlink" to="/about">
                      <span>About us</span>
                    </NavLink>
                    <NavLink className="navlink" to="/help">
                      <span> Help</span>
                    </NavLink>
                    <NavLink className="navlink" to="/postjob">
                      <span>Post a job</span>
                    </NavLink>

                  </div>

                   <NavLink to="/signup" className=" ms-auto" >
                    <button
                      className="btn bg-default rounded-pill loginbtn"
                      role="button"
                      onClick={logout}
                    >
                      Logout 
                    </button>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="nav1">
            <nav
              className={`navbar navbar-expand-lg text-center navbar-light col-lg-8 col-12 offset-lg-2     ${
                navbar ? "nav2" : ""
              }`}
            >
              <div
                className={`${navbar ? "container" : "container"} ${
                  navbar ? "bcknav" : ""
                }`}
              >
                {/* <a className="navbar-brand" href="javascript:void(0)">JustHire</a> */}
                <NavLink to="/" style={{ textDecoration: "none" }}>
                  <h2 className="h2">
                    <span className="jh">J</span>ust
                    <span className="jh">H</span>ire
                  </h2>
                  {/* <img className="logo-img my-auto" src={logo} alt="logo"/> */}
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mynavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                  <div className="navbar-nav ms-auto navi">
                    <NavLink className="navlink" to="/jobseeker">
                      <span>Jobseeker</span>
                    </NavLink>
                    <NavLink className="navlink" to="/about">
                      <span>About us</span>
                    </NavLink>
                    <NavLink className="navlink" to="/help">
                      <span> Help</span>
                    </NavLink>
                  </div>

                  <NavLink to="/signup" className=" ms-auto" >
                    <button
                      className="btn bg-default rounded-pill loginbtn"
                      role="button"
                      onClick={logout}
                    >
                      Logout
                    </button>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <RenderMenu />
    </>
  );
};
export default Navbar;
