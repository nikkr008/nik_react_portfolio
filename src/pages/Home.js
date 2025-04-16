import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCvUrl } from '../redux/cvSlice';
import person from '../imgages/person.png';
import { 
  GithubSvg, 
  InstagramSvg, 
  TwitterSvg, 
  LinkedinSvg, 
  DownloadSvg, 
  PhoneSvg, 
  ArrowDownSvg,
  SquareSvg,
  TriangleSvg,
  WaveSvg,
  PointsSvg,
  CircleSvg
} from '../utils/svgs';
import { SOCIAL_LINKS, CV_URL, PERSONAL_INFO } from '../utils/constants';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const { cvUrl, status } = useSelector((state) => state.cv);
  
  useEffect(() => {
    setIsLoaded(true);
    dispatch(fetchCvUrl());
  }, [dispatch]);
  
  useEffect(() => {
    if (status === 'failed') {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000); // Hide alert after 5 seconds
    }
  }, [status]);
  
  // Use the CV_URL as fallback if API fails
  const downloadUrl = status === 'succeeded' && cvUrl ? cvUrl : CV_URL;
  
  const floatingElements = [
    { type: 'div', className: 'absolute top-10 left-20 opacity-40 w-32 h-32 bg-purple-200 rounded-full blur-md', delay: 0 },
    { type: 'div', className: 'absolute top-1/2 left-1/3 opacity-30 transform -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full blur-md', delay: 0.2 },
    { type: 'div', className: 'absolute bottom-10 left-36 opacity-40 w-32 h-32 bg-purple-200 rounded-full blur-md', delay: 0.4 },
    { type: 'svg', Component: SquareSvg, className: 'absolute left-1/4 bottom-10 h-12 w-12 opacity-30 text-gray-500 transform rotate-12', delay: 0.6 },
    { type: 'svg', Component: TriangleSvg, className: 'absolute right-36 top-32 h-12 w-12 opacity-20 text-gray-500 transform rotate-45', delay: 0.8, reverse: true },
    { type: 'svg', Component: WaveSvg, className: 'absolute left-1/4 top-1/4 h-8 w-8 opacity-20 text-gray-500', delay: 1.0, reverse: true },
    { type: 'svg', Component: WaveSvg, className: 'absolute left-1/3 bottom-1/4 h-8 w-8 opacity-20 text-gray-500', delay: 1.2 },
    { type: 'svg', Component: PointsSvg, className: 'absolute left-0 bottom-0 h-48 w-48 opacity-30 text-gray-500', delay: 1.4 },
    { type: 'svg', Component: PointsSvg, className: 'absolute right-0 bottom-0 h-48 w-48 opacity-30 text-gray-500', delay: 1.6, reverse: true },
    { type: 'svg', Component: CircleSvg, className: 'absolute left-1/2 top-1/4 h-16 w-16 opacity-20 text-gray-500', delay: 1.8 },
    { type: 'div', className: 'absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-4 border-purple-200 opacity-30', delay: 2.0 },
    { type: 'div', className: 'absolute top-1/3 right-1/3 w-16 h-16 rounded-md border-2 border-purple-300 opacity-20 transform rotate-45', delay: 2.2, reverse: true },
  ];

  const socialLinks = [
    { platform: 'github', url: SOCIAL_LINKS.GITHUB, Icon: GithubSvg },
    { platform: 'instagram', url: SOCIAL_LINKS.INSTAGRAM, Icon: InstagramSvg },
    { platform: 'twitter', url: SOCIAL_LINKS.TWITTER, Icon: TwitterSvg },
    { platform: 'linkedin', url: SOCIAL_LINKS.LINKEDIN, Icon: LinkedinSvg }
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-purple-50 z-0">
      {showAlert && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded z-50 shadow-lg">
          <p className="font-medium">We are currently working on our CV section. Please try again later.</p>
        </div>
      )}
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
        className="content-section relative w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 py-20 md:py-0 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full text-center md:text-left md:w-1/2 z-10">
          <div className="inline-block mb-2 px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-gray-900 leading-tight">
            <span className="block">{PERSONAL_INFO.NAME}</span>
          </h1>
          <h2 className="mt-2 text-xl md:text-2xl text-purple-600 font-medium">
            {PERSONAL_INFO.ROLE}
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-lg">
            {PERSONAL_INFO.BIO}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href={downloadUrl}
              className="inline-flex items-center gap-2 bg-purple-600 text-white py-3 px-8 rounded-full hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <DownloadSvg />
              {status === 'loading' ? 'Loading CV...' : 'Download CV'}
            </motion.a>
            <motion.a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-purple-600 border-2 border-purple-600 py-3 px-8 rounded-full hover:bg-purple-50 transition-all"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <PhoneSvg />
              Contact Me
            </motion.a>
          </div>
          <div className="mt-10 flex items-center justify-center md:justify-start gap-6">
            {socialLinks.map(({ platform, url, Icon }) => (
              <motion.a 
                key={platform} 
                href={url} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600 transition-colors"
                whileHover={{ scale: 1.2, color: '#9333ea' }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="relative w-full md:w-1/2 h-[450px] md:h-screen overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50 md:hidden z-0"></div>
          <motion.img
            src={person}
            alt="Profile"
            className="object-contain w-full h-full mt-2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
          />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gray-500 text-sm mb-2">Scroll Down</span>
        <ArrowDownSvg />
      </motion.div>
    </div>
  );
};

export default HomePage;
