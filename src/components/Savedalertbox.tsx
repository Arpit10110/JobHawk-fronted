import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import Link from 'next/link';
type alert_type={
    _id:string,
    jobtitle: string[];
    joblocation: string[];
    jobtype:string,
    hrtime:string,
    ampm:string,
    status:string,
    jobnumber:string,
}

const Savedalertbox = ({alert,askuser}:{alert:alert_type,askuser:(id:string,sendtype:string)=>void}) => {
  

  return (
    <>  
    <div className='bg-white w-[45%] max-tablet:w-full p-[1rem] shadow-[0px_4px_7px_6px_#4042434d]  rounded-[7px]  cursor-default flex gap-[1rem] flex-col ' > 
        <h2 className=' w-full text-[1.2rem] flex gap-[0.5rem] items-center font-bold flex-wrap ' >Title {
            alert.jobtitle.map((title,index)=>{
                return (
                    <span className='bg-blue-500 w-fit p-[0.3rem] rounded-[7px] text-white text-center '  key={index}>{title} </span>
                )
            })
        }</h2>
        <h2  className=' w-full text-[1.2rem] flex gap-[0.5rem] items-center font-bold flex-wrap '>Location :{
            alert.joblocation.map((loc,index)=>{
                return (
                    <span className='bg-blue-500 w-fit p-[0.3rem] rounded-[7px] text-white text-center '  key={index}>{loc} </span>
                )
            })
        }</h2>
        <div className=' flex justify-between items-center ' >
            <h2  className=' w-fit text-[1.2rem] flex gap-[0.5rem] items-center font-bold '>Alert Time <span className='text-blue-500'>{alert.hrtime}:00 {alert.ampm}</span></h2>
            <h2 className='w-fit text-[1.2rem] flex gap-[0.5rem] items-center font-bold '>Job Type <span className='text-blue-500'>{alert.jobtype}</span></h2>
        </div>
        <div className=' flex justify-between items-center ' >
            <h2 className=' w-fit text-[1.2rem] flex gap-[0.5rem] items-center font-bold '>Status
                {
                    alert.status=="active"?
                    <span className='bg-green-600 text-white w-fit rounded-[7px] px-[1rem] py-[0.3rem] '>Active</span>:
                    <>
                     {
                        alert.status == "paused"?
                        <span className='bg-yellow-500 text-white w-fit rounded-[7px] px-[1rem] py-[0.3rem] '>Paused</span>:
                        <span className='bg-red-600 text-white w-fit rounded-[7px] px-[1rem] py-[0.3rem] '>Expired</span>
                     }
                    </>
                }
            </h2>
            {
                alert.status=="expired"?
                <Link href="/pricing" className='bg-blue-600 text-center rounded-[10px] py-[0.3rem] px-[2rem] text-[1.5rem] text-white font-bold  hover:scale-[1.02] transition-all' >Activate Alert →</Link>:
                <div className='flex gap-[1rem] ' >
                    {
                        alert.status=="active"?
                        <PauseCircleIcon onClick={()=>{
                            askuser(alert._id,"pause");
                        }} titleAccess='Pause alert' className='text-yellow-500 !text-[2rem] hover:text-yellow-400 hover:scale-[1.02] transition-all cursor-pointer' />:
                        <PlayCircleIcon onClick={()=>{
                            askuser(alert._id,"resume");
                        }}  titleAccess='Activate alert' className='text-green-600 !text-[2rem] hover:text-green-500 hover:scale-[1.02] transition-all cursor-pointer' />
                    }
                    <DeleteIcon titleAccess='Delete alert' onClick={()=>{
                        askuser(alert._id,"delete");
                    }} className='text-red-600 !text-[2rem] hover:text-red-500 hover:scale-[1.02] transition-all cursor-pointer' />
                </div>
            }
        </div>
    </div>
    </>
  )
}

export default Savedalertbox