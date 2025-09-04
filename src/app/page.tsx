import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import React from 'react'
import Section4 from '../components/Section4'
import Section5 from '@/components/Section5'
import Footer from '@/components/Footer'
import Section1 from '@/components/home/Section1'

const page = async() => {
  
  return (
    <>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>
    </>
  )
}

export default page