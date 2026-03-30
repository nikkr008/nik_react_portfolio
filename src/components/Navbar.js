import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../imgages/logo.png'
import { CV_URL, NAV_LINKS } from '../utils/constants';
import { useTheme } from '../utils/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cvUrl, status } = useSelector((state) => state.cv);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useTheme();

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
    <nav className="fixed top-5 w-11/12 z-50 left-0 right-0 mx-auto shadow-lg backdrop-blur-lg rounded-3xl" style={{ backgroundColor: 'var(--navbar-bg)', color: 'var(--text-color)' }}>
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
          {/* Dark/Light mode toggle button */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            style={{ color: 'var(--text-color)' }}
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            )}
          </button>
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
        <ul className="md:hidden backdrop-blur-lg z-50 max-h-screen overflow-y-auto" style={{ backgroundColor: 'var(--navbar-bg)', color: 'var(--text-color)' }}>
          {NAV_LINKS.map(link => (
            <li key={link.name} className="py-2 text-center">
              {link.href === '/projects' ? (
                <Link 
                  to={link.href}
                  onClick={toggleMenu} 
                  className="hover:text-gray-400"
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
                  className="hover:text-gray-400 cursor-pointer"
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
          {/* Add dark mode toggle to mobile menu */}
          <li className="py-2 text-center">
            <button 
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              style={{ color: 'var(--text-color)' }}
            >
              {isDarkMode ? (
                <>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                  Dark Mode
                </>
              )}
            </button>
          </li>
          <li className="py-2 text-center">
            <a 
              href={resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${resumeButtonClass} inline-block mt-4 mb-4`}
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
