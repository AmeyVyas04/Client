import React, { useEffect, useState } from 'react';

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
    { name: 'Blogs', link: 'https://blog.momentrade.in/' },
    { name: 'Newsletter', link: '/Newsletter' },
    { name: 'Contact Us', link: 'https://forms.visme.co/formsPlayer/vdz3ozr3-momentrade-contact-form' },
    { name: 'About Us', link: '/Aboutus' },
    { name: 'Disclaimer', link: '/Disclaimer' }
  ];

  return (
    <nav 
      role="navigation"
      className={`fixed top-0 left-0 right-0 z-50 bg-white font-['DM_Sans']
        transition-all duration-300 ease-in-out ${sticky ? 'shadow-md' : ''}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        
        {/* Logo and Brand */}
        <div className="flex items-center space-x-1">
          <img 
            src='/FINAL LOGO.png' 
            alt="Moment Trade Logo" 
            className="w-6 sm:w-8 md:w-12 lg:w-16 h-auto"
            loading="lazy"
          />
          <h1 className="text-xs sm:text-sm md:text-base lg:text-3xl font-bold text-black">
            MOMEN<span className='text-red-500'>TRADE</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-6 xl:space-x-12 font-bold">
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
          <li>
            <a href='https://web.classplusapp.com/login?orgCode=kqbctf' target="_blank" rel="noopener noreferrer">
              <button 
                className="bg-purple-700 text-white text-xs xl:text-sm px-2 py-1 xl:px-6 xl:py-2 rounded-md 
                  hover:text-black hover:bg-slate-200 transition-colors"
                aria-label="Login to Moment Trade"
              >
                Login
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gray-800"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
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
  );
}

export default Nav;
