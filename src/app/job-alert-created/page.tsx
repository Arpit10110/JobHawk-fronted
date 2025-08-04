import React from 'react'
import Navbar from '@/components/Navbar';
import alrtsuccess from "@/assets/alertsuccess.gif"
import Image from 'next/image';
import Link from 'next/link';
const page = () => {
  return (
    <>
      <div className='mt-[3rem] flex justify-center items-center   ' >
          <div className='gap-[1rem]  flex-col flex items-center' >
            <Image src={alrtsuccess} alt='' className='w-[50%]' />
            <h2 className='font-bold text-[2rem] text-center ' >Your Job Alert Has Been Successfully Created!</h2>
             <div className='flex gap-[2rem]' >
                <Link className='px-[1.5rem] py-[0.5rem] font-semibold text-[1.5rem] bg-red-500 text-white rounded-[10px] hover:scale-[1.03]  transition-all  '  href={"/"} >Go To Home</Link>
                <Link className='px-[1.5rem] py-[0.5rem] font-semibold text-[1.5rem] bg-blue-500 text-white rounded-[10px] hover:scale-[1.03]  transition-all  '  href={"/create-alert"} >Create New Alert</Link>
             </div>
          </div>
      </div>
    </>
  )
}

export default page