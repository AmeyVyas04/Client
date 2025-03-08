import React from 'react'




function Home() {
  return (
   <>
   <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-8 mt-20 md:mt-40'>
    <h1 className='font-bold text-5xl  md:text-5xl text-purple-950'>Master the art of reading the Market!</h1>
    
    <h3 className='text-xl font-bold text-purple-950'>Elevate your trading with the powerful combination of  <br /><span className='text-purple-700'>Market Profile & Orderflow</span></h3>
    
    <div className='font-roboto space-y-4'>
  {[
    "Comprehensive Training on Market Profile & Orderflow",
    "Expert Guidance from Experienced Traders",
    "Tailored Learning for All Levels",
    "Learn Practical Strategies Not Just Theory",
    "Trusted by 1000+ Successful Students"
  ].map((text, index) => (
    <div key={index} className='flex items-start gap-2'>
      <img loading="lazy" alt='tick'  className="w-10 flex-shrink-0 " src='/Tick.png' />
      <p className='text-purple-900 text-xl m-3'>{text}</p>
    </div>
  ))}
</div>

    

    <div className="">
      <a loading="lazy" href="/Courses">
        <button className="btn btn-success bg-purple-700 text-white ">Join Now</button>
      </a>
    </div>

    </div>
    </div>
    <div className='w-full md:w-5/12 mr-48 mt-3'>
    <img src="Banner.png" alt="Banner" className='w-30 md:max-w-3xl md:ml-10 md:mr-8 mt-20' />
    </div>
   </div>
   </>
  )
}

export default Home
