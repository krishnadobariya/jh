import { React, useEffect,useState , useContext } from 'react';
import axios from "axios"
import { useParams,Link } from 'react-router-dom';
import { userContext } from "../App";
import { data } from 'jquery';
const Findjob = () => {
    const { state, dispatch } = useContext(userContext);
    dispatch({ type: "USER", payload: false });

    const name = useParams()
    const category = name.name
  const[categorydata,setdata]= useState([{}])
    useEffect(() => {
        async function data() {
            try{
            const res = await axios.get(`http://localhost:8070/categorywise/jobpost/${category}`)
            console.log(res.data);
          setdata(res.data.data)
        
            }
            catch(err){
                console.log(err);
            }
        }
        data()
    }, []);
    console.log(categorydata);
    return (
        <>
            <div className="nav-margin-top recruiter-part">
                <div className="about-section3 ">
                    <div className='container'>
                    <div className='row'>
                        
                    <div className="col-lg-6 col-11">
                        <h1 className="text-center py-md-5 py-3 heading">recommemed for you</h1>
                        {categorydata.map((data) => {
                            return(
                            <div className="col p-3 reveal fade-bottom">
                                <div className="row about-section3-box p-3 text-center" style={{minHeight:"360px"}}>
                                    <h1>{data.company_name}</h1><hr />
                                    <p>{data.position}  |  {data.city} </p><hr />
                                    <p><b>Position type :</b> {data.ptype} </p><hr />
                                    <p><b>working hours :</b> {data.work}  </p><hr />
                                    <p><b>End date :</b> {data.end_date} </p>
                                    <p><b>If you are interested ,give the test <Link to={`/${category}`}> click here</Link> </b> </p>
                                </div>
                            </div>
                            
                            )
                        })}
 
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default Findjob;
