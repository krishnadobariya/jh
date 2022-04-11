import { React, useState, useEffect , useContext } from 'react';
import "../css/result.css";
import axios from "axios";
import { userContext } from "../App";
import { useParams } from 'react-router-dom';
const DataAnalyst = () => {
  

const name = useParams()
 
  const [number , setNumber] = useState(0)
  const data1 = [];
  console.log(data1);
  const [ques, setQues] = useState([{}])
  useEffect(() => {
    async function data() {
      const res = await axios.get("http://localhost:8070/test/view/DataAnalyst")  
      try {
          console.log('====================================');
          console.log(res.data.data.questionList);
          console.log('====================================');
        setQues(res.data.data.questionList)
      }
      catch (error) {
        console.log(error);
      }
    }
    data()
  }, []);

  console.log("location log", name);
  const id = localStorage.getItem("id");
  const [question , setquestion] = useState();
  const [answer , setAnswer] = useState();
  console.log(question);
  console.log(answer);


  const checkresult1 = (e) => {
    e.preventDefault()
    window.location.href = "/result" 
  axios.post("http://localhost:8070/test/check" , {
      id:id,question:question,answer:answer, categorynew:"DataAnalyst"

    }).then(
      res => { console.log(res) })
      .catch((err) => { console.log(err); })
  }
  const checkresult = (e) => {

    e.preventDefault()

    setNumber(number+1)
  axios.post("http://localhost:8070/test/check" , {
      id:id,question:question,answer:answer, categorynew:"DataAnalyst"

    }).then(
      res => { console.log(res) })
      .catch((err) => { console.log(err); })
   
  }

  const {state , dispatch} = useContext(userContext)
  dispatch({type: 'USER'  , payload : false})

  return (
    <div>
       {localStorage.setItem("categorynew" , "DataAnalyst")}
      <div className="grad nav-margin-top ">
        <div className=" ">
          <div className="container">
            <div className="row">
              <h1 className="heading-white text-center py-md-5 py-3">Test</h1>
              <div className="container-fluid col-sm-6 col-10 mx-auto p-5 mb-5 login-form">
             
              {ques.map((que , id) => {
                
                if(number === id){
                  console.log(id)
                 
                if(id === ques.length - 1 ){
                  return (
                    <div className='formtest'> 
                    <form onSubmit={checkresult1} method="POST">
                      
                          <>
                          <div className='formtest'> 
                            <label htmlFor="mcq1" className="form-label"><b>{que.question}
                            </b></label>
                            {que && que.options && que.options.map((que1) => {
                              return (
                                <div class="form-check">
                                 
                                  <input class="form-check-input" type="radio"  name = "answer" value={que1} onChange={(e) => {setAnswer(e.target.value) ; setquestion(que.question)}} />
                                  <label class="form-check-label" for={que1}>
                                    {que1}
                                  </label>
                                </div>
                              )
                             
                            })}
                          </div>
                           </>
                      <button class="btn mt-2 mb-2 pt-2 pb-2 px-5" style={{fontSize:"15px", backgroundColor:"#003b46", color:"#fff"}} type='submit'>Show Result</button>
                    </form>
                    </div>
                      )
                }else{
                
                  return (
                    <div className='formtest'>
                    <form onSubmit={checkresult} method="POST">
                          <>
                          <div className=''>
                         
                            <label htmlFor="mcq1" className="form-label"><b>{que.question}
                            </b></label>
                            {que && que.options && que.options.map((que1) => {
                              return (
                                <div class="form-check">
                                  <input class="form-check-input" type="radio"  name = "answer" value={que1} onChange={(e) => {setAnswer(e.target.value) ; setquestion(que.question)}} />
                                  <label class="form-check-label" for={que1}>
                                    {que1}
                                  </label>
                                </div>
                              )
                            })}
                            </div>
                          </>
                      <button class="btn pt-2 pb-2 px-5  mt-2 mb-2 p-1" style={{ backgroundColor:"#003b46", color:"#fff" , fontSize:"15px"}} type='submit'>Next</button>
                    </form>
                    </div>
                      )
                }
                  
                }
                
                 })}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataAnalyst;
