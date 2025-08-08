"use client"
import {signOut} from "next-auth/react"
import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Page = () => {
      const [open, setOpen] = useState(false);
    

    const handleLogOut = async()=>{
        try {
            setOpen(true);
            await signOut({ redirect: true, callbackUrl: "/" }); 
        } catch (error) {
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

        <button onClick={handleLogOut} >LogOut</button>
    </>
  )
}

export default Page