import React from 'react';
import logo from '../assets/logo.jpg'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='text-green-400'>Home</li>
          
        <li className='text-green-400'>Explore Gardeners </li>
      </ul>
    </div>
    <img className='h-[48px] w-[48px]' src={logo} alt="" />
    <h1 className="text-green-500 text-xl">GreenJoy</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className='text-green-400'>Home</li>
      <li>
       
      </li>
      <li className='text-green-400'>Explore Gardeners </li>
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <button className="btn bg-green-400 text-white">Login</button>
    
  </div>
</div>
            
        </div>
    );
};

export default Navbar;