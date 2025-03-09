import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Nav from '../components/Nav';

const C3 = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchCourseData = async () => {
      setLoading(true);
      try {
        const mockData = {
          id: 1,
          title: "Market Profile Trading Course (Hindi)",
          subtitle: "Master Market Structure & Auction Theory for Both Intraday & Positional Trading",
          price: "30,000",
          originalPrice: 199,
          discount: "75% off",
          imageUrl: "/3.png",
          description: "Do you struggle to understand why the market moves the way it does? Are you looking for a structured approach that works across both intraday and positional trading? Welcome to the Market Profile Trading Course—a complete guide to market structure, auction theory, and price-volume dynamics. This course will help you develop a data-driven approach to trading, allowing you to read the market like a professional.",
          features: [
            "Market Profile Basics: Understand key concepts like value areas, POC, balance vs. imbalance, and price acceptance vs. rejection",
            "Auction Market Theory: Learn how markets move through the process of price discovery and value formation",
            "Day Types & Trading Opportunities: Identify different day structures like trend days, rotational days, and failed auction setups",
            "Combining Market Profile with Volume & Order Flow: Gain deeper understanding of institutional activity and trade positioning",
            "Intraday & Positional Strategies: Learn high-probability setups suited for both short-term scalping and longer-term trades",
            "Execution & Risk Management: Improve trade entries, exits, and position sizing based on market-generated information"
          ],
          targetAudience: [
            "Traders who want to understand market movements beyond candlestick patterns and indicators",
            "Intraday traders looking for precise trade setups based on market structure",
            "Positional traders who want to analyse market auctions to plan swing trades",
            "Anyone seeking to master auction theory, value areas, and price acceptance dynamics"
          ],
          prerequisites: [
            "Basic understanding of market structure and candlestick patterns",
            "Access to a Market Profile charting tool (GoCharting preferred)"
          ],
          details: {
            format: "Pre-recorded Online Course",
            language: "Hindi",
            skillLevel: "Covers Basic to Advanced Concepts",
            strategies: "Intraday and Positional Strategies",
            access: "Watch at Your Own Pace",
            sessions: "Structured Learning Modules",
            recordedContent: "Available Anytime for Rewatching on Web / Android / iOS"
          },
          contactNumber: "+91 8080823091"
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
   
    // This could redirect to a checkout page or open a modal
  };
  
  const handleBuyNow = () => {
    
    // This could redirect to a checkout page
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen pt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#6a83ff]"></div>
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
          className="bg-[#6a83ff] text-white px-4 py-2 rounded-md"
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
      
      <div className="bg-gradient-to-r from-[#e8ecff] to-[#8396ff] py-8">
        <div className="container  mx-auto px-4">
          <div className="flex flex-col lg:flex-row mt-8 items-start lg:items-center min-h-[300px]">
            <div className="w-full lg:w-3/5 pr-4 lg:pr-8 mt-4 lg:mt-0 pl-4 lg:pl-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {course.title}
              </h1>
              <p className="text-gray-700 mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-y-3">
                <button 
                  onClick={handleEnroll}
                  className="bg-[#6a83ff] text-white px-4 sm:px-6 py-2 rounded-md mr-4 mb-2 w-full sm:w-auto hover:bg-[#5670e8] transition"
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

      <div className="container dark:bg-slate-900 dark:text-white mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#6a83ff] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h2 className="text-xl font-bold mb-4 text-gray-900">Why Learn Market Profile?</h2>
              <p className="text-gray-700 mb-4">
                Most traders focus only on <strong>price</strong>, missing out on the real story behind <strong>volume and value</strong>. 
                Market Profile helps you see where smart money is positioning, identify key trading opportunities, 
                and avoid bad trades. With this course, you'll move beyond <strong>guesswork</strong> and develop a 
                <strong> structured, professional approach</strong> to trading.
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
                The market rewards those who <strong>understand its structure</strong>. Take control of your trading decisions 
                with <strong>Market Profile Trading Course</strong>.
              </p>
              <div className="flex items-center text-sm text-[#6a83ff] mt-2">
               
               
              </div>
            </section>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">₹ {course.price}</span>
                 
                  </div>
                  
                </div>
                
                <button 
                  onClick={handleBuyNow}
                  className="w-full bg-[#6a83ff] text-white py-2 rounded-md mb-3 hover:bg-[#5670e8] transition"
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
              
                <a href="/disclaimer" className="text-[#6a83ff] underline block text-center mb-6">
                  Disclaimer & Refund Policy
                </a>
              
                <div className="text-center text-sm text-gray-500 mb-4">
                  For Details About The Course
                </div>
              
                <div className="flex items-center justify-center text-sm">
                  <Phone className="w-4 h-4 text-[#6a83ff] mr-2" />
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

export default C3;