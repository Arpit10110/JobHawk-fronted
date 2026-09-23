"use client"
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'
import PlaningCard from '@/components/PlaningCard'
import Footer from '@/components/Footer'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import LoginDrawer from '@/components/LoginDrawer'
import { ToastErrorHandler } from '@/utils/errorhandler'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const page = () => {
  const router = useRouter()
  const cashfreeRef = useRef(null)
  const [open, setOpen] = useState(false);
  const [UserCurrnentPlan,SetUserCurrnentPlan] = useState("None");
  const [IsUserLogin,setIsUserLogin] = useState(false);
  const [Dialogopen, setDialogopen] = useState(false);
  
  const initializeSDK = async () => {
    try {
    // Use "production" in live
    const instance = await load({ mode: "production" })
    // const instance = await load({ mode: "sandbox" })
    cashfreeRef.current = instance
    } catch (e) {
    console.error("Cashfree SDK load failed", e)
    ToastErrorHandler("Unable to load payment SDK. Please refresh the page.")
    }
    }

  const getSessionId = async (plan) => {
    try {
      let res = await axios.post("api/payment",{
        plan:plan
      })
      if(res.data.success){
        const orderId = res.data.data.order_id
        return {sessionId:res.data.data.payment_session_id,orderId:orderId}
      }else{
        setOpen(false);
      toast.error("Something went Wrong !!!", {
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
      console.log(error)
      setOpen(false);
      toast.error("Something went Wrong !!!", {
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
  }

  const verifyPayment = async (orderId,plan) => {
    try {
      console.log("This is the order id-->"+orderId)
      let res = await axios.post("api/paymentverify", {
        orderId: orderId
      })
      console.log(res.data)
      if(res.data.success){
        await purchaseplan(plan)
      }else{
        alert("payment failed")
        setOpen(false);
        toast.error("Payment Failed !!!", {
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
      console.log(error)
      setOpen(false);
      toast.error("Something went Wrong !!!", {
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
  }

  const handleClick = async (plan) => {
    try {
      // Ensure SDK is ready
      if (!cashfreeRef.current) {
        // Attempt to initialize if not yet ready
        await initializeSDK()
      }
      if (!cashfreeRef.current) {
        ToastErrorHandler("Payment Gateway not ready. Please try again in a moment.")
        setOpen(false)
        return
      }

      let {sessionId,orderId} = await getSessionId(plan)
      console.log(sessionId)

      let checkoutOptions = {
        paymentSessionId : sessionId,
        redirectTarget:"_modal",
      }

     const payment_result = await cashfreeRef.current.checkout(checkoutOptions)

     if(payment_result.paymentDetails){
      console.log(payment_result.paymentDetails)
      // alert(payment_result.paymentDetails.paymentMessage)
      verifyPayment(orderId,plan)
     }else{
      setOpen(false);
      toast.error(payment_result.error.message, {
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
      console.log(error)
      setOpen(false);
      toast.error("Something went Wrong !!!", {
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

  }

  const getuserplan = async ()=>{
    try {
      setOpen(true);
      let res = await axios.get("api/getuserplan");
      if(res.data.success){
        setOpen(false);
        setIsUserLogin(true);
        if(res.data.data != null){
          const p_name = res.data.data.plan_name;
          SetUserCurrnentPlan(p_name);
        }
      }else{
        if(res.data.message=="Please Login First"){
          setIsUserLogin(false);
          setOpen(false);
        }
      }
    } catch (error) {
      console.log(error)
      setOpen(false);
      toast.error("Something went Wrong !!!", {
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
  }

  useEffect(() => {
    initializeSDK()
    getuserplan()
    AOS.init();
  }, [])


  const purchaseplan = async(plan)=>{
    try {
      const res = await axios.post("api/purchaseplan",{
        plan:plan
      }) 
      if(res.data.success){
        getuserplan();
         toast.success("Plan Purchased Successfully", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setOpen(false);
      }else{
         toast.error("Something went Wrong !!!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setOpen(false);
      }
    } catch (error) {
      console.log(error)
      setOpen(false);
    }
  }
  

  const handler = async(plan)=>{
    try {
      setOpen(true);
      if(!IsUserLogin){
        setOpen(false);
        setDialogopen(true)
      }else{
        if(plan.name == "Free"){
          purchaseplan(plan)
        }else{
          handleClick(plan)
        }
      }
    } catch (error) {
      setOpen(false);
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

      <LoginDrawer Dialogopen={Dialogopen}  />

      <div className='  flex flex-col justify-center max-tablet:mt-[2rem] max-tablet:gap-[2rem] mb-[5rem] gap-[3rem]  ' >
          <div data-aos="fade-up" data-aos-duration="3000"   className='m-auto  ' >
              <h2 className='text-[4rem] font-[500] text-gray-800 text-center rubik-font ' >Choose Your Plan</h2> 
              <h3 className='text-center font-semibold text-gray-600 text-[1.5rem] rubik-font ' >Affordable and adaptable pricing to suit your goals.</h3>
          </div>
          <div className='flex w-full justify-around mt-[4rem] mb-[10rem] max-tablet:mb-[5rem] flex-wrap gap-y-[4rem] items-start ' >
            <PlaningCard handler={handler} currentPlan={UserCurrnentPlan} />
          </div>
      </div>
      <Footer/>
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

export default page
