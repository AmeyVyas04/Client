import React from 'react'

import { TiTick } from 'react-icons/ti'

function MarketProfile() {
  return (
    <>
    <div className='flex max-w-screen-3xl container mx-auto flex-col md:flex-row justify-between px-8'>
    <div className='w-full md:w-1/2 mt-8 mb-10 flex justify-center'>
        <img loading="lazy" alt='Marketprofile' src="Marketprofile.png"  className='w-full md:max-w-3xl' />
    </div>
    <section className='w-full md:w-5/12 space-y-8 mb-20 md:mt-32 mr-20'>
  <h1 className='text-5xl font-bold text-purple-950 ml-1'>What Are Market Profile Charts?</h1>
  <div className='font-roboto space-y-6'>
    {[
      {
        title: "Understand Market Behavior",
        text: "Market Profile helps you decode price movements based on trader activity, not just candlesticks.",
      },
      {
        title: "Spot High-Probability Trades",
        text: "Identify key support, resistance, and imbalance areas to gain a strategic trading edge.",
      },
      {
        title: "Adaptable to All Markets",
        text: "Whether you trade stocks, futures, forex, or crypto, Market Profile provides universal insights.",
      },
      {
        title: "Enhanced Risk Management",
        text: "Understand value areas and volume nodes to place stops and targets more effectively.",
      },
      {
        title: "Combines Price, Volume & Time",
        text: "Unlike pure price-action strategies, it integrates three key market dimensions for better trade decisions.",
      }
    ].map((item, index) => (
      <div key={index} className='flex items-start gap-3'>
        <img 
          loading="lazy" 
          alt={`${item.title} - Market Profile Trading`}
          className="w-10 flex-shrink-0"
          src='/Tick.png'
        />
        <p className='text-purple-900 text-xl'>
          <span className='font-semibold text-purple-950'>{item.title}</span> – {item.text}
        </p>
      </div>
    ))}
  </div>
</section>

   </div>
    </>
  )
}

export default MarketProfile
