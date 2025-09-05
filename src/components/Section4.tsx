import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from 'next/link';
import Sec4Image1 from "@/assets/Sec4Image1.avif"
import Image from 'next/image';


function createData(
    Feature: string,
    Free: string,
    Starter: string,
    Pro: string
  ) {
    return { Feature, Free, Starter, Pro };
  }
  
  const rows = [
    createData('Jobs per Day', '5', '10', '15'),
    createData('Job Portals', 'Two', 'Four', 'Five'),
    createData('Validity', '1 Month', '1 Month', '2 Months'),
    createData('Total Alerts', 'Two', 'Six', 'Ten'),
    createData('Email Delivery', '✅', '✅', '✅'),
    createData('Watsapp Support', '❌', '❌', '✅'),
    createData('Price', '₹0', '₹9', '₹19'),
  ];
  

const Section4 = () => {
  return (
    <>
        <section className='pb-[4rem] ' >
            <h2 className='text-center bungee-font text-[3rem] font-semibold ' >Compare Plans</h2>
            <div className='w-full flex flex-wrap max-tablet:gap-[3rem] justify-center items-center mt-[5rem] ' >
              <div className='w-[55%] max-tablet:w-[95%] max-mobile:w-[100%] ' >
                <div className='flex justify-centet items-center   ' >
                  <Table className='!w-[90%] m-auto bg-[#00000008] rounded-[1rem] !shadow-[0px_4px_19px_8px_#4042434d]   '   aria-label="simple table">
                          <TableHead>
                          <TableRow>
                              <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold ' >Feature</TableCell>
                              <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold '  >Free</TableCell>
                              <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold ' >Pro</TableCell>
                              <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold ' >Premium</TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {rows.map((row,index) => (
                              <TableRow key={index}>
                              <TableCell className='!text-[1.2rem] !text-gray-700 !text-center !font-semibold ' >{row.Feature}</TableCell>
                              <TableCell className='!text-[1.2rem] !text-gray-700 !text-center !font-semibold ' >{row.Free}</TableCell>
                              <TableCell  className='!text-[1.2rem] !text-gray-700 !text-center !font-semibold ' >{row.Starter}</TableCell>
                              <TableCell  className='!text-[1.2rem] !text-gray-700 !text-center !font-semibold ' >{row.Pro}</TableCell>
                              </TableRow>
                          ))}
                          </TableBody>
                  </Table>
                </div>
                <div className='flex justify-center items-center mt-[3rem] '   >
                  <Link href={"/pricing"} className='px-[5rem]  py-[0.7rem] bg-blue-600 shadow-[0px_4px_19px_8px_#4042434d] hover:scale-[1.03] transition-all rounded-[1rem] text-[2rem] text-white font-semibold  ' >View full pricing →</Link>
                </div>
              </div>
              <div className='w-[40%] max-tablet:w-[60%]' >
                  <Image src={Sec4Image1} alt='' />
              </div>
            </div>
        </section>
    </>
  )
}

export default Section4