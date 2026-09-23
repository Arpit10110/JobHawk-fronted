import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
    redirect("/profile/userinfo");
  return (
    <div>page</div>
  )
}

export default page