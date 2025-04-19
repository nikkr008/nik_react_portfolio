import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightLongSvg, SquareSvg, TriangleSvg, WaveSvg, PointsSvg, CircleSvg } from '../utils/svgs';
import { PROJECT_CATEGORIES, PROJECTS } from '../utils/constants';
import Footer from './Footer';

// Import project images
import klynkApp from '../imgages/portfolio/KlyncAppImg.png';
import moviesApp from '../imgages/portfolio/moviesApp.png';
import travelWebsite from '../imgages/portfolio/travelWebsite.png';
import bluetoothPrinter from '../imgages/portfolio/bluetoothPrinter.png';
import iotModule from '../imgages/portfolio/IotModule.jpg';

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Map of project images
  const projectImages = {
    'portfolio/KlyncAppImg.png': klynkApp,
    'portfolio/moviesApp.png': moviesApp,
    'portfolio/travelWebsite.png': travelWebsite,
    'portfolio/bluetoothPrinter.png': bluetoothPrinter,
    'portfolio/IotModule.jpg': iotModule
  };

  // Format projects to include the actual image objects
  const formattedProjects = PROJECTS.map(project => ({
    ...project,
    imageObj: projectImages[project.image]
  }));

  useEffect(() => {
    setIsLoaded(true);
    setFilteredProjects(formattedProjects);
    
    // Enable scrolling when component mounts
    document.body.style.overflow = 'auto';
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleCategoryClick = (category) => {
    if (category === activeCategory) return;
    setIsTransitioning(true);
    setActiveCategory(category);
    setTimeout(() => setIsTransitioning(false), 500);
    
    if (category === 'All') {
      setFilteredProjects(formattedProjects);
    } else {
      setFilteredProjects(formattedProjects.filter(project => 
        project.category.includes(category.toUpperCase() + ' DEVELOPMENT')
      ));
    }
  };

  const handleViewDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const floatingElements = [
    { type: 'div', className: 'absolute top-20 right-10 opacity-20 w-32 h-32 bg-blue-200 rounded-full blur-md', delay: 0 },
    { type: 'div', className: 'absolute bottom-40 left-20 opacity-20 w-48 h-48 bg-blue-100 rounded-full blur-md', delay: 0.2 },
    { type: 'svg', Component: SquareSvg, className: 'absolute left-1/4 top-10 h-10 w-10 opacity-20 text-gray-500 transform rotate-12', delay: 0.4 },
    { type: 'svg', Component: TriangleSvg, className: 'absolute right-1/4 bottom-20 h-12 w-12 opacity-20 text-gray-500 transform rotate-45', delay: 0.6, reverse: true },
    { type: 'svg', Component: WaveSvg, className: 'absolute left-20 top-1/2 h-8 w-8 opacity-20 text-gray-500', delay: 0.8, reverse: true },
    { type: 'svg', Component: CircleSvg, className: 'absolute right-20 top-1/3 h-10 w-10 opacity-20 text-gray-500', delay: 1.0 },
    { type: 'svg', Component: PointsSvg, className: 'absolute left-0 bottom-0 h-32 w-32 opacity-20 text-gray-500', delay: 1.2 },
    { type: 'div', className: 'absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-blue-200 opacity-20', delay: 1.4 },
  ];

  // Check if we're at the dedicated Projects page or in a section
  const isStandalonePage = location.pathname === '/projects';

  return (
    <>
      <div className="relative min-h-screen overflow-visible bg-gradient-to-b from-blue-600 to-blue-50">
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
            
            if (element.type === 'div') {
              return (
                <motion.div
                  key={index}
                  className={element.className}
                  animate={floatingAnimation}
                />
              );
            } else if (element.type === 'svg') {
              return (
                <motion.div
                  key={index}
                  className={element.className}
                  animate={floatingAnimation}
                >
                  <element.Component />
                </motion.div>
              );
            }
            return null;
          })}
        </div>

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

            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-16"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {PROJECT_CATEGORIES.map((category, index) => (
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
                      src={project.imageObj}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
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
                          onClick={() => handleViewDetails(project.id)}
                        >
                          View Details
                          <ArrowRightLongSvg />
                        </motion.button>
                      </div>
                    </div>
                  </div>
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
      
      {/* Add Footer when on standalone projects page */}
      {isStandalonePage && (
        <div className="mt-20">
          <Footer />
        </div>
      )}
    </>
  );
};

export default Projects;