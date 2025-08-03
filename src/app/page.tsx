import Navbar from '@/components/Navbar'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import React from 'react'
import Section4 from '../components/Section4'
import Section5 from '@/components/Section5'
import Footer from '@/components/Footer'
import { getuser } from '@/lib/getuser';
type User = {
  id: string;
  name: string;
  email: string;
};
const page = async() => {
  const session = await getuser(); // Fetch session data
  const user: User | undefined = session?.user
  ? {
      id: session.user.id || '', // Ensure id is a string
      name: session.user.name || 'Unknown', // Provide a fallback for name
      email: session.user.email || '', // Ensure email is a string
    }
  : undefined;
  return (
    <>
    <Navbar user={user}/>
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