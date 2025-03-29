import React from 'react';
import { GithubSvg, InstagramSvg, TwitterSvg, LinkedinSvg, ArrowUpSvg } from '../utils/svgs';
import { SOCIAL_LINKS, PERSONAL_INFO, FOOTER_LINKS, FOOTER_SERVICES } from '../utils/constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Social media links with their components
  const socialLinks = [
    { platform: 'linkedin', url: SOCIAL_LINKS.LINKEDIN, Icon: LinkedinSvg },
    { platform: 'github', url: SOCIAL_LINKS.GITHUB, Icon: GithubSvg },
    { platform: 'twitter', url: SOCIAL_LINKS.TWITTER, Icon: TwitterSvg },
    { platform: 'instagram', url: SOCIAL_LINKS.INSTAGRAM, Icon: InstagramSvg }
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden py-24">
      {/* Background gradient elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(138,58,185,0.2)_0%,rgba(0,0,0,0)_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(98,0,234,0.2)_0%,rgba(0,0,0,0)_50%)]"></div>
      
      {/* Simplified background shapes - reduced animation complexity */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-500/5 blur-3xl"></div>
      
      {/* Horizontal line with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Content - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* About Section - Spans 5 columns */}
          <div className="md:col-span-5 group">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-black/80 to-purple-950/20 p-8 border border-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(138,58,185,0.1)] transition-all duration-150 hover:shadow-[0_0_30px_rgba(138,58,185,0.2)]">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300 mb-6">
                {PERSONAL_INFO.NAME}
              </h2>
              <p className="text-lg text-gray-300 mb-4 relative">
                <span className="absolute -left-4 top-2 w-2 h-8 bg-purple-500 rounded-r-full opacity-60"></span>
                Mobile App and Frontend Web developer creating exceptional digital experiences.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Passionate about crafting beautiful, functional, and user-centric digital solutions that stand out.
              </p>
              
              {/* Simplified corner accent with faster transition */}
              <div className="absolute -bottom-1 -right-1 w-16 h-16 overflow-hidden">
                <div className="absolute inset-0 rotate-45 w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 translate-y-8 translate-x-8 group-hover:translate-y-6 group-hover:translate-x-6 transition-transform duration-150"></div>
              </div>
            </div>
          </div>

          {/* Quick Links - Spans 3 columns */}
          <div className="md:col-span-3">
            <div className="h-full flex flex-col justify-between p-8 rounded-2xl border border-white/5 backdrop-blur-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-150 shadow-lg">
              <div>
                <h3 className="text-xl font-bold mb-6 inline-flex items-center">
                  <span className="bg-purple-500 w-8 h-1 rounded-full mr-3"></span>
                  Quick Links
                </h3>
                <ul className="space-y-4">
                  {FOOTER_LINKS.map((item) => (
                    <li key={item.id} className="hover:-translate-y-0.5 transition-transform duration-100">
                      <a 
                        href={`#${item.id}`} 
                        className="group flex items-center text-gray-300 hover:text-white transition-colors duration-150"
                      >
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-110 transition-transform duration-150"></span>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 opacity-30 hover:opacity-80 transition-opacity duration-150">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90Z" stroke="url(#paint0_linear)" strokeWidth="0.5"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="10" y1="50" x2="90" y2="50" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A855F7"/>
                      <stop offset="1" stopColor="#6366F1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Services Section - Spans 4 columns */}
          <div className="md:col-span-4">
            <div className="h-full flex flex-col p-8 rounded-2xl border border-white/5 backdrop-blur-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-150 shadow-lg relative overflow-hidden">
              {/* Styled background vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
              
              <h3 className="text-xl font-bold mb-6 inline-flex items-center">
                <span className="bg-purple-500 w-8 h-1 rounded-full mr-3"></span>
                Services
              </h3>
              <ul className="space-y-4">
                {FOOTER_SERVICES.map((service) => (
                  <li key={service.id} className="hover:-translate-y-0.5 transition-transform duration-100">
                    <a 
                      href={`#${service.id}`} 
                      className="group flex items-center text-gray-300 hover:text-white transition-colors duration-150"
                    >
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-110 transition-transform duration-150"></span>
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - Split with special styling */}
        <div className="relative">
          {/* Divider with special styling */}
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          
          <div className="pt-12 flex flex-col md:flex-row items-center justify-between">
            {/* Copyright with glowing text */}
            <div className="mb-8 md:mb-0">
              <p className="text-sm text-gray-500">
                <span className="text-purple-400">&copy; {new Date().getFullYear()}</span> All rights reserved. Crafted with 
                <span className="inline-block mx-1 text-pink-500">❤</span> 
                by <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{PERSONAL_INFO.NAME}</span>
              </p>
            </div>

            {/* Social Links with optimized hover effects */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex space-x-5">
                {socialLinks.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url} 
                    className="relative group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Simplified glow effect with faster transition */}
                    <div className="absolute inset-0 bg-purple-600 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-150 -z-10"></div>
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-150 text-gray-400 hover:text-white">
                      <social.Icon />
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Simplified scroll to top button with faster transitions */}
              <button 
                onClick={scrollToTop}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-150"
                aria-label="Scroll to top"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 opacity-80 group-hover:opacity-100 transition-opacity duration-150"></div>
                <div className="absolute inset-0.5 rounded-full bg-black group-hover:bg-black/80 transition-colors duration-150"></div>
                <ArrowUpSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;