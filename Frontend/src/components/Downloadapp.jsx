import React from 'react'

function Downloadapp() {
  return (
    <>
     <h1 className='md:px-24 font-bold text-3xl hover:scale-105 transition-all duration-300 ease-in-out mt-32'>Download The Mobile Application</h1>
    <div className='flex max-w-screen-2xl container mx-auto md:px-20 mt-20 mb-32 px-4 flex-col md:flex-row justify-evenly gap-20'>
       
        <div>
            <h3 className='text-lg font-semibold mb-6'>Android Application</h3>
            <a href="https://clplazarus.page.link/q3Lh" target="_blank" rel="noopener noreferrer">
              <img src="/Android.png" alt="Android app" className='w-9/12 hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl cursor-pointer' />
            </a>
        </div>
        <div>
        <h3 className='text-lg font-semibold mb-6'>IOS Application</h3>
            <a href="https://apps.apple.com/in/app/myinstitute/id1472483563" target="_blank" rel="noopener noreferrer">
              <img src="/Apple1.png" alt="iOS app" className='w-12/12 hover:scale-105 transition-all duration-300 ease-in-out shadow-2xl cursor-pointer'/>
            </a>
        </div>
    </div>
    </>
  )
}

export default Downloadapp
