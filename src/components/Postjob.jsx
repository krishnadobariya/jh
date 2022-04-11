import axios from "axios";
import { React, useState, useEffect , useContext} from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";
export const Postjob = () => {
const [postdata,setPostdata]= useState({
"company_name":"",
"position":"",
"ptype":"",
"start_date":"",
"end_date":"",
"work":""
})

const { state, dispatch } = useContext(userContext);
dispatch({ type: "USER", payload: true });

const handleData=(e)=>{
   const {name,value} = e.target
   setPostdata({
       ...postdata,
       [name]:value
   })
}
 const handleSubmit=(e)=>{
  axios
  .post("http://localhost:8070/postjob", postdata)
  .then((res) => {
    console.log(res.data);
    window.alert("Job Post Successfully");
    window.location.href = "./recruiter"
    setPostdata({
      "company_name":"",
      "position":"",
      "ptype":"",
      "start_date":"",
      "end_date":"",
      "work":""
    })
  })
  .catch((err) => {
    if (err) {
      window.alert("Somthing Went Worng");
      console.log(err);
    }
  });e.preventDefault()
     console.log(postdata);
 }

const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const response = await fetch("http://localhost:8070/category/view");
    const data = await response.json();
    console.log(data);
    const alldata = data.data;
    setCategory(alldata);
  };


  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
    {console.log(postdata)}
      <div className="grad nav-margin-top ">
        <div className=" ">
          <div className="container">
            <div className="row">
              <h1 className="heading-white text-center py-md-5 py-3">
                Post a job
              </h1>
              <div className="container-fluid col-sm-6 col-10 mx-auto p-5 mb-5 login-form">
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label><b>Company Name</b></label>
                    <input
                      type="text"
                      class="form-control"
                      name="company_name"
                      value={postdata.company_name}
                      placeholder="Enter Company Name"
                      onChange={handleData}
                    />
                  </div>
                  <br />
                  <div class="form-group">
                    <label for="exampleInputPassword1"><b>Select PostType</b></label>
                    <select
                      className="form-select form-select-md"
                      name="position"
                       value={postdata.position}
                       onChange={handleData}
                    >
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
                  <br />
                  <div className="d-md-flex">
                    <label className="form-label">
                      <b>Position Type:</b>
                    </label>
                    <div className="form-check ps-5">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="ptype"
                        value="temporary"
                        onChange={handleData}
                      />
                      Temporary
                      <label className="form-check-label" htmlFor="yes"></label>
                    </div>
                    <div className="form-check ps-5">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="ptype"
                        value="permanent"
                        onChange={handleData}
                      />
                      Permanent
                      <label className="form-check-label" htmlFor="no"></label>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="file" className="form-label">
                        <b>Start Date</b>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="file"
                        name="start_date"
                        value={postdata.start_date}
                        onChange={handleData}
                      />
                      <div className="valid-feedback">Valid.</div>
                      <div className="invalid-feedback">
                       
                      </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6">
                      <label htmlFor="dob" className="form-label">
                        <b>End Date</b>
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="dob"
                        value={postdata.end_date}
                        name="end_date"
                        onChange={handleData}
                      />
                    </div>
                  </div>
                  <br/>
                 
                  <div className="d-md-flex">
                    <label htmlFor="mode" className="form-label">
                      <b>Working hours:</b>
                    </label>
                    <div className="form-check ps-5">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="work"
                        value="fulltime"
                        onChange={handleData}
                      />
                     Full time
                      <label className="form-check-label" htmlFor="yes"></label>
                    </div>
                    <div className="form-check ps-5">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="work"
                        value="parttime"
                        onChange={handleData}
                      />
                      parttime
                      <label className="form-check-label" htmlFor="no"></label>
                    </div>
                  </div>
                  <br />
                  <div class="form-group">
                    <label><b>City Name</b></label>
                    <input
                      type="text"
                      class="form-control"
                      name="city"
                      value={postdata.city}
                      placeholder="Enter City Name"
                      onChange={handleData}
                    />
                  </div>
                  /<br />
                  <button type="submit" class="button-30">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
