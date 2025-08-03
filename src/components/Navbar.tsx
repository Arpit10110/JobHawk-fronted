"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
type User = {
    id: string;
    name: string;
    email: string;
  } | null;
const Navbar = ({user}:{user?:User}) => {
    console.log(user)
    const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  

  return (
    <>
        <nav className='flex justify-between px-[2rem] py-[1rem] items-center ' >
            <div>
                <h2 className=' bungee-font text-[2.5rem] font-semibold ' >JobHawk</h2>
            </div>
            <div className='flex max-mobile:hidden gap-[2.5rem] items-center text-[1.7rem] font-semibold max-mobile:gap-[2rem]  ' >
                <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/"} >Home</Link>
                <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/pricing"} >Pricing</Link>
                <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/create-alert"} >Create Alert</Link>

                {
                    user==null?
                    <Link  className='bg-[#2B7EFE] text-white rounded-[10px] px-[1rem] py-[0.3rem] flex items-center hover:scale-[1.03] transition-all  '  href={"/login"} >LogIn</Link>:
                    <Link className='bg-[#2B7EFE] text-white rounded-[10px] px-[1rem] py-[0.3rem] flex items-center hover:scale-[1.03] transition-all  ' href={"/user-profile"} >Profile</Link>
                }
            </div>
            <div className='hidden max-mobile:inline-block' >
                <button onClick={()=>setOpen(true)} >
                    <MenuIcon className='!text-[3.5rem]  ' />
                </button>
            </div>
        </nav>
            <Drawer open={open} anchor='right'  onClose={toggleDrawer(false)}>
                <div className='w-full  flex flex-col gap-[3rem] mt-[10rem] p-[3rem] items-center justify-center font-semibold text-[2rem] ' >
                    <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/"} >Home</Link>
                    <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/pricing"} >Pricing</Link>
                    <Link className='hover:scale-[1.03] transition-all text-gray-700'  href={"/create-alert"} >Create Alert</Link>
                    {
                    user==null?
                        <Link  className='bg-[#2B7EFE] text-white rounded-[10px] px-[1rem] py-[0.3rem] flex items-center hover:scale-[1.03] transition-all  '  href={"/login"} >LogIn</Link>:
                        <Link className='bg-[#2B7EFE] text-white rounded-[10px] px-[1rem] py-[0.3rem] flex items-center hover:scale-[1.03] transition-all  ' href={"/user-profile"} >Profile</Link>
                    }
                </div>
            </Drawer>
    </>
  )
}

export default Navbar