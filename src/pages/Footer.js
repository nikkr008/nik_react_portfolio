import React from 'react';
import { Linkedin, Github, Twitter, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* About Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">About</h2>
            <p className="mb-4">Hello, I'm Nikhil Kumar, Mobile App and Frontend Web developer.</p>
            <p>Scroll down to explore more about me.</p>
          </div>

          {/* Links Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Links</h2>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">Services</h2>
            <ul className="space-y-2">
              <li><a href="#app-dev" className="hover:text-white transition-colors">App Dev</a></li>
              <li><a href="#web-design" className="hover:text-white transition-colors">Web Design</a></li>
              <li><a href="#web-dev" className="hover:text-white transition-colors">Web Dev</a></li>
              <li><a href="#ui-design" className="hover:text-white transition-colors">UI Design</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          {/* Copyright */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>
              Copyright©2024 All rights reserved | Made by Nikhil Kumar
            </p>
          </div>

          {/* Social Links and Scroll Top */}
          <div className="flex items-center space-x-6">
            <span className="hidden md:inline">Follow me</span>
            <div className="h-px w-8 bg-gray-400 hidden md:inline-block"></div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/nikhil-kumar-523978179/" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/nikkr008" className="hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/nik102030" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/its_nik._/?hl=en" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            <button 
              onClick={scrollToTop}
              className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors"
            >
              <ArrowUp size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;