  import React from 'react';
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import Slider from "react-slick";

  function Freebook() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 cards at a time on desktop
        slidesToScroll: 1,
        autoplay: true, // Enables automatic sliding
        autoplaySpeed: 3000, // Time between slides in milliseconds (3 seconds)
        responsive: [
          {
            breakpoint: 1024, // Tablets and below
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768, // Mobile view
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      

      return (
          <>
              <div className="max-w-screen-2xl mx-auto px-4 py-12 mb-10">
                  <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 mb-12">
                      <h1 className="text-5xl font-bold text-purple-950 mb-10">Momentrade Success Stories</h1>
                      <h3 className="text-xl font-semibold text-purple-900">Discover what our students have to say about their learning experience and why they trust our platform</h3>
                  </div>
                  <div className="px-4">
                      <Slider {...settings}>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                    
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Sanjay Kumar Chakrabarti</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Excellent.....Raj Sir is always prompt to help even if being busy.Orderflow analysis is simply a magic. Weekly live classes are eye openers."</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                    
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Ayeesha</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"I am really happy and satisfied with this course. Mentor explains everything in simple way to understand the concepts clearly"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                    
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Prajwal O.R</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Best stock market coaching which I have gone through the process, Raj sir has so much patience.I an happy to be the part of Momentrade"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                      
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Onkar</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Its fully worth of money.Most IMP unlike others its not theoretical but very useful practical approach. Improve orderflow understanding"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                      
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Venu Kumar</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Very good course its very simple easy"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                      
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Durjoy</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Orderflow took me on an unbelievable journey of consistency in options buying. Cherry on the cake, Rajkumar sir is wounderful teacher"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                      
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Santosh karmath</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Excellent Program to understand market dynamics price action buyer seller psychology . Concepts are eye openers. Raj sir is a patient mentor"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                      
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Rohan Naikwad</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"This is one of the best course if you want to learn trading. Raj sir is really humble and clear all your doubts,Live sessions are boon"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                      
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Vis</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Simple strategy, not too many rules to clutter our mind to understand market. Very good teaching"</p>
                              </div>
                          </div>
                          <div className="px-4 mb-8">
                              <div className="bg-white rounded-lg shadow-lg p-6 h-48">
                                  <div className="flex items-center mb-4">
                                      
                                      <div>
                                          <h4 className="font-bold text-xl text-purple-950">Rajat Swami</h4>
                                          <p className="text-purple-900">Student</p>
                                      </div>
                                  </div>
                                  <p className="text-gray-700">"Only one word zabardast course, boost confidence to take trade, fewer and smaller SL. Apart from course sir is great human being and mentor"</p>
                              </div>
                          </div>
                      </Slider>
                  </div>
              </div>
          </>
      );
  }

  export default Freebook;
