import React from 'react'

function Downloadapp() {
  return (
    <>
    <div className='flex max-w-screen-2xl container mx-auto md:px-10 -mt-20  px-4 flex-col items-center md:flex-row justify-between gap-10'>
       
        <div className="flex flex-col items-center mt-10 relative md:ml-20">
            <img loading="lazy" src="/Call for action.png" alt="Call for Action" className='min-w-screen  cursor-pointer ' />
            
            <div className="absolute bottom-4 flex mr-24 space-x-0.5 md:mr-96">
              <a href="https://clplazarus.page.link/q3Lh" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src="/Google Play.png" alt="Google Play" className='w-24  md:w-96 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer md:mb-10 md:ml-12 ' />
              </a>
              <a href="https://apps.apple.com/in/app/myinstitute/id1472483563" target="_blank" rel="noopener noreferrer">
                <img loading="lazy" src="/Apple.png" alt="Apple Store" className='w-24 md:w-96 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer md:-ml-12' />
              </a>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Downloadapp