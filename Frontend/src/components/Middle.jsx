import React from 'react'

import { TiTick } from 'react-icons/ti'

function Middle() {
  return (
   <>
   <div className='flex max-w-screen-3xl container mx-auto flex-col md:flex-row justify-between px-8'>
    <div className='w-full md:w-1/2 mt-8 mb-10 flex justify-center'>
        <img src="Middle.png" alt="" className='w-full md:max-w-3xl' />
    </div>
    <div className='w-full md:w-5/12 space-y-8 mb-20 md:mt-32 mr-20'>
        <h1 className='text-5xl font-bold text-purple-950 ml-1'>What Makes Us Different</h1>
        <div className='font-roboto space-y-6'>
      <div className='flex items-start gap-3'>
        <TiTick className='text-green-500 text-3xl w-16' />
        <p className='text-purple-900 text-lg'><span className='font-semibold text-purple-950'>Real Market Experience</span> – We don't just teach theory;
        our strategies are tested and proven in live markets</p>
      </div>
      <div className='flex items-start gap-3'>
        <TiTick className='text-green-500 text-3xl w-20  mr-2' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'>Order Flow & Market Depth Focus</span>  – Unlike traditional
 courses, we emphasize advanced concepts like order
 flow and volume profile for precision trading</p>
      </div>
      <div className='flex items-start gap-3'>
        <TiTick className='text-green-500 text-3xl w-16 mr-1' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'>Structured Learning Path</span>  – From beginner to advanced
 levels, our courses are designed to ensure step-by-step
 mastery</p>
      </div>
      <div className='flex items-start gap-3'>
        <TiTick className='text-green-500 text-3xl w-20 ' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'> Structured Learning Path</span> – From beginner to advanced
 levels, our courses are designed to ensure step-by-step
 mastery</p>
      </div>
      <div className='flex items-start gap-3'>
        <TiTick className='text-green-500 text-3xl w-20 ' />
        <p className='text-purple-900 text-lg mr-1'><span className='font-semibold  text-purple-950 '>Multi-Platform Access</span> – Learn anytime, anywhere with
        access on Android, iOS, and web platforms</p>
      </div>
      <div className='flex items-start gap-3'>
        <TiTick className='text-green-500 text-3xl w-20 mr-1' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'>Actionable Strategies</span>  – Our trading strategies are built
 on logic, market psychology, and real-time data—not just
 indicators</p>
      </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default Middle
