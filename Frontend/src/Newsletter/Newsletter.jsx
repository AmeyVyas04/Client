import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaArrowAltCircleRight } from "react-icons/fa";;
import { TiTick } from "react-icons/ti";
function Newsletter() {
  return (
    
   <>
   <Nav/>
   <div className='min-h-screen flex items-center justify-center'>
   <div className='flex max-w-screen-2xl container mx-auto flex-col md:flex-row justify-evenly py-20'>
    <div className='w-full md:w-1/2  ml-10 '>
      <h1 className='font-bold text-purple-950 text-4xl mb-10'>Tips & Tools to help you out-trade the Competition</h1>
      <h3 className='font-bold text-purple-950 text-lg mb-8'>Sign up for my Insider Newsletter and receive:</h3>
      <div className='font-roboto space-y-6 flex flex-col '>
            <div className='flex items-start gap-4'>
              <FaArrowAltCircleRight className="text-xl text-green-500" /> 
              <p className='text-purple-900'>Gocharting Templates</p>
            </div>
            <div className='flex items-start gap-4'>
              <FaArrowAltCircleRight className="text-xl text-green-500" />
              <p className='text-purple-900'>YouTube Course Updates</p>
            </div>
            <div className='flex items-start gap-4'>
              <FaArrowAltCircleRight className="text-xl text-green-500" />
              <p className='text-purple-900'>Trade Journal (Excel & GSheets)</p>
            </div>
            <div className='flex items-start gap-4'>
              <FaArrowAltCircleRight className="text-xl text-green-500" />
              <p className='text-purple-900'>Member Discounts</p>
            </div>
            <div className='flex items-start gap-4'>
              <FaArrowAltCircleRight className="text-xl text-green-500" />
              <p className='text-purple-900'>Anything else cool I can think of…</p>
            </div>
          </div>

    </div>
    <div className='w-full md:w-5/12 space-y-8 shadow-2xl bg-gray-100 border-4 border-gray-300 rounded-lg p-6 '>
        <h1 className='text-4xl font-bold text-purple-950 ml-10'>Become a MT Insider!</h1>
        <h3 className=' text-purple-950 ml-10 font-bold text-lg'>Enter the information to ACTIVATE your Insider Membership !</h3>
        <br />
        <p className='font-roboto text-purple-900 mt-8 ml-10 '>Unsubscribe at anytime.We will NEVER sell any of your information. <br /> <br />
        
       </p>
       <p  className='font-roboto text-purple-900 mt-8 ml-10' >
       For more information visit <a href="/Disclaimer" className='font-bold underline hover:scale-105 transition-all duration-300 ease-in-out'>Disclaimer</a>
       </p>
       <br /><br />
       <div>
        <a href="https://forms.visme.co/formsPlayer/90de6qzm-momentrade-newsletter-subscription" target='_blank'>
        <button class="btn bg-purple-950 ml-60 text-white hover:text-black">Join Now</button>
        </a>
       </div>
       
    </div>
   </div>
   </div>
   <Footer/>
   </>
  )
}

export default Newsletter
