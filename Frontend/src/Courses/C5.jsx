import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
          title: "Orderflow Intraday Mastery - Live Batch (Hindi)",
          subtitle: "Master the Hidden Forces Behind Market Movements",
          price: "12,499",
          originalPrice:1,
          discount: "Upto 30% Off",
          imageUrl: "/course1.jpeg",
          description: "Are you tired of using lagging indicators that fail to give you an edge? Do you want to understand the real-time intentions of institutional traders? Welcome to Order Flow Intraday Course—a structured program designed to transform your trading. Learn how institutional traders move the markets and develop a deep understanding of order flow, delta analysis, and execution strategies.",
          features: [
            "Market Dynamics: Track institutional traders and understand their impact on price movement",
            "Reading the Tape: Identify aggressive buyers, sellers, absorption, and hidden liquidity",
            "Delta & Volume Analysis: Spot imbalances and anticipate directional moves before they happen",
            "Proven Trading Strategies: Master high-probability setups for both trend-following and counter-trend trades",
            "Live Market Examples: Apply concepts in real-time using GoCharting",
            "Execution & Risk Management: Learn how to time your entries and exits with precision while managing risk effectively"
          ],
          targetAudience: [
            "Intraday traders looking for a real-time trading edge.",
            "Traders frustrated with lagging indicators and subjective patterns.",
            "Anyone who wants to master order flow and market liquidity.",
            "Forex, stock, crypto, and futures traders who want to trade with confidence."
          ],
          prerequisites: [
            "Basic understanding of market structure and candlestick patterns.",
            "A subscription to order flow charting software (GoCharting preferred)."
          ],
          details: {
            format: "Live classes via Google Meet",
            language: "Hindi",
            skillLevel: "Basic to Advanced",
            access: "1-year full access",
            sessions: "8 sessions saturday-Sunday 6:30 PM to 8:30 PM",
            recordedContent: "Available anytime on Web, Android, and iOS"
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
    // Implement enrollment logic here
    window.location.href = 'https://www.momentrade.com/courses/646617'; 
    // This could redirect to a checkout page or open a modal
  };
  
  
  const handleBuyNow = () => {
    // Implement buy now logic here
    window.location.href = 'https://www.momentrade.com/courses/646617'; 
    // This could redirect to a checkout page
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen pt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
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
          className="bg-purple-600 text-white px-4 py-2 rounded-md"
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
      {/* Fixed Nav position */}
      <Nav />
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      
      </div>
      
      {/* Added margin-top to prevent overlap */}
      <div className="bg-gradient-to-r from-purple-50 to-purple-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row mt-8 items-start lg:items-center min-h-[300px]">
            {/* Left Content (Text) */}
            <div className="w-full lg:w-3/5 pr-4 lg:pr-8 mt-4 lg:mt-0 pl-4 lg:pl-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {course.title}
              </h1>
              <p className="text-gray-700 mb-6">{course.subtitle}</p>

              <div className="flex flex-wrap items-center gap-y-3">
                <button 
                  onClick={handleEnroll}
                  className="bg-purple-600 text-white px-4 sm:px-6 py-2 rounded-md mr-4 mb-2 w-full sm:w-auto hover:bg-green-700 transition"
                >
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Right Content (Image) */}
            <div className="w-full lg:w-2/5 mr-4  flex justify-center">
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
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:bg-slate-900 dark:text-white">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-purple-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:bg-slate-900 dark:text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:bg-slate-900 dark:text-white">Who Is This Course For?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 dark:bg-slate-900 dark:text-white">
                {course.targetAudience && course.targetAudience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:bg-slate-900 dark:text-white">Why Order Flow Intraday Course?</h2>
              <p className="text-gray-700 mb-4 dark:bg-slate-900 dark:text-white">
                Most traders struggle because they rely on <strong>lagging indicators</strong> and <strong>subjective patterns</strong>. 
                This course teaches you how to trade using <strong>real-time market data</strong>. 
                You'll learn to see <strong>who is buying, who is selling, and where liquidity is hiding</strong>. 
                Trade with precision, not guesswork.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:bg-slate-900 dark:text-white">Prerequisites</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 dark:bg-slate-900 dark:text-white">
                {course.prerequisites && course.prerequisites.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:bg-slate-900 dark:text-white">Enrol Today & Gain the Edge in Trading</h2>
              <p className="text-gray-700 mb-4 dark:bg-slate-900 dark:text-white ">
                The markets reward those who see what others can't. Don't rely on outdated strategies. 
                Elevate your trading with Order Flow Intraday Course today.
              </p>
            </section>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">₹ {course.price}</span>
                    
                  </div>
                  {course.discount && (
                    <span className="text-orange-500 text-sm">{course.discount}</span>
                  )}
                </div>
                
                <button 
                  onClick={handleBuyNow}
                  className="w-full bg-purple-600 text-white py-2 rounded-md mb-3 hover:bg-green-700 transition"
                >
                  Buy Now
                </button>

                <div className="mb-6">
                  {course.details && Object.entries(course.details).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 gap-4 py-2 border-b">
                      <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</span>
                      <span className={`text-right ${key === 'skillLevel' ? 'text-green-600' : 'text-gray-800'}`}>{value}</span>
                    </div>
                  ))}
                </div>
              
                <a href="/disclaimer" className="text-blue-600 underline block text-center mb-6">
                  Disclaimer & Refund Policy
                </a>
              
                <div className="text-center text-sm text-gray-500 mb-4">
                  For Details About The Course
                </div>
              
                {course.contactNumber && (
                  <div className="flex items-center justify-center text-sm">
                    <Phone className="w-4 h-4 text-green-600 mr-2" />
                    <span>Call Us: {course.contactNumber}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default C5;
