import React from 'react'
import  { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { BsEyeSlash } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { PiShieldWarning } from "react-icons/pi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Wallet() {
  const [Keyview,setKeyView]= useState(false)
  const [phraseview,setPhraseView] = useState(false)
  const privateKey=` your private key has been created for this user, please donot disclose to anyone
  keep this key safe, this is your private key`
  const phrase = ` your private key has been created for this user, please donot disclose to anyone
  keep this key safe, this is your private key`
  const copy=(value)=>{
    navigator.clipboard.writeText(value)
  }
  return (
    <div className='w-full h-full bg-white'>
      <div className=' top-0 flex flex-row items-start space-x-32 pt-6 px-5 justify-between mb-10'>
        <div className='inline-flex space-x-4 items-center' >
        <Link to='/'>
        <span className='text-2xl'><MdOutlineKeyboardBackspace /></span> 
        </Link>
        <span>
          <h1 className='text-nowrap text-lg'>AlgoHub Wallet</h1>
          </span></div>
          <div className='inline-flex space-x-4'>
          <span className='text-xl'> <IoIosArrowDown /></span>
     <span className='text-xl'><SlOptionsVertical /></span>
          </div>
      </div>

     <div className='w-full mt-8 p-5'>
     <div className='flex flex-col items-center mb-8'>
        <h1 className='text-xl font-semi-bold '>
          Create Account
        </h1>
      </div>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-semibold text-lg'>
          Address
        </h1>
        <p className='opacity-80 text-sm '>
          We have created a Unique private key
        </p>
        <div className='p-3 border border-black rounded-sm relative '>
          <p>
            {privateKey}
          </p>
          <div className={`absolute inset-0 right-0 bottom-0
           bg-white bg-opacity-25 backdrop-blur-sm ${Keyview? 'hidden':'block'}`}>

          </div>
        </div>
        
      </div>
        <div className='flex justify-center mt-4'>
        <div className='inline-flex space-x-3 justify-center'>
          <button className='px-6 py-1 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}}
          onClick={()=>setKeyView(!Keyview)}>
          <span className='mr-2'><BsEyeSlash /></span> <span className=''> View</span>
          </button>
          <button className='px-6 py-1 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}} onClick={copy(privateKey)}>
             <span className='mr-2'><MdContentCopy /></span>    <span className=''>copy</span>
          </button>
        </div>
        </div>
     </div>
     <div className='w-full  p-5'>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-semibold text-lg'>
         Seed Phrase
        </h1>
        <p className='opacity-80 text-sm '>
          To ensure Account recovery, copy and secure your seed phrase in a secure location
        </p>
        <div className='p-3 border border-black rounded-sm relative '>
          <p>
           {phrase}
          </p>
          <div className={`absolute inset-0 right-0 bottom-0
           bg-white bg-opacity-25 backdrop-blur-sm ${phraseview? 'hidden':'block'}`}>

          </div>
        </div>
        
      </div>
        <div className='flex justify-center mt-4'>
        <div className='inline-flex space-x-3 justify-center'>
          <button className='px-6 py-1 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}}
          onClick={()=>setPhraseView(!phraseview)}>
          <span className='mr-2'><BsEyeSlash /></span> <span className=''> View</span>
          </button>
          <button className='px-6 py-1 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}} onClick={copy(phrase)}>
             <span className='mr-2'><MdContentCopy /></span>    <span className=''>copy</span>
          </button>
        </div>
        </div>
     </div>
     <div className='flex flex-col space-y-8 p-6 items-center'> 
      <div className='px-3 py-1 border rounded-md border-b-2
      flex items-center space-x-3' style={{borderColor:'#F4A466'}}>
        <span style={{color:'#F4A466'}} className='text-xl'><PiShieldWarning /></span>
        <span><p className='text-xs'>To ensure Account recovery, copy and secure your seed phrase in a secure location</p></span>
      </div>
      <div>
        <button className='px-32 py-2 text-white text-lg rounded-md' style={{backgroundColor:'#006883'}}>
          Create
        </button>
      </div>
     </div>
    </div>
  )
}


export default Wallet