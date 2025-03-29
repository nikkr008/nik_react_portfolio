import React, { useState } from 'react';
import logo from '../imgages/logo.png'
import { NAV_LINKS, CV_URL } from '../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-50 text-black fixed top-5 w-11/12 z-50 mx-12 shadow-lg backdrop-blur-lg bg-opacity-5 rounded-3xl">
      <div className="flex justify-between items-center p-4 w-full md:w-4/5 mx-auto">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="img" className="h-8 w-auto" />
        </div>

        {/* Hamburger Icon (Visible on mobile) */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-3xl focus:outline-none">
            &#9776; {/* Hamburger icon (☰) */}
          </button>
        </div>

        {/* Links + "Hire Me" Button (Hidden on mobile, shown on larger screens) */}
        <div className="hidden md:flex items-center space-x-8 font-semibold ml-auto ">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-gray-500"
            >
              {link.name}
            </a>
          ))}
          {/* "Hire Me" Button */}
          <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-500">
            Hire Me
          </a>
        </div>
      </div>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      {isOpen && (
        <ul className="md:hidden bg-slate-100 text-center space-y-4 h-screen py-4 backdrop-blur-lg bg-opacity-5 z-50">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={toggleMenu} 
                className="text-black hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
