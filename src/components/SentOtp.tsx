"use client"
import { ToastErrorHandler } from '@/utils/errorhandler';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastSuccessHandler } from '@/utils/successhander';

type prop_typo = {
    method: string;
    user_email: string | null | undefined;
}
 
const SentOtp = ({method,user_email}:prop_typo) => {
    const router = useRouter();
    const [box_message, setBoxMessage] = React.useState<string>("We'll send a 6-digit OTP to your email:");
    const [otpsend, setOtpsend] = React.useState<boolean>(false);
    const [otp, setOtp] = React.useState<string>("");
    const [otpVerified, setOtpVerified] = React.useState<boolean>(false);
    const [newPassword, setNewPassword] = React.useState<string>("");
    const [confirmpassword, setConfirmpassword] = React.useState<string>("");
    const [open, setOpen] = React.useState(false);

    const sendotp = async()=>{
        try {
            const res= await axios.post("/api/email/sendotp",{
                email: user_email
            })
            if(res.data.success){
                return true;
            }else{
                return false;
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleotp = async()=>{
        try {
            setOpen(true);
            const res = await sendotp();
            if(res){
                setOtpsend(true)
                setBoxMessage("OTP has been sent to your email: ");
                setOpen(false);
                ToastSuccessHandler("OTP has been sent successfully.");
            }else{
                ToastErrorHandler("Failed to send OTP. Please try again later.");
                setOpen(false);
            }
        } catch (error) {
            setOpen(false);
            console.log(error)
            ToastErrorHandler("An error occurred while sending OTP. Please try again later.");
        }
    }


    const verifyotp = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            setOpen(true);
            const res = await axios.post("/api/email/verifyotp",{
                email: user_email,
                otp: otp
            })
            console.log(res.data);
            if(res.data.success){
                setOtpVerified(true);
                setBoxMessage("Please set your password now.");
                setOpen(false);
                ToastSuccessHandler("OTP has been verified successfully.");
            }else{
                ToastErrorHandler("Invalid OTP. Please try again.");
                 setOpen(false);
            }
        } catch (error) {
            setOpen(false);
            console.log(error)
            ToastErrorHandler("An error occurred while verifying OTP. Please try again later.");
        }
    }

    const AddnewPassword = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setOpen(true);
        try {
            if(newPassword !== confirmpassword){
                ToastErrorHandler("Passwords do not match. Please try again.");
                setOpen(false);
            }else{
                const res = await axios.post("/api/setpassword",{
                    email: user_email,
                    new_password: newPassword
                });
                if(res.data.success){
                    router.push("/profile");
                }else{
                    ToastErrorHandler();
                    setOpen(false);
                }
            }
        } catch (error) {
            setOpen(false);
            console.log(error)
            ToastErrorHandler()
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

        <div className={`shadow-[0px_4px_19px_8px_#4042434d] w-fit px-[2rem] py-[1.5rem] flex flex-col gap-[2rem] bg-gray-200 rounded-[10px] items-center m-auto ${otpVerified?"mt-[5rem]":"mt-[8rem] "} `} >
            <h2 className='text-[2rem] font-semibold pb-[0.4rem] border-b-[1px] w-full text-center border-gray-400 ' >{method}</h2>
            <h2 className='text-[1.5rem]' >{box_message} <span className='font-bold' >{user_email}</span></h2>
            {
                otpsend?
                <div className='w-full' >
                    {
                        otpVerified?
                        <form onSubmit={AddnewPassword}  className='w-full flex flex-col gap-[1.7rem] ' >
                            <div className='w-full flex flex-col gap-[0.3rem] ' >
                                <h4 className='text-[1.3rem] font-semibold text-gray-600 ' >Set Your Password</h4>
                                <input onChange={(e)=>setNewPassword(e.target.value)}  type="password" className='w-full text-[1.5rem] font-semibold rounded-[10px] text-black py-[0.5rem] px-[1rem] bg-gray-100 border-[1px] border-gray-400 ' placeholder='Enter the password'  required />
                            </div>
                            <div className='w-full flex flex-col gap-[0.3rem] '>
                                <h4 className='text-[1.3rem] font-semibold text-gray-600 ' >Confirm Your Password</h4>
                                <input onChange={(e)=>setConfirmpassword(e.target.value)}  type="password" className='w-full text-[1.5rem] font-semibold rounded-[10px] text-black py-[0.5rem] px-[1rem] bg-gray-100 border-[1px] border-gray-400 ' placeholder='Confirm the password'  required />
                            </div>
                            <button className='bg-blue-500 text-[1.5rem] font-semibold rounded-[10px] text-white w-full py-[0.5rem] cursor-pointer hover:scale-[1.02] transition-all' >Submit</button>
                        </form>:
                        <form onSubmit={verifyotp} className='w-full flex flex-col gap-[1.7rem] ' >
                            <input onChange={(e)=>setOtp(e.target.value)}  type="text" className='w-full text-[1.5rem] font-semibold rounded-[10px] text-black py-[0.5rem] px-[1rem] bg-gray-100 border-[1px] border-gray-400 ' placeholder='Enter 6-digit OTP'  required/>
                            <button className='bg-blue-500 text-[1.5rem] font-semibold rounded-[10px] text-white w-full py-[0.5rem] cursor-pointer hover:scale-[1.02] transition-all' >Verify OTP</button>
                        </form>
                    }
                </div>:
                 <button onClick={handleotp}  className='bg-blue-500 text-[1.5rem] font-semibold rounded-[10px] text-white w-full py-[0.5rem] cursor-pointer hover:scale-[1.02] transition-all' >Send OTP</button>
            }
        </div>
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

export default SentOtp