import { signIn } from '@/auth'
import Navbar from '@/components/Navbar'
import SignupForm from '@/components/SignupForm'
import { getuser } from '@/lib/getuser'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async() => {
 const user =await getuser()
  if(user){
    redirect("/")
  }
  return (
    <>
        <div className='bg-gray-100 w-[40%] max-tablet:w-[60%] max-mobile:w-[75%] max-smobile:w-[85%] mt-[3rem] m-auto px-[1rem] py-[2rem] rounded-[1rem]  shadow-[0px_4px_19px_8px_#4042434d]' >
            <div className=' mb-[1.5rem] ' >
                <h2 className='text-[2rem] text-black font-semibold text-center  ' >Create your account</h2>
                <p className='text-[1.2rem] text-gray-500 font-semibold text-center '>Welcome! Please fill in the details to get started.</p>
            </div>
            <SignupForm/>
            <div className='w-full flex justify-between my-[1rem] items-center ' >
                <span className='w-[40%] h-[1.5px] bg-gray-400 ' ></span>
                <span className='font-bold text-[1.5rem] text-black ' >Or</span>
                <span className='w-[40%] h-[1.5px] bg-gray-400 ' ></span>
            </div>
            <div>
                <button onClick={async()=>{
                  "use server"
                  await signIn("google")
                }} className='bg-gray-800   cursor-pointer hover:scale-[1.02] transition-all  w-[100%] mt-[0.5rem] m-auto py-[0.3rem] text-[1.5rem] text-white font-bold rounded-[5px] ' >Continue with Google</button> 
            </div>
            <div className=' mt-[1.5rem]  ' >
              <h3 className='text-center text-gray-700 font-semibold text-[1.5rem]' >Already have an account? <Link className='text-blue-600 underline ' href={"/login"}>LogIn</Link></h3>
            </div>
        </div>
    </>
  )
}

export default page