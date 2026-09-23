"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Sec1Image1 from "@/assets/S1Img2.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const Section1 = () => {

    useEffect(()=>{
    AOS.init();
    },[])

  return (
    <>
        <section className='relative  w-full min-h-fit '  >
            <div className=" inset-0 flex flex-col gap-[1rem]   h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_5%,#fff_40%,#0060efde_100%)]">
                <div className='  w-full flex flex-col gap-[1rem] justify-center items-center mt-[2rem]  ' >
                        <h1 data-aos="fade-up" data-aos-duration="1000"  className='text-[3.5rem]  max-tablet:text-[3rem] max-smobile:text-[2.5rem] font-bold text-center ' >Get Daily Job Alerts. Without the Job Hunt.</h1>
                        <p data-aos="fade-up" data-aos-duration="2000" className='text-[1.8rem] max-tablet:w-[80%]  max-mobile:w-[90%]  max-smobile:w-[95%] text-center text-gray-600 font-semibold w-[60%] m-auto ' >
                            Set your job role, time, and preferences — and receive top job listings in your inbox, daily.
                            No searching. No login. Just results.
                        </p>
                        <div data-aos="fade-up" data-aos-duration="2500" className='flex gap-[3rem] my-[1rem]   ' >
                            <Link  href={"/create-alert"} className=' bg-blue-500 rounded-[10px] py-[0.7rem] px-[2rem] text-[1.5rem] text-white font-semibold  hover:scale-[1.04] transition-all' >Create Alert <ArrowForwardIcon/> </Link>
                            <Link href={"/pricing"} className=' bg-[#E9E7F1] rounded-[10px] py-[0.7rem] px-[2rem] text-[1.5rem] text-gray-800 font-semibold  hover:scale-[1.04] transition-all' >View Pricing <ArrowForwardIcon/> </Link>
                        </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000"  className='w-full' >
                    <Image src={Sec1Image1} className='w-full h-[60vh] object-contain max-mobile:h-fit ' alt='' /> 
                </div>
            </div>
        </section>

    </>
  )
}

export default Section1

