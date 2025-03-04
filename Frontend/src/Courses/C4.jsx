import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Nav from '../components/Nav';

const C5 = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCourseData = async () => {
      setLoading(true);
      try {
        const mockData = {
          id: 1,
          title: "Option Selling Mastery Course – Recorded (Hindi)",
          subtitle: "Learn the Art of Consistent Profits with Smart Option Selling",
          price: 75,
          originalPrice: 199,
          discount: "75% off",
          imageUrl: "/8.png",
          description: "Do you want to trade options like a professional and generate consistent returns? Are you tired of relying on high-risk option buying strategies that lead to frequent losses? Welcome to the Option Selling Mastery Course—a complete guide to positional and intraday option selling strategies. This course will help you build a rule-based trading approach that works in different market conditions, allowing you to profit from time decay, volatility shifts, and probability-based setups.",
          features: [
            "Core Principles of Option Selling: Understand why option sellers have a statistical edge over option buyers",
            "Market Structure & Trend Analysis: Learn how to identify the right market conditions for option selling",
            "Delta-Neutral & Directional Strategies: Master non-directional (range-bound) and directional option selling setups",
            "IV & Volatility-Based Strategies: Adjust your trades based on changes in implied volatility",
            "Risk Management & Adjustments: Learn how to hedge, roll, and adjust trades to minimize risk and protect capital",
            "Intraday & Positional Trading Setups: Get strategies designed for both short-term and swing trading"
          ],
          targetAudience: [
            "Traders who want to build a consistent income through option selling",
            "Intraday traders looking for high-probability setups using option selling",
            "Positional traders who want to leverage time decay for passive income",
            "Anyone looking to reduce risk and improve trade stability in options trading"
          ],
          prerequisites: [
            "Basic understanding of options (calls & puts)",
            "Access to an options trading platform with live data"
          ],
          details: {
            format: "Pre-recorded Online Course",
            language: "Hindi",
            skillLevel: "Covers Basic to Advanced Concepts",
            strategies: "Intraday and Positional Strategies, Directional and Non-Directional Strategies",
            access: "Watch at Your Own Pace",
            sessions: "Structured Learning Modules",
            recordedContent: "Available Anytime for Rewatching on Web / Android / iOS"
          },
          contactNumber: "+123783396141"
        };
        
        setCourse(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setError("Failed to load course data. Please try again later.");
        setLoading(false);
      }
    };
    
    fetchCourseData();
  }, []);
  
 
  const handleEnroll = () => {
    // Implement enrollment logic here
    console.log(`Enrolling in course: ${course?.id}`);
    // This could redirect to a checkout page or open a modal
  };
  
  const handleBuyNow = () => {
    // Implement buy now logic here
    console.log(`Buying course now: ${course?.id}`);
    // This could redirect to a checkout page
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen pt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
        <span className="ml-3">Loading course details...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen pt-16">
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Try Again
        </button>
      </div>
    );
  }
  
  if (!course) {
    return (
      <div className="flex justify-center items-center h-screen pt-16">
        <div className="text-gray-700">Course not found</div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Nav />
      
      <div className="bg-gradient-to-r from-red-50 to-red-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row mt-8 items-start lg:items-center min-h-[300px]">
            <div className="w-full lg:w-3/5 pr-4 lg:pr-8 mt-4 lg:mt-0 pl-4 lg:pl-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {course.title}
              </h1>
              <p className="text-gray-700 mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-y-3">
                <button 
                  onClick={handleEnroll}
                  className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-md mr-4 mb-2 w-full sm:w-auto hover:bg-red-600 transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>

            <div className="w-full lg:w-2/5 ml-4 flex justify-center">
              {course.imageUrl && (
                <img 
                  src={course.imageUrl} 
                  alt={`${course.title} Course Image`} 
                  className="rounded-lg shadow-lg h-auto max-w-full lg:max-h-64 object-cover" 
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Who Is This Course For?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {course.targetAudience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Why Learn Option Selling?</h2>
              <p className="text-gray-700 mb-4">
                Most retail traders focus on <strong>buying options</strong>, hoping for big moves. But smart traders understand that <strong>selling options gives them a higher probability of success</strong> due to time decay and statistical edges.
                This course will <strong>help you trade like an institution</strong>, focusing on <strong>probability, risk control, and stable returns</strong> rather than chasing quick profits.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Prerequisites</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                {course.prerequisites.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">Enrol Today & Start Trading Like a Professional</h2>
              <p className="text-gray-700 mb-4">
                The markets reward those who <strong>trade with an edge</strong>. Learn how to <strong>master option selling</strong> and build a <strong>consistent income stream</strong> with the <strong>Option Selling Mastery Course</strong>.
              </p>
              <div className="flex items-center text-sm text-red-500 mt-2">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l1.414 1.414a1 1 0 001.414-1.414L11 10.586V7z"/>
                </svg>
                <span>Discount offer available for limited period only!</span>
              </div>
            </section>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">${course.price}</span>
                    <span className="ml-2 text-gray-500 line-through text-sm">${course.originalPrice}</span>
                  </div>
                  <span className="text-red-500 text-sm">{course.discount}</span>
                </div>
                
                <button 
                  onClick={handleBuyNow}
                  className="w-full bg-red-500 text-white py-2 rounded-md mb-3 hover:bg-red-600 transition"
                >
                  Buy Now
                </button>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Course Details</h3>
                  {Object.entries(course.details).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b">
                      <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                      <span className="text-right text-gray-800">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              
                <a href="/disclaimer" className="text-red-500 underline block text-center mb-6">
                  Disclaimer & Refund Policy
                </a>
              
                <div className="text-center text-sm text-gray-500 mb-4">
                  For Details About The Course
                </div>
              
                <div className="flex items-center justify-center text-sm">
                  <Phone className="w-4 h-4 text-red-500 mr-2" />
                  <span>Call Us: {course.contactNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C5;