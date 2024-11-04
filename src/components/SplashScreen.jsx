import React from 'react'
import { Link } from 'react-router-dom'

function SplashScreen() {
  return (
   
    <div className='w-full h-full flex flex-col items-center justify-end pb-8 px-4 space-y-14 bg-white'>
        <div className='flex flex-col items-center space-y-4'>
           <div className='flex flex-col items-center'>
           <img src='/AlgoHubLogo.png' alt='AlgoHub logo' className='w-20 h-20'/>
            <h1 className='font-bold text-4xl font-space' 
            style={{color: '#006883'
            }}>
                AlgoHub
            </h1>
           </div>
            <h1 className='text-xl font-space'>
      Welcome To AlgoHub Wallet
      </h1>
        </div>
      <div>
        <p className='text-sm mx-6 opacity-70 font-noto'>
          New to AlgoHub? start by creating a secure wallet to manage your assets. 
          Already have a <span className='block mx-8'>wallet? Easily import it here.</span>
        </p>
      </div>
      <div className='flex flex-col items-center mt-6 space-y-4'>
        <Link to='/wallet'>
        <button className='block px-28 py-2 text-white font-space'
 style={{backgroundColor:'#006883'
 }} >
        create Wallet
        </button>
        </Link>
        <button className='block font-space '
        style={{color:'#31D8EE'}}>
          Import Existing Wallet
        </button>
      </div>
    </div>
  )
}

export default SplashScreen