"use client"
import Navbar from '@/components/Navbar'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import {load} from '@cashfreepayments/cashfree-js'

const page = () => {
  let cashfree;

  let insitialzeSDK = async function () {
    cashfree = await load({
      mode: "production",
    })
  }


  const getSessionId = async () => {
    try {
      let res = await axios.get("api/payment")
      console.log(res.data)
      if(res.data.success){
        console.log(res.data.data)
        console.log("this is the order id-->"+res.data.data.order_id)
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

  const handleClick = async () => {
    try {

      let {sessionId,orderId} = await getSessionId()

      console.log("this is seession"+sessionId+"order id"+orderId)

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
  

  return (
    <>
        <Navbar/>
        <div>
            <div className='w-[20%] h-[60vh] bg-gray-300 flex justify-center items-center m-auto  px-[1rem] ' >
                <button onClick={handleClick} className='w-full py-[0.3rem] text-[2rem] bg-blue-500 text-white rounded-[10px] cursor-pointer ' >
                    Pay Rs9
                </button>
            </div>
        </div>
    </>
  )
}

export default page