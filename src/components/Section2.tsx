import React from 'react'
import Marquee from "react-fast-marquee";

const Section2 = () => {
  return (
    <div className="bg-[#f8f9fa] py-[2rem]">
      <Marquee pauseOnHover gradient={false} speed={70}>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">📬 Daily Job Alerts</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">⚡ Smart Automation</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">🧠 No Manual Search</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">🕒 Custom Email Timing</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">✅ No Resume Needed</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">💌 Email-based Delivery</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">🆓 Start for Free Today</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">🔒 Secure & Simple</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">🚀 Just Set & Relax</h2>
        <h2 className="text-[1.8rem] ml-[5rem] font-semibold ">🧑‍💻 Built for Busy Developers</h2>
      </Marquee>
    </div>
  )
}

export default Section2;
