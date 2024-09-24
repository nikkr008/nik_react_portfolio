import React from 'react';
import person from '../imgages/person.png';
import square from '../imgages/shapes/square.png'
import triangle from '../imgages/shapes/triangle.png'
import wave from '../imgages/shapes/wave.png'
import points from '../imgages/shapes/points1.png'
import circle from '../imgages/shapes/circle.png'

const HomePage = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Abstract Design */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-20 opacity-50 w-32 h-32 bg-purple-100 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 opacity-50 transform -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full"></div>
        <div className="absolute bottom-10 left-36 opacity-50 w-32 h-32 bg-purple-100 rounded-full"></div>
        <img
          src={square}
          alt="Profile"
          className="absolute left-1/4 bottom-10 h-10 opacity-20 filter grayscale"
        />
        <img
          src={triangle}
          alt="Profile"
          className="absolute right-36 top-32 h-10 opacity-10 filter grayscale"
        />
        <img
          src={wave}
          alt="Profile"
          className="absolute left-1/4 top-1/4 h-5 opacity-10 filter grayscale"
        />
        <img
          src={wave}
          alt="Profile"
          className="absolute left-1/3 bottom-1/4 h-5 opacity-10 filter grayscale"
        />
        <img
          src={points}
          alt="Profile"
          className="absolute left-0 bottom-0 h-48 opacity-20 filter grayscale"
        />
        <img
          src={points}
          alt="Profile"
          className="absolute right-0 bottom-0 h-48 opacity-20 filter grayscale"
        />
        <img
          src={circle}
          alt="Profile"
          className="absolute left-1/2 top-1/4 h-14 opacity-10 filter grayscale"
        />
      </div>

      {/* Content Section */}
      <div className="relative h-full w-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12 top-36 md:top-0">
        {/* Text Section */}
        <div className="mx-24 text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold font-serif text-gray-900">Nikhil Kumar</h1>
          <p className="mt-4 text-xl font-serif text-gray-600">
            Hello, I'm Nikhil Kumar.
            <br/>I can design and develop Mobile apps & Website.
            <br/>Scroll down to explore more about me.
          </p>
          <a
            href="https://drive.google.com/file/d/1UL7jZZoql0vzs3ujl4HJs0RqtZSRMbUn/view?usp=drive_link"
            className="inline-block mt-6 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download CV
          </a>

        </div>

        {/* Image Section */}
        <div className="relative md:w-1/2 h-screen top-28 overflow-hidden md:-left-12"> {/* Full height */}
          <img
            src={person}
            alt="Profile"
            className="object-contain w-full h-full" // Ensure image fills the container
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
