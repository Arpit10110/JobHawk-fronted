import React from 'react'


interface PlanType {
  name: string;
  price: string;
  jobsPerDay: number;
  duration: string;
  emailSupport: boolean;
  whatsappAlert: boolean;
  resumeBased: boolean;
  portals: string[];
  maxJobAlerts: number;
  customization: string;
  features: string[];
}

const PlaningCard = ({handler}:{handler: (plan: PlanType) => void}) => {
    const pricingPlans = [
        {
          name: "Free",
          price: "₹0",
          total_Price:0.00,
          jobsPerDay: 5,
          duration: "1 Month",
          emailSupport: true,
          whatsappAlert: false,
          resumeBased: false,
          portals: ["Foundit"],
          portImage:["https://internshala.com//static/images/internshala_og_image.jpg",],
          maxJobAlerts: 3,
          customization: "Pause & Delete only",
          features: [
            "Max. 5 jobs/day",
            "Valid for 1 month",
            "Email alerts only",
            "Pause or delete alerts",
            "Upto 3 custom job alerts"
          ],
        },
        {
          name: "Pro",
          price: "₹9",
          total_Price:9.00,
          jobsPerDay: 10,
          duration: "1 Month",
          emailSupport: true,
          whatsappAlert: false,
          resumeBased: true,
          portals: ["Internshala,", "Foundit"],
          maxJobAlerts: 6,
          customization: "Full (edit anytime)",
          features: [
            "Max. 10 jobs/day",
            "Valid for 1 month",
            "Email alerts",
            "Resume-based matching",
            "Customize alerts anytime",
            "Upto 6 custom job alerts"
          ],
        },
        {
          name: "Premium",
          price: "₹19",
          total_Price:19.00,
          jobsPerDay: 20,
          duration: "2 Months",
          emailSupport: true,
          whatsappAlert: true,
          resumeBased: true,
          portals: ["Internshala,", "Foundit,","Instahyre"],
          maxJobAlerts: 10,
          customization: "Full (edit anytime)",
          features: [
            "Max.20 jobs/day",
            "Valid for 2 months",
            "Email & WhatsApp alerts",
            "Resume-based job matching",
            "Customize alerts anytime",
            "Upto 10 custom job alerts"
          ],
        },
      ];
  return (
    <>
       {
        pricingPlans.map((plan,index:number)=>{
            return(
                <div className=' shadow-[0px_4px_19px_8px_#4042434d] hover:scale-[1.02] transition-all w-[28%] max-tablet:w-[60%] max-mobile:w-[70%] max-smobile:w-[80%] bg-gray-100  rounded-[10px] p-[2rem] flex flex-col gap-[1rem] '  key={index} > 
                    <div className='border-b-[1.5px] border-gray-300 ' >
                        <h2 className='text-[2.5rem] font-bold text-center text-blue-500 ' >{plan.name}<span className='text-green-500' > {plan.price}</span></h2>
                    </div>
                    <div className='flex flex-col gap-[0.5rem] mt-[1.3rem] text-[2rem] font-semibold ' >  
                       {
                        plan.features.map((feature,index)=>{
                          return(
                            <h2 key={index} >{feature}</h2>
                          )
                        })
                       }
                         <div className='flex flex-wrap gap-[0.5rem] '   >
                              {
                                plan.portals.map((portal,index)=>{
                                  return(
                                      <span key={index}>{portal+" "}</span>
                                  )
                                })
                               }
                            </div>
                    </div>
                    <button onClick={()=>{
                      handler(plan)
                    }}
                    className='bg-blue-500 cursor-pointer text-white rounded-[10px] py-[0.5rem] text-[1.5rem] font-semibold w-[100%] mt-[1.5rem] '
                    >Get Started</button>
                </div>
            )
        }) 
       }
    </>
  )
}

export default PlaningCard