import React, { useContext } from 'react';
import logo from '../assets/logo.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    const { user,logOut} = useContext(AuthContext);
  
  return (
               < div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
                    <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/'>Home</NavLink>
                    </li>
   
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/explore'>Explore Gardeners</NavLink>
                    </li>
                    <li>
                    <NavLink className={({isActive})=>isActive? 'text-indigo-500' : ''}  to='/'>Browse Tips</NavLink>
                    </li>
                    
                    {user && (
                       <ul className='flex'>
                            <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/"> Share a Garden Tip </NavLink></li>
                            <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/"> My Tips </NavLink></li>
                        
                         </ul>
                  
                    )}
                </ul>
          
    </div>
            <img className='h-[48px] w-[48px]' src={logo} alt="" />
            <h1 className="text-green-500 text-xl">GreenJoy</h1>
        </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/'>Home</NavLink>
                        </li>
    
                        <li>
                
                        <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/explore'>Explore Gardeners</NavLink>
                
                        </li>
                        <li>
                        <NavLink className={({isActive})=>isActive? 'text-green-500' : ''}  to='/browsetips'>Browse Tips</NavLink>
                        </li>
                       
                        {user && (
                        
                         <ul className='flex'>
                            <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/auth/sharetips"> Share a Garden Tip </NavLink></li>
                            <li><NavLink className={({isActive})=>isActive? 'text-green-500' : ''} to="/auth/mytips"> My Tips </NavLink></li>
                        
                         </ul>
                        )}
                </ul>
            </div>

     
      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <>
            <Link to="/login" className="btn bg-green-600  hover:bg-green-700 text-white">Login</Link>
          
          </>
        ) : (
          <div className="relative group">
            {/* User Photo */}
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {/* Display Name Tooltip */}
            <div className="absolute top-full right-3 mt-2 hidden group-hover:flex flex-col items-start bg-gray-800 text-white text-sm py-2 px-3 rounded shadow-lg z-10">
              <span>{user.displayName || user.email || "Anonymous"}</span>
              <button
                onClick={logOut}
                className="btn btn-error mt-2 w-full text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default Navbar;