"use client"
import React, { useEffect, useState } from 'react'
import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'
import PlaningCard from '@/components/PlaningCard'
import Footer from '@/components/Footer'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import LoginDrawer from '@/components/LoginDrawer'

const page = () => {
  const router = useRouter()
  let cashfree;
  const [open, setOpen] = useState(false);
  const [UserCurrnentPlan,SetUserCurrnentPlan] = useState(null);
  const [IsUserLogin,setIsUserLogin] = useState(false);
  const [Dialogopen, setDialogopen] = useState(false);
  
  let insitialzeSDK = async function () {
    cashfree = await load({
      // mode: "production",
      mode: "sandbox",
    })
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

      let {sessionId,orderId} = await getSessionId(plan)

      let checkoutOptions = {
        paymentSessionId : sessionId,
        redirectTarget:"_modal",
      }

     const payment_result = await cashfree.checkout(checkoutOptions)
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
        SetUserCurrnentPlan(res.data.data);
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
    insitialzeSDK()
    getuserplan()
  }, [])


  const purchaseplan = async(plan)=>{
    try {
      const res = await axios.post("api/purchaseplan",{
        plan:plan
      }) 
      if(res.data.success){
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

        <div className='flex justify-around mt-[4rem] mb-[10rem] flex-wrap gap-y-[4rem]  ' >
           <PlaningCard handler={handler} />
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