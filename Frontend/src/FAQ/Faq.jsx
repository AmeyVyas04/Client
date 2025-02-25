import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Faq() {
  return (
   <>
   <Nav/>
   <div className='flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col md:flex-row justify-evenly'>
    <div className='w-full md:w-1/2 '>
    <div className='space-y-6 mt-20  md:mt-32'>
    <h1 className='font-bold text-4xl hover:scale-105 transition-all duration-300 ease-in-out'>FAQs</h1>
   <ul className=''>
      <li><strong>What is Momentrade?</strong><br/>
      Momentrade is a professional training institute dedicated to teaching Order Flow Analysis and Market Profile chart reading. We aim to help traders decode market dynamics and master strategies for consistent success.</li>
      
      <li><strong>Who is the mentor at Momentrade?</strong><br/>
      The mentor is A. Rajkumar, a full-time trader and educator specializing in index option selling and swing trading in stock futures, with extensive experience in using Order Flow charts and Market Profile since 2021.</li>
      
      <li><strong>Who can join Momen trade's programs?</strong><br/>
      Our programs cater to traders of all levels, from beginners to advanced. However, a basic understanding of financial markets and candlestick charts is recommended.</li>
      
      <li><strong>What will I learn at Momentrade?</strong><br/>
      You will learn how to utilize advanced tools like Order Flow charts and Market Profile to analyse market structure, identify high-probability setups, and execute trades confidently.</li>
      
      <li><strong>Are live market sessions included in all courses?</strong><br/>
      No, live market sessions are available only for students enrolled in mentorship programs. These sessions are conducted once every week, depending on the mentor's availability, and provide real-time learning and query resolution.</li>
      
      <li><strong>What markets are covered in the training?</strong><br/>
      Our training covers a wide range of markets, including index futures, stocks, forex, and cryptocurrencies.</li>
      
      <li><strong>Do I need any specific tools or software?</strong><br/>
      Yes, you will need an order flow chart subscription, and we recommend using Go Charting for its comprehensive features.</li>
      
      <li><strong>Is there a refund policy for the courses?</strong><br/>
      No, there is no refund policy for any of the courses offered by Momentrade.</li>
      
      <li><strong>What are the courses offered at Momentrade?</strong><br/>
      We offer a range of courses to suit different learning needs:
      <ul className='list-disc pl-6 mt-2'>
        <li>Order Flow Mastery (Recorded Course): A self-paced course covering all aspects of order flow and market dynamics with 1-year access.</li>
        <li>Order Flow Mastery Pro (Live Online Group Classes): Group batches for real-time learning, including mentorship benefits.</li>
        <li>Order Flow Mentorship: A one-on-one mentorship program focusing on handholding, personalized doubt clearing, and advanced strategies.</li>
        <li>Market Profile Mentorship: A mentorship program dedicated to mastering Market Profile chart reading and trading strategies.</li>
        <li>Option Selling Mentorship: A specialized mentorship for traders focusing on option selling techniques.</li>
      </ul>
      All mentorship programs include access to a mentorship group, one-to-one doubt clearing, and weekly live market sessions.</li>
      
      <li><strong>How can I clarify my doubts during the course?</strong><br/>
      Students in mentorship programs can access the mentorship group for discussions and direct support from the mentor. Recorded course students can reach out via the provided contact channels for assistance.</li>
      
      <li><strong>Is there any prerequisite for joining the courses?</strong><br/>
      Yes, you should have basic knowledge of financial markets and candlestick charts before enrolling.</li>
      
      <li><strong>How can I enroll in a course?</strong><br/>
      You can enroll directly through our website. For any queries, feel free to contact us via email or phone.</li>
      
      <li><strong>Can I access the courses on multiple devices?</strong><br/>
      Yes, all courses are accessible on Android, iOS, and web platforms, making it easy to learn from anywhere.</li>
   </ul>
   
    </div>
    </div>
    <div className=' w-full md:w-5/12 transform scale-95 transition-all duration-300 ease-in-out hover:opacity-100 hover:scale-100 mt-32 mb-56'>
    <img src="faq1.jpg" alt="" className='w-30  md:max-w-xl md:ml-20 mt-20' />
    <br /><br /> <br /><br /> <br /><br /><br /><br />
    <img src="faq2.jpg" alt="" className='w-30  md:max-w-xl md:ml-20 mt-20' />
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default Faq
