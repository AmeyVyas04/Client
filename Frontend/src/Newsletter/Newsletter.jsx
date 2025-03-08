import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FaArrowAltCircleRight } from "react-icons/fa";;

function Newsletter() {
  return (
    
   <>
   <Nav/>
   <div className='min-h-screen flex items-center justify-center'>
   <div className='flex max-w-screen-2xl container mx-auto flex-col md:flex-row justify-evenly py-20'>
    <div className='w-full md:w-1/2  ml-10 '>
      <h1 className='font-bold text-purple-950 text-4xl mb-10'>Tips & Tools to help you out-trade the Competition</h1>
      <h3 className='font-bold text-purple-950 text-lg mb-8'>Sign up for my Insider Newsletter and receive:</h3>
      <div className="font-roboto space-y-6 flex flex-col">
  <h2 className="text-2xl font-bold text-purple-950">Exclusive Trading Resources & Perks</h2>
  
  <div className="flex items-start gap-4">
    <FaArrowAltCircleRight className="text-xl text-green-500" />
    <p className="text-purple-900"><strong>GoCharting Templates</strong> – Pre-built charting templates for seamless market analysis.</p>
  </div>

  <div className="flex items-start gap-4">
    <FaArrowAltCircleRight className="text-xl text-green-500" />
    <p className="text-purple-900"><strong>YouTube Course Updates</strong> – Stay ahead with the latest trading strategies & tutorials.</p>
  </div>

  <div className="flex items-start gap-4">
    <FaArrowAltCircleRight className="text-xl text-green-500" />
    <p className="text-purple-900"><strong>Trade Journal (Excel & Google Sheets)</strong> – Track, analyze, and improve your trading performance.</p>
  </div>

  <div className="flex items-start gap-4">
    <FaArrowAltCircleRight className="text-xl text-green-500" />
    <p className="text-purple-900"><strong>Exclusive Member Discounts</strong> – Get special offers on premium trading tools & courses.</p>
  </div>

  <div className="flex items-start gap-4">
    <FaArrowAltCircleRight className="text-xl text-green-500" />
    <p className="text-purple-900"><strong>More Premium Tools & Features</strong> – Constantly adding valuable resources for traders.</p>
  </div>
</div>


    </div>
    <div className="w-full md:w-5/12 space-y-8 shadow-2xl bg-gray-100 border-4 border-gray-300 rounded-lg p-6">
  
  {/* Heading with Relevant Keywords */}
  <h1 className="text-4xl font-bold text-purple-950 ml-10">Join the <span className="text-purple-700">MT Insider Membership</span> Today!</h1>
  
  {/* Subheading for Engagement */}
  <h3 className="text-purple-950 ml-10 font-bold text-lg">
    Get exclusive trading insights, market updates, and premium resources!
  </h3>

  {/* Privacy Assurance */}
  <p className="font-roboto text-purple-900 mt-8 ml-10">
    Unsubscribe anytime. We value your privacy and will <strong>NEVER</strong> share your information.
  </p>

  {/* Disclaimer Link for Transparency */}
  <p className="font-roboto text-purple-900 mt-8 ml-10">
    Learn more in our <a href="/Disclaimer" className="font-bold underline hover:scale-105 transition-all duration-300 ease-in-out">Disclaimer</a>.
  </p>

  {/* Call-to-Action Button */}
  <div className="flex justify-center mt-6">
    <a href="https://forms.visme.co/formsPlayer/90de6qzm-momentrade-newsletter-subscription" target="_blank">
      <button className="btn bg-purple-700 px-6 py-3 text-white font-bold rounded-lg hover:bg-purple-800 hover:text-white transition-all duration-300 ease-in-out">
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
