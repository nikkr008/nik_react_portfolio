import React from 'react';
import { motion } from 'framer-motion';
import appIcon from '../imgages/app-icon.png';
import designIcon from '../imgages/design-icon.png';
import codeIcon from '../imgages/code-icon.png';
import { SERVICES } from '../utils/constants';
import { useTheme } from '../utils/ThemeContext';

const Services = () => {
  // Map service icons to their imported images
  const serviceIcons = {
    'app-icon.png': appIcon,
    'design-icon.png': designIcon,
    'code-icon.png': codeIcon
  };
  
  const { isDarkMode } = useTheme();

  return (
    <section id="services" className="py-16 px-6 md:px-16 overflow-hidden font-poppins" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <h3 className="text-purple-600 font-semibold uppercase tracking-wide">What I offer</h3>
        <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--heading-color)' }}>My Services</h1>
        <p className="max-w-2xl text-lg" style={{ color: 'var(--text-color)' }}>
          I offer comprehensive development solutions with a focus on mobile apps and responsive web applications.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border"
            style={{ 
              backgroundColor: 'var(--card-bg)', 
              borderColor: 'var(--card-border)' 
            }}
          >
            {/* Card Header with Icon */}
            <div className="flex flex-col items-center text-center p-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative ${isDarkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                <img 
                  src={serviceIcons[service.icon]} 
                  alt={service.name} 
                  className="w-10 h-10 object-contain"
                />
                {/* Animated Circle Background */}
                <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 group-hover:border-purple-500/50 transition-colors duration-500"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-500 transition-colors duration-300" style={{ color: 'var(--heading-color)' }}>
                {service.name}
              </h3>
              <p className="min-h-[80px]" style={{ color: 'var(--text-color)' }}>
                {service.description}
              </p>
            </div>
            
            {/* Skills List */}
            <div className="px-8 pb-8">
              <h4 className="font-semibold text-purple-600 mb-4 flex items-center">
                <span className="w-8 h-1 bg-purple-600 inline-block mr-2"></span>
                Skills & Tools
              </h4>
              <ul className="grid grid-cols-2 gap-2">
                {service.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="flex items-center text-sm py-1"
                    style={{ color: 'var(--text-color)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500 inline-block mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
