import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const CourseDescriptionPage = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedSection, setExpandedSection] = useState(null);
  
  useEffect(() => {
    // Simulating API fetch - replace with your actual API endpoint
    const fetchCourseData = async () => {
      try {
        // Replace with your actual API call
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        
        // For demo purposes, using mock data
        const mockData = {
          title: "The Complete Histudy 2023: From Zero To Expert!",
          subtitle: "Master Python By Building 100 Projects In 100 Days. Learn Data Science, Automation, Build Websites, Games And Apps!",
          rating: 4.8,
          reviews: 214567,
          students: 615029,
          price: 75,
          originalPrice: 199,
          discount: "75% off",
          description: "Are You New To PHP Or Need a Refresher? Then This Course Will Help You Get All The Fundamentals Of Procedural PHP, Object Oriented PHP, MYSQLi And Ending The Course By Building A CMS System Similar To WordPress, Joomla Or Drupal. Knowing PHP Has Opened Up A Lot To Make Enough Money To Stay Home And Make Courses Like This One For Students All Over The World.",
          features: [
            "Access Advanced Content And Mobile-Specific Features",
            "Use The Jupiter Notebook Environment Available Powerfull Tools"
          ],
          curriculum: [
            { title: "Intro To Course And Histudy", duration: "2h 30min", expanded: false },
            { title: "Course Fundamentals", duration: "1h 30min", expanded: false },
            { title: "You Can Develop Skill And Setup", duration: "2h 20min", expanded: false },
            { title: "15 Things To Know About Education?", duration: "30min", expanded: false },
            { title: "Course Description", duration: "1h 20min", expanded: false }
          ],
          lessons: [
            { title: "Course Intro", duration: "10 min", lectures: 10 },
            { title: "Watch Before Start", duration: "5.7 min", lectures: 15 },
            { title: "Read Before Start", duration: "", lectures: 5 }
          ],
          details: {
            enrolled: 381,
            lectures: 51,
            skillLevel: "Basic",
            language: "English",
            certificate: "Yes"
          },
          instructor: {
            name: "B.M. Rafekul Islam",
            image: "/api/placeholder/100/100"
          },
          startDate: "4 May 2025",
          moneyBack: "30-Day Money Back Guarantee"
        };
        
        setCourse(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setLoading(false);
      }
    };
    
    fetchCourseData();
  }, []);
  
  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading course details...</div>;
  }
  
  if (!course) {
    return <div className="flex justify-center items-center h-screen">Course not found</div>;
  }

  return (
    <div className="bg-white justify-center">
      {/* Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto mb-4 sm:mb-0">
              <div className="text-green-600 font-bold flex items-center mb-4 sm:mb-0">
                <img src="/api/placeholder/25/25" alt="logo" className="mr-2" />
                <span className="text-lg">elearn</span>
              </div>b
              <div className="ml-0 sm:ml-8 mb-4 sm:mb-0">
                <span className="text-gray-700">Categories</span>
              </div>
              <div className="ml-0 sm:ml-4 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search for courses"
                  className="border rounded-md py-1 px-2 w-full sm:w-64 text-sm bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"                />
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
              <span className="text-gray-600 text-sm hidden sm:inline">Lorem ipsum</span>
              <span className="text-gray-600 text-sm hidden sm:inline">Lorem ipsum</span>
              <div className="text-yellow-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z"></path>
                </svg>
              </div>
              <button className="border border-green-600 text-green-600 px-3 py-1 rounded-md text-sm">SignUp</button>
              <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm">Button</button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center text-sm text-gray-500">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Course Details</span>
        </div>
      </div>
      
      {/* Hero Section - Improved responsiveness */}
      <div className="bg-gradient-to-r from-green-50 to-green-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-6 lg:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{course.title}</h1>
              <p className="text-gray-600 mb-6">{course.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-y-3">
                <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-md mr-4 mb-2 w-full sm:w-auto">Get Started</button>
                <div className="flex items-center flex-wrap">
                  <div className="flex items-center mr-4 mb-2">
                    <span className="mr-2 font-bold">{course.rating}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap">
                    <span className="text-gray-500 text-sm mr-4 mb-2">{course.reviews.toLocaleString()} Ratings</span>
                    <span className="text-gray-500 text-sm mb-2">{course.students.toLocaleString()} Students</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <img 
                src="/api/placeholder/400/250" 
                alt="Course preview" 
                className="rounded-lg shadow-lg w-full max-w-md h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Column - Course Details */}
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
              <p className="text-gray-700 mb-6">{course.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="text-blue-600 font-medium">Show More</button>
            </section>
            
            <section className="mb-8">
              <h2 className="text-xl font-bold mb-4">Course Content</h2>
              
              <div className="border rounded-md overflow-hidden">
                {course.curriculum.map((section, index) => (
                  <div key={index} className={`border-b ${index === course.curriculum.length - 1 ? 'border-b-0' : ''}`}>
                    <div 
                      className="p-4 flex justify-between items-center cursor-pointer bg-white hover:bg-gray-50"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="flex items-center">
                        <span className="text-gray-700 font-medium">{section.title}</span>
                        <span className="ml-2 text-xs text-green-600">by admin</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-500 text-sm mr-2">{section.duration}</span>
                        <svg 
                          className={`w-5 h-5 transform transition-transform ${expandedSection === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                    
                    {expandedSection === index && (
                      <div className="bg-gray-50 p-4">
                        {course.lessons.map((lesson, i) => (
                          <div key={i} className="py-2 flex justify-between items-center border-b last:border-b-0">
                            <div className="flex items-center">
                              {i === 2 ? (
                                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                              )}
                              <span>{lesson.title}</span>
                            </div>
                            <div className="text-sm text-gray-500">
                              {lesson.duration && <span className="mr-2">{lesson.duration}</span>}
                              <span className="text-green-500">{lesson.lectures} lectures</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
            
            <section>
              <h2 className="text-xl font-bold mb-4">Instructor</h2>
              <div className="flex items-center">
                <img 
                  src={course.instructor.image} 
                  alt={course.instructor.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <h3 className="text-lg font-medium">{course.instructor.name}</h3>
              </div>
            </section>
          </div>
          
          {/* Right Column - Pricing Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-bold">${course.price}</span>
                    <span className="ml-2 text-gray-500 line-through text-sm">${course.originalPrice}</span>
                  </div>
                  <span className="text-orange-500 text-sm">{course.discount}</span>
                </div>
                
                <button className="w-full bg-green-600 text-white py-2 rounded-md mb-3 hover:bg-green-700 transition">
                  Add To Cart
                </button>
                
                <button className="w-full border border-gray-300 py-2 rounded-md mb-6 hover:bg-gray-50 transition">
                  Buy Now
                </button>
                
                <div className="flex items-center justify-center mb-6 text-sm text-gray-600">
                  <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{course.moneyBack}</span>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Start Date</span>
                    <span className="text-green-600 font-medium">{course.startDate}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Enrolled</span>
                    <span className="text-gray-800">{course.details.enrolled}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Lectures</span>
                    <span className="text-gray-800">{course.details.lectures}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Skill Level</span>
                    <span className="text-green-600">{course.details.skillLevel}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Language</span>
                    <span className="text-gray-800">{course.details.language}</span>
                  </div>
                  
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Certificate</span>
                    <span className="text-gray-800">{course.details.certificate}</span>
                  </div>
                </div>
                
                <button className="text-blue-600 font-medium w-full text-center mb-6">
                  Show More
                </button>
                
                <div className="flex justify-center gap-3 mb-6">
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-blue-600 hover:bg-blue-50 transition">f</a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-blue-400 hover:bg-blue-50 transition">t</a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-red-600 hover:bg-red-50 transition">in</a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-red-600 hover:bg-red-50 transition">p</a>
                </div>
                
                <div className="text-center text-sm text-gray-500 mb-4">
                  For Details About The Course
                </div>
                
                <div className="flex items-center justify-center text-sm">
                  <Phone className="w-4 h-4 text-green-600 mr-2" />
                  <span>Call Us: +123783396141</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDescriptionPage;