import React from 'react';
import { FaFacebook,  FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from 'react-router';



const Footer = () => {
    return (
        <div>
    <footer className="bg-green-600 text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

    
        <div>
         
          <h2 className="text-2xl font-bold">GreenJoy</h2>
          <p className="text-sm mt-2">A platform for gardening enthusiasts to share tips, find local gardeners, ask plant care questions, post or join gardening events, and connect over shared interests like composting, hydroponics, balcony gardens, etc.
</p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-1">
               <li>
                <NavLink className=''>Terms And Conditions</NavLink>
                </li>
               <li>
                <NavLink className=''>Privacy Policy</NavLink>
                </li>
               <li>
                <NavLink className=''>FAQ</NavLink>
                </li>
               <li>
                <NavLink className=''>Contact</NavLink>
                </li>
           
          </ul>
        </div>


       
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl mb-3">
            <a href="https://www.facebook.com/"><FaFacebook className='hover:text-blue-700'  /></a>
            < a href=" https://x.com/"><FaXTwitter className='hover:text-black' />    </a>
            <a href="https://www.instagram.com/"><FaInstagram className='hover:text-purple-400' /></a>
            <a href="https://www.youtube.com/"><FaYoutube className='hover:text-red-600' /></a>
          </div>
          <p className="text-xs">Stay updated on new features.</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs ">
        © {new Date().getFullYear()} GreenJoy. All rights reserved.
      </div>
    </footer>
  






            
        </div>
    );
};

export default Footer;