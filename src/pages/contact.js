import React from 'react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-600 p-6 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-8 w-full max-w-5xl shadow-xl relative">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Get in touch</h1>
            <p className="text-gray-600 mb-6">
              If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Hyderabad, India</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>nik.kr008@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-purple-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>+91 7808627025</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact me</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              
              <textarea
                placeholder="Message"
                rows={6}
                className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
              
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;