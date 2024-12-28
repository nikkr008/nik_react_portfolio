import React from 'react';
import about from '../imgages/about.png';

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
        <div>
          <p className="text-gray-700 text-lg font-semibold mb-4">Hello, I'm</p>
          <p className="text-gray-500 mb-6 leading-relaxed">
            I am a Mobile App and Frontend Web Developer.<br />
          </p>
          <p className="text-gray-500 mb-6 leading-relaxed">
            With Excellence in React.Js and React-Native, I can provide cross-platform applications with immense UI experience.
            <br />
            <strong>Tech Stack:</strong> React.js, React-Native, Redux, Rest-API, JavaScript, TypeScript, Java, Debugging
          </p>
          <p className="text-gray-500 mb-6 leading-relaxed">
            I continually strive to ensure high standards are met and consistency is maintained throughout an entire project.
            <br />
            <strong>Specialties:</strong> Web Design / Redesign, Website Designing, Tag HTML, CSS, Web Developer.
          </p>

          {/* Skill Bars */}
          <div className="space-y-4">
            <div>
              <p className="text-gray-700 font-semibold mb-1">Mobile App Developer</p>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-purple-600 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            <div>
              <p className="text-gray-700 font-semibold mb-1">Frontend Web Developer</p>
              <div className="bg-gray-200 h-2 rounded-full">
                <div className="bg-purple-600 h-2 rounded-full w-3/5"></div>
              </div>
            </div>
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
