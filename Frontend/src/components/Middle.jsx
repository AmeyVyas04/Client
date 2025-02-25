import React from 'react'

function Middle() {
  return (
   <>
   <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='mt-16 max-w-[800px] mb-10  transform scale-95 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100'>
        <img src="Middpic.jpg" alt="" className='w-full h-auto' />
    </div>
    <div className='space-y-8 px-10 mb-20 md:mt-32'>
        <h1 className='text-4xl font-bold    transform scale-95 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100'>What Makes Us Different</h1>
        <p className='text-lg leading-relaxed transform scale-95 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100'>At Momentrade, we focus on practical learning over theory. While many trading programs get caught up in complex concepts, we believe in hands-on experience that truly prepares you for the markets. Our approach emphasizes real-world application, allowing you to practice what you learn in a way that builds your confidence and skills.

Instead of overwhelming you with jargon, we provide clear, actionable insights that you can apply immediately. Our goal is to equip you with the tools you need to read market flows and make smart trading decisions in real time. With Momentrade, you'll gain practical knowledge that sets you apart and helps you succeed in your trading journey.</p>
    </div>
   </div>
   </>
  )
}

export default Middle
