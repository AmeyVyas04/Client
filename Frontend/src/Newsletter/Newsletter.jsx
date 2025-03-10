import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaArrowAltCircleRight } from "react-icons/fa";

function Newsletter() {
  return (
   <>
   <Nav/>
   <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
   <div className='flex max-w-screen-2xl container mx-auto flex-col md:flex-row justify-evenly py-10 sm:py-16 md:py-20'>
    <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-8'>
      <h1 className='font-bold text-purple-950 text-3xl sm:text-4xl mb-6 sm:mb-10'>Tips & Tools to help you out-trade the Competition</h1>
      <h3 className='font-bold text-purple-950 text-base sm:text-lg mb-6 sm:mb-8'>Sign up for my Insider Newsletter and receive:</h3>
      <div className="font-roboto space-y-4 sm:space-y-6 flex flex-col">
  <h2 className="text-xl sm:text-2xl font-bold text-purple-950">Exclusive Trading Resources & Perks</h2>
  
  {["GoCharting Templates", "YouTube Course Updates", "Trade Journal (Excel & Google Sheets)", "Exclusive Member Discounts", "More Premium Tools & Features"].map((title, index) => (
    <div key={index} className="flex items-start gap-3 sm:gap-4">
      <FaArrowAltCircleRight className="text-lg sm:text-xl text-green-500" />
      <p className="text-purple-900 text-sm sm:text-base"><strong>{title}</strong> – Relevant description here.</p>
    </div>
  ))}
</div>
    </div>
    <div className="w-full mt-14 md:mt-2 md:w-5/12 space-y-6 sm:space-y-10 shadow-2xl bg-gray-100 border-4 border-gray-300 rounded-lg p-4 sm:p-8">  
  <h1 className="text-3xl sm:text-4xl font-bold text-purple-950 text-center md:text-left">Join the <span className="text-purple-700">MT Insider Membership</span> Today!</h1>
  
  <h3 className="text-purple-950 text-center md:text-left font-bold text-base sm:text-lg">
    Get exclusive trading insights, market updates, and premium resources!
  </h3>

  <p className="font-roboto text-purple-900 text-sm sm:text-base text-center md:text-left">
    Unsubscribe anytime. We value your privacy and will <strong>NEVER</strong> share your information.
  </p>

  <p className="font-roboto text-purple-900 text-sm sm:text-base text-center md:text-left">
    Learn more in our <a href="/Disclaimer" className="font-bold underline hover:scale-105 transition-all duration-300 ease-in-out">Disclaimer</a>.
  </p>

  <div className="flex justify-center md:justify-start mt-8 sm:mt-10">
    <a href="https://forms.visme.co/formsPlayer/90de6qzm-momentrade-newsletter-subscription" target="_blank">
      <button className="btn bg-purple-700 px-4 sm:px-6 py-2 sm:py-3 text-white font-bold rounded-lg hover:bg-purple-800 hover:text-white transition-all duration-300 ease-in-out">
         Join Now for Free!
      </button>
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
