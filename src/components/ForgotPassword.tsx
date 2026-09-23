"use client"
import React from 'react'
import axios from 'axios'
import { ToastErrorHandler } from '@/utils/errorhandler'
import { ToastContainer } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import SentOtp from './SentOtp';
const ForgotPassword = () => {

    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [emailValid, setEmailValid] = React.useState(false);


    const checkEmail = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setOpen(true);
        try {
            const res = await axios.post("/api/forgotpassword", {
                email:email
            })
            if(res.data.success){
                setOpen(false);
                setEmailValid(true);
            }else{
                setOpen(false);
                setEmailValid(false);
                ToastErrorHandler(res.data.message || "An error occurred while checking the email. Please try again later.");
            }
        } catch (error) {
            console.log(error);
            setOpen(false);
            ToastErrorHandler("An error occurred while checking the email. Please try again later.");
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
      {
        emailValid?
        <SentOtp method='Reset Your Password' user_email={email} setdirty_value={true} />:
        <div className={`shadow-[0px_4px_19px_8px_#4042434d] w-fit px-[2rem] py-[1.5rem] flex flex-col gap-[2rem] bg-gray-200 rounded-[10px] items-center m-auto mt-[8rem] min-w-[35%]  `} >
        <h2 className='text-[2rem] font-semibold pb-[0.4rem] border-b-[1px] w-full text-center border-gray-400 ' >Reset Your Password</h2>
        <form onSubmit={checkEmail} className='flex flex-col gap-[1.5rem] w-full  '>
            <div className='w-full flex flex-col gap-[0.5rem]' >
            <h2 className='text-[1.3rem] font-semibold text-gray-600 ' >Email Address</h2>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" className='w-full text-[1.5rem] font-semibold rounded-[10px] text-black py-[0.5rem] px-[1rem] bg-gray-100 border-[1px] border-gray-400 ' placeholder='Enter your email' required/>
            </div>
            <button className='bg-blue-500 text-[1.5rem] font-semibold rounded-[10px] text-white w-full py-[0.5rem] cursor-pointer hover:scale-[1.02] transition-all' >Next Step</button>
        </form>
        </div>
      }
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

export default ForgotPassword