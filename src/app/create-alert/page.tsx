"use client"
import StepperForm from '@/components/StepperForm'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import Link from 'next/link'


type UserPlan = {
  plan_name: string;
  plan_price: number;
  plan_status: "active" | "inactive" | string;
  plan_start_date: string; // ISO
  plan_end_date: string; // ISO
  plan_user_id: string;
  };

const page = () => {
  const router = useRouter()
  const [UserCurrentPlan,SetUserCurrentPlan] = useState<UserPlan | null>(null);
  const [open, setOpen] = useState(false);
  const [Dialogopen, setDialogopen] = useState(false);



  const getuserplan = async ()=>{
    try {
      setOpen(true);
      const res = await axios.get("api/getuserplan");
      if(res.data.message == "Please Login First"){
        router.push("/login")
      }
      if(res.data.success){
          if(res.data.data == null){
            setDialogopen(true)
          setOpen(false);
          }else{
          setOpen(false);
          console.log(res.data.data);
            SetUserCurrentPlan(res.data.data);
          }
      }else{
        setOpen(false);
      }

    } catch (error) {
      console.log(error)
      setOpen(false);
    }
  }


  useEffect(() => {
    getuserplan()
  }, [])
  




  return (
    <>

      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={Dialogopen}
      >
      <div  className='w-full bg-gray-900 py-[3rem] px-[2rem] flex flex-col gap-[1rem]  ' >
        <h2 className='text-center text-[2rem] font-semibold text-white '>⚡ Select a Plan to Create Your Job Alert</h2>
        <h3 className='text-center text-[1.2rem] text-gray-200 '>Plans start at ₹0/month — pick one to start receiving daily job updates right away.</h3>
        <Link href={"/pricing"} className='bg-blue-600 text-center rounded-[10px] py-[0.7rem] px-[2rem] text-[1.5rem] text-white font-bold shadow-[0px_4px_19px_8px_#4042434d] hover:scale-[1.02] transition-all mt-[2rem]' >View Plans →</Link>
      </div>
      </Dialog>
      <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={open}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        <div className='pt-[2rem] min-h-[100vh] pb-[15rem] flex flex-col gap-[2rem]' >
          {
            UserCurrentPlan==null?
            <></>:
          <div  className='flex justify-end w-[97%] ' >
              <h2 className='text-[1.5rem]  font-semibold px-[1.5rem] py-[0.2rem] cursor-pointer bg-gray-200 rounded-[5px]  '  >Current Plan : <span className='text-green-600' > {UserCurrentPlan?.plan_name}</span></h2>
          </div>
          }
            <StepperForm />
        </div>
    </>
  )
}

export default page