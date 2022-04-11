import React from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Faqr = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : true);
    };
  
    const question = [
      {
        p1: "panel1",
        q1: "How widely used is the JustHire web app?",
        a1:
          "JustHire is the #1 web job search app on iPhone or Android in more than 20+ countries."
      },
      {
        p1: "panel2",
        q1: "How can I post a Jobs?",
        a1:
          "You can Post a job by adding information in sign up form as recruiter."
      },
      {
        p1: "panel4",
        q1: "How many Jobs should I sponsor?",
        a1:
          "You can sponsor any number of jobs you want.We’ll help you prioritize the jobs you should sponsor by location, job title or industry."
      },
      {
        p1: "panel5",
        q1: "Will my posted jobs Appear in Web search results?",
        a1:
          "All organic, or free, jobs on JustHire are included in web search results to reach mobile job seekers With JustHire Apply, web job seekers can apply directly to jobs from WebApp using an JustHire Resume."
      },
      {
        p1: "panel6",
        q1: "Is it FREE?",
        a1: "Yes,It is totally FREE.s"
      },
      {
        p1: "panel7",
        q1: "How much does it cost?",
        a1:
          "Featured Employer status is the best way to showcase your employe brand on Indeed and ensure the maximum exposure for your jobs. Only one Featured Employer ad unit appears on each page, helping you increase brand awareness among the most relevant job seekers."
      }
    ];
  
  return (
    <div>
      <div className="col-sm-8 col-10 mx-auto pb-md-5 pb-3">
        <h1 className="text-center py-3 py-md-5 heading">
          Frequently Asked Questions for Requiter
        </h1>
        <div>
          {question.map((question, index) => (
            <Accordion
              expanded={expanded === question.p1}
              onChange={handleChange(question.p1)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                className="question1"
              >
                <Typography
                  className="question"
                  sx={{ width: "33%", flexShrink: 0 }}
                >
                  {question.q1}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="answer">{question.a1}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>

    </div>
  )
}
export default Faqr;
