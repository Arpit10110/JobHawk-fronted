"use client"
import React, { useEffect } from 'react'
import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'
import PlaningCard from '@/components/PlaningCard'
import Footer from '@/components/Footer'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
const page = () => {
  let cashfree;

  const [open, setOpen] = React.useState(false);

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
      }
    } catch (error) {
      console.log(error)
    }
  }

  const verifyPayment = async (orderId) => {
    try {
      console.log("This is the order id-->"+orderId)
      let res = await axios.post("api/paymentverify", {
        orderId: orderId
      })
      console.log(res.data)
      if(res.data.success){
        alert("payment verified")
      }else{
        alert("payment failed")
      }

    } catch (error) {
      console.log(error)
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
      alert(payment_result.paymentDetails.paymentMessage)
      verifyPayment(orderId)
     }else{
       alert(payment_result.error.message)
     }

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    insitialzeSDK()
  }, [])


  const purchaseplan = async(plan)=>{
    try {
      const res = await axios.post("api/purchaseplan",{
        plan:plan
      })
      console.log(res);
    } catch (error) {
      console.log(error)
      setOpen(false);
    }
  }
  

  const handler = async(plan)=>{
    try {
      setOpen(true);
      if(plan.name == "Free"){
        purchaseplan(plan)
      }else{
        handleClick(plan)
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
        <div className='flex justify-around mt-[4rem] mb-[10rem] flex-wrap gap-y-[4rem]  ' >
           <PlaningCard handler={handler} />
        </div>
        <Footer/>
    </>
  )
}

export default page