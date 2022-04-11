import React, { useEffect, useState , useContext } from 'react'
import Navbar from './Navbar'
import axios from "axios"
import { userContext } from "../App";
import {NavLink} from "react-router-dom"
function Result() {
    const [result , setResult] = useState()
    useEffect(() => {
        const id = localStorage.getItem("id")
        const category = localStorage.getItem("categorynew")
            axios.get(`http://localhost:8070/test/result?id=${id}&category=${category}`).
            then((res) => {console.log(res); setResult(res.data.data)}).
            catch((e) => {console.log(e);})
          
         
      }, []);
    
    const goback =() => {
     
        window.location.href ="/jobseeker"
      
       
    }
    const {state , dispatch} = useContext(userContext)
    dispatch({type: 'USER'  , payload : false})
   
  return (
    <>
    <Navbar/>
    <div>
      <div className="grad nav-margin-top ">
        <div className=" ">
          <div className="container">
            <div className="row">
              <h1 className="heading-white text-center py-md-5 py-3">Result</h1>
              <div className="container-fluid col-sm-6 col-10 mx-auto p-5 mb-5 login-form">  
              <div className='formtest-1'> 
                    <form>
                        <h1>{`${result} / 10`}</h1> 
                        <NavLink to="/jobseeker" className="btn pt-2 pb-2 px-5  mt-2 mb-2 p-1" style={{ backgroundColor:"#003b46", color:"#fff" , fontSize:"15px"}}>Go back</NavLink>
                    </form>  
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Result