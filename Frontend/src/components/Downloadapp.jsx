import React from 'react'

function Downloadapp() {
  return (
    <>
    <div className='flex max-w-screen-2xl container mx-auto md:px-10 -mt-20  px-4 flex-col items-center md:flex-row justify-between '>
       
    <div className="flex flex-col items-center mt-10 relative md:ml-20">
    <img loading="lazy" src="/Call for action.png" alt="Call for Action" className="min-w-screen cursor-pointer" />
    
    <div className="absolute bottom-4 flex mr-32 md:mr-96 gap-1">
  {/* Google Play Store Button (Can move separately) */}
  <div className="relative left-10  md:left-20"> 
    <a href="https://clplazarus.page.link/q3Lh" target="_blank" rel="noopener noreferrer">
      <img loading="lazy" src="/Google Play.png" alt="Google Play" className="w-24 md:w-96 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer md:mb-10" />
    </a>
  </div>

  {/* Apple Store Button (Fixed Position) */}
  <div className='relative md:right-20'>
    <a href="https://apps.apple.com/in/app/myinstitute/id1472483563" target="_blank" rel="noopener noreferrer">
      <img loading="lazy" src="/Apple.png" alt="Apple Store" className="w-24 md:w-96 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" />
    </a>
  </div>
</div>

     
    </div>
</div>


    </>
  )
}

export default Downloadapp