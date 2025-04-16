import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftLongSvg } from '../utils/svgs';
import { PROJECTS } from '../utils/constants';

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

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-50 py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center text-white mb-8 hover:text-blue-200 transition-colors"
        >
          <ArrowLeftLongSvg />
          <span className="ml-2">Back to Projects</span>
        </button>

        <div className="flex flex-col-reverse lg:flex-row gap-12">
          {/* Left Side - Project Info */}
          <div className="w-full lg:w-3/5 mt-12 lg:mt-0">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-lg text-gray-700 mb-8">{project.description}</p>
              
              {/* Project details section */}
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Overview</h3>
                  <p className="text-gray-700">
                    This project showcases advanced skills in {project.category.toLowerCase()}. 
                    It was built with modern technologies and best practices in mind.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies && project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {project.features && project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Mobile Device with Image Carousel */}
          <div className="w-full lg:w-2/5 flex items-center justify-center">
            <div className="relative">
              {/* Mobile phone frame */}
              <div className="relative w-[320px] h-[650px] bg-gray-900 rounded-[45px] p-4 shadow-xl border-4 border-gray-800">
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
                  <div className="w-full h-full relative overflow-hidden">
                    {project.carouselImages && project.carouselImages.map((image, index) => (
                      <div 
                        key={image.id}
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                          index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                    
                    {/* Navigation arrows */}
                    <button 
                      onClick={() => {
                        prevImage();
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 5000);
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      &#10094;
                    </button>
                    <button 
                      onClick={() => {
                        nextImage();
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 5000);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                    >
                      &#10095;
                    </button>
                    
                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                      {project.carouselImages && project.carouselImages.map((_, index) => (
                        <button 
                          key={index} 
                          onClick={() => {
                            setCurrentImageIndex(index);
                            setIsPaused(true);
                            setTimeout(() => setIsPaused(false), 5000);
                          }}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-blue-600' : 'bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Home button */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-gray-700 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail; 