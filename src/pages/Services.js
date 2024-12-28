import React from 'react';
import AppDev from '../imgages/design-icon.png';
import WebDev from '../imgages/code-icon.png';

const Services = () => {
  return (
    <section className="py-12 bg-gray-50 text-center">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-lg text-purple-600 font-semibold uppercase">What I Do</h2>
        <h1 className="text-3xl font-bold mb-4">Services</h1>
        <p className="text-gray-500 leading-relaxed">
          I am skilled in utilising all facets of App Development and Web Development.
          <br />
          With expertise in React-Native and React.js, I can create Mobile Apps with cross-platform compatibilities with Android and iOS both.
          <br />
          I continually strive to ensure high standards are met and consistency is maintained throughout an entire project.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* App Development Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 transition-transform transform hover:-translate-y-3 duration-300">
          <div className="flex justify-center items-center mb-4">
            <img src={AppDev} alt="App Development Icon" className="h-28" />
          </div>
          <h3 className="text-xl font-semibold mb-3">App Development</h3>
          <p className="text-gray-500 text-sm mb-6">
            With excellence in React-Native, I can provide cross-platform applications with immense UI experience.
            <br />
            React-Native, Redux, Rest-API, JavaScript, TypeScript, Java, Debugging
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-200">
            Read More
          </button>
        </div>

        {/* Web Development Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 transition-transform transform hover:-translate-y-3 duration-300">
          <div className="flex justify-center items-center mb-4">
            <img src={WebDev} alt="Web Development Icon" className="h-28" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-500 text-sm mb-6">
            With excellence in React.js, I can provide Single Page Applications with immense UI experience.
            <br />
            React.js, Redux, Rest-API, JavaScript, TypeScript, Debugging, Java HTML, CSS, Bootstrap, etc.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-200">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
