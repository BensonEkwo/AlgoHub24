import React from 'react'
import { Link } from 'react-router-dom'
import  { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { LuBell } from "react-icons/lu";
import { MdQrCodeScanner } from "react-icons/md";
import { MdContentCopy } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { IoMdSwap } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import { MdOutlineCastForEducation } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";

function Dashboard() {
  const Algo_Balance = 1435;
  const Usd_Balance = '$173.890'
  return (
    <div className='w-full h-full bg-white'>
          <div className=' top-0 flex flex-row items-start space-x-32 pt-6 px-5 justify-between mb-10'>
        <div className='inline-flex space-x-4 items-center' >
        <Link to='/'>
        <span className='text-2xl'><MdOutlineKeyboardBackspace /></span> 
        </Link>
        <span>
          <h1 className='text-nowrap text-lg font-space font-semibold'>AlgoHub Dashboard</h1>
          </span></div>
          <div className='inline-flex space-x-4'>
          <span className='text-xl'> <IoIosArrowDown /></span>
     <span className='text-xl'><SlOptionsVertical /></span>
          </div>
      </div>
      <div className='flex ittems-center justify-between px-4 border-b-2 border-gray-100
      pb-2'>
       <img src='/avatar.jpeg' alt='avatar' className='w-[30px] h-[30px] rounded-full object-cover'/>
        <span className='font-space text-xl font-semibold' style={{color:'#31D8EE'}}>AlgoHub</span><span className='text-2xl'><LuBell /></span>
      </div>
      <div className='flex items-center justify-center mt-2'>
      <div className='flex items-center p-2 my-6 space-x-1 rounded-md' style={{backgroundColor:'#CCF9FF'}}>
        <span className='text-xs'>Scan QR code</span> <span><MdQrCodeScanner/></span>
      </div>
      </div>
      <div className='w-full flex px-6 items-center justify-center'>
        <div className='flex flex-col w-[340px] h-[173px] px-3 pb-8 pt-3 rounded-md relative'
         style={{backgroundImage:'url(/dashboardbg.jpeg)'}}>
          <div className='absolute top-0 right-0 left-0 bottom-0 opacity-60'
          style={{backgroundColor:'#31D8EE'}}>
          </div>
         <div className='flex items-center justify-between mb-5 '>
         <div className='z-50'><h1 className='text-white font-space'> <span className='inline-flex gap-2 items-center font-medium '>My Wallet  < IoMdWallet/> </span>
        </h1> 
         <span className='inline-flex gap-2 items-center text-white font-medium'>0x2xvv.....d34dhdcv<MdContentCopy /></span>
         </div>
          <div className='p-1 bg-white rounded-xl inline-flex items-center z-50'><span className='text-xs'>USD</span> <span className='text-xs'><IoIosArrowDown /></span></div>
         </div>
         <div className='flex gap-2 '>
            <div className='bg-white w-[46px] h-[46px] rounded-full flex items-center justify-center z-50'>
              <img src='/algologo.png' alt='Algo logo' className='w-[31px] h-[31px]'/>
            </div> 
            <div className='flex flex-col z-50'>
              <span className='font-space text-white font-medium text-xl'> {Algo_Balance} ALGO</span>
              <span className='font-noto text-white font-medium'>
                {Usd_Balance}
              </span>
            </div>
         </div>
        </div>
      </div>
      <div className='w-full my-8'>
        <div className='flex items-center justify-evenly'>
     <Link to='/sendtoken'>
     <button className='flex flex-col items-center gap-2'> <span className='rounded-full p-4'
      style={{backgroundColor:'#CCF9FF'}}><FiSend/></span> <span className='block text-base font-mono'>Send</span></button>
     </Link>
      <button className='flex flex-col items-center gap-2'><span className='rounded-full p-4' 
      style={{backgroundColor:'#CCF9FF'}}><BiCategory/></span> <span className='block text-base font-mono'>Receive</span></button>
     <button className='flex flex-col items-center gap-2'> <span className='rounded-full p-4'
     style={{backgroundColor:'#CCF9FF'}}><IoMdSwap/></span> <span className='block text-base font-mono'>Swap</span></button>
        </div>
      </div>
      <div className='flex flex-col w-full px-3 mt-3'>
        <div className='flex items-center space-x-8 mx-10'>
          <h1 className='font-space border-b-2 w-1/2 inline-block'style={{color:'#31D8EE',borderColor:'#31D8EE'}}>Tokens</h1>
          <h1 className='font-space opacity-70' >NFTs</h1>
        </div>
      </div>
      <div className='flex flex-col w-full px-5 mt-2'>
        <div className='flex items-center justify-between my-3'>
          <div className='flex items-center space-x-2'>
          <div>
            <img src='/usdt.jpeg' alt='usdt' className='w-[34px] h-[34px]'/>
          </div>
          <div className='flex flex-col items-center'>
            <span className='block text-xs font-space font-medium'>USDT</span> <span className='block text-xs '>$1.99</span>
          </div>
          </div>
          <div className='flex flex-col items-end'>
            <span className='block text-xs'>0</span> <span className='block text-xs' style={{color:'#01AB73'}}>+0.01%</span>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex items-center space-x-2'>
          <div>
            <img src='/usdc.jpeg' alt='usdc' className='w-[34px] h-[34px]'/>
          </div>
          <div className='flex flex-col items-center'>
            <span className='block text-sm font-space font-medium'>USDC</span> <span className='block text-xs '>$1.99</span>
          </div>
          </div>
          <div className='flex flex-col items-end'>
            <span className='block text-xs'>0</span> <span className='block text-xs' style={{color:'#01AB73'}}>+0.01%</span>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex items-center space-x-2'>
          <div>
            <img src='/avax.jpeg' alt='avax' className='w-[34px] h-[34px]'/>
          </div>
          <div className='flex flex-col items-center'>
            <span className='block text-sm font-space font-medium'>AVAX</span> <span className='block text-xs '>$1.99</span>
          </div>
          </div>
          <div className='flex flex-col items-end'>
            <span className='block text-sm'>0</span> <span className='block text-xs' style={{color:'#01AB73'}}>+0.01%</span>
          </div>
        </div>
        <div className='flex items-center justify-between my-3'>
          <div className='flex items-center space-x-2'>
          <div>
            <img src='/pdt.jpeg' alt='Polk' className='w-[34px] h-[34px]'/>
          </div>
          <div className='flex flex-col items-center'>
            <span className='block text-sm font-space font-medium'>Polk</span> <span className='block text-xs '>$1.99</span>
          </div>
          </div>
          <div className='flex flex-col items-end'>
            <span className='block text-xs'>0</span> <span className='block text-xs' style={{color:'#01AB73'}}>+0.01%</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-around w-full p-3 my-3'>
      <div className='flex flex-col items-center'>
       <span className='text-2xl' style={{color:'#006883'}}> <IoMdHome/></span> <span className='text-xs' style={{color:'#006883'}}>Home</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-2xl' style={{color:'#B4B2B6'}}><TbCategory/></span> <span className='text-xs' style={{color:'#B4B2B6'}}> dApps</span>
      </div>
      <div className='flex flex-col items-center'>
       <span className='text-2xl' style={{color:'#B4B2B6'}}> <MdOutlineCastForEducation/></span> <span className='text-xs' style={{color:'#B4B2B6'}}>Education</span>
      </div>
      <div className='flex flex-col items-center'>
        <span className='text-2xl' style={{color:'#B4B2B6'}}><IoMdWallet/></span> <span className='text-xs' style={{color:'#B4B2B6'}}>Wallet</span>
      </div>
      </div>
    </div>
  )
}

export default Dashboard