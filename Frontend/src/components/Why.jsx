import React from 'react'

function Why() {
  return (
   <>
   <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly mb-20'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-6 mt-20  md:mt-32'>
    <h1 className='font-bold text-4xl hover:scale-105 transition-all duration-300 ease-in-out'>Why Momentrade?</h1>
     <ul className='hover:scale-105 transition-all duration-300 ease-in-out'>
        <li><h3 className='font-semibold'>Expert Guidance</h3> - Learn from a mentor with extensive market experience and a proven track record.</li>
        <br />
        <li><h3 className='font-semibold'>Cutting-Edge Tools</h3>- Master the art of trading with professional tools like Order Flow and Market Profile.</li>
        <br />
        <li><h3 className='font-semibold'>Comprehensive Education</h3>- From foundational concepts to advanced strategies, our programs cater to all skill levels.</li>
        <br />
        <li><h3 className='font-semibold'>Real-World Application</h3>- Develop practical skills that can be immediately applied in live market conditions.</li>
     </ul>
    </div>
    </div>
    <div className=' w-full md:w-5/12 transform scale-95 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100'>
    <img src="Why.jpg" alt="" className='w-30  md:max-w-xl md:ml-20 mt-20' />
    </div>
   </div>
   </>
  )
}

export default Why
