import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {projectsData} from '../../src/utils/Data';
import square from '../imgages/shapes/square.png';
import triangle from '../imgages/shapes/triangle.png';
import wave from '../imgages/shapes/wave.png';
import points from '../imgages/shapes/points1.png';
import circle from '../imgages/shapes/circle.png';

const Projects = () => {
  const categories = ['ALL', 'WEB DEVELOPMENT', 'APP DEVELOPMENT', 'DIGITAL ECOSYSTEM'];
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleCategoryClick = (category) => {
    if (category === activeCategory) return;
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const filteredProjects = projectsData.filter(project =>
    activeCategory === 'ALL' || project.category === activeCategory
  );

  // Array of floating elements with their properties
  const floatingElements = [
    { type: 'div', className: 'absolute top-20 right-10 opacity-20 w-32 h-32 bg-blue-200 rounded-full blur-md', delay: 0 },
    { type: 'div', className: 'absolute bottom-40 left-20 opacity-20 w-48 h-48 bg-blue-100 rounded-full blur-md', delay: 0.2 },
    { type: 'img', src: square, className: 'absolute left-1/4 top-10 h-10 opacity-20 filter grayscale transform rotate-12', delay: 0.4 },
    { type: 'img', src: triangle, className: 'absolute right-1/4 bottom-20 h-12 opacity-20 filter grayscale transform rotate-45', delay: 0.6, reverse: true },
    { type: 'img', src: wave, className: 'absolute left-20 top-1/2 h-8 opacity-20 filter grayscale', delay: 0.8, reverse: true },
    { type: 'img', src: circle, className: 'absolute right-20 top-1/3 h-10 opacity-20 filter grayscale', delay: 1.0 },
    { type: 'img', src: points, className: 'absolute left-0 bottom-0 h-32 opacity-20 filter grayscale', delay: 1.2 },
    { type: 'div', className: 'absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-blue-200 opacity-20', delay: 1.4 },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-600 to-blue-50">
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

      {/* Content */}
      <motion.div 
        className="relative w-full p-8 pt-16 md:pt-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block mb-2 px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
              MY PORTFOLIO
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-bold mt-2">Creative Projects</h2>
            <p className="text-blue-100 mt-4 max-w-lg mx-auto">
              Explore my latest work across different domains and technologies
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 transform ${
                  activeCategory === category
                  ? 'bg-white text-blue-600 shadow-lg scale-105'
                  : 'bg-blue-700/30 text-white backdrop-blur-sm hover:bg-blue-700/50'
                }`}
                whileHover={{ scale: activeCategory === category ? 1.05 : 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10,
                  delay: 0.3 + (index * 0.1),
                  duration: 0.5
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-600/80 to-blue-500/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-blue-100 mb-4">{project.description}</p>
                      <span className="text-xs font-semibold px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm mb-4 inline-block">
                        {project.category}
                      </span>
                      <motion.button 
                        className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300 font-medium flex items-center mx-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
                {/* Card footer with title visible without hover */}
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;