"use client"
import axios from 'axios'
import { redirect } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const SignupForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [open, setOpen] = React.useState(false);
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    setOpen(true);
    e.preventDefault()
    try {
      const res = await axios.post("api/signup",{
        name,email,password
      })
      console.log(res)
      if(res.data.success){
        router.push("/login")
      }else{
        setOpen(false)
        toast.error(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
      }
    } catch (error) {
      setOpen(false)
      console.log(error)
    }
  }


  return (
    <>
     <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
        <form onSubmit={handleSubmit} className='w-full flex flex-col gap-[1rem]  ' >
            <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" className='w-full bg-white text-[1.3rem] p-[0.4rem] rounded-[5px] text-black border-[1px] border-gray-300 font-semibold ' placeholder='Enter the name' required/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" className='w-full bg-white text-[1.3rem] p-[0.4rem] rounded-[5px] text-black border-[1px] border-gray-300 font-semibold  ' placeholder='Enter the email' required/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" className='w-full bg-white text-[1.3rem] p-[0.4rem] rounded-[5px] text-black border-[1px] border-gray-300 font-semibold  ' placeholder='Enter the password' required/>
            <button className='bg-gray-800   cursor-pointer hover:scale-[1.02] transition-all  w-[100%] mt-[0.5rem] m-auto py-[0.3rem] text-[1.5rem] text-white font-bold rounded-[5px] ' >SignUP</button> 
        </form>
          <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>

  )
}

export default SignupForm