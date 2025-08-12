import React from 'react'
import { getuser } from '@/lib/getuser'
import { redirect } from 'next/navigation'
import ForgotPassword from '@/components/ForgotPassword'
const Page = async() => {

    const user = await getuser()
   
       if(user != null){
              redirect("/profile")
       }

  return (
    <>
       <div>
            <ForgotPassword />
        </div>
    </>
  )
}

export default Page