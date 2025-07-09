"use client"
import Navbar from '@/components/Navbar'
import StepperForm from '@/components/StepperForm'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar/>
        <div>
            <StepperForm />
        </div>
    </>
  )
}

export default page