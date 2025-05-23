import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10 px-4 md:px-16 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-5 text-center md:text-left">

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:info@gardenspace.com" className="underline">info@greenjoy.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: Garden Street, Green City</p>
        </div>

        {/* Terms */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Terms & Info</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        {/* Social Links */}
      <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl mb-3">
            <a href="https://www.facebook.com/"><FaFacebook className='hover:text-blue-500'  /></a>
            < a href=" https://x.com/"><FaXTwitter className='hover:text-black' />    </a>
            <a href="https://www.instagram.com/"><FaInstagram className='hover:text-purple-400' /></a>
            <a href="https://www.youtube.com/"><FaYoutube className='hover:text-red-500' /></a>
          </div>
          <p className="text-xs">Stay updated on new subscription offers and bundles.</p>
        </div>
      </div>




      <div className="text-center text-xs text-white mt-10">
        © {new Date().getFullYear()} GreenJoy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
