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
      <li><a href='https://web.classplusapp.com/login?orgCode=kqbctf' target="_blank">Contact Us</a></li>
      <li><a href='/Aboutus'>About Us</a></li>
      <li><a>Disclaimer</a></li>
      <li className='lg:hidden'><a className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Login</a></li>
  </>)
  return (
    <div className={`navbar bg-base-100  max-w-screen-2xl container mx-auto md:px-14 px-4 fixed z-50  dark:bg-slate-900 dark:text-white ${sticky?" dark:bg-slate-600 dark:text-white duration-100 transition-all ease-in-out shadow-lg":""}` }>
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navitems}
      </ul>
    </div>
    <img src='FINAL LOGO.png  'className='w-24'/>
    <h1 className=" text-lg  font-bold  font-sans md:text-3xl hover:text-4xl duration-300 md:ml-4 cursor-pointer"> <span>Moment</span>Trade</h1>
  </div>
  <div className='navbar-end'>
  
  <div className="navbar-center hidden lg:flex sm:flex">
    <ul className="menu menu-horizontal px-1 font-semibold">
      {navitems}
    </ul>
  </div>
  <div className='hidden md:max-w-screen-xl'>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </div>
  <button className="hidden md:block bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer mr-3">Login</button>
  <label className="hidden md:swap swap-rotate mr-3">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-off h-9 w-9 fill-current ml-3"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>{
      settheam(theam==="light"?"dark":"light")
    }}>
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-on h-9 w-9 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={()=>{
      settheam(theam==="dark"?"light":"dark")
    }}>
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
</div>
</div>
  )
}

export default Nav
