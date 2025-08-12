import React from 'react'
import { getuser } from '@/lib/getuser'
import { redirect } from 'next/navigation'
import SentOtp from '@/components/SentOtp'
import ForgotPassword from '@/components/ForgotPassword'
const Page = async() => {

    const user = await getuser()
   
       if(user != null){
              redirect("/profile")
       }

  return (
    <>
       <div>
            {/* <SentOtp method='Reset Your Password' user_email={""} />  */}
            <ForgotPassword />
        </div>
    </>
  )
}

export default Page