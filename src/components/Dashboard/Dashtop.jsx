import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, NavLink, useNavigate } from 'react-router';

const Dashtop = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    setShowLogout(false);
    navigate('/');
  };

  return (
    <div className="navbar bg-green-50 sticky top-0 z-20 shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-green-500 font-semibold' : 'text-gray-800'
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Logo */}
        <img className="h-10 w-10 ml-2" src={logo} alt="GreenJoy Logo" />
        <h1 className="ml-2 text-green-500 text-xl font-bold">GreenJoy</h1>
      </div>

      {/* Navbar Center (Large Screen Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-green-500 font-semibold' : 'text-gray-800'
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <Link to="/login" className="btn bg-green-600 hover:bg-green-700 text-white">
            Login
          </Link>
        ) : (
          <div className="relative group" onClick={() => setShowLogout((prev) => !prev)}>
            <img
              src={user.photoURL || 'https://via.placeholder.com/40'}
              alt="User"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            {/* User info on hover */}
            <div className="absolute top-full right-3 mt-2 hidden group-hover:flex flex-col items-start bg-gray-800 text-white text-sm py-2 px-3 rounded shadow-lg z-10">
              <span>{user.displayName || user.email || 'Anonymous'}</span>
            </div>
            {/* Logout button */}
            {showLogout && (
              <button
                onClick={handleLogout}
                className="absolute top-full right-0 mt-2 bg-red-600 text-white px-4 py-1 rounded shadow z-20"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashtop;
