import React from 'react'
import { getuser } from '@/lib/getuser'
import { redirect } from 'next/navigation'
import SentOtp from '@/components/SentOtp'
const page = async() => {
    const user =await getuser()

    if(user == null){
           redirect("/")
       
    }

  return (
    <>  
        <div>
            <SentOtp method='Set Your Password' user_email={user.user?.email} setdirty_value={false} /> 
        </div>
    </>
  )
}

export default page