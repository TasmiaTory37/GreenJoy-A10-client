import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/logo.png'; 
import { Link, NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">


        <div className="flex flex-col items-center md:items-start max-w-xs">
          <img src={logo} alt="GreenJoy Logo" className="h-[48px] w-[48px] bg-white" />
          <h1 className="text-2xl font-semibold text-white mt-2">GreenJoy</h1>
          <p className="text-white mt-3">
            Nurturing green spaces and creating beautiful gardens for everyone.
          </p>
        </div>


      <div className="grid place-items-center text-center max-w-xs h-full">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-white">

       <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block mb-2 text-green-300 font-semibold"
                : "block mb-2 text-white hover:text-green-300"
            }
          >
           About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block mb-2 text-green-300 font-semibold"
                : "block mb-2 text-white hover:text-green-300"
            }
          >
           Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "block mb-2 text-green-300 font-semibold"
                : "block mb-2 text-white hover:text-green-300"
            }
          >
           Explore Gardeners
          </NavLink>
        </li>

          </ul>
        
        </div>
      </div>


        <div className="flex flex-col items-center md:items-start max-w-xs">
          <h3 className="text-lg font-semibold text-white mb-4">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-6 text-xl mb-3">
            <Link to='https://www.facebook.com/' className="hover:text-blue-600">
              <FaFacebook />
            </Link>
            <Link to='https://www.instagram.com/' className="hover:text-purple-600">
              <FaInstagram />
            </Link>
           
            <Link to='https://www.youtube.com/' className="hover:text-red-600">
              <FaYoutube />
            </Link>
            <Link to='https://www.linkedin.com/' className="hover:text-blue-700">
              <FaLinkedin />
            </Link>
          </div>
          <p className="text-xs text-white">
            Follow us on social media to stay updated on gardening tips and offers.
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-white mt-10">
        © {new Date().getFullYear()} GreenJoy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
