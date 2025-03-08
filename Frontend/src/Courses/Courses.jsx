import React from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import list from "../Assistance/List.json";

function Courses() {
  const freecourse = list.filter((data) => data.catagory === 'Paid');

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title className='text-purple-950'>Paid Stock Market Courses | MomenTrade</title>
        <meta 
          name="description" 
          content="Explore our premium stock market courses designed for traders and investors. Learn technical analysis, risk management, and trading strategies." 
        />
        <meta 
          name="keywords" 
          content="Stock Market Courses, Paid Trading Courses, Investing, Technical Analysis, MomenTrade" 
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Paid Stock Market Courses | MomenTrade" />
        <meta property="og:description" content="Enroll in our expert-led stock market courses and enhance your trading skills." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://momentrade.in/courses" />
      </Helmet>

      <Nav />
      <br />

      <div className='min-h-screen mt-20 bg-white-300 px-6'>
        {/* Page Heading for SEO */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-6">
          Premium Stock Market Courses
        </h1>

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Paid Stock Market Courses",
            "description": "Expert-led stock market courses designed for traders and investors.",
            "provider": {
              "@type": "Organization",
              "name": "MomenTrade",
              "url": "https://momentrade.in"
            }
          })}
        </script>

        {/* Course Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {freecourse.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Courses;
