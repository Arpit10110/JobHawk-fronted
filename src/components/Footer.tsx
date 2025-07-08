import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='text-white bg-gray-900 py-[3rem] px-[2rem] flex justify-between flex-wrap gap-[1rem] items-center ' >
            <div className='w-[40%] flex flex-col gap-[0.5rem]  ' >
                <h1 className='bungee-font font-bold text-[2.5rem]  ' >JobHack</h1>
            </div>
            <div className='w-[40%] font-semibold text-[1.5rem] text-end ' >
                <h2>© 2025 JobHack. All rights reserved.</h2>
            </div>
        </footer>
    </>
  )
}

export default Footer