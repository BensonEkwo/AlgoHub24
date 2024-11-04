import React from 'react'
import { Link } from 'react-router-dom'
import  { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { LuBell } from "react-icons/lu";

function SendToken2() {
    const recepient_address= '0x2bcdhrjj48i595vjbkfjdj3'
    const date = new Date();

const options = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
};
const formattedDate = date.toLocaleString('en-US', options).replace(',', ', at');
  return (
    <div className='w-full h-full bg-white '>
          <div className=' top-0 flex flex-row items-start space-x-32 pt-6 px-5 justify-between mb-10'>
        <div className='inline-flex space-x-4 items-center' >
        <Link to='/'>
        <span className='text-2xl'><MdOutlineKeyboardBackspace /></span> 
        </Link>
        <span>
          <h1 className='text-nowrap text-lg font-space font-semibold'>AlgoHub Wallet</h1>
          </span></div>
          <div className='inline-flex space-x-4'>
          <span className='text-xl'> <IoIosArrowDown /></span>
     <span className='text-xl'><SlOptionsVertical /></span>
          </div>
      </div>
      <div className='flex ittems-center justify-between px-4 border-b-2 border-gray-100
      pb-2'>
       <img src='/avatar.jpeg' alt='avatar' className='w-[30px] h-[30px] rounded-full object-cover'/>
        <span className='font-space text-2xl font-semibold' style={{color:'#31D8EE'}}>AlgoHub</span><span className='text-2xl'><LuBell /></span>
      </div>
      <div className='w-full px-16 flex items-center justify-center mt-5 mb-10 '>
        <h1 className='font-space text-2xl font-medium '>Status</h1>
      </div>
      <div className='w-full flex  flex-col items-center'>
      <div className='flex flex-col w-[340px] gap-8 border border-b-4 p-3 rounded-md' style={{borderColor:'#006883'}}>
        <div className='flex flex-col items-center justify-center'>
            <p>Transaction Completed! 10 ALGO sent to <span className='block ml-12'>
              [{recepient_address}] </span>
              <span className='block ml-24'>
                successfully.
                </span></p>
        </div>
        <div className='flex items-center justify-between '>
            <span className='text-lg font-space font-medium'>Transaction ID:</span>
            <span className='p-1 rounded-md opacity-75' 
            style={{backgroundColor:'#F5F5F5'}}>87e567383...</span>
        </div>
        <div className='flex items-center justify-between'>
        <span className='text-lg font-space font-medium'>Amount Sent:</span>
            <span className='p-1 rounded-md opacity-75' 
            style={{backgroundColor:'#F5F5F5'}}>1000 ALGO</span>
        </div>
        <div className='flex items-center justify-between '>
        <span className='text-lg font-space font-medium'>Recepient:</span>
            <span className='p-1 rounded-md opacity-75' 
            style={{backgroundColor:'#F5F5F5'}}>{recepient_address}</span>
        </div>
        <div className='flex items-center justify-between'>
        <span className='text-lg font-space font-medium'>Date & TIme:</span>
            <span className='p-1 rounded-md opacity-75' 
            style={{backgroundColor:'#F5F5F5'}}>{formattedDate}</span>
        </div>
        <button className='w-full py-2' style={{backgroundColor:'#CCF9FF'}}>
            Done
        </button>
      </div>
      </div>
    </div>
  )
}

export default SendToken2