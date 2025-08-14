"use client"
import {signOut} from "next-auth/react"
import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastErrorHandler } from "@/utils/errorhandler";
import { ToastContainer } from "react-toastify";
type User = {
  _id: string;
  name: string;
  email: string;
  ispassword: boolean;
  currentplan:string;
}

const Page = () => {
  const router = useRouter()
    const [open, setOpen] = useState(true);
    const [user, setUser] = useState<User | null>(null);
    const [UpgradePlan,setUpgradePlan] = useState("");
    const handleLogOut = async()=>{
        try {
            setOpen(true);
            await signOut({ redirect: true, callbackUrl: "/" }); 
        } catch (error) {
            console.log(error)
        }
    }
    const getuserdata = async()=>{
      try {
        setOpen(true)
      const res = await  axios.get("/api/getuser");

        console.log(res)
      if(res.data.message=="Please Login First"){
        router.push("/login")
      } else{
        if(res.data.success){
          setUser(res.data.data)
          setOpen(false)
          if(res.data.data.currentplan=="Free" || res.data.data.currentplan=="Pro"  ){
            setUpgradePlan("Upgrade Plan")
          }else{
            setUpgradePlan("View Plan Benifits")
          }

        }else{
          ToastErrorHandler()
          setOpen(false)
        }
      }
      } catch (error) {
        console.log(error)
        setOpen(false)
        ToastErrorHandler()
      }
    }
    useEffect(() => {
      getuserdata()
    }, [])
    
 
  return (
    <>
    <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={open}
          >
            <CircularProgress color="inherit" />
    </Backdrop>
    <div className="bg-gray-100 w-full mt-[1rem] pt-[3rem] pb-[5rem] min-h-[80vh] " >
      <div className=" flex max-tablet:w-[80%]  max-tablet:px-[2rem] max-mobile:w-[95%] w-[75%] justify-end m-auto" >
        <button  className='mb-[0.2rem] text-[1.5rem] font-bold bg-gray-700 text-white rounded-[7px] py-[0.5rem] px-[3rem] hover:scale-[1.02] transition-all cursor-pointer  ' onClick={handleLogOut} >SignOut</button>
      </div>
        <div className="flex max-tablet:w-[80%]  max-tablet:px-[2rem] max-mobile:w-[95%] shadow-[0px_4px_7px_6px_#4042434d] cursor-default  w-[75%] bg-gray-100  flex-col m-auto mt-[1rem] px-[3rem] py-[1rem] gap-[1rem] rounded-[7px]  " > 
            <h2 className="text-[1.5rem] font-semibold pb-[0.3rem] border-b-[1px] border-gray-400 " >User Name: <span className="font-medium text-blue-500" >{user?.name}</span> </h2>
            <h2 className="text-[1.5rem] font-semibold pb-[0.3rem] border-b-[1px] border-gray-400 " >Email: <span className="font-medium text-blue-500 " >{user?.email}</span> </h2>
            <div className="flex gap-[1.5rem]  items-center pb-[0.3rem] border-b-[1px] border-gray-400  " >
              <h2 className="text-[1.5rem] font-semibold ">Password:</h2>
              {
                user?.ispassword==true?
                <Link href={"/password/changepassword"} className=' text-[1.3rem] font-bold bg-blue-500 text-white rounded-[3px] py-[0.5rem] px-[1rem] hover:scale-[1.02] transition-all ' >Change Password</Link>:
                <Link href={"/password/setpassword"} className=' text-[1.3rem] font-bold bg-blue-500 text-white rounded-[3px] py-[0.5rem] px-[1rem] hover:scale-[1.02] transition-all ' >Set Password </Link>
              }
            </div>
        </div>
        <div className="flex max-tablet:w-[80%] max-tablet:px-[2rem]  max-mobile:w-[95%] shadow-[0px_4px_7px_6px_#4042434d] cursor-default  w-[75%] bg-gray-100  flex-col m-auto mt-[5rem] px-[3rem] py-[1rem] gap-[1rem] rounded-[7px]  " >
          <div className="flex justify-between border-b-[1px] border-gray-400 items-end " >
            {
              user?.currentplan=="No Active Plan"?
              <h2  className="text-[1.5rem] font-semibold pb-[0.3rem] ">You Have <span className="font-medium text-red-600" >No Active Plan</span> </h2>:
              <h2  className="text-[1.5rem] font-semibold pb-[0.3rem]  " >Your Current Active Plan Is <span className="font-medium text-green-600" >{user?.currentplan} </span> </h2>
            }
            {
              user?.currentplan=="No Active Plan"?
              <Link   className='mb-[0.2rem]  text-[1.3rem] font-bold bg-blue-500 text-white rounded-[3px] py-[0.5rem] px-[1rem] hover:scale-[1.02] transition-all ' href={"/pricing"}  >View Plan</Link>:
              <Link   className='mb-[0.2rem] text-[1.3rem] font-bold bg-blue-500 text-white rounded-[3px] py-[0.5rem] px-[1rem] hover:scale-[1.02] transition-all ' href={"/pricing"}  >{UpgradePlan}</Link>
            }
          </div>
        </div>
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

export default Page