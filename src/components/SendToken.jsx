import React from 'react'
import { Link } from 'react-router-dom'
import  { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { LuBell } from "react-icons/lu";
import { MdQrCodeScanner } from "react-icons/md";

function SendToken() {
  return (
    <div className='w-full h-full bg-white'>
         <div className=' top-0 flex flex-row items-start space-x-32 pt-6 px-5 justify-between mb-10'>
        <div className='inline-flex space-x-4 items-center' >
        <Link to='/dashboard'>
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
        <span className='font-space text-2xl font-bold' style={{color:'#31D8EE'}}>AlgoHub</span><span className='text-2xl'><LuBell /></span>
      </div>
      <div className='w-full px-16 flex items-center justify-center mt-5 mb-4'>
        <h1 className='font-space text-xl font-medium '>Send Tokens</h1>
      </div>
      <div className='flex items-center justify-center'>
      <div className='flex items-center p-2 my-6 space-x-1 rounded-md' style={{backgroundColor:'#CCF9FF'}}>
        <span className='text-xs'>Scan QR code</span> <span><MdQrCodeScanner/></span>
      </div>
      </div>
      <div className='w-full px-5 flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
            <form className='relative flex items-center'>
            <input type='text' placeholder='Paste-Address' className='w-[252px] border text-sm
            border-dotted border-gray-400 rounded-lg focus:outline-none px-4 py-2'
             style={{backgroundColor:'#F5F5F5'}}/>
             <button className='absolute right-2 bg-white text-sky-300 rounded-lg text-xs p-1'
             >paste</button>
            </form>
             <button className='text-xs px-4 py-2 rounded-lg' style={{backgroundColor:'#F5F5F5'}}>
                USD <span className='inline-flex'><IoIosArrowDown /></span>
             </button>
        </div>
        <div className='flex items-center justify-between'>
        <input type='number' placeholder='Ammount' className='w-[162px] border text-sm
            border-dotted border-gray-400 rounded-lg focus:outline-none px-4 py-2'
             style={{backgroundColor:'#F5F5F5'}}/>
             <div className='w-[162px] h-[45px] rounded-lg items-center flex relative px-2 pt-4 '
             style={{backgroundColor:'#7CF0FF'}}>
                <span className='bg-white w-[26px] h-[26px] rounded-full flex items-center justify-center'>
              <img src='/algologo.png' alt='Algo logo' className='w-[20px] h-[20px]'/>
            </span>
            <span className=' ml-1 font-mono text-lg text-white font-semibold'> 1435 ALGO</span>
            <span className='text-[10px] bg-white text-black absolute right-1 top-1 rounded-md'>Balance</span>
             </div>
        </div>
        <div className='flex justify-between items-center  gap-3 mt-2'>
               <Link to='/dashboard'>
               <button className='w-[162px] h-[43px] border border-b-2 rounded-md text-black font-space'
                 style={{borderColor:'#006883'}}>
                    Back
                </button>
               </Link>
               <Link to='/sendtoken1'>
               <button className='w-[162px] h-[43px] border border-b-2 rounded-md text-white font-space'
                style={{backgroundColor:'#006883'}} >
                    Next
                </button>
               </Link>
             </div>
      </div>
    </div>
  )
}

export default SendToken