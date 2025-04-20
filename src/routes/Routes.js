// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HomePage from '../pages/Home';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/contact';
import Footer from '../pages/Footer';
import Projects from '../pages/Projects';
import ProjectDetail from '../pages/ProjectDetail';
import { useTheme } from '../utils/ThemeContext';

const Routes = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <Router>
      <Navbar />
      <ReactRoutes>
        <Route path="/" element={
          <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <section id="home">
              <HomePage />
            </section>
            <section id="services">
              <Services />
            </section>
            <section id="projects">
              <Projects />
            </section>
            <section id="about">
              <About />
            </section>
            <section id="contact">
              <Contact />
            </section>
            <section id="Footer">
              <Footer />
            </section>
          </div>
        } />
        <Route path="/project/:id" element={
          <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <ProjectDetail />
          </div>
        } />
        <Route path="*" element={<Navigate to="/" replace />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
