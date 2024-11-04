import React from 'react'
import { Link } from 'react-router-dom'
import  { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { LuBell } from "react-icons/lu";
import { MdQrCodeScanner } from "react-icons/md";
import { MdClear } from "react-icons/md";
import { PiShieldWarning } from "react-icons/pi";

function SendToken1() {
    const algo_ammount= 1000
    const address= 'dnfk3u494iti49r8i4jr9'
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
            <input type='text' value={address} className='w-[252px] border text-sm
            border-dotted border-gray-400 rounded-lg focus:outline-none px-4 py-2 opacity-65'
             style={{backgroundColor:'#F5F5F5'}}/>
             <button className='text-sm bg-white rounded-full absolute right-2'>
             <MdClear />
             </button>
            </form>
             <button className='text-xs px-4 py-2 rounded-lg' style={{backgroundColor:'#F5F5F5'}}>
                ALGO <span className='inline-flex'><IoIosArrowDown /></span>
             </button>
        </div>
        <div className='flex items-center justify-between'>
        <input type='number' value={algo_ammount} className='w-[162px] border text-sm
            border-dotted border-gray-400 rounded-lg focus:outline-none px-4 py-2 opacity-65'
             style={{backgroundColor:'#F5F5F5'}}/>
             <div className='w-[162px] h-[45px] rounded-lg items-center flex relative px-2 pt-4 '
             style={{backgroundColor:'#7CF0FF'}}>
                <span className='bg-white w-[26px] h-[26px] rounded-full flex items-center justify-center'>
              <img src='/algologo.png' alt='Algo logo' className='w-[20px] h-[20px]'/>
            </span>
            <span className=' ml-1 font-mono text-lg text-white font-semibold'> 1435 ALGO</span>
            <span className='text-[10px] bg-white text-black absolute right-1 
            top-1 rounded-md'>Balance</span>
             </div>
        </div>
      </div>
      <div className='flex flex-col items-start w-full px-8 my-6'>
            <div className='w-full border-b-2 border-gray-200'>
            <h1 className='text-xl font-semibold font-space'>Summary</h1>
            </div>
            <div className='flex justify-between items-center space-x-12 my-3'>
                <span className='text-xl font-space'>Transaction Fee</span>  <span>0.001 ALGO</span>
            </div>
            <div className='flex justify-between items-center space-x-32 my-3' >
                <h1 className='text-xl font-space'>Amount</h1>  <h1>1000 ALGO</h1>
            </div>
            <div className='flex justify-between items-center space-x-36 my-3 border-t-2 
            border-b-2 border-gray-200 py-2'>
                <span className='text-xl font-space font-semibold'>Total</span>  <span>1000.01 ALGO</span>
            </div>
      </div>
     <div className='w-full px-5 mt-10 mb-20'>
     <div className='px-3 py-1 border rounded-md border-b-2
      flex items-center space-x-2' style={{borderColor:'#F4A466'}}>
        <span style={{color:'#F4A466'}} className='text-2xl'><PiShieldWarning /></span>
        <span><p className='text-xs font-noto opacity-80 text-nowrap'>
            Double-check recepeint details to avoid errors</p></span>
      </div>
     </div>
     <div className='flex justify-between items-center  gap-3 mt-2 px-4'>
               <Link to='/sendtoken'>
               <button className='w-[162px] h-[43px] border border-b-2 rounded-md text-black font-space'
                 style={{borderColor:'#006883'}}>
                    Back
                </button>
               </Link>
               <Link to='/sendtoken2'>
               <button className='w-[162px] h-[43px] border border-b-2 rounded-md text-white font-space'
                style={{backgroundColor:'#006883'}} >
                    Confirm
                </button>
               </Link>
             </div>
    </div>
  )
}

export default SendToken1