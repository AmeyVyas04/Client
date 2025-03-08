import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Disclamer() {
  return (
    <>
    <Nav/>
    <div className='min-h-screen flex justify-center items-center'>
    <section className="w-full md:w-5/12 space-y-8 mb-20 mt-32">
      <h1 className="text-4xl font-bold text-purple-950 ml-1">Trading Disclaimer</h1>
      <div className="font-roboto space-y-6">
        
        {/* Risk Disclosure */}
        <div className="flex items-start gap-3">
          <p className="text-purple-900">
            <span className="font-semibold text-purple-950">Risk Disclosure</span> – Trading in financial markets involves significant risks and may not be suitable for all investors. The value of securities, derivatives, and other financial instruments can fluctuate, and past performance does not guarantee future results. You should trade only with funds you can afford to lose, as there is a possibility of losing part or all of your invested capital. You are solely responsible for your trading decisions.
          </p>
        </div>

        {/* Educational Purpose Only */}
        <div className="flex items-start gap-3">
          <p className="text-purple-900">
            <span className="font-semibold text-purple-950">Educational Purpose Only</span> – Momentrade provides educational content and training programs to enhance traders’ knowledge of financial markets. We do not offer investment advice, stock recommendations, or financial advisory services. All content, including courses, webinars, articles, and videos, is for <span className='font-semibold'>educational purposes only</span> .
          </p>
        </div>

        {/* No Stock Tips or Investment Recommendations */}
        <div className="flex items-start gap-3">
          <p className="text-purple-900">
            <span className="font-semibold text-purple-950">No Stock Tips or Investment Recommendations</span> – As per <span className='font-semibold'>SEBI guidelines</span> , Momentrade does not provide stock tips, buy/sell recommendations, or portfolio management services. Any examples, case studies, or trade discussions are purely for educational purposes and should not be considered financial advice. We encourage traders to conduct <span className='font-semibold'>their own research </span> and consult a <span className='font-semibold'>qualified financial advisor</span>  before making any investment decisions.
          </p>
        </div>

        {/* No Liability Clause */}
        <div className="flex items-start gap-3">
          <p className="text-purple-900">
            <span className="font-semibold text-purple-950">No Liability</span> – Momentrade, its founders, instructors, and affiliates are <span className='font-semibold'>not responsible</span>  for any trading losses, financial losses, or damages resulting from the use of our educational materials. Trading is inherently risky, and users assume full responsibility for their actions.
          </p>
        </div>

        {/* Regulatory Compliance */}
        <div className="flex items-start gap-3">
          <p className="text-purple-900">
            <span className="font-semibold text-purple-950">Regulatory Compliance</span> – Momentrade operates in compliance with <span className='font-semibold'>SEBI regulations</span>  and does not engage in unauthorized trading activities, financial advisory services, or portfolio management. We do not guarantee investment returns.
          </p>
        </div>

        {/* No Refund Policy */}
        <div className="flex items-start gap-3">
          <p className="text-purple-900">
            <span className="font-semibold text-purple-950">No Refund Policy</span> – All purchases of our <span className='font-semibold'>courses, mentorship programs, and educational services</span> are final. Due to the nature of digital content, we do not offer refunds, cancellations, or transfers. By enrolling in our programs, you acknowledge and agree to this policy.
          </p>
        </div>

        {/* Final Agreement & Contact */}
        <div className="flex items-start gap-3">
          <p className="text-purple-900">
            <span className="font-semibold text-purple-950">
              By accessing and using our content, you agree to this disclaimer and acknowledge the risks associated with trading. If you do not agree with these terms, please refrain from using our educational services.
            </span>
            <br /> For inquiries, contact us at{" "}
            <a
              href="mailto:momentrade.india@gmail.com"
              className="font-bold text-lg underline"
            >
              momentrade.india@gmail.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  


    </div>
    <Footer/>
    </>
  );
}

export default Disclamer
