import React from 'react'

import { TiTick } from 'react-icons/ti'

function OrderFlow() {
  return (
    <>
     <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
     <section className='w-full md:w-1/2'>
  <div className='space-y-8 mt-40 md:mt-20'>
    <h1 className='font-bold text-5xl text-purple-950'>What Are Order Flow Charts?</h1>
    <div className='font-roboto space-y-6'>
      {[
        {
          title: "See Real Buyer & Seller Activity",
          text: "Order flow charts reveal actual market transactions, showing which side controls price movements.",
        },
        {
          title: "Spot Hidden Liquidity Zones",
          text: "Identify large pending orders to predict potential price reactions and market reversals.",
        },
        {
          title: "Reduce Fake Breakouts",
          text: "Analyze volume absorption and aggressive executions to filter out misleading market moves.",
        },
        {
          title: "Enhance Trade Timing",
          text: "Monitor bid-ask imbalances and volume delta for precise entry and exit points.",
        },
        {
          title: "Works Across All Markets",
          text: "Gain valuable insights whether trading stocks, futures, forex, or crypto.",
        },
        {
          title: "Gain an Edge Over Retail Traders",
          text: "Most traders rely on lagging indicators, but order flow offers a real-time trading advantage.",
        }
      ].map((item, index) => (
        <div key={index} className='flex items-start gap-3'>
          <img 
            loading="lazy" 
            alt={`${item.title} - Order Flow Trading`}
            className="w-10 flex-shrink-0"
            src='/Tick.png'
          />
          <p className='text-purple-900 text-xl mr-3'>
            <span className='font-semibold text-purple-950'>{item.title}</span> – {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    <div className='w-full md:w-5/12 mr-48'>
    <img loading="lazy" src="Middle1.png" alt="Orderflow" className='w-30 md:max-w-3xl md:ml-10 md:mr-8 mt-10' />
    </div>
   </div>
    </>
  )
}

export default OrderFlow
