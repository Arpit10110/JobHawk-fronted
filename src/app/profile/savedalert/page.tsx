"use client";
import { ToastErrorHandler } from '@/utils/errorhandler';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { pricingPlans } from '@/constants/pricing_constants';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import Link from 'next/link';
import Savedalertbox from '@/components/Savedalertbox';
import CustomizeAlertDrawer from '@/components/CustomizeAlertDrawer';
import { ToastContainer } from 'react-toastify';
const page = () => {
    const [open, setOpen] = useState(true);
    const [SavedAlert,setSavedAlert] = useState([]);
    const [Numberofleftalerts, setNumberOfLeftAlerts] = useState(0);
    const [Currentplan,setCurrentPlan] = useState<string>("None");
    const [Dialogopen, setDialogOpen] = useState(false);
    const [AlertMessage, setAlertMessage] = useState("");
    const [type,setType] = useState("");
    const [AlertId,setAlertId] = useState("");

  const askuser = (id:string,sendtype:string)=>{
          const message = `Are you sure you want to ${sendtype} this alert?`;
          setAlertMessage(message);
          setDialogOpen(true);
          setType(sendtype);
          setAlertId(id);
    }
  const getSavedAlerts = async()=>{
    try {
      setOpen(true);
      const res =await axios.get("/api/savedalert/getall");
      if(res.data.success){
        setOpen(false);
        setSavedAlert(res.data.savedalert);
        const plan = pricingPlans.find((plan) => plan.name === res.data.plan?.plan_name);
        console.log(plan);
        console.log(res.data)
        if(plan){
          const leftalterts =  plan?.maxJobAlerts - res.data.savedalert.length;
          console.log(leftalterts);
          setNumberOfLeftAlerts(leftalterts);
          setCurrentPlan(plan.name);
        }
      }else{
        ToastErrorHandler("Failed to fetch saved alerts. Please try again later.");
      setOpen(false);
      }
    } catch (error) {
      setOpen(false);
      console.error("Error fetching saved alerts:", error);
      ToastErrorHandler("Failed to fetch saved alerts. Please try again later.");
    }
  }
  const cancelAlert = ()=>{
    setDialogOpen(false);
    setAlertMessage("");
    setType("");
  }


  const deleteAlert = async(id:string)=>{
        try {
          setOpen(true);
          setDialogOpen(false);
          const res = await axios.post("/api/cuntomizealert/delete",{
            alertid:id
          })
          console.log(res.data);
          if(res.data.success){
            setOpen(false);
            setAlertMessage("");
            setType("");
            setAlertId("");
            getSavedAlerts();
          }else{
            ToastErrorHandler("Failed to delete alert. Please try again later.");
            setOpen(false);
          }
        } catch (error) {
          console.log(error)
        }
  }
  const pauseAlert = async(id:string)=>{
        try {
          setOpen(true);
          setDialogOpen(false);
          const res = await axios.post("/api/cuntomizealert/pause",{
            alertid:id
          })
          console.log(res.data);
          if(res.data.success){
            setOpen(false);
            setAlertMessage("");
            setType("");
            setAlertId("");
            getSavedAlerts(); 
          }else{
            ToastErrorHandler("Failed to delete alert. Please try again later.");
            setOpen(false);
          }
        } catch (error) {
          console.log(error)
        }
  }
  const resumeAlert = async(id:string)=>{
        try {
          setOpen(true);
          setDialogOpen(false);
          const res = await axios.post("/api/cuntomizealert/resume",{
            alertid:id
          })
          console.log(res.data);
          if(res.data.success){
            setOpen(false);
            setAlertMessage("");
            setType("");
            setAlertId("");
            getSavedAlerts();
          }else{
            ToastErrorHandler("Failed to delete alert. Please try again later.");
            setOpen(false);
          }
        } catch (error) {
          console.log(error)
        }
  }



  useEffect(() => {
    getSavedAlerts()
  }, [])
  

  return (
   <>
    <Backdrop
            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
            open={open}
          >
            <CircularProgress color="inherit" />
    </Backdrop>
    <CustomizeAlertDrawer alertid={AlertId} cancelAlert={cancelAlert} Dialogopen={Dialogopen} AlertMessage={AlertMessage} type={type} deleteAlert={deleteAlert} pauseAlert={pauseAlert} resumeAlert={resumeAlert} />

    <div className="bg-gray-100 w-full mt-[1rem] pt-[3rem] pb-[5rem] min-h-[100vh] " >
        <div  className='w-full flex justify-between items-center px-[3rem] ' >  
          <div className='flex justify-center items-center w-fit cursor-default ' >
            <h2 className='text-[1.5rem] font-semibold gap-[0.5rem]  flex items-center justify-center ' >
              <InfoOutlineIcon className='!text-[2rem] bg-gray-900 text-white rounded-[50%]  ' />
              <span>You Have {Numberofleftalerts} Alert Left </span>
            </h2>
          </div>
          <div className='flex justify-center items-center w-fit ' >
              <h2 className='text-[1.5rem]  font-semibold px-[1.5rem] py-[0.2rem] cursor-pointer bg-gray-200 rounded-[5px]  '  >Current Plan : <span className='text-green-600' > {Currentplan}</span></h2>
          </div>
        </div>
        {
          SavedAlert.length==0?
          <div className='flex justify-center mt-[5rem] m-auto gap-[1rem] flex-col w-[50%] max-tablet:w-[70%] max-mobile:w-[90%] ' >
            <h2 className='text-[2.5rem] font-semibold text-center ' >!!! You have no saved alerts !!!</h2>
            <Link href={"/create-alert"} className='bg-blue-600 text-center rounded-[10px] py-[0.7rem] px-[2rem] text-[1.5rem] text-white font-bold shadow-[0px_4px_19px_8px_#4042434d] hover:scale-[1.02] transition-all mt-[2rem]' >Create Your First Alert →</Link>
          </div>:
          <div  className='w-full flex flex-wrap justify-between px-[3rem]  gap-y-[3rem] mt-[3rem] mb-[3rem] ' >
            {
              SavedAlert.map((alert,index)=>{
                return (
                  <Savedalertbox key={index} alert={alert} askuser={askuser} />
                )
              })
            }
          </div>
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

export default page