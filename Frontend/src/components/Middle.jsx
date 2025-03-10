import React from 'react'



function Middle() {
  return (
   <>
   <div className='flex max-w-screen-3xl container mx-auto flex-col md:flex-row justify-between px-8'>
    <div className='w-full md:w-1/2 mt-8 mb-10 flex justify-center'>
        <img src="Why Us Image.png" alt="Middle" className='w-full md:max-w-3xl' />
    </div>
    <section className='w-full md:w-5/12 space-y-8 mb-20 md:mt-32 mr-20'>
  <h2 className='text-5xl font-bold text-purple-950 ml-1'>What Makes Us Different</h2>

  <div className='font-roboto space-y-6'>
    {[
      {
        title: "Real Market Experience",
        text: "We don't just teach theory; our strategies are tested and proven in live markets.",
      },
      {
        title: "Order Flow & Market Depth Focus",
        text: "Unlike traditional courses, we emphasize advanced concepts like order flow and volume profile for precision trading.",
      },
      {
        title: "Structured Learning Path",
        text: "From beginner to advanced levels, our courses are designed to ensure step-by-step mastery.",
      },
      {
        title: "Multi-Platform Access",
        text: "Learn anytime, anywhere with access on Android, iOS, and web platforms.",
      },
      {
        title: "Actionable Strategies",
        text: "Our trading strategies are built on logic, market psychology, and real-time data—not just indicators.",
      }
    ].map((item, index) => (
      <div key={index} className='flex items-start gap-3'>
        <img
          loading="lazy"
          alt='Checkmark icon indicating feature'
          className="w-10 flex-shrink-0"
          src='/Tick.png'
        />
        <p className='text-purple-900 text-xl m-2'>
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

export default Middle
