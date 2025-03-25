import React from 'react';

// Social Icon component from HomePage
const SocialIcon = ({ platform }) => {
  switch (platform) {
    case 'github':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      );
    default:
      return null;
  }
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
                Nikhil Kumar
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
                  {['services', 'projects', 'about', 'contact'].map((item) => (
                    <li key={item} className="hover:-translate-y-0.5 transition-transform duration-100">
                      <a 
                        href={`#${item}`} 
                        className="group flex items-center text-gray-300 hover:text-white transition-colors duration-150"
                      >
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-110 transition-transform duration-150"></span>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
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
                {[
                  { id: 'app-dev', name: 'App Development' },
                  { id: 'web-design', name: 'Web Design' },
                  { id: 'web-dev', name: 'Web Development' },
                  { id: 'ui-design', name: 'UI/UX Design' }
                ].map((service) => (
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
                by <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Nikhil Kumar</span>
              </p>
            </div>

            {/* Social Links with optimized hover effects */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex space-x-5">
                {[
                  { platform: 'linkedin', url: 'https://www.linkedin.com/in/nikhil-kumar-523978179/' },
                  { platform: 'github', url: 'https://github.com/nikkr008' },
                  { platform: 'twitter', url: 'https://twitter.com/nik102030' },
                  { platform: 'instagram', url: 'https://www.instagram.com/its_nik._/?hl=en' }
                ].map((social) => (
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
                      <SocialIcon platform={social.platform} />
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
                <svg className="relative w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;