"use client"
import React, { useEffect } from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
interface HowItWorksItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    duration:string;
  }

  

const Section3 = () => {
  useEffect(()=>{
    AOS.init();
    },[])
    const howItWorksData: HowItWorksItem[] = [
        {
          title: "Create an Account",
          description: "Sign up in seconds with your email using secure Clerk authentication.",
          icon: <PersonPinIcon className='!text-[3rem]' />,
          duration:"3000"
        },
        {
          title: "Set Your Job Preferences",
          description: "Enter your desired job title, location, and choose remote or on-site options.",
          icon: <SettingsApplicationsIcon className='!text-[3rem]' />,
          duration:"3000"

        },
        {
          title: "Choose Your Alert Time",
          description: "Pick when you want to receive job alerts — daily, your time, your control.",
          icon: <AccessAlarmsIcon className='!text-[3rem]' />,
          duration:"3000"

        },
        {
          title: "We'll Start Searching",
          description: "Our system uses Puppeteer to find jobs for you every day from trusted platforms.",
          icon: <TravelExploreIcon className='!text-[3rem]' />,
          duration:"3000"
        },
        {
          title: "Get Job Alerts in Your Inbox",
          description: "You'll receive up to 5–20 jobs per day based on your plan — directly to your email.",
          icon: <AttachEmailIcon className='!text-[3rem]' />,
          duration:"3000"
        },
        {
          title: "Apply Instantly",
          description: "Open your inbox, find relevant jobs, and apply without wasting time searching manually.",
          icon: <BusinessCenterIcon className='!text-[3rem]' />,
          duration:"3000"
        },
      ];

  return (
   <>
    <section className='py-[4rem] ' >
        <h2 className='text-center bungee-font text-[3rem] font-semibold ' >How It Works</h2>
       <div className='flex flex-wrap gap-y-[4rem] justify-around my-[5rem] ' >
           {
            howItWorksData.map((i:HowItWorksItem,index:number)=>{
                return(
                    <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration={i.duration} key={index} className=' max-tablet:w-[45%] max-smobile:w-[85%]  shadow-[0px_4px_19px_8px_#4042434d] cursor-pointer hover:scale-[1.03] transition-all w-[28%] rounded-[10px] flex flex-col gap-[0.5rem] bg-gray-200 p-[2rem] items-center justify-center  ' >
                        {i.icon}
                        <h2 className='text-[1.8rem] font-bold  text-center ' >{i.title}</h2>
                        <p className='text-[1.3rem] font-semibold text-gray-700  text-center'>
                            {i.description}
                        </p>
                    </div>
                )
            })
           }
       </div>
    </section>
   </>
  )
}

export default Section3