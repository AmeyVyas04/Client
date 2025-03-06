import React from 'react'

import { TiTick } from 'react-icons/ti'

function MarketProfile() {
  return (
    <>
    <div className='flex max-w-screen-3xl container mx-auto flex-col md:flex-row justify-between px-8'>
    <div className='w-full md:w-1/2 mt-8 mb-10 flex justify-center'>
        <img src="Marketprofile.png" alt="" className='w-full md:max-w-3xl' />
    </div>
    <div className='w-full md:w-5/12 space-y-8 mb-20 md:mt-32 mr-20'>
        <h1 className='text-4xl font-bold text-purple-950 ml-1'>About Market Profile Charts</h1>
        <div className='font-roboto space-y-6'>
      <div className='flex items-center gap-3'>
        <TiTick className='text-green-500 text-4xl w-10' />
        <p className='text-purple-900 text-lg'><span className='font-semibold text-purple-950'> Understand Market Behavior</span> – Market Profile helps you
 decode price movements based on trader activity, not
 just candlesticks</p>
      </div>
      <div className='flex items-center gap-3'>
        <TiTick className='text-green-500 text-5xl w-11' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'>Spot High-Probability Trades</span>   – Market Profile highlights
 areas of support, resistance, and imbalance, giving
 traders a strategic edge</p>
      </div>
      <div className='flex items-center gap-3'>
        <TiTick className='text-green-500 text-5xl w-10' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'>Adaptable to All Markets</span>  – Whether you trade stocks,
 futures, forex, or crypto, Market Profile works across all
 asset classes</p>
      </div>
      <div className='flex items-center gap-3'>
        <TiTick className='text-green-500 text-4xl w-11' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'> Enhanced Risk Management</span>  – By understanding value
 areas and volume nodes, you can place stops and targets
 more effectively</p>
      </div>
      <div className='flex items-center gap-3'>
        <TiTick className='text-green-500 text-5xl ' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'>Combines Price, Volume & Time</span>   – Unlike price-action
only strategies, it integrates three key market dimensions
 for better trade decisions</p>
      </div>
      <div className='flex items-center gap-3'>
        <TiTick className='text-green-500 text-5xl ' />
        <p className='text-purple-900 text-lg'><span className='font-semibold  text-purple-950'>Combines Price, Volume & Time</span>  – Unlike price-action
only strategies, it integrates three key market dimensions
 for better trade decisions</p>
      </div>
    </div>
    </div>
   </div>
    </>
  )
}

export default MarketProfile
