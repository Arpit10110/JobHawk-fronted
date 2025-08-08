"use client"

import React from 'react'
import Dialog from '@mui/material/Dialog';
import Link from 'next/link';


const LoginDrawer = ({Dialogopen}:{Dialogopen:boolean}) => {

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
    </>
  )
}

export default LoginDrawer


