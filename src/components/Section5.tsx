import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
interface FAQItem {
   question: string;
   answer: string;
 }
const Section5 = () => {
      
      const faqData: FAQItem[] = [
        {
          question: "How do I receive the job alerts?",
          answer:
            "You’ll receive curated job listings directly in your email inbox daily based on your selected preferences and timing.",
        },
        {
          question: "Can I customize the time I receive job emails?",
          answer:
            "Yes! All paid plans support fully custom email timings. Free users get alerts at a default fixed time.",
        },
        {
          question: "Which platforms do you get jobs from?",
          answer:
            "Currently, we scrape jobs from Naukri.com using Puppeteer. We plan to add more job platforms in future updates.",
        },
        {
          question: "Do I need to upload my resume or apply from your platform?",
          answer:
            "No, we don’t ask for resumes. We just send you relevant job links — you can apply directly on the original platforms.",
        },
        {
          question: "Is this completely automated?",
          answer:
            "Yes! Once you set up your preferences, our system will automatically send you daily job updates — no manual searching needed.",
        },
        {
          question: "What happens after my plan expires?",
          answer:
            "You’ll stop receiving job alerts unless you upgrade or renew your plan. You can switch back to the free plan anytime.",
        },
      ];
      
  return (
    <>
        <div className='mt-[3rem] mb-[5rem]' >
         <h2 className='text-center bungee-font text-[3rem] font-semibold ' >Frequently Asked Questions</h2>
         <div className='flex flex-col gap-[1rem] justify-center items-center mt-[4rem] ' >
            {
                faqData.map((i,index)=>{
                    return(
                        <Accordion className='!bg-gray-100 !w-[90%] ' key={index}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <Typography component="span" className='!text-[1.5rem] !font-bold ' >{index+1}.{i.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className='!bg-gray-200 !text-[1.3rem] !text-gray-800 !font-semibold '>
                            {i.answer}
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
         </div>
        </div>
    </>
  )
}

export default Section5