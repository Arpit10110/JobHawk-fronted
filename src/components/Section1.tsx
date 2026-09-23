import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import Sec1Image1 from "@/assets/S1Img1.png"
import Sec1Image1 from "@/assets/S1Img2.png"
const Section1 = () => {
  return (
    <>
        <section className='w-full py-[3rem] bg-[#E9E3C7] bg-gradient-to-r from-[#E9E3C7] from-35% to-[#C6D6DC] to-56%' >
            <div className='w-full flex flex-col gap-[1rem] justify-center items-center mt-[2rem]  ' >
                <h1 className='text-[3.5rem]  max-tablet:text-[3rem] max-smobile:text-[2.5rem] font-bold text-center [text-shadow:7px_5px_12px_rgba(0,0,0,0.36)]   ' >Get Daily Job Alerts. Without the Job Hunt.</h1>
                <p className='text-[1.8rem] max-tablet:w-[80%]  max-mobile:w-[90%]  max-smobile:w-[95%] text-center text-gray-600 font-semibold w-[60%] m-auto [text-shadow:7px_5px_10px_rgba(0,0,0,0.36)] ' >
                    Set your job role, time, and preferences — and receive top job listings in your inbox, daily.
                    No searching. No login. Just results.
                </p>
                <div className='flex gap-[5rem] my-[2rem]   ' >
                    <Link  href={"/create-alert"} className=' bg-blue-500 rounded-[10px] py-[0.7rem] px-[2rem] text-[1.5rem] text-white font-bold shadow-[0px_4px_19px_8px_#4042434d] hover:scale-[1.04] transition-all' >Create Alert</Link>
                    <Link href={"/pricing"} className=' bg-green-500 rounded-[10px] py-[0.7rem] px-[2rem] text-[1.5rem] text-white font-bold shadow-[0px_4px_19px_8px_#4042434d] hover:scale-[1.04] transition-all' >View Pricing</Link>
                </div>
            </div>
            <div className='w-full' >
                <Image src={Sec1Image1} className='w-full h-[60vh] object-contain max-mobile:h-fit ' alt='' /> 
            </div>
        </section>
    </>
  )
}

export default Section1