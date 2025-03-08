import React from 'react'

function Footer() {
  return (
    <div>
      
      <footer className="footer footer-center bg-gray-100 text-base-content rounded p-2 shadow-2xl border-t-2 dark:bg-slate-900 dark:text-white">
  {/* Navigation Links */}
  <nav>
    <ul className="grid grid-flow-col gap-4">
      <li><a className="link link-hover" href="/Aboutus">About Us</a></li>
      <li><a className="link link-hover" href="https://forms.visme.co/formsPlayer/vdz3ozr3-momentrade-contact-form" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
      <li><a className="link link-hover" href="/">Careers</a></li>
      <li><a className="link link-hover" href="/Faq">FAQs</a></li>
    </ul>
  </nav>

  {/* Social Media Links */}
  <nav>
    <ul className="grid grid-flow-col gap-4">
      <li>
        <a className="transform transition duration-300 hover:scale-125" href="https://www.twitter.com/traderinhoodie" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z"/>
          </svg>
        </a>
      </li>
      <li>
        <a className="transform transition duration-300 hover:scale-125" href="http://www.youtube.com/@Momentrade" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a className="transform transition duration-300 hover:scale-125" href="mailto:momentrade.india@gmail.com" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </li>
      <li>
        <a className="transform transition duration-300 hover:scale-125" href="https://www.instagram.com/momentrade" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-black">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>

  {/* Copyright Information */}
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Moment Trade</p>
  </aside>
</footer>

    </div>
  )
}

export default Footer
