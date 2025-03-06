import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Disclamer() {
  return (
    <>
    <Nav/>
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-full md:w-5/12 space-y-8 mb-20 mt-32'>
            <h1 className='text-4xl font-bold text-purple-950 ml-1'>Disclaimer</h1>
            <div className='font-roboto space-y-6'>
          <div className='flex items-center gap-3'>
    
            <p className='text-purple-900'><span className='font-semibold text-purple-950'>Risk Disclosure</span> – Trading in financial markets involves significant risk and may not be suitable for all investors. The value of securities, derivatives, and other financial instruments can fluctuate, and past performance does not guarantee future results. There is a possibility of losing part or all of your invested capital, and you should only trade with funds you can afford to lose. You are solely responsible for any trading decisions you make.</p>
          </div>
          <div className='flex items-center gap-3'>
           
            <p className='text-purple-900'><span className='font-semibold  text-purple-950'>Educational Purpose Only</span>  – Momentrade provides educational content and training programs designed to enhance traders’ knowledge and understanding of financial markets. We do not offer investment advice, stock recommendations, or any form of financial advisory services. All content, including but not limited to courses, webinars, articles, and videos, is for educational purposes only.</p>
          </div>
          <div className='flex items-center gap-3'>
   
            <p className='text-purple-900'><span className='font-semibold  text-purple-950'>No Stock Tips or Investment Recommendations</span>  – FAs per the Securities and Exchange Board of India (SEBI) guidelines, Momentrade does not provide stock tips, buy/sell recommendations, or portfolio management services. Any examples, case studies, or trade discussions are purely illustrative and should not be construed as financial advice. We strongly encourage traders to conduct their own research and consult with a qualified financial advisor before making any investment decisions.
     mastery</p>
          </div>
          <div className='flex items-center gap-3'>
            
            <p className='text-purple-900'><span className='font-semibold  text-purple-950'> No Liability</span> – Momentrade, its founders, instructors, and affiliates shall not be held responsible for any trading losses, financial losses, or any other damages incurred as a result of using our educational materials. You acknowledge that trading is inherently risky, and you assume full responsibility for your actions.
     mastery</p>
          </div>
          <div className='flex items-center gap-3'>
            
            <p className='text-purple-900'><span className='font-semibold  text-purple-950'>Regulatory Compliance</span> – LMomentrade operates in compliance with SEBI regulations and does not engage in unauthorized trading activities, financial advisory services, or portfolio management. We do not solicit or guarantee returns on investments.</p>
          </div>
          <div className='flex items-center gap-3'>
         
            <p className='text-purple-900'><span className='font-semibold  text-purple-950'>No Refund Policy</span>  –All purchases of our courses, mentorship programs, and other educational services are final. Due to the nature of digital content and educational materials, we do not offer refunds, cancellations, or transfers. By enrolling in our programs, you acknowledge and agree to this policy.</p>
          </div>
          <div className='flex items-center gap-3'>
         
            <p className='text-purple-900'><span className='font-semibold  text-purple-950'>By accessing and using our content, you agree to this disclaimer and acknowledge the risks associated with trading. If you do not agree with these terms, please refrain from using our educational services.</span> <br /> For any inquiries, you can contact us at <a href='mailto:momentrade.india@gmail.com ' className='font-bold text-lg underline'>momentrade.india@gmail.com</a>    </p>
          </div>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Disclamer
