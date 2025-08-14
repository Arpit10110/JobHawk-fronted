import React from 'react'
import { pricingPlans } from '@/constants/pricing_constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Link from 'next/link';
interface PortalType {
  name: string;
  link: string;
}

interface PlanType {
  name: string;
  price: string;
  jobsPerDay: number;
  duration: string;
  emailSupport: boolean;
  whatsappAlert: boolean;
  resumeBased: boolean;
  portals: PortalType[];
  maxJobAlerts: number;
  customization: string;
  features: string[];
  total_Price: number;
  punchline: string;
  portImage?: string[];
  missingFeatures?: string[];
  missingportals?: PortalType[];
}

const PlaningCard = ({handler}:{handler: (plan: PlanType) => void}) => {
  
  return (
    <>
       {
        pricingPlans.map((plan,index:number)=>{
            return(
                <div data-aos="fade-up"  data-aos-delay="300" data-aos-duration="3000" className={` ${plan.name==="Pro"? "top-[-3rem] border-[#2da7ffb4] ":"top-[0rem] border-[#20202032] "} relative max-tablet:top-[0rem]  border-[2.5px] shadow-[0px_4px_19px_8px_#4042434d] hover:scale-[1.02] transition-all w-[28%] max-tablet:w-[60%] max-mobile:w-[70%] max-smobile:w-[80%] bg-gray-100  rounded-[10px] p-[2rem] flex flex-col gap-[1rem]  cursor-default `} key={index} > 
                    <div className='border-b-[1.7px] border-[#80808090] pb-[0.5rem] ' >
                      <div>
                        <h2 className='text-[3rem] font-[500] rubik-font   ' >{plan.name}</h2>
                        <h3 className='text-[1.3rem] font-[500] rubik-font text-gray-700  '>{plan.punchline}</h3>
                        <h4 className='text-[3rem] font-[500] rubik-font text-green-600  '>{plan.price}
                          {
                            plan.name ==="Premium" ?
                            <span className='text-gray-600 text-[2rem]' > per 2 months</span>:
                            <span className='text-gray-600 text-[2rem]' > per month</span>
                          }</h4>
                      </div>
                    </div>
                    <div className='flex flex-col gap-[0.5rem] mt-[1rem] text-[2rem] font-semibold ' >  
                       {
                        plan.features.map((feature,index)=>{
                          return(
                            <div key={index} className='flex gap-[0.5rem] items-center  ' >
                              <CheckCircleIcon className='!text-green-600 !text-[2rem]' />
                              <h2 className='text-gray-800 text-[2rem]'  >{feature}</h2>
                            </div>
                          )
                        })
                       }
                        
                    </div>
                    <div className='flex flex-col gap-[0.5rem]  text-[2rem] font-semibold ' >  
                       {
                        plan.missingFeatures?.map((feature,index)=>{
                          return(
                            <div key={index} className='flex gap-[0.5rem] items-center  ' >
                              <CancelIcon className='!text-red-600 !text-[2rem]' />
                              <h2 className='text-gray-800 text-[2rem]  '  >{feature}</h2>
                            </div>
                          )
                        })
                       }
                        
                    </div>
                    <div className='bg-gray-200 rounded-[10px] px-[1rem] py-[0.5rem] ' >
                      <div className='flex flex-col gap-[0.5rem]  font-semibold ' >  
                        {
                          plan.portals?.map((feature,index)=>{
                            return(
                              <div key={index} className='flex gap-[0.5rem] items-center  ' >
                                <CheckCircleIcon className='!text-green-600 !text-[2rem]' />
                                <Link href={feature.link} target='_blank' className='text-blue-800 text-[2rem] underline '  >{feature.name}</Link>
                              </div>
                            )
                          })
                        }
                          
                      </div>
                      <div className='flex flex-col gap-[0.5rem]  font-semibold ' >  
                        {
                          plan.missingportals?.map((feature,index)=>{
                            return(
                              <div key={index} className='flex gap-[0.5rem] items-center  ' >
                                <CancelIcon className='!text-red-600 !text-[2rem]' />
                                <Link href={feature.link} target='_blank' className='text-blue-800 text-[2rem] underline'  >{feature.name}</Link>
                              </div>
                            )
                          })
                        }
                          
                      </div>
                    </div>
                    <button onClick={()=>{
                      handler(plan)
                    }}
                    className='bg-blue-600 cursor-pointer text-white rounded-[5px] py-[0.5rem] text-[1.5rem] font-semibold w-[100%] mt-[1.5rem] '
                    > Start With {plan.name}</button>
                </div>
            )
        }) 
       }
    </>
  )
}

export default PlaningCard