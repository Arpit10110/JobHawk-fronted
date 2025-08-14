"use client";
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const ProfileNavbar = () => {
    const pathname = usePathname();  
  return (
   <>
    <nav className='w-full flex justify-center items-end  mt-[2rem] gap-[5rem] bg-white max-smobile:gap-[3rem] ' >
        <Link href={"/profile/userinfo"} className={`text-[1.5rem] font-semibold ${pathname=="/profile/userinfo"?"bg-blue-500":"bg-gray-700"}  text-white rounded-[3px] py-[0.5rem] px-[1rem] rubik-font  shadow-[0px_0px_3px_5px_#00000017] hover:scale-[1.04] transition-all` } >Profile Info</Link>
        <Link href={"/profile/savedalert"} className={`text-[1.5rem] font-semibold ${pathname=="/profile/userinfo"?"bg-gray-700":"bg-blue-500"}  text-white rounded-[3px] py-[0.5rem] px-[1rem] rubik-font  shadow-[0px_0px_3px_5px_#00000017]  hover:scale-[1.04] transition-all` }>Saved Alerts</Link>
    </nav>
   </>
  )
}

export default ProfileNavbar