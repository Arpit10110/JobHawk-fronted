"use client"
import Navbar from '@/components/Navbar'
import StepperForm from '@/components/StepperForm'
import React from 'react'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link';

const page = () => {
  return (
    <>
        <Navbar/>
        <SignedOut>
        <div className='pt-[5rem] flex justify-center items-center pb-[10rem]'>
          <Link href={"/sign-in"} className='px-[2rem] py-[0.5rem] text-[2rem] rounded-[1rem] bg-blue-500 text-white hover:scale-[1.03] transition-all shadow-[0px_4px_19px_8px_#4042434d] ' >Please LogIn First</Link>
        </div>
        </SignedOut>
        <SignedIn>
        <div className='pt-[5rem] min-h-[100vh] pb-[10rem]' >
            <StepperForm />
        </div>
        </SignedIn>
    </>
  )
}

export default page