import React from 'react'
import  { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { BsEyeSlash } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { PiShieldWarning } from "react-icons/pi";
import { useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../main';
function Wallet() {
  const [phrase,setPhrase]= useState(null)
  const [privateKey,setPrivateKey]= useState(null)
  const {value}=useContext(myContext)   
  const [wallet]= value
  const [Keyview,setKeyView]= useState(false)
  const [phraseview,setPhraseView] = useState(false)
  

  const [isKeycopy,setisKeycopy]= useState(false)
  const Keycopy = (value) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setisKeycopy(true); 
      })
      
  };
  useEffect(() => {
    if (isKeycopy===true) {
      const timer = setTimeout(() => {
        setisKeycopy(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isKeycopy]);
  const [isPhrasecopy,setisPhrasecopy]= useState(false)
  const Phrasecopy = (value) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        setisPhrasecopy(true); 
      })
     
  };
  useEffect(() => {
    if (isPhrasecopy===true) {
      const timer = setTimeout(() => {
        setisPhrasecopy(false);
        
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isPhrasecopy]);
  useEffect(()=>{
      setPhrase(localStorage.getItem("user_mnemonic"));
      setPrivateKey(localStorage.getItem("user_privateKey"))
      console.log(localStorage.getItem("user_address"))
  },[])
  return (
    <div className='w-full h-full bg-white'>
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

     <div className='w-full mt-4 p-5'>
     <div className='flex flex-col items-center mb-4'>
        <h1 className='text-xl font-bold font-space'>
          Create Account
        </h1>
      </div>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-bold text-lg font-space'>
          Private Key
        </h1>
        <p className='opacity-80 text-sm font-noto'>
          We have created a Unique private key
        </p>
        <div className='p-3 border border-black rounded-sm relative break-words'>
          <p className='text-sm break-words'>
            {wallet.privateKey}
          </p>
          <div className={`absolute inset-0 right-0 bottom-0
           bg-white bg-opacity-25 backdrop-blur-sm ${Keyview? 'hidden':'block'}`}>

          </div>
        </div>
        
      </div>
        <div className='flex justify-center mt-4'>
        <div className='inline-flex space-x-3 justify-center'>
          <button className='px-8 py-2 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}}
          onClick={()=>setKeyView(!Keyview)}>
          <span className='mr-2'><BsEyeSlash /></span> <span className='font-noto text-xs'> View</span>
          </button>
          <button className='px-8 py-2 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}} onClick={()=>Keycopy(privateKey)}>
             <span className='mr-2'><MdContentCopy /></span>   <span className='font-noto text-xs'>{`${isKeycopy?'copied!':'copy'}`}</span>
          </button>
        </div>
        </div>
     </div>
     <div className='w-full  p-5'>
      <div className='flex flex-col space-y-4'>
        <h1 className='font-semibold text-lg font-space'>
         Seed Phrase
        </h1>
        <p className='opacity-80 text-sm font-noto '>
          To ensure Account recovery, copy and secure your seed phrase in a secure location
        </p>
        <div className='p-3 border border-black rounded-sm relative '>
          <p>
           {localStorage.getItem("user_mnemonic")}
          </p>
          <div className={`absolute inset-0 right-0 bottom-0
           bg-white bg-opacity-25 backdrop-blur-sm ${phraseview? 'hidden':'block'}`}>

          </div>
        </div>
      </div>
        <div className='flex justify-center mt-4'>
        <div className='inline-flex space-x-3 justify-center'>
          <button className='px-8 py-2 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}}
          onClick={()=>setPhraseView(!phraseview)}>
          <span className='mr-2'><BsEyeSlash /></span> <span className='font-noto text-xs'> View</span>
          </button>
          <button className='px-8 py-2 rounded-2xl bg-slate-100 text-black border flex items-center' 
          style={{borderColor:'#31D8EE'}} onClick={()=>Phrasecopy(phrase)}>
             <span className='mr-2'><MdContentCopy /></span>    <span className='font-noto text-xs'>{`${isPhrasecopy?'copied!':'copy'}`}</span>
          </button>
        </div>
        </div>
     </div>
     <div className='flex flex-col space-y-8 p-6 items-center'> 
      <div className='px-3 py-1 border rounded-md border-b-2
      flex items-center space-x-3' style={{borderColor:'#F4A466'}}>
        <span style={{color:'#F4A466'}} className='text-xl'><PiShieldWarning /></span>
        <span><p className='text-xs font-noto text-nowrap'>To ensure Account recovery, copy and store<span className='block'>your seed phrase in a secure location</span> </p></span>
      </div>
      <div>
        <Link to='/dashboard'>
        <button className='px-32 py-2 text-white text-lg rounded-md font-space' style={{backgroundColor:'#006883'}}>
          Create
        </button>
        </Link>
        
      </div>
     </div>
    </div>
  )
}


export default Wallet
