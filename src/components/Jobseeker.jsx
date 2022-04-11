import React, {useContext,useEffect,useState} from 'react';
import "../css/jobseeker.css";
import "../css/recruiter.css";
import job from "../images/p1.gif";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { NavLink } from 'react-router-dom';
import job1 from "../images/resume.svg";
import job2 from "../images/pj.svg";
import job3 from "../images/hire1.svg";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";
import boy from "../images/69466-nerdy-boy-blinking-eyes.gif";
import girl from "../images/girl.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import 'react-slideshow-image/dist/styles.css';
import icon from "../images/j-icon.svg";
import Flowj from "./Flowj";
import sec5 from "../images/talk.svg";
import Slider from 'react-perfect-slider';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import s1 from "../images/sec6-1.svg";
import s2 from "../images/sec6-2.svg";
import s3 from "../images/sec6-3.svg";
import s4 from "../images/sec6-4.svg";
import s5 from "../images/sec6-5.svg";
import s6 from "../images/sec6-6.svg";
import { Helmet } from "react-helmet";
import { userContext } from "../App";
import { FaLessThanEqual } from 'react-icons/fa';


const Jobseeker = () => {
  const [feedback , setFeedback] = useState([]);
  const [show , disable] = useState();
  const {state , dispatch} = useContext(userContext)
  dispatch({type: 'USER'  , payload : false})
  const [test,getTest]= useState(true);

  const id = localStorage.getItem('id')
  const getFeedback = async() => {
    const response = await fetch(`http://localhost:8070/button/show?id=${id}`);
    const data = await response.json()
    const message = data.message
    console.log("message is" , message);
    disable(message)
  }
  
  useEffect(() => {
    getFeedback()
  }, [])


  const getButton = async() => {
    const response = await fetch("http://localhost:8070/feedback/view");
    const data = await response.json()
    const alldata = data.data
    setFeedback(alldata)
  }
  useEffect(() => {
    getButton()
  }, [])
  
  const slideImage = [
    {
      src: boy,
      Name: "Kim Mason",
      position: "Web devloper",
      company: 'Plazma Tech.',
      review: "Building a team from scratch was difficult for a young professional like me. JustHire served as a quick hack to my hiring needs."
    },
    {
      src: girl,
      Name: "Evelyn Rojas",
      position: "Software devloper",
      company: 'Sky High Tech.',
      review: "JustHire Chat feature is a phenomenal idea to bring to Recruiters.This site is very helpful for me."

    },
    {
      src: girl,
      Name: "Blaire Sullivan",
      position: " Data Analyst",
      company: 'InTouch Tech.',
      review: " JustHire took our hiring  the platform out of a Google Sheet and into a sustainable platform ."

    },

  ];
  const Slide = [
    {
      src1: s1,
      title1: "The  Benefits of Using  JustHire",
      des1: "Really! We have intelligent, friendly client support folks who you can easily talk to and who genuinely care about helping you have a good experience.",
      src2: s2,
      title2: " Norisk try Justhire  with and all the upside",
      des2: "We want you to be happy with our service, and if for any reason you’re not, you are connect with us by live chat. It’s that easy"

    },
    {
      src1: s3,
      title1: "We see  every job before you do.",
      des1: "Save time, energy, and stress by letting our expert team vet the jobs and companies for you! You only see the best  flexible job listings available.",
      src2: s4,
      title2: " Access exclusive research on employers",
      des2: "You can leverage exclusive hiring information on over 50,000 companies to help find the right employer, culture, and job–faster and easier."

    },
    {
      src1: s5,
      title1: "Access the career coaching and resume  reviews.",
      des1: "Our fantastic in-house career coaches specialize and flexible job search guidance! Join weekly Q&As or sign up for one-on-one sessions.",
      src2: s6,
      title2: " Leval up with skills courses and more !",
      des2: "Increase your chances of job search success with in-depth expert resources, events, and virtual job fairs."

    }
  ];
  return (
   
    <>
    <Helmet>
          <title>Jobseeker-JustHire</title>
        </Helmet>
      <div className='nav-margin-top'>
        <div className="col-lg-8 col-11 mx-auto">
          <div className='row'>
            <div className='col-lg-6 col-12 mt-5 pe-5  pt-2 pt-xl-5 job-sec1-6 reveal fade-left '>
              <h1 className="heading">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(" Find the best talent fits your life")
                      .start();
                  }} />
              </h1>
              <p className='sub-heading-gray fs-5  mt-3'>
                we can help you find the best talents and employers.
              </p>
           
                <NavLink to="/testall"> <button className="btn rounded-pill job-sec1-btn px-4 px-lg-5 mt-2" onClick={() =>getTest(false)} >GIVING A TEST <ChevronRightIcon />  </button></NavLink>
             
            </div>
            <div className='col-lg-6 col-12 ms-lg-auto ms-0 text-center mt-5 reveal fade-right'>
              <img src={job} alt="jobseeker" className="job-sec1-5 " />
            </div>
          </div>
        </div>
        <div className='job-sec3 pb-3 pb-md-5'>
          <div className='col-8 mx-auto text-center mt-5 pt-5 '>
            <p className="heading reveal fade-in">How the platform Works</p>
          </div>
          <div className='col-11 col-lg-8 mx-auto mt-5 '>
            <div className='row'>

              <div className="col-12 col-lg-4 text-center reveal fade-left">
                <img src={job1} alt="jobseeker" className="job-sec3-1" style={{height:"200px", width:"200px"}} />
                <p className="job-sec3-2 sub-heading-blue">Post a job</p>
                <p className="para-gray">We've got more than 5 million of employers.you've got plenty of options.plus,we'll send an alert when a good  fit for  is posted.</p>
              </div>
              <div className="col-12 col-lg-4 text-center reveal fade-bottam">
                <img src={job2} alt="jobseeker" className="job-sec3-1"   style={{height:"200px", width:"200px"}}/>
                <p className="job-sec3-2 sub-heading-blue">Getting match with talents </p>
                <p className="para-gray">create an account and upload  your resume  to br found by  the recruiters who sear database every day.</p>
              </div>
              <div className="col-12 col-lg-4 text-center reveal fade-right">
                <img src={job3} alt="jobseeker" className="job-sec3-1"  style={{height:"200px", width:"200px"}}/>
                <p className="job-sec3-2 sub-heading-blue">Hire the talent</p>
                <p className="para-gray">We've  got your back.Our career advice ,resume services and education partner give you a leg up in the job search.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8  col-11 mx-auto mt-5">
        <p className="heading text-center reveal pluse">The Benefits of Using JustHire</p>
              <p className='para-black text-dark mx-auto reveal fade-bottom'>There are so many! Starting with <b>30,873 of the highest quality
                and flexible jobs in 50+ career categories ,</b>
                our goal is to provide you with a top-notch job search experience from start to finish… and even beyond!</p>
           
            </div>
        <div className="col-lg-8  col-11 mx-auto mt-5">
          <div className='row'>
            <div className='col-xl-6 col-12 job-sec6-1'>
              
              <Slider renderControls={(next, previous) => [
                <div className='text-center'>
                <button onClick={previous} className='btn job-sec6-6-btn m-1 ms-2'><ArrowLeftIcon /></button>  
                <button onClick={next} className="btn job-sec6-6-btn m-1 ms-2"><ArrowRightIcon /></button>
                </div>
              ]}>
                {Slide.map((Slide, index) => (
                  <>
                    <div key={index}  className='mt-3 mt-xl-5'>
                      <div className='row'>
                        <div className='col-2'>
                          <img src={Slide.src1} alt="icons" className='job-sec6-9' />
                        </div>
                        <div className='col-10'>
                          <p className="sub-heading-green">
                            {Slide.title1}</p>
                          <p className="para-blue">{Slide.des1}</p>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-2'>
                          <img src={Slide.src2} alt="icons" className='job-sec6-9' />
                        </div>
                        <div className='col-10'>
                          <p className="sub-heading-green">
                            {Slide.title2}</p>
                          <p className="para-blue">{Slide.des2}</p>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
              <div className='text-center pt-3'>
              <NavLink to="/signupj"><button className='btn rounded-pill btn-blue'>Join with us!</button></NavLink></div>
            </div>
            <div className='col-xl-6 col-12 job-sec6-2 pt-5 text-center reveal fade-right'>
              <img src={sec5} alt="benefits" className='job-sec6-3' />
            </div>
          </div>
        </div>

        <div className="help-section2 mt-5">
          <div className="col-md-8 col-11 mx-auto text-center p-5">
            <NavLink to="/findjobcat" className="btn rounded-pill m-2 btn-blue">
          Recommended
            </NavLink>
           </div>
        </div>
        <Flowj />
        <div className='job-sec5'>
          <div className='col-12 col-lg-8 mx-auto  '>
            <div className="text-center w-50 mx-auto ">
              <p className="heading reveal pluse">Are you struggling to find Jobs & Internships?</p>
              <p className="sub-heading-gray">Connect to our experts for professional and personalised advice .</p>
              <NavLink to="/signupj"><button className='button-33 reveal pluse'>Sign up now</button></NavLink>
            </div>
          </div>
          <div className='job-hide'>
            <div className=" job-sec5-4"><img src={icon} alt="icon" className='job-sec5-img' /></div>
            <p className='job-sec5-box job-sec5-5'>Get motivated and focuse</p>
            <div className=" job-sec5-6"><img src={icon} alt="icon" className='job-sec5-img' /></div>
            <p className='job-sec5-box job-sec5-7'>Enhance your skills. Become job ready</p>

            <div className=" job-sec5-8"><img src={icon} alt="icon" className='job-sec5-img' /></div>
            <p className='job-sec5-box job-sec5-9'>Build your professional resume
            </p>
            <div className=" job-sec5-10"><img src={icon} alt="icon" className='job-sec5-img' /></div>
            <p className='job-sec5-box job-sec5-11 px-5'>Get hired
            </p>
            <div className=" job-sec5-12"><img src={icon} alt="icon" className='job-sec5-img' /></div>
            <p className='job-sec5-box job-sec5-13 '>Give skill assessments & interviews
            </p>
            <div className=" job-sec5-14"><img src={icon} alt="icon" className='job-sec5-img' /></div>
            <p className='job-sec5-box job-sec5-15 '>Start applying to jobs and internships
            </p>
          </div>
        </div>
        <div className="job-sec4-bg">
        <div className="heading text-center pt-5 reveal fade-bottom"><h1>Hear from candidates who found great Jobs & Internships on JustHire.</h1></div>
        <Carousel>
        {feedback.map((feedback, index) => (
          <>
            <div className="col-lg-8 col-10 mx-auto ">
              <div className="job-sec4 row py-0">
              <div className='col-12 col-lg-4 mx-auto mx-lg-0 '>
                    <img src={girl} alt="girl"  className="job-sec4-img"/>
                  </div>
                <div className="col-12 col-lg-8 my-auto text-center ">
                  <p className="job-sec4-4  sub-heading-gray pt-xl-3">
                    "{feedback.feedback}"
                  </p>
                  <h1 className="job-sec4-1 ">{feedback.firstname}</h1>
                  <p className="job-sec4-2 ">
                    <span className="job-sec4-3 "> {feedback.companyname} </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
        </ Carousel>
       </div>

        <Footer />
      </div >
    </>
  );
}

export default Jobseeker;
