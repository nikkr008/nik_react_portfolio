import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../imgages/logo.png'
import { CV_URL, NAV_LINKS } from '../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cvUrl, status } = useSelector((state) => state.cv);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (href) => {
    if (isOpen) setIsOpen(false);
    
    if (href.startsWith('#')) {
      const sectionId = href.substring(1);
      
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollToId: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const renderNavLink = (link) => {
    if (link.href === '/projects') {
      return (
        <Link 
          key={link.name} 
          to={link.href}
          className="hover:text-gray-500"
        >
          {link.name}
        </Link>
      );
    }
    
    return (
      <a 
        key={link.name} 
        href={link.href}
        onClick={(e) => {
          e.preventDefault();
          handleNavigation(link.href);
        }}
        className="hover:text-gray-500 cursor-pointer"
      >
        {link.name}
      </a>
    );
  };

  const resumeButtonText = status === 'loading' ? 'Loading...' : 'Hire Me';
  const resumeUrl = cvUrl || CV_URL;
  const resumeButtonClass = `bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-500 ${!cvUrl && 'opacity-70 cursor-not-allowed'}`;

  return (
    <nav className="bg-slate-50 text-black fixed top-5 w-11/12 z-50 mx-12 shadow-lg backdrop-blur-lg bg-opacity-5 rounded-3xl">
      <div className="flex justify-between items-center p-4 w-full md:w-4/5 mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </Link>

        {/* Hamburger Menu Button */}
        <button 
          className="md:hidden text-3xl focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-semibold ml-auto">
          {NAV_LINKS.map(renderNavLink)}
          <a 
            href={resumeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={resumeButtonClass}
          >
            {resumeButtonText}
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-slate-100 text-center space-y-4 py-4 backdrop-blur-lg bg-opacity-5 z-50 max-h-screen overflow-y-auto">
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              {link.href === '/projects' ? (
                <Link 
                  to={link.href}
                  onClick={toggleMenu} 
                  className="text-black hover:text-gray-400"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.href);
                  }}
                  className="text-black hover:text-gray-400 cursor-pointer"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
          <li>
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${resumeButtonClass} inline-block mt-4`}
            >
              {resumeButtonText}
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
