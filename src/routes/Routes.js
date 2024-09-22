// src/Routes.js
import React from 'react';
import Navbar from '../components/Navbar';

const Routes = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="h-screen bg-blue-300 flex justify-center items-center">
        <h1 className="text-4xl">Home Section</h1>
      </section>
      <section id="services" className="h-screen bg-green-300 flex justify-center items-center">
        <h1 className="text-4xl">Services Section</h1>
      </section>
      <section id="projects" className="h-screen bg-red-300 flex justify-center items-center">
        <h1 className="text-4xl">Projects Section</h1>
      </section>
      <section id="about" className="h-screen bg-yellow-300 flex justify-center items-center">
        <h1 className="text-4xl">About Section</h1>
      </section>
      <section id="contact" className="h-screen bg-gray-300 flex justify-center items-center">
        <h1 className="text-4xl">Contact Section</h1>
      </section>
    </div>
  );
};

export default Routes;
