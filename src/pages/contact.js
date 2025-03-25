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
  const [focusedInput, setFocusedInput] = useState(null);

  useEffect(() => {
    const isValid = Object.values(formData).every(value => value.trim() !== '');
    setIsFormValid(isValid);
  }, [formData]);

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

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements removed */}

      <div className="bg-white rounded-3xl p-8 w-full max-w-5xl shadow-xl relative border border-gray-100">
        {/* Success Animation Overlay */}
        {showSuccess && (
          <div className="absolute inset-0 bg-white flex items-center justify-center z-10 rounded-3xl animate-fade-in">
            <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
              <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center shadow-lg">
                <svg
                  className="w-16 h-16 text-red-500 animate-pulse"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p className="text-xl font-semibold mt-6 text-red-500 text-center px-4 max-w-lg">
                We are currently facing some issues. Please contact us at <span className="font-bold">+91 7808627025</span> or <span className="font-bold">nik.kr008@gmail.com</span>
              </p>
              <button 
                className="mt-6 px-6 py-2 bg-red-100 text-red-500 rounded-full text-sm font-medium hover:bg-red-200 transition-colors duration-300"
                onClick={() => setShowSuccess(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold mb-2 text-gray-800">Get in touch</h1>
              <div className="w-20 h-1 bg-purple-500 rounded-full"></div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group transform transition hover:translate-x-2 duration-300">
                <div className="bg-purple-500 p-3 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">Hyderabad, India</span>
              </div>
              
              <div className="flex items-center gap-4 group transform transition hover:translate-x-2 duration-300">
                <div className="bg-purple-500 p-3 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">nik.kr008@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-4 group transform transition hover:translate-x-2 duration-300">
                <div className="bg-purple-500 p-3 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">+91 7808627025</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex space-x-4">
                <a href="https://twitter.com/nik102030" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://github.com/nikkr008" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 0 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/its_nik._/?hl=en" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/nikhil-kumar-523978179/" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-inner">
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Contact me</h2>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className={`relative transition-all duration-300 ${focusedInput === 'firstName' ? 'transform -translate-y-1' : ''}`}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('firstName')}
                    onBlur={handleBlur}
                    className="bg-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 border border-gray-200 shadow-sm"
                    required
                  />
                  {focusedInput === 'firstName' && (
                    <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"></div>
                  )}
                </div>
                
                <div className={`relative transition-all duration-300 ${focusedInput === 'lastName' ? 'transform -translate-y-1' : ''}`}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('lastName')}
                    onBlur={handleBlur}
                    className="bg-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 border border-gray-200 shadow-sm"
                    required
                  />
                  {focusedInput === 'lastName' && (
                    <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"></div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className={`relative transition-all duration-300 ${focusedInput === 'phone' ? 'transform -translate-y-1' : ''}`}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className="bg-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 border border-gray-200 shadow-sm"
                    required
                  />
                  {focusedInput === 'phone' && (
                    <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"></div>
                  )}
                </div>
                
                <div className={`relative transition-all duration-300 ${focusedInput === 'email' ? 'transform -translate-y-1' : ''}`}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className="bg-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 border border-gray-200 shadow-sm"
                    required
                  />
                  {focusedInput === 'email' && (
                    <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"></div>
                  )}
                </div>
              </div>
              
              <div className={`relative transition-all duration-300 ${focusedInput === 'message' ? 'transform -translate-y-1' : ''}`}>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows={5}
                  className="bg-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 border border-gray-200 shadow-sm resize-none"
                  required
                ></textarea>
                {focusedInput === 'message' && (
                  <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"></div>
                )}
              </div>
              
              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full px-6 py-3 rounded-lg transition-all duration-300 transform font-medium text-base ${
                  isFormValid 
                    ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg hover:-translate-y-1 cursor-pointer' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isFormValid ? 'SEND MESSAGE' : 'COMPLETE THE FORM'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;