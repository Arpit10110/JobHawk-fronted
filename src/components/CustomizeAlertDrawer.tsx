"use client"

import React from 'react'
import Dialog from '@mui/material/Dialog';


const CustomizeAlertDrawer = ({cancelAlert,deleteAlert,alertid,Dialogopen,AlertMessage,type,pauseAlert,resumeAlert}:{Dialogopen:boolean,AlertMessage:string,type:String,cancelAlert:()=>void,alertid:string,deleteAlert:(id:string)=>void,pauseAlert:(id:string)=>void,resumeAlert:(id:string)=>void}) => {

  return (
    <>
          <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={Dialogopen}
      >
      <div  className='w-full bg-gray-900 py-[3rem] px-[2rem] flex flex-col gap-[1rem]  ' >
        <h2 className='text-center text-[2rem] font-semibold text-white '>{AlertMessage}</h2>
        <div className='flex justify-center items-center gap-[2rem] ' >
            <button onClick={()=>{
                if(type=="delete"){
                    deleteAlert(alertid);
                }
                else if(type=="pause"){
                    pauseAlert(alertid);
                }
                else if(type=="resume"){
                    resumeAlert(alertid);
                }
            }} className='bg-red-600 text-white px-[2rem] py-[0.4rem] font-semibold cursor-pointer hover:scale-[1.03] transition-all text-[1.5rem] rounded-[10px]  '  >Confirm</button>
            <button onClick={()=>{
                cancelAlert();
            }} className='bg-green-600 text-white px-[2rem] py-[0.4rem] font-semibold cursor-pointer hover:scale-[1.03] transition-all text-[1.5rem] rounded-[10px]  '>Cancel</button>
        </div>
      </div>
      </Dialog>
    </>
  )
}

export default CustomizeAlertDrawer


