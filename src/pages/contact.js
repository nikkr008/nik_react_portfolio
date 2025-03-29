import React, { useState, useEffect } from 'react';
import { db } from '../utils/firebase';
import { collection, serverTimestamp, doc, setDoc, arrayUnion, Timestamp } from 'firebase/firestore';
import { GithubSvg, InstagramSvg, TwitterSvg, LinkedinSvg, LocationSvg, EmailSvg, PhoneSvg, CheckmarkSvg } from '../utils/svgs';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../utils/constants';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Social media links with their components
  const socialLinks = [
    { platform: 'twitter', url: SOCIAL_LINKS.TWITTER, Icon: TwitterSvg },
    { platform: 'github', url: SOCIAL_LINKS.GITHUB, Icon: GithubSvg },
    { platform: 'instagram', url: SOCIAL_LINKS.INSTAGRAM, Icon: InstagramSvg },
    { platform: 'linkedin', url: SOCIAL_LINKS.LINKEDIN, Icon: LinkedinSvg }
  ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Reference to the specific "Messages" document in "PortfolioDatabase" collection
      const messagesRef = doc(collection(db, 'PortfolioDatabase'), 'Messages');
      
      // Create or update the Messages document with a new entry in the messages array
      await setDoc(messagesRef, {
        messages: arrayUnion({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          timestamp: Timestamp.now()
        }),
        lastUpdated: serverTimestamp()
      }, { merge: true });

      console.log('Message added to Messages document');
      clearForm();
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitError('An error occurred while sending your message. Please try again later or contact us directly.');
      setShowSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex items-center justify-center relative overflow-hidden">
      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="absolute inset-0 bg-white flex items-center justify-center z-10 rounded-3xl animate-fade-in">
          <div className="flex flex-col items-center transform transition-all duration-300 hover:scale-105">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center shadow-lg">
              <CheckmarkSvg />
            </div>
            <p className="text-xl font-semibold mt-6 text-green-500 text-center px-4 max-w-lg">
              Thank you for your message! We'll get back to you soon.
            </p>
            <button 
              className="mt-6 px-6 py-2 bg-green-100 text-green-500 rounded-full text-sm font-medium hover:bg-green-200 transition-colors duration-300"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-3xl p-8 w-full max-w-5xl shadow-xl relative border border-gray-100">
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
                  <LocationSvg />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">{PERSONAL_INFO.LOCATION}</span>
              </div>
              
              <div className="flex items-center gap-4 group transform transition hover:translate-x-2 duration-300">
                <div className="bg-purple-500 p-3 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <EmailSvg />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">{PERSONAL_INFO.EMAIL}</span>
              </div>
              
              <div className="flex items-center gap-4 group transform transition hover:translate-x-2 duration-300">
                <div className="bg-purple-500 p-3 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                  <PhoneSvg />
                </div>
                <span className="text-gray-700 font-medium group-hover:text-purple-600 transition-colors duration-300">{PERSONAL_INFO.PHONE}</span>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.platform}
                    href={social.url} 
                    className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.Icon />
                  </a>
                ))}
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
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows="5"
                  className="bg-white rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 border border-gray-200 shadow-sm resize-none"
                  required
                ></textarea>
                {focusedInput === 'message' && (
                  <div className="absolute inset-0 border-2 border-purple-500 rounded-lg pointer-events-none"></div>
                )}
              </div>
              
              {submitError && (
                <p className="text-red-500 text-sm">{submitError}</p>
              )}
              
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className={`w-full py-3 mt-4 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isFormValid && !isSubmitting
                    ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;