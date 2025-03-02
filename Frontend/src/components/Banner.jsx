import React from 'react'

import { TiTick } from "react-icons/ti";


function Home() {
  return (
   <>
   <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-8 mt-20 md:mt-32'>
    <h1 className='font-bold text-4xl text-purple-950'>Master the art of reading the Market!</h1>
    
    <h3 className='text-xl font-bold text-purple-950'>Elevate your trading with the powerful combination of  <br /><span className='text-purple-700'>Market Profile & Orderflow</span></h3>
    
    <div className='font-roboto space-y-6'>
      <div className='flex items-center'>
        <TiTick className="text-3xl mr-2 text-green-500" />
        <p className='text-purple-900'>Comprehensive Training on Market Profile & Orderflow</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-3xl mr-2 text-green-500" />
        <p className='text-purple-900'>Expert Guidance from Experienced Traders</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-3xl mr-2 text-green-500" />
        <p className='text-purple-900'>Tailored Learning for All Levels</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-3xl mr-2 text-green-500" />
        <p className='text-purple-900'>Learn Practical Strategies Not Just Theory</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-3xl mr-2 text-green-500" />
        <p className='text-purple-900'>Trusted by 1000+ Successful Students</p>
      </div>
    </div>
    

    <div className="mt-20">
      <a href="/course">
        <button className="btn btn-success bg-purple-950 text-white">Join Now</button>
      </a>
    </div>

    </div>
    </div>
    <div className='w-full md:w-5/12'>
    <img src="Banner.png" alt="" className='w-30 md:max-w-xl md:ml-20 mt-20' />
    </div>
   </div>
   </>
  )
}

export default Home
