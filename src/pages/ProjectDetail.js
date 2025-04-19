import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftLongSvg } from '../utils/svgs';
import { PROJECTS } from '../utils/constants';
import Footer from './Footer';

// Import project images
import klynkApp from '../imgages/portfolio/KlyncAppImg.png';
import moviesApp from '../imgages/portfolio/moviesApp.png';
import travelWebsite from '../imgages/portfolio/travelWebsite.png';
import bluetoothPrinter from '../imgages/portfolio/bluetoothPrinter.png';
import iotModule from '../imgages/portfolio/IotModule.jpg';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Map of project images
  const projectImages = {
    'portfolio/KlyncAppImg.png': klynkApp,
    'portfolio/moviesApp.png': moviesApp,
    'portfolio/travelWebsite.png': travelWebsite,
    'portfolio/bluetoothPrinter.png': bluetoothPrinter,
    'portfolio/IotModule.jpg': iotModule
  };

  // Dummy additional images (to be replaced later with real images)
  const dummyAdditionalImages = [
    { id: 1, src: bluetoothPrinter, alt: "Additional view 1" },
    { id: 2, src: moviesApp, alt: "Additional view 2" },
    { id: 3, src: travelWebsite, alt: "Additional view 3" },
  ];

  useEffect(() => {
    // Find the project by ID
    const projectData = PROJECTS.find(p => p.id === parseInt(id));
    
    if (projectData) {
      // Add the image object to the project data
      setProject({
        ...projectData,
        imageObj: projectImages[projectData.image],
        // Add carousel images (main image + dummy additional ones)
        carouselImages: [
          { id: 0, src: projectImages[projectData.image], alt: projectData.title },
          ...dummyAdditionalImages
        ]
      });
      setIsLoaded(true);
    } else {
      // If project not found, redirect to projects page
      navigate('/projects');
    }
  }, [id, navigate]);

  const nextImage = useCallback(() => {
    if (project) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === project.carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [project]);

  const prevImage = useCallback(() => {
    if (project) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? project.carouselImages.length - 1 : prevIndex - 1
      );
    }
  }, [project]);

  // Setup auto-scrolling
  useEffect(() => {
    if (project && !isPaused) {
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      
      // Start a new interval
      intervalRef.current = setInterval(() => {
        nextImage();
      }, 3000);
    }
    
    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [project, isPaused, nextImage]);

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-20 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.button 
          onClick={() => navigate('/projects')}
          className="flex items-center text-white mb-8 hover:text-blue-200 transition-all transform hover:translate-x-[-8px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeftLongSvg />
          <span className="ml-2 text-lg">Back to Projects</span>
        </motion.button>

        <motion.div 
          className="flex flex-col-reverse lg:flex-row gap-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Side - Project Info */}
          <motion.div 
            className="w-full lg:w-3/5 mt-12 lg:mt-0"
            variants={fadeInUp}
          >
            <div className="bg-[#1a1a1a]/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10">
              <motion.div 
                className="flex flex-wrap gap-3 mb-6"
                variants={fadeInUp}
              >
                <span className="bg-blue-500/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/30">
                  {project.category}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl font-bold text-white mb-4 leading-tight"
                variants={fadeInUp}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-50/90 mb-8 leading-relaxed"
                variants={fadeInUp}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className="border-t border-white/10 pt-8 mt-8"
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold text-white mb-8">Project Details</h2>
                
                <div className="space-y-12">
                  <motion.div 
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">Overview</h3>
                    <p className="text-blue-50/90 text-lg leading-relaxed">
                      This project showcases advanced skills in {project.category.toLowerCase()}. 
                      It was built with modern technologies and best practices in mind.
                    </p>
                  </motion.div>
                
                  <motion.div 
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies && project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className="bg-blue-500/20 text-white text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/30"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                
                  <motion.div 
                    className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-3 text-blue-50/90 text-lg">
                      {project.features && project.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="mr-3 text-blue-400">•</span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Side - Mobile Device with Image Carousel */}
          <motion.div 
            className="w-full lg:w-2/5 flex items-center justify-center relative"
            variants={fadeInUp}
          >
            {/* Gradient background for phone */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-3xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[500px] h-[500px] rounded-full"></div>
            
            <div className="relative transform hover:scale-105 transition-transform duration-500 z-10">
              {/* Mobile phone frame */}
              <motion.div 
                className="relative w-[320px] h-[650px] bg-gray-900 rounded-[45px] p-4 shadow-[0_0_40px_rgba(59,130,246,0.3)] border-4 border-gray-800"
                initial={{ rotateY: -20 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Screen bezel */}
                <div className="absolute top-0 left-0 right-0 h-10 flex justify-center items-start">
                  <div className="w-44 h-7 bg-black rounded-b-2xl"></div>
                </div>
                
                {/* Screen content area */}
                <div className="w-full h-full bg-white rounded-[36px] overflow-hidden relative"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Image carousel */}
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentImageIndex}
                      className="absolute inset-0"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img 
                        src={project.carouselImages[currentImageIndex].src} 
                        alt={project.carouselImages[currentImageIndex].alt} 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                    
                  {/* Navigation arrows - Fixed positioning */}
                  <div className="absolute inset-0 flex items-center justify-between px-2 z-20">
                    <motion.button 
                      onClick={() => {
                        prevImage();
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 5000);
                      }}
                      className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      &#10094;
                    </motion.button>
                    <motion.button 
                      onClick={() => {
                        nextImage();
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 5000);
                      }}
                      className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      &#10095;
                    </motion.button>
                  </div>
                    
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {project.carouselImages && project.carouselImages.map((_, index) => (
                      <motion.button 
                        key={index} 
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsPaused(true);
                          setTimeout(() => setIsPaused(false), 5000);
                        }}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-blue-500 scale-125' : 'bg-white/50'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Home button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-700 rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Add Footer with margin */}
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail; 