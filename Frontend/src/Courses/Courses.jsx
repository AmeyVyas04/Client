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
        <title>Paid Stock Market Courses | MomenTrade</title>
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

        {/* Structured Data for SEO */}
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
      </Helmet>

      <Nav />
      
      {/* Page Container */}
      <div className="min-h-screen mt-14   md:mt-32 px-4 md:px-10 lg:px-16 bg-gray-50">
        {/* Heading */}
        

        {/* Course Cards Grid - Centered on Small Devices */}
        <div className="flex flex-wrap justify-center mr-4 md:gap-6">
          {freecourse.map((item) => (
            <div className="w-full sm:w-[300px] md:w-auto flex justify-center">
              <Cards item={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Courses;
