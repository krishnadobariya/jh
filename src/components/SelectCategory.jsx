import React, { useState, useContext } from "react";
import "../css/signupj.css";
import "../css/showjobseeker.css";
import { userContext } from "../App";
import { Helmet } from "react-helmet";
import axios from "axios";
const SelectCategory = () => {
  const [category, setCategory] = useState();

  const submitCategory = (e) => {
    e.preventDefault();
    localStorage.setItem("category", category);
    window.location.href = "/showjobseeker";
  };

  const { state, dispatch } = useContext(userContext);
  dispatch({ type: "USER", payload: true });

  return (
    <>
      <Helmet>
        <title>Select Category</title>
      </Helmet>
      <div className="registerjob" style={{ height: "95vh" }}>
        <div className="nav-margin-top">
          <h1 className="text-center py-md-5 py-3" style={{ color: "#fff" }}>
            Select Category for Show Jobseeker Detail
          </h1>
          <div className="row">
            <div className="container-fluid  col-lg-4 col-md-6 mx-auto registerrform">
              <form
                className="p-3 "
                onSubmit={submitCategory}
                encType="multipart/form-data"
                style={{
                  height: "50vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="">
                  <label htmlFor="mode" className="form-label">
                    <b>Select Ctegory :</b>
                  </label>
                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="webDeveloper"
                    />{" "}
                    web developer
                    <label className="form-check-label"></label>
                  </div>

                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="webDesigner"
                    />
                    web designer
                    <label className="form-check-label"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="mobileDeveloper"
                    />
                    mobile developer
                    <label className="form-check-label"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="softwareDeveloper"
                    />{" "}
                    software developer
                    <label className="form-check-label"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="uiuxDesigner"
                    />{" "}
                    ui/ux designer
                    <label className="form-check-label"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="DataAnalyst"
                    />{" "}
                    data anaylst
                    <label className="form-check-label"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="DatabaseAdministrator"
                    />{" "}
                    database adminstrator
                    <label className="form-check-label"></label>
                  </div>
                  <div className="form-check ps-5">
                    <input
                      type="radio"
                      className="form-check-input"
                      onChange={(e) => setCategory(e.target.value)}
                      value="blockchainDeveloper"
                    />{" "}
                    blockchain developer
                    <label className="form-check-label"></label>
                  </div>

                  <button
                    type="submit"
                    className="btn mt-5 btn-next d-block"
                    style={{
                      backgroundColor: "#003b46",
                      color: "#fff",
                      width: "100%",
                    }}
                  >
                    Next
                  </button>
                </div>
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectCategory;
