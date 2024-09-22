import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 w-full z-10">
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">MyWebsite</div>

        {/* Hamburger Icon (Visible on mobile) */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-3xl focus:outline-none">
            &#9776; {/* This is the hamburger icon (☰) */}
          </button>
        </div>

        {/* Links (Hidden on mobile, shown on larger screens) */}
        <ul className="hidden md:flex space-x-4">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#services" className="hover:text-gray-400">Services</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu (Visible when hamburger is clicked) */}
      {isOpen && (
        <ul className="md:hidden bg-gray-700 text-center space-y-4 py-4">
          <li><a href="#home" onClick={toggleMenu} className="hover:text-gray-400">Home</a></li>
          <li><a href="#services" onClick={toggleMenu} className="hover:text-gray-400">Services</a></li>
          <li><a href="#projects" onClick={toggleMenu} className="hover:text-gray-400">Projects</a></li>
          <li><a href="#about" onClick={toggleMenu} className="hover:text-gray-400">About</a></li>
          <li><a href="#contact" onClick={toggleMenu} className="hover:text-gray-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
