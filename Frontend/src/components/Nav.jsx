import React, { useEffect, useState } from 'react'

function Nav() {
  const[theam,settheam]=useState(localStorage.getItem("theam")?localStorage.getItem("theam"):"light")
  const element=document.documentElement
  useEffect(()=>{
    if(theam==="dark"){
      element.classList.add("dark")
      localStorage.setItem("theam","dark")
      document.body.classList.add("dark")
    }else{
      element.classList.remove("dark")
      localStorage.setItem("theam","light")
      document.body.classList.remove("dark")
    }
  },[theam])
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  const navitems=(<>
 
       <li><a href='/'>Home</a></li>
      <li>
          <a href='/Courses'>Cources</a>
      </li>
      <li><a>Order Flow</a></li>
      <li><a>Market Profile</a></li>
      <li><a>Newsletter</a></li>
      <li><a >Contact Us</a></li>
      <li><a href='/Aboutus'>About Us</a></li>
      <li><a>Disclaimer</a></li>
      <li className='lg:hidden'><a className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a></li>
  </>)
  return (
    <div className={`navbar bg-base-100  max-w-screen-2xl container mx-auto md:px-14 px-4 fixed z-50  dark:bg-slate-900 dark:text-white ${sticky?" dark:bg-slate-600 dark:text-white duration-100 transition-all ease-in-out shadow-lg":""} ` }>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-Open Sans">
       {navitems}
      </ul>
    </div>
    <img src='FINAL LOGO.png  'className='w-24'/>
    <h1 className=" text-lg  font-bold  font-DM Sans md:text-3xl hover:text-4xl duration-300 md:ml-4 cursor-pointer text-black-950">MOMEN<span className='text-red-500'>TRADE</span></h1>
  </div>
  <div className='navbar-end'>
  
  <div className="navbar-center hidden lg:flex sm:flex">
    <ul className="menu menu-horizontal px-1 font-bold text-80">
      {navitems}
    </ul>
  </div>
  <div className='hidden md:max-w-screen-xl'>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </div>
  <div>
    <a href='https://web.classplusapp.com/login?orgCode=kqbctf' target="_blank">
    <button className="hidden md:block bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mr-3">Login</button>
    </a>
  </div>
  
 
</div>
</div>
  )
}

export default Nav
