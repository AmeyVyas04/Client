import React from 'react'

import { TiTick } from 'react-icons/ti'

function OrderFlow() {
  return (
    <>
     <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-8 mt-40 md:mt-20'>
    <h1 className='font-bold text-4xl text-purple-950'>About Order Flow Charts</h1>
    
    <div className='font-roboto space-y-6'>
      <div className='flex items-center'>
        <TiTick className="text-4xl w-10 mr-2 text-green-500" />
        <p className='text-purple-900 text-lg'> <span className='font-semibold text-purple-950'>See Real Buyer & Seller Activity</span> – Order flow charts
 reveal actual market transactions, helping you
 understand who is in control</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-4xl mr-2 text-green-500" />
        <p className='text-purple-900 text-lg'><span className='font-semibold text-purple-950'>Spot Hidden Liquidity Zones</span>  – Find areas where large
 orders are sitting, allowing you to anticipate price
 reactions</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-5xl w-10 mr-2 text-green-500" />
        <p className='text-purple-900 text-lg'><span className='font-semibold text-purple-950'>Reduce Fake Breakouts</span>  – Order flow helps filter out false
 moves by analyzing volume absorption and aggressive
 executions</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-3xl mr-2 text-green-500 w-9" />
        <p className='text-purple-900 text-lg'><span className='font-semibold text-purple-950'>Enhance Trade Timing</span> – Get precise entry and exit
 signals by monitoring bid-ask imbalances and volume
 delta</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-6xl w-10 mr-2 text-green-500" />
        <p className='text-purple-900 text-lg'><span className='font-semibold text-purple-950'>Works Across All Markets</span> – Whether you trade stocks,
 futures, forex, or crypto, order flow provides valuable
 insights</p>
      </div>
      <div className='flex items-center'>
        <TiTick className="text-6xl w-10 mr-2 text-green-500" />
        <p className='text-purple-900 text-lg'><span className='font-semibold text-purple-950'> Gain an Edge Over Retail Traders</span> – Most retail traders
 rely on lagging indicators; order flow gives you a real-time
 edge</p>
      </div>
    </div>
    

    
    </div>
    </div>
    <div className='w-full md:w-5/12 mr-48'>
    <img src="Middle1.png" alt="" className='w-30 md:max-w-3xl md:ml-10 md:mr-8 mt-10' />
    </div>
   </div>
    </>
  )
}

export default OrderFlow
