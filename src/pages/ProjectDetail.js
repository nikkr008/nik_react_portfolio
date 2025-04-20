import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftLongSvg } from '../utils/svgs';
import { PROJECTS } from '../utils/constants';
import Footer from './Footer';
import { useTheme } from '../utils/ThemeContext';

// Import image utilities from the central file
import { ProjectImages, ProjectImageMapping } from '../imgages';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const { isDarkMode } = useTheme();

  // Map project ID to project image collection key
  const projectIdToKey = {
    1: 'klyncApp',
    2: 'moviesApp',
    3: 'travelWebsite',
    4: 'bluetoothPrinter',
    5: 'iotModule'
  };

  useEffect(() => {
    // Find the project by ID
    const projectData = PROJECTS.find(p => p.id === parseInt(id));
    
    if (projectData) {
      const projectId = projectData.id;
      const projectKey = projectIdToKey[projectId];
      
      if (projectKey && ProjectImages[projectKey]) {
        const projectImagesCollection = ProjectImages[projectKey];
        
        // Create carousel images array from the collection
        const carouselImages = projectImagesCollection.all.map((img, index) => ({
          id: index,
          src: img,
          alt: `${projectData.title} View ${index}`
        }));
        
        // Add the image object to the project data
        setProject({
          ...projectData,
          imageObj: ProjectImageMapping[projectData.image],
          carouselImages
        });
        setIsLoaded(true);
      } else {
        console.error(`No images found for project with ID: ${projectId}`);
        navigate('/projects');
      }
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

  const getOverviewContent = (projectId) => {
    switch(projectId) {
      case 1:
        return (
          <>
            Welcome to Klynk: Enhance Your Kitchen Experience<br/><br/>
            
            Klynk is your comprehensive cooking and meal planning assistant, designed to support every aspect of your kitchen routine. Combining advanced guided cooking technology, smart control features, and a vast recipe discovery platform, Klynk tailors the entire cooking process to your food preferences and dietary needs. Whether you're a seasoned chef or just starting out, Klynk helps you create, cook, and share with ease.<br/><br/>
            
            - Guided Cooking: Step-by-Step Excellence<br/><br/>
            
            Experience Klynk's core feature - guided cooking. Our app provides step-by-step cooking instructions that simplify complex recipes. With detailed guidance at every step, you can cook confidently and precisely, ensuring delicious results every time. This guided approach helps you learn new techniques and manage multitasking in the kitchen effortlessly.<br/><br/>
            
            - Smart Cooking Made Simple<br/><br/>
            
            Our smart cooking system integrates seamlessly with your kitchen, providing precision control and the ability to scale recipes to suit any number of servings. Adjust recipes based on your calorie tracking goals and food preferences, ensuring that each meal meets your dietary needs.<br/><br/>
            
            - Discover Recipes That Inspire<br/><br/>
            
            Explore Klynk's extensive recipe database. From global cuisines to local favorites, filter recipes by ingredients, dietary restrictions, preparation time, and more. Discover new culinary horizons and expand your palate daily.<br/><br/>
            
            - Efficient Meal Planning<br/><br/>
            
            With our intuitive meal planner, organizing your weekly meals is easier than ever. Use Klynk to plan your meals by the day or week, automatically generating a grocery list that ensures you never miss an ingredient. The grocery list categorizes items by store sections, saving you time and effort during shopping trips.
          </>
        );
      case 2:
        return (
          <>
            I've developed a cutting-edge Movies Suggestion App using React Native, for an immersive movie-suggestion experience.<br/><br/>
            
            • Leveraging React Native, I've ensured seamless compatibility across iOS and Android platforms, reaching a wider audience.<br/><br/>
            
            • With state management using useContext, the app offers efficient data flow and integrates user preferences seamlessly. Ex: favourite page and user Profile data.<br/><br/>
            
            • I've prioritized usability and aesthetic appeal in the design, crafting a captivating UI to enhance user engagement. Like Windows Dimensions, KeyboardAvoidingView, etc<br/><br/>
            
            • By integrating TMDB APIs, the app provides personalized movie recommendations tailored to individual tastes.<br/><br/>
            
            • Thanks to React Native's built-in navigation libraries, exploring the app is effortless and intuitive.<br/><br/>
            
            • Users can customize their watchlist, save favorite movies, and personalize profiles, elevating the overall user experience.
          </>
        );
      case 3:
        return (
          <>
            Showing this world how capable I am.<br/><br/>
            
            Developed a responsive travel website, using HTML, CSS, JavaScript, and PHP. For the needs travel enthusiasts.<br/><br/>
            
            • Utilized HTML, CSS, and SCSS for modern, responsive design and seamless user experience. Implemented JavaScript for interactive features, enhancing user engagement and navigation.<br/><br/>
            
            • Integrated PHP for dynamic content, such as travel deals, user registration, and data management.<br/><br/>
            
            • Maintained and updated the website, ensuring accurate information and optimal performance.<br/><br/>
            
            • Link: <a href="https://lnkd.in/gcxMHn6v" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://lnkd.in/gcxMHn6v</a>
          </>
        );
      case 4:
        return (
          <>
            Showing my capabilities with "Bluetooth Thermal Printer"<br/><br/>
            
            Developed a React Native mobile app to seamlessly connect with Bluetooth Thermal Printers for receipt printing.<br/><br/>
            
            • Utilized Bluetooth Manager for efficient device management and state handling.<br/><br/>
            
            • Implemented intuitive UI for text input and printing initiation. Ensured cross-platform compatibility for iOS and Android.<br/><br/>
            
            • Designed user-friendly interfaces for easy interaction.<br/><br/>
            
            • Optimized performance for diverse devices.<br/><br/>
            
            • Code Link: <a href="https://lnkd.in/dkvdyUyh" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://lnkd.in/dkvdyUyh</a>
          </>
        );
      case 5:
        return (
          <>
            IoT module for multiple EVs charging platform - Digital Ecosystem<br/><br/>
            
            Constructed a charging ecosystem for a specific geo-mapping location.<br/><br/>
            
            The module can directly notify the user remotely about the available slots and the battery status.<br/><br/>
            
            A new algorithm is proposed that would calculate the priority of charge scheduling for a vehicle based on factors such as State of Charge, user priority.<br/><br/>
            
            Users can choose the stations from Grid-To-Vehicle (G2V), Building-To-Vehicle (B2V), and Vehicle-To-Vehicle (V2V) based on their needs.
          </>
        );
      default:
        return (
          <>
            This project showcases advanced skills in {project.category.toLowerCase()}. 
            It was built with modern technologies and best practices in mind.
          </>
        );
    }
  };

  return (
    <div className="min-h-screen py-20 overflow-hidden" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.button 
          onClick={() => navigate('/projects')}
          className="flex items-center mb-8 hover:text-blue-200 transition-all transform hover:translate-x-[-8px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ color: 'var(--text-color)' }}
        >
          <ArrowLeftLongSvg />
          <span className="ml-2 text-lg font-medium">Back to Projects</span>
        </motion.button>

        {/* Main container with project details (left) and image (right) */}
        <motion.div 
          className="flex flex-col lg:flex-row gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Side - Project Info */}
          <motion.div 
            className="w-full lg:w-3/5"
            variants={fadeInUp}
          >
            <div className={`rounded-3xl p-8 h-full ${isDarkMode 
              ? 'bg-gradient-to-br from-[#1a1a1a]/90 to-[#252525]/80 shadow-[0_10px_50px_rgba(0,0,0,0.3)] border border-white/10' 
              : 'bg-gradient-to-br from-gray-50 to-white/90 shadow-[0_10px_50px_rgba(0,0,0,0.1)] border border-gray-200/50'}`}
              style={{ backdropFilter: 'blur(12px)' }}
            >
              <motion.div 
                className="flex flex-wrap gap-3 mb-6"
                variants={fadeInUp}
              >
                <span className={`text-sm font-medium px-4 py-2 rounded-full backdrop-blur-sm ${isDarkMode
                  ? 'bg-blue-500/20 text-white border border-blue-500/30'
                  : 'bg-blue-100 text-blue-900 border border-blue-200'}`}
                >
                  {project.category}
                </span>
              </motion.div>
              
              <motion.h1 
                className={`text-3xl font-bold mb-4 leading-tight ${isDarkMode
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600'}`}
                variants={fadeInUp}
              >
                {project.title}
              </motion.h1>
              
              <motion.p 
                className={`text-xl mb-6 leading-relaxed ${isDarkMode
                  ? 'text-blue-50/90'
                  : 'text-gray-700'}`}
                variants={fadeInUp}
              >
                {project.description}
              </motion.p>
              
              <motion.div 
                className={`border-t pt-8 mt-8 ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}
                variants={fadeInUp}
              >
                <h2 className={`text-3xl font-bold mb-6 ${isDarkMode
                  ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100'
                  : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600'}`}
                >
                  Project Details
                </h2>
                
                <div className="space-y-6">                
                  <motion.div 
                    className={`rounded-2xl p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 ${isDarkMode
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-blue-50/40 border border-blue-100/50'}`}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies && project.technologies.map((tech, index) => (
                        <motion.span 
                          key={index} 
                          className={`text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur-sm ${isDarkMode
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                            : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 border border-blue-300/50'}`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                
                  <motion.div 
                    className={`rounded-2xl p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 ${isDarkMode
                      ? 'bg-white/5 border border-white/10'
                      : 'bg-blue-50/40 border border-blue-100/50'}`}
                    whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Key Features
                    </h3>
                    <ul className={`space-y-4 text-lg ${isDarkMode ? 'text-blue-50/90' : 'text-gray-700'}`}>
                      {project.features && project.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className={`mr-3 text-xl mt-0.5 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>•</span>
                          <span>{feature}</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-[500px] h-[500px] rounded-full opacity-70"></div>
            
            <div className="relative transform hover:scale-105 transition-transform duration-500 z-10">
              {/* Mobile phone frame */}
              <motion.div 
                className={`relative w-[320px] h-[650px] rounded-[45px] p-4 border-4 ${isDarkMode 
                  ? 'bg-gray-900 border-gray-800 shadow-[0_0_60px_rgba(59,130,246,0.4)]' 
                  : 'bg-gray-800 border-gray-700 shadow-[0_0_60px_rgba(59,130,246,0.3)]'}`}
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
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkMode
                        ? 'bg-black/40 text-white hover:bg-black/60'
                        : 'bg-black/30 text-white hover:bg-black/50'}`}
                      whileHover={{ scale: 1.1, backgroundColor: isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.6)" }}
                      whileTap={{ scale: 0.9 }}
                      style={{ backdropFilter: 'blur(4px)' }}
                    >
                      &#10094;
                    </motion.button>
                    <motion.button 
                      onClick={() => {
                        nextImage();
                        setIsPaused(true);
                        setTimeout(() => setIsPaused(false), 5000);
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDarkMode
                        ? 'bg-black/40 text-white hover:bg-black/60'
                        : 'bg-black/30 text-white hover:bg-black/50'}`}
                      whileHover={{ scale: 1.1, backgroundColor: isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.6)" }}
                      whileTap={{ scale: 0.9 }}
                      style={{ backdropFilter: 'blur(4px)' }}
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
                          index === currentImageIndex 
                            ? 'bg-blue-500 scale-125' 
                            : isDarkMode ? 'bg-white/50' : 'bg-black/40'
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
        
        {/* Overview Section - Moved below the main container */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className={`rounded-3xl p-10 relative overflow-hidden ${isDarkMode
              ? 'bg-gradient-to-br from-[#1a1a1a]/90 to-[#252525]/80 shadow-[0_10px_50px_rgba(0,0,0,0.3)] border border-white/10'
              : 'bg-gradient-to-br from-gray-50 to-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-200/50'}`}
            whileHover={{ boxShadow: isDarkMode ? "0 20px 80px rgba(0,0,0,0.3)" : "0 20px 60px rgba(0,0,0,0.15)" }}
            style={{ backdropFilter: 'blur(12px)' }}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <h2 className={`text-3xl font-bold mb-6 relative z-10 ${isDarkMode
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-purple-700'}`}
            >
              Project Overview
            </h2>
            
            <motion.div 
              className={`text-lg leading-relaxed relative z-10 ${isDarkMode ? 'text-blue-50/90' : 'text-gray-700'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {getOverviewContent(project.id)}
            </motion.div>
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