import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between px-[2rem] py-[1rem] items-center ' >
            <div>
                <h2 className=' bungee-font text-[2.5rem] font-semibold ' >JobHawk</h2>
            </div>
            <div className='flex gap-[2.5rem] items-center text-[1.7rem] font-semibold  ' >
                <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/"} >Home</Link>
                <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/pricing"} >Pricing</Link>
                <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/create-alert"} >Create Alert</Link>
             
                <SignedOut>
                    <Link  className='bg-[#2B7EFE] text-white rounded-[10px] px-[1rem] py-[0.3rem] flex items-center hover:scale-[1.03] transition-all  '  href={"/sign-in"} >LogIn</Link>
                </SignedOut>
                <SignedIn >
                    <Link className='bg-[#2B7EFE] text-white rounded-[10px] px-[1rem] py-[0.3rem] flex items-center hover:scale-[1.03] transition-all  ' href={"/user-profile"} >Profile</Link>
                </SignedIn>
            </div>
        </nav>
    </>
  )
}

export default Navbar