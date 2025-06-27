import React, { useState, useContext } from 'react';
import { NavLink, Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import logo from '../assets/logo.png';  

const Navbar = ({ onToggle, theme }) => {
  const { user, logOut } = useContext(AuthContext);  
  const [showLogout, setShowLogout] = useState(false);  


  const handleLogout = async () => {
    await logOut(); 
    setShowLogout(false);
  };

  return (
    <div className="navbar bg-green-50 shadow-sm">
      <div className="navbar-start">
 
        <div className="dropdown">
          <button className="btn btn-ghost lg:hidden" tabIndex={0}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/explore">Explore Gardeners</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/browsetips">Browse Tips</NavLink>
            </li>
            {user && (
              <li>
                <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/auth/dashboard">Dashboard</NavLink>
              </li>
            )}
            <li>
              <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
         <img className='h-[48px] w-[48px]' src={logo} alt="" />
          <h1 className="text-green-500 text-xl">GreenJoy</h1>
      </div>
      


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/explore">Explore Gardeners</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/browsetips">Browse Tips</NavLink>
          </li>
          {user && (
            <li>
              <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/auth/dashboard">Dashboard</NavLink>
            </li>
          )}
          <li>
            <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) =>
  `${theme === 'dark' ? 'text-gray-800' : 'text-black'} ${isActive ? 'text-green-500 font-semibold' : ''}`
}
 to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>


      <div className="navbar-end flex items-center space-x-4">
 
        <label className="swap swap-rotate">
          <input type="checkbox" checked={theme === 'dark'} onChange={onToggle} />
     
          <FaSun className="swap-on bg-black h-5 w-5 fill-current" />
     
          <FaMoon className="swap-off h-5 w-5 fill-current" />
        </label>


        {!user ? (
          <Link to="/login" className="btn bg-green-600 hover:bg-green-700 text-white">Login</Link>
        ) : (
          <div className="relative group" onClick={() => setShowLogout((prev) => !prev)}>
            <img src={user.photoURL || "https://via.placeholder.com/40"} alt="User" className="w-10 h-10 rounded-full cursor-pointer" />
            {showLogout && (
              <button
                onClick={handleLogout}
                className="absolute top-full right-0 mt-2 bg-red-600 text-white px-4 py-1 rounded shadow z-20"
              >
                Logout
              </button>
            )}
            <div className="absolute top-full right-3 mt-2 hidden group-hover:flex flex-col items-start bg-gray-800 text-white text-sm py-2 px-3 rounded shadow-lg z-10">
              <span>{user.displayName || user.email || "Anonymous"}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
