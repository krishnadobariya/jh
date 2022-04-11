import { React, useState, useEffect, createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./components/Chat";
import Scrollbutton from "./components/Scrollbutton";
import Home from "./components/Home";
import Jobseeker from "./components/Jobseeker";
import Recruiter from "./components/Recruiter";
import About from "./components/About";
import Help from "./components/Help";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Signupr1 from "./components/Signupr1";
import Signupj from "./components/Signupj";
import Navbar from "./components/Navbar";
import Flowr from "./components/Flowr";
import Flowj from "./components/Flowj";
import Career from "./components/Career";
import HowWorks from "./components/HowWorks";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Error from "./components/Error";
import Result from "./components/Result";
import Loginj from "./components/Loginj";
import Careerpages from "./components/Careerpages";
import TestAll from "./components/TestAll"
import Cookies from "universal-cookie";
import { Postjob } from "./components/Postjob";
import { intialState, reducer } from "./reducer/Usereducer";
import Showjobseeker from "./components/Showjobseeker";
import SelectCategory from "./components/SelectCategory";
import Webdesigner from "./components/Webdesigner";
import WebDeveloper from "./components/webDeveloper";
import MobileDevloper from "./components/Mobiledevloper";
import Softwaredevloper from "./components/Softwaredevloper";
import DataAnalyst from "./components/Dataanalyst";
import DatabaseAdminstrator from "./components/DatabaseAdminstrator";
import BlockchainDevloper from "./components/BlockchainDevloper";
import Uiuxdesigner from "./components/UiuxDesigner";
import Findjobcat from "./components/findjobcat";
import Findjob from "./components/Findjob";

const cookies = new Cookies();
export const userContext = createContext();
const cookie = cookies.get("jwt");
console.log(cookie);
const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/recruiter" element={ <Recruiter />} />
        <Route exact path="/jobseeker" element={ <Jobseeker />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/help" element={<Help />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginj" element={<Loginj />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signupr" element={<Signupr1 />} />
        <Route exact path="/signupj" element={<Signupj />} />
        <Route exact path="/flowr" element={<Flowr />} />
        <Route exact path="/flowj" element={<Flowj />} />
        <Route exact path="/career" element={<Career />} />
        <Route exact path="/postjob" element={<Postjob />} />
        <Route exact path="/findjobcat" element={<Findjobcat />} />
        <Route exact path="/findjob/:name" element={<Findjob />} />
         {/* <Route exact path="/findjobcat" element={<Findjobcat />} /> */}
        <Route
          exact
          path="/career/career_pages/:name"
          element={<Careerpages />}
        />
        <Route exact path="/howworks" element={<HowWorks />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/result" element={<Result />}></Route>
        <Route exact path="/showjobseeker" element={<Showjobseeker />}></Route>
        <Route exact path="/webDesigner" element={<Webdesigner />}></Route>
        <Route exact path="/webDeveloper" element={<WebDeveloper />}></Route>
        <Route exact path="/mobileDeveloper" element={<MobileDevloper />}></Route>
        <Route exact path="/softwareDeveloper" element={<Softwaredevloper />}></Route>
        <Route exact path="/DataAnalyst" element={<DataAnalyst />}></Route>
        <Route exact path="/DatabaseAdministrator" element={<DatabaseAdminstrator />}></Route>
        <Route exact path="/blockchainDeveloper" element={<BlockchainDevloper />}></Route>
        <Route exact path="/uiuxDesigner" element={<Uiuxdesigner />}></Route>
        <Route
          exact
          path="/selectcategory"
          element={<SelectCategory />}
        ></Route>
        <Route exact path="/testall" element={<TestAll/>}/>

        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
};

const App = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", reveal);

    // To check the scroll position on page load
    reveal();
  }, []);
  
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </userContext.Provider>
      <Scrollbutton />
      <Chat />
    </>
  );
};
export default App;
