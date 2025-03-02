import React from 'react'

function Middle() {
  return (
   <>
   <div className='flex max-w-screen-2xl container mx-auto flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 mt-8 mb-10 '>
        <img src="Moment.png" alt="" className='w-30 md:max-w-xl' />
    </div>
    <div className='w-full md:w-5/12 space-y-8 mb-20 md:mt-32'>
        <h1 className='text-4xl font-bold text-purple-950'>What Makes Us Different</h1>
        <p className='font-roboto text-purple-900 mt-8'>At Momentrade, we focus on practical learning over theory. While many trading programs get caught up in complex concepts, we believe in hands-on experience that truly prepares you for the markets. Our approach emphasizes real-world application, allowing you to practice what you learn in a way that builds your confidence and skills.
        <br /><br />
        Instead of overwhelming you with jargon, we provide clear, actionable insights that you can apply immediately. Our goal is to equip you with the tools you need to read market flows and make smart trading decisions in real time. With Momentrade, you'll gain practical knowledge that sets you apart and helps you succeed in your trading journey.</p>
    </div>
   </div>
   </>
  )
}

export default Middle
