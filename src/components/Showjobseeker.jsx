import React, { useEffect, useState, useContext } from "react";
import "../css/showjobseeker.css";
import axios from "axios";
import { userContext } from "../App";
import { NavLink } from "react-router-dom";
import { ToastContainer
  ,toast } from "react-toastify"; 
  import 'react-toastify/dist/ReactToastify.css';
function Showjobseeker() {
  const notify =()=> toast.success("Email send successfully.....",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:3000
  })
  const [show, setShow] = useState(false);
  const [catregorys, setCtegorys] = useState([]);
  const [cat, setCat] = useState([]);
  console.log("==>cat is", cat);
  const category = localStorage.getItem("category");
  const getCategortwiseJobseeker = async () => {
    console.log(category);
    const res = await axios.get(
      `http://localhost:8070/auth/view/categoriwisedata?category=${category}`
    );
    try {
      console.log(res.data.data);
      const allData = res.data.data;
      setCtegorys(allData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategortwiseJobseeker();
  }, []);

  console.log("this is", catregorys);
  const { state, dispatch } = useContext(userContext);
  dispatch({ type: "USER", payload: true });

  const [searchName, setSearchName] = useState("");
  const [email , setEmail] = useState("");
  const search = (e) => {
    e.preventDefault();
    setShow(true)
    axios
      .get(
        `http://localhost:8070/auth/search/jobseeker?firstname=${searchName}&category=${category}`
      )
      .then((res) => {
        setCat(res.data.data)
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  console.log("dddsvd",email);
  const SendEmail = (e) => {
   e.preventDefault()
    axios.get(
      `http://localhost:8070/auth/sendemail?email=${email}`
    )
    .then((res) => 
    console.log("email"),
    notify()
    )
  }

  return (
    <>
    <ToastContainer/>
      <div className="about-section3 ">
        <div className="col-lg-6 col-11 mx-auto">
          <h1 className="text-center py-md-5 py-3 heading">
            Meet Your Growth Needs
          </h1>

          <div className="search_portion">
            <form onSubmit={search}>
              <div className="d-flex justify-content-between">
                <input
                  type="text"
                  name="firstname"
                  onChange={(e) => setSearchName(e.target.value)}
                  ></input>     

                <button
                  type="submit"
                  className="btn "
                  style={{ backgroundColor: "#fff", border: "3px solid gray" }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          {show == false ? (
            <div>
              {catregorys.map((curele, index) => (
                <>
                  <div className="col p-3 reveal fade-bottom">
                    <div className="row about-section3-box p-3 justify-content-around category-show">
                      <div className="col-6 text-right p-lg-3 p-0 justify-content-center">
                        <p>
                          <span>Name: </span>
                          {curele.firstname} <span>{curele.lastname}</span>
                        </p>
                        <p>
                          <span>Address: </span>
                          {curele.address}
                        </p>
                        <p>
                          <span>Email: </span>
                          {curele.email}
                        </p>
                        <p>
                          <span>Mobile: </span>
                          {curele.mobile}
                        </p>
                      </div>
                      <div className="col-6 my-auto">
                        <p>
                          <span>Mode: </span>
                          {curele.mode}
                        </p>
                        <p>
                          <span>Position: </span>
                          {curele.position}
                        </p>
                        <p>
                          <span>Result: </span>
                          {curele.result}
                        </p>
                        <p>
                          <span>Previously Worked Us?: </span>
                          {curele.work}
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <a
                            href={curele.file}
                            download="resume.pdf"
                            className="btn btn-next"
                            style={{
                              color: "#fff",
                              backgroundColor: "#003b46",
                              color: "#fff",
                              width: "100%",
                            }}
                            target="_blank"
                          >
                            resume.pdf
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            className="btn btn-next"
                           
                          
                            onClick={() =>setEmail(curele.email)}
                            onChange={SendEmail()}
                            style={{
                              color: "#fff",
                              backgroundColor: "#003b46",
                              color: "#fff",
                              width: "100%",
                            }}
                            target="_blank"
                          >
                            Email Sent{" "}
                          </a>
                        </div>
                      </div>



                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div>
              <h1>vsweafvs</h1>
              {cat.map((curele, index) => (
                <>
                  <div className="col p-3 reveal fade-bottom">
                    <div className="row about-section3-box p-3 justify-content-around category-show">
                      <div className="col-6 text-right p-lg-3 p-0 justify-content-center">
                        <p>
                          <span>Name: </span>
                          {curele.firstname} <span>{curele.lastname}</span>
                        </p>
                        <p>
                          <span>Address: </span>
                          {curele.address}
                        </p>
                        <p>
                          <span>Email: </span>
                          {curele.email}
                        </p>
                        <p>
                          <span>Mobile: </span>
                          {curele.mobile}
                        </p>
                      </div>
                      <div className="col-6 my-auto">
                        <p>
                          <span>Mode: </span>
                          {curele.mode}
                        </p>
                        <p>
                          <span>Position: </span>
                          {curele.position}
                        </p>
                        <p>
                          <span>Result: </span>
                          {curele.result}
                        </p>
                        <p>
                          <span>Previously Worked Us?: </span>
                          {curele.work}
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <a
                            href={curele.file}
                            download="resume.pdf"
                            className="btn btn-next"
                            style={{
                              color: "#fff",
                              backgroundColor: "#003b46",
                              color: "#fff",
                              width: "100%",
                            }}
                            target="_blank"
                          >
                            resume.pdf{" "}
                          </a>
                        </div>
                        <div className="col-6">
                          <a
                            className="btn btn-next"
                            style={{
                              color: "#fff",
                              backgroundColor: "#003b46",
                              color: "#fff",
                              width: "100%",
                            }}
                            target="_blank"
                          >
                            Email Sent{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Showjobseeker;
