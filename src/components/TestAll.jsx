import axios from "axios";
import React, { useEffect, useState , useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../App";
function TestAll() {
  // const [test , settest] = useState();
  // if(test == "web designer"){
  //     window.location.href = "./testcomman"
  // }

  const { state, dispatch } = useContext(userContext);
dispatch({ type: "USER", payload: false });

  const [category, setCategory] = useState([]);
  const getCategory = async () => {
    const response = await fetch("http://localhost:8070/category/view");
    console.log(response);
    const data = await response.json();
    const alldata = data.data;
    setCategory(alldata);
  };

  useEffect(() => {
    getCategory();
  }, []);

  const removeOldData = () => {
    const categor = localStorage.getItem("categor");
    const id = localStorage.getItem("id");
    axios.get(`http://localhost:8070/test/removeOldValue?id=${id}&categorynew=${categor}`).then((res) => console.log("ressss" , res))
  }
  return (
    <>
      <div>
        <div className="grad nav-margin-top ">
          <div className=" ">
            <div className="container">
              <div className="row">
                <h1 className="heading-white text-center py-md-5 py-3">
                  Ckecking Your Knowledge
                </h1>
                <div className="container-fluid col-sm-8 col-10 mx-auto p-5 mb-5 login-form" style={{height:"650px"}}>
                 
                  {category.map((curele , index) => (
                    <>
                    
                      <div>
                        
                        <div className="d-flex justify-content-between">
                          <div>{curele.categoriesname}</div>
                          <NavLink
                        to={`/${curele.categoriesname}`}
                          >
                            <button
                           
                              class="btn pt-2 pb-2 px-5 p-1"
                             onClick={()=> {
                               localStorage.setItem("categor" , curele.categoriesname) ; 
                               removeOldData();
                             }}
                              style={{
                                backgroundColor: "#003b46",
                                color: "#fff",
                                fontSize: "15px",
                        
                              }}
                            >  
                              start                         
                            </button>
                            </NavLink>
                        </div>
                      </div>
                      <hr />
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestAll;
