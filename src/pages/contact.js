import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all fields have values
    const isValid = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(isValid);
  }, [formData]); // Run this effect whenever formData changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email
    });
    
    clearForm();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-600 p-6 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-8 w-full max-w-5xl shadow-xl relative">
        {/* Success Animation Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-3xl animate-fade-in">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
                <svg 
                  className="w-16 h-16 text-green-500 animate-bounce"
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold mt-4 text-green-500">
                Message Sent Successfully!
              </p>
            </div>
          </div>
        )}

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
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="bg-gray-100 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              ></textarea>
              
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full px-6 py-3 rounded-lg transition-colors duration-200 ${
                  isFormValid 
                    ? 'bg-purple-600 text-white hover:bg-purple-700 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
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