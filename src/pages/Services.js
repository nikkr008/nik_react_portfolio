import React from 'react';
import { motion } from 'framer-motion';
import AppDev from '../imgages/design-icon.png';
import WebDev from '../imgages/code-icon.png';
import square from '../imgages/shapes/square.png';
import triangle from '../imgages/shapes/triangle.png';
import wave from '../imgages/shapes/wave.png';
import circle from '../imgages/shapes/circle.png';
import points1 from '../imgages/shapes/points1.png';
import halfCircle from '../imgages/shapes/half-circle.png';

const Services = () => {
  // Array of floating elements with their properties
  const floatingElements = [
    { type: 'div', className: 'absolute top-10 right-20 opacity-30 w-24 h-24 bg-purple-200 rounded-full blur-md', delay: 0 },
    { type: 'div', className: 'absolute bottom-40 left-10 opacity-30 w-32 h-32 bg-purple-100 rounded-full blur-md', delay: 0.2 },
    { type: 'img', src: square, className: 'absolute left-1/4 top-10 h-10 opacity-20 filter grayscale transform rotate-12', delay: 0.4 },
    { type: 'img', src: triangle, className: 'absolute right-1/4 bottom-20 h-12 opacity-20 filter grayscale transform rotate-45', delay: 0.6, reverse: true },
    { type: 'img', src: wave, className: 'absolute left-20 top-1/2 h-8 opacity-20 filter grayscale', delay: 0.8, reverse: true },
    { type: 'img', src: circle, className: 'absolute right-20 top-1/3 h-10 opacity-20 filter grayscale', delay: 1.0 },
    { type: 'img', src: points1, className: 'absolute left-0 bottom-0 h-32 opacity-20 filter grayscale', delay: 1.2 },
    { type: 'img', src: halfCircle, className: 'absolute right-0 bottom-1/4 h-16 opacity-20 filter grayscale', delay: 1.4, reverse: true },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-purple-50 overflow-hidden">
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
              className={element.className}
              animate={floatingAnimation}
              alt="Shape element"
            />
          );
        })}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="mb-16 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-lg text-purple-600 font-semibold uppercase tracking-wider mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            What I Do
          </motion.h2>
          <motion.h1 
            className="text-4xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Professional Services
          </motion.h1>
          <motion.div 
            className="h-1 w-20 bg-purple-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          <motion.p 
            className="text-gray-600 leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I am skilled in utilising all facets of App Development and Web Development.
            <br />
            With expertise in React-Native and React.js, I create cross-platform solutions 
            that deliver exceptional user experiences.
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center md:items-stretch">
          {/* App Development Card */}
          <motion.div 
            className="bg-white shadow-xl rounded-lg overflow-hidden w-80 md:w-96 flex flex-col border border-purple-50"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)" }}
          >
            <div className="bg-purple-50 p-8 flex justify-center items-center">
              <img src={AppDev} alt="App Development Icon" className="h-28" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">App Development</h3>
              <p className="text-gray-600 text-base mb-8 flex-grow">
                With excellence in React-Native, I provide cross-platform applications with immense UI experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React-Native', 'Redux', 'Rest-API', 'JavaScript', 'TypeScript', 'Java', 'Debugging'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300 font-medium flex items-center justify-center">
                <span>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Web Development Card */}
          <motion.div 
            className="bg-white shadow-xl rounded-lg overflow-hidden w-80 md:w-96 flex flex-col border border-purple-50"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)" }}
          >
            <div className="bg-purple-50 p-8 flex justify-center items-center">
              <img src={WebDev} alt="Web Development Icon" className="h-28" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Web Development</h3>
              <p className="text-gray-600 text-base mb-8 flex-grow">
                With excellence in React.js, I provide Single Page Applications with immense UI experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React.js', 'Redux', 'Rest-API', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Bootstrap'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300 font-medium flex items-center justify-center">
                <span>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
