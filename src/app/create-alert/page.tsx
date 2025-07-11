"use client"
import Navbar from '@/components/Navbar'
import StepperForm from '@/components/StepperForm'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar/>
        <div className='pt-[5rem] min-h-[100vh] pb-[10rem]' >
            <StepperForm />
        </div>
    </>
  )
}

export default page