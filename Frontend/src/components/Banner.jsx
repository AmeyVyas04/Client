import React from 'react'

function Home() {
  return (
   <>
   <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-6 mt-20  md:mt-32'>
    <h1 className='font-bold text-4xl hover:scale-105 transition-all duration-300 ease-in-out'>Hello welocme here to learn Something New About <span className='text-green-500 '>Stock Market</span></h1>
   <p className='hover:scale-105 transition-all duration-300 ease-in-out '>At Momentrade, we believe that trading should be accessible and exciting for everyone. Our mission is to empower traders by teaching them the power of order flow analysis, a vital tool for understanding market movements and making informed decisions.

Our courses are designed for traders of all skill levels, whether you're just starting or looking to advance your trading expertise. With clear and easy-to-follow lessons, you'll learn how to read market trends, identify key signals, and seize opportunities for success.

Join us at Momentrade to unlock your trading potential. Dive into a world where knowledge meets opportunity, and start trading with confidence! Let us guide you on your journey to becoming a proficient trader.</p>
<h1 className='text-2xl font-extrabold font-sans hover:scale-105 transition-all duration-300 ease-in-out'>Revolutionize Your Trading Journey with <span className='text-red-500'>Momen</span>trade </h1>

<div className="mt-8">
  <a href="/course">
    <button className="btn btn-success">Join Now</button>
  </a>
</div>

    </div>
    </div>
    <div className=' w-full md:w-5/12 transform scale-95 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100'>
    <img src="Bannerimage.jpg" alt="" className='w-30  md:max-w-xl md:ml-20 mt-20' />
    </div>
   </div>
   </>
  )
}

export default Home
