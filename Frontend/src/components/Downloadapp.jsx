import React from 'react'

function Downloadapp() {
  return (
    <>
     <h1 className='md:px-24 font-bold text-4xl px-10 mt-10 text-purple-950'>Get the learning app</h1>
     <p className='text-purple-900 md:px-20 px-5 font-semibold text-xl mt-10'> Learn anytime, anywhere on the go with the 
     Momentrade app</p>
    <div className='flex max-w-screen-2xl container mx-auto md:px-20 mt-20 mb-32 px-4 flex-col items-center md:flex-row justify-evenly gap-20'>
       
        <div className="flex flex-col items-center mt-10 md:mt-20">
            <h3 className='text-lg font-semibold mb-6'>Android Application</h3>
            <a href="https://clplazarus.page.link/q3Lh" target="_blank" rel="noopener noreferrer">
              <img src="/Play.png" alt="Android app" className='w-64 hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl cursor-pointer' />
            </a>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-0">
            <a >
              <img src="/Mobile.png" alt="iOS app" className='w-64 md:w-96  shadow-2xl'/>
            </a>
        </div>
        <div className="flex flex-col items-center mt-10 md:mt-20">
            <h3 className='text-lg font-semibold mb-6'>IOS Application</h3>
            <a href="https://apps.apple.com/in/app/myinstitute/id1472483563" target="_blank" rel="noopener noreferrer">
              <img src="/Apple1.png" alt="iOS app" className='w-64 hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl cursor-pointer'/>
            </a>
        </div>
    </div>
    </>
  )
}

export default Downloadapp
