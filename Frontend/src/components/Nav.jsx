import React, { useEffect, useState } from 'react'

function Nav() {
  // Sticky navigation state
  const [sticky, setSticky] = useState(false);

  // Scroll event listener for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Courses', link: '/Courses' },
    { name: 'Order Flow', link: '#' },
    { name: 'Market Profile', link: '#' },
    { name: 'Newsletter', link: '/Newsletter' },
    { name: 'Contact Us', link: 'https://forms.visme.co/formsPlayer/vdz3ozr3-momentrade-contact-form' },
    { name: 'About Us', link: '/Aboutus' },
    { name: 'Disclaimer', link: '/Disclaimer' }
  ];

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      bg-white 
      font-['DM_Sans']
      transition-all duration-300 ease-in-out
      ${sticky ? 'shadow-md' : ''}
    `}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1 flex justify-between items-center">
        {/* Logo and Brand - Normal on Mobile and Large Screens */}
        <div className="flex items-center space-x-1">
          <img 
            src='/FINAL LOGO.png' 
            alt="Logo" 
            className="w-6 sm:w-8 md:w-12 lg:w-16 h-auto"
          />
          <h1 className="text-xs sm:text-sm md:text-base lg:text-3xl font-bold text-black">
            MOMEN<span className='text-red-500'>TRADE</span>
          </h1>
        </div>

        {/* Desktop Navigation - Hidden on smaller screens */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
          <ul className="flex space-x-4 xl:space-x-6 font-bold">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.link} 
                  className="text-xs xl:text-sm text-gray-800 hover:text-red-500 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Login Button */}
          <div className="flex items-center">
            <a 
              href='https://web.classplusapp.com/login?orgCode=kqbctf' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="bg-purple-950 text-white text-xs xl:text-sm px-2 py-1 xl:px-6 xl:py-2 rounded-md hover:text-black hover:bg-slate-200 transition-colors">
                Login
              </button>
            </a>
          </div>
        </div>

        {/* Mid-Screen Centered Navigation - Visible only on md screens */}
        <div className="hidden md:block lg:hidden w-full absolute top-full left-0 mt-1">
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center space-x-6 mb-2">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.link} 
                  className="text-xs text-gray-800 hover:text-red-500 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <a 
              href='https://web.classplusapp.com/login?orgCode=kqbctf' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button class="btn bg-purple-950 ml-60 text-white hover:text-black">Login
                Login
              </button>
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-800"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 overflow-y-auto" 
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="absolute top-0 right-0 w-64 sm:w-72 h-full bg-white shadow-lg p-3 font-['DM_Sans']"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    className="block text-xs text-gray-800 hover:text-red-500 transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <button
                  onClick={() => window.open('https://web.classplusapp.com/login?orgCode=kqbctf', '_blank')}
                  className="w-full bg-purple-950 text-white text-xs px-3 py-1 rounded-md hover:text-black transition-colors"
                >
                  Login
                </button>
              </li>
              
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Nav
