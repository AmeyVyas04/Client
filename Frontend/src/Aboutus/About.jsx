import React from 'react'

function About() {
  return (
    <>
    <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-6 mt-20  md:mt-32'>
    <h1 className='font-bold text-4xl hover:scale-105 transition-all duration-300 ease-in-out '>About Us</h1>
   <p className='hover:scale-105 transition-all duration-300 ease-in-out shadow-lg p-4'>
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
