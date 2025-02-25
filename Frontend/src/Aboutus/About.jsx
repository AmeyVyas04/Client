import React from 'react'

function About() {
  return (
    <>
    <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-6 mt-20  md:mt-32'>
    <h1 className='font-bold text-4xl hover:scale-105 transition-all duration-300 ease-in-out '>About Us</h1>
   <p className='hover:scale-105 transition-all duration-300 ease-in-out shadow-lg p-4'>Hi, I'm A. Rajkumar, the founder of Momentrade, a specialized training institute where traders learn the advanced techniques of Order Flow Analysis and Market Profile chart reading—tools that provide unparalleled insight into market dynamics and enhance trading precision.
With a B. Tech in Mechanical Engineering and an MBA in Finance, I spent 9 years in supply chain finance, working with leading institutions like Standard Chartered Bank (SCB) and HDFC Bank. My professional background instilled in me a strong analytical mindset, which I later applied to the financial markets.
I started my trading journey in 2016, and in 2021, I discovered the true power of Order Flow charts and Market Profile, tools that completely transformed how I viewed and approached the markets. These advanced charting techniques gave me the ability to analyse market structure in real-time and identify high-probability trade setups with confidence. By December 2021, I became a full-time trader, specializing in Index Option selling and Swing trading in Stock Futures.
At Momentrade, I aim to bridge the gap between traditional trading approaches and cutting-edge techniques, equipping traders with the skills to read market intent and execute trades with precision.
Join me, and let's unlock the secrets of the markets together with the power of Order Flow and Market Profile!
</p>
    </div>
    </div>
    <div className=' w-full md:w-5/12 transform scale-95 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100'>
    <img src="aboutus.jpg" alt="" className='w-30 md:max-w-xl md:ml-20 mt-20 shadow-2xl' />
    </div>
   </div>
    </>
  )
}

export default About
