import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

function createData(
    Feature: string,
    Free: string,
    Starter: string,
    Pro: string
  ) {
    return { Feature, Free, Starter, Pro };
  }
  
  const rows = [
    createData('Jobs per Day', '5', '10', '20'),
    createData('Email Timing', 'Fixed (default)', 'Fully Custom', 'Fully Custom'),
    createData('Validity', '1 Month', '1 Month', '2 Months'),
    createData('Priority Alerts', '❌', '❌', '✅'),
    createData('Email Delivery', '✅ Included', '✅ Included', '✅ Included'),
    // createData('Platforms Supported', 'Naukri (for now)', 'Naukri + more soon', 'Naukri + more soon'),
    createData('Price', '₹0', '₹9', '₹15'),
  ];
  

const Section4 = () => {
  return (
    <>
        <section className='pb-[4rem] ' >
            <h2 className='text-center bungee-font text-[3rem] font-semibold ' >Compare Plans</h2>
            <div className='flex justify-centet items-center mt-[3rem]   ' >
              <Table className='!w-[50%] m-auto bg-[#00000008] rounded-[1rem] !shadow-[0px_4px_19px_8px_#4042434d]   '   aria-label="simple table">
                      <TableHead>
                      <TableRow>
                          <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold ' >Feature</TableCell>
                          <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold '  >Free</TableCell>
                          <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold ' >Pro</TableCell>
                          <TableCell className='!text-[1.5rem] !text-blue-600 !text-center !font-bold ' >Starter</TableCell>
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
        </section>
    </>
  )
}

export default Section4