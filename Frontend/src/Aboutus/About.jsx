import React from 'react'

function About() {
  return (
    <>
    <div className="flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly">
  
  {/* Text Section */}
  <div className="w-full md:w-1/2">
    <div className="space-y-6 mt-20 md:mt-32">
      
      {/* Heading */}
      <h1 className="font-bold text-4xl text-purple-900">About Momentrade</h1>
      
      {/* Content with Keyword-Rich Text */}
      <p className="p-4 font-roboto text-purple-900 leading-relaxed">
        <strong>Hi, I’m A. Rajkumar</strong>, the founder of <span className="font-bold text-purple-700">Momentrade</span>, a specialized <span className='font-semibold'>trading education institute</span> focused on 
        <span className="font-semibold"> Order Flow Analysis</span> and <span className="font-semibold">Market Profile Trading</span>.  
      </p>

      <p className="p-4 font-roboto text-purple-900 leading-relaxed">
        With a <span className='font-semibold'>B.Tech in Mechanical Engineering</span>  and an <span className='font-semibold'>MBA in Finance</span>, I spent <span className='font-semibold'>9 years in supply chain finance</span> at <span>Standard Chartered Bank (SCB)</span> and <span>HDFC Bank</span>.  
        My <span className='font-semibold'>analytical mindset</span> led me to discover <span className='font-semibold'>advanced trading techniques</span> , transforming how I trade.  
      </p>

      <p className="p-4 font-roboto text-purple-900 leading-relaxed">
        Since 2016, I have been actively trading, and in 2021, I unlocked the <span className='font-semibold'>true potential of Order Flow charts</span>  and <span>Market Profile Analysis</span>.  
        These tools allowed me to analyze market structure in <span className='font-semibold'>real-time</span>  and make <span className='font-semibold'>high-probability trading decisions</span> with confidence.  
        By December 2021, I became a <span className='font-semibold'>full-time trader</span>, specializing in <span className='font-semibold'>Index Option Selling</span> and <span className='font-semibold'>Swing Trading in Stock Futures</span>.  
      </p>

      <p className="p-4 font-roboto text-purple-900 leading-relaxed">
        At <span className='font-semibold'>Momentrade</span>, my mission is to help traders bridge the gap between <span className='font-semibold'>traditional methods</span> and<span className='font-semibold'>advanced trading strategies</span>,  
        providing them with <span className='font-semibold'>real-time market insights</span>  for <span className='font-semibold'>precision trading</span>.
      </p>

      {/* CTA for More Engagement */}
      <p className="p-4 font-roboto text-purple-900 leading-relaxed font-semibold">
      <span className='font-semibold'>Join me and unlock the secrets of professional trading!</span>  
      </p>

    </div>
  </div>

  {/* Image Section with SEO Optimization */}
  <div className="w-full md:w-5/12 md:mt-40 mr-10">
    <img 
      loading="lazy" 
      src="About Us.png" 
      alt="Momentrade Trading Education - About Us" 
      className="w-30 md:max-w-xl md:ml-20  rounded-lg "
    />
  </div>

</div>

    </>
  )
}

export default About
