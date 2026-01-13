'use client';

import React, { useState } from 'react';
import CircleOrbs from '../components/CircleOrbs';

// Backend API URL - Update this based on your environment
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    queries: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async () => {
    // Client-side validation
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.queries) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: 'Please enter a valid email address'
      });
      return;
    }

    // Enhanced Phone validation
    const phoneDigits = formData.phoneNumber.replace(/\D/g, '');
    
    // Check if phone number has only digits after removing special characters
    if (!/^[\d\s\+\-\(\)]+$/.test(formData.phoneNumber)) {
      setSubmitStatus({
        type: 'error',
        message: 'Phone number can only contain digits, spaces, +, -, ( )'
      });
      return;
    }

    // Check minimum length (10 digits for most countries)
    if (phoneDigits.length < 10) {
      setSubmitStatus({
        type: 'error',
        message: 'Phone number must be at least 10 digits'
      });
      return;
    }

    // Check maximum length (15 digits - international standard)
    if (phoneDigits.length > 15) {
      setSubmitStatus({
        type: 'error',
        message: 'Phone number must not exceed 15 digits'
      });
      return;
    }

    // Additional validation: Check if it starts with valid country code or digit
    if (formData.phoneNumber.trim().startsWith('+')) {
      const countryCodeMatch = formData.phoneNumber.match(/^\+(\d{1,3})/);
      if (!countryCodeMatch) {
        setSubmitStatus({
          type: 'error',
          message: 'Invalid country code format'
        });
        return;
      }
    }

    // Query length validation
    if (formData.queries.length < 10) {
      setSubmitStatus({
        type: 'error',
        message: 'Please provide more details in your query (minimum 10 characters)'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form
        setFormData({ 
          fullName: '', 
          email: '', 
          phoneNumber: '', 
          queries: '' 
        });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 5000);

      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit form. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (submitStatus.type === 'error') {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  return (
    <main className="w-full bg-black overflow-x-hidden font-['Poppins']">
      <section className="relative w-full min-h-screen overflow-hidden" style={{ backgroundColor: '#001B3D' }}>
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Left Content - Contact Info */}
            <div className="w-full max-w-xl space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-white mb-4 font-normal">
                  Contact us
                </h3>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                  We're Here to Help
                </h1>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Together, let's create innovative solutions for your real-world challenges
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl text-white font-medium mb-2">
                    Call :
                  </h3>
                  <a 
                    href="tel:+917313815578" 
                    className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    +91 7313815578
                  </a>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl text-white font-medium mb-2">
                    Email :
                  </h3>
                  <a 
                    href="mailto:abc@gmail.com" 
                    className="text-base sm:text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    abc@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl text-white font-medium mb-2">
                    General Inquiries :
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    reach us at{' '}
                    <a 
                      href="mailto:info@gmail.com" 
                      className="text-gray-300 hover:text-white transition-colors underline"
                    >
                      info@gmail.com
                    </a>
                    <br />
                    and we will get back to you ASAP.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl text-white font-medium mb-4">
                    Follow us :
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded bg-blue-600/30 hover:bg-blue-600/50 flex items-center justify-center transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded bg-blue-600/30 hover:bg-blue-600/50 flex items-center justify-center transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded bg-blue-600/30 hover:bg-blue-600/50 flex items-center justify-center transition-all duration-300"
                      aria-label="Pinterest"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded bg-blue-600/30 hover:bg-blue-600/50 flex items-center justify-center transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="w-full">
              <div 
                className="relative backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)'
                }}
              >
                {/* Status Messages */}
                {submitStatus.type && (
                  <div 
                    className={`mb-6 p-4 rounded-lg animate-fade-in ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/20 border border-green-500/50 text-green-200' 
                        : 'bg-red-500/20 border border-red-500/50 text-red-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {submitStatus.type === 'success' ? (
                        <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                      <span className="text-sm">{submitStatus.message}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm text-white/90 mb-2 font-normal">
                      Full name :
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/90 mb-2 font-normal">
                      Email :
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm text-white/90 mb-2 font-normal">
                      Phone number :
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  {/* Write Your Queries */}
                  <div>
                    <label htmlFor="queries" className="block text-sm text-white/90 mb-2 font-normal">
                      Write your queries :
                    </label>
                    <textarea
                      id="queries"
                      name="queries"
                      value={formData.queries}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-white/95 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit your response'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}