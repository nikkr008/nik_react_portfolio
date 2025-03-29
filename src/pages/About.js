import React from 'react';
import about from '../imgages/about.png';
import { PERSONAL_INFO, SKILLS } from '../utils/constants';

const AboutMe = () => {
  return (
    <section className="relative bg-white py-16 px-6 md:px-16 font-poppins">
      <div className="flex flex-col items-center text-center mb-10">
        {/* Header */}
        <h3 className="text-purple-600 font-semibold uppercase tracking-wide">
          Who am I
        </h3>
        <h1 className="text-4xl font-bold mb-6">About me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row md:gap-10 flex-col-reverse gap-6 items-center">
        {/* Left Section - Text */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 transform transition-all duration-500 hover:shadow-xl">
          <p className="text-gray-700 text-xl font-semibold mb-4 flex items-center">
            <span className="inline-block w-2 h-8 bg-purple-600 mr-3"></span>
            Hello, I'm {PERSONAL_INFO.NAME}
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed text-lg border-b border-purple-100 pb-4">
            {PERSONAL_INFO.ROLE}
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {PERSONAL_INFO.BIO}
            <br className="mb-2" />
            <span className="inline-block bg-purple-100 px-4 py-2 rounded-lg text-purple-700 font-medium mt-3 shadow-sm transition-all duration-300 hover:bg-purple-200">
              <strong>Tech Stack:</strong> React.js, React Native, Redux, REST API, JavaScript, TypeScript, Java, Debugging
            </span>
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            I consistently maintain high standards of code quality and ensure each project meets client requirements with meticulous attention to detail.
            <br className="mb-2" />
            <span className="inline-block bg-purple-100 px-4 py-2 rounded-lg text-purple-700 font-medium mt-3 shadow-sm transition-all duration-300 hover:bg-purple-200">
              <strong>Specialties:</strong> {Object.keys(SKILLS).join(', ')}
            </span>
          </p>

          {/* Skill Bars */}
          <div className="space-y-6 mt-10">
            {Object.entries(SKILLS).map(([skill, percentage], index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <p className="text-gray-700 font-semibold flex items-center">
                    <span className="inline-block w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                    {skill}
                  </p>
                  <p className="text-purple-600 font-medium">{percentage}%</p>
                </div>
                <div className="bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-purple-700 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center items-center">
          <img
            src={about}
            alt="Profile"
            className="h-50"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
