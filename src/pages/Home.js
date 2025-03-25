import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import person from '../imgages/person.png';
import square from '../imgages/shapes/square.png'
import triangle from '../imgages/shapes/triangle.png'
import wave from '../imgages/shapes/wave.png'
import points from '../imgages/shapes/points1.png'
import circle from '../imgages/shapes/circle.png'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Array of floating elements with their properties
  const floatingElements = [
    { type: 'div', className: 'absolute top-10 left-20 opacity-40 w-32 h-32 bg-purple-200 rounded-full blur-md', delay: 0 },
    { type: 'div', className: 'absolute top-1/2 left-1/3 opacity-30 transform -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full blur-md', delay: 0.2 },
    { type: 'div', className: 'absolute bottom-10 left-36 opacity-40 w-32 h-32 bg-purple-200 rounded-full blur-md', delay: 0.4 },
    { type: 'img', src: square, className: 'absolute left-1/4 bottom-10 h-12 opacity-30 filter grayscale transform rotate-12', delay: 0.6 },
    { type: 'img', src: triangle, className: 'absolute right-36 top-32 h-12 opacity-20 filter grayscale transform rotate-45', delay: 0.8, reverse: true },
    { type: 'img', src: wave, className: 'absolute left-1/4 top-1/4 h-8 opacity-20 filter grayscale', delay: 1.0, reverse: true },
    { type: 'img', src: wave, className: 'absolute left-1/3 bottom-1/4 h-8 opacity-20 filter grayscale', delay: 1.2 },
    { type: 'img', src: points, className: 'absolute left-0 bottom-0 h-48 opacity-30 filter grayscale', delay: 1.4 },
    { type: 'img', src: points, className: 'absolute right-0 bottom-0 h-48 opacity-30 filter grayscale', delay: 1.6, reverse: true },
    { type: 'img', src: circle, className: 'absolute left-1/2 top-1/4 h-16 opacity-20 filter grayscale', delay: 1.8 },
    { type: 'div', className: 'absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-4 border-purple-200 opacity-30', delay: 2.0 },
    { type: 'div', className: 'absolute top-1/3 right-1/3 w-16 h-16 rounded-md border-2 border-purple-300 opacity-20 transform rotate-45', delay: 2.2, reverse: true },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-purple-50 z-0">
      {/* Background Abstract Design */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {floatingElements.map((element, index) => {
          const floatingAnimation = {
            y: element.reverse ? [0, 15, 0] : [0, -15, 0],
            rotate: element.reverse ? [0, 5, 0] : [0, 0, 0],
            transition: {
              duration: element.reverse ? 7 : 6,
              ease: "easeInOut",
              repeat: Infinity,
              delay: element.delay
            }
          };
          
          return element.type === 'div' ? (
            <motion.div
              key={index}
              className={element.className}
              animate={floatingAnimation}
            />
          ) : (
            <motion.img
              key={index}
              src={element.src}
              alt=""
              className={element.className}
              animate={floatingAnimation}
            />
          );
        })}
      </div>

      {/* Content Section */}
      <motion.div 
        className="content-section relative w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 py-20 md:py-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Text Section */}
        <div className="w-full text-center md:text-left md:w-1/2 z-10">
          <div className="inline-block mb-2 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-gray-900 leading-tight">
            <span className="block">Nikhil Kumar</span>
          </h1>
          <h2 className="mt-2 text-2xl md:text-3xl text-purple-600 font-medium">
            Developer & Designer
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-lg">
            Hello, I'm Nikhil Kumar. I specialize in designing and developing immersive mobile apps & websites with a focus on user experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="https://drive.google.com/file/d/1QcOoFtHprvmfreXjZgHv8beC_zMqFn70/view?usp=drive_link"
              className="inline-flex items-center gap-2 bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download CV
            </motion.a>
            <motion.a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 py-3 px-8 rounded-full hover:bg-purple-50 transition-all"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Contact Me
            </motion.a>
          </div>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-6">
            {[
              { platform: 'github', url: 'https://github.com/nikkr008' },
              { platform: 'instagram', url: 'https://www.instagram.com/its_nik._/?hl=en' },
              { platform: 'twitter', url: 'https://twitter.com/nik102030' },
              { platform: 'linkedin', url: 'https://www.linkedin.com/in/nikhil-kumar-523978179/' }
            ].map(({ platform, url }) => (
              <motion.a 
                key={platform} 
                href={url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 transition-colors"
                whileHover={{ scale: 1.2, color: '#9333ea' }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <SocialIcon platform={platform} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[450px] md:h-screen overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50 md:hidden z-0"></div>
          <motion.img
            src={person}
            alt="Profile"
            className="object-contain w-full h-full"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
          />
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gray-500 text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </div>
  );
};

// Helper component for social icons
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

export default HomePage;
