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

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <ReactRoutes>
        <Route path="/" element={
          <div>
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </ReactRoutes>
    </Router>
  );
};

export default Routes;
