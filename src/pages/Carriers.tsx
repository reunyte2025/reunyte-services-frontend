'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CircleOrbs from '../components/CircleOrbs';

export default function Carriers() {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Career positions data - easily add more cards here
  const careerPositions = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Coding: Proficiency in front-end languages like HTML, CSS, and JavaScript, and back-end languages like Python, Java, Ruby, and PHP',
      icon: '/assets/careers/web-dev-icon.png' // You can replace with your icon path
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Coding: Proficiency in front-end languages like HTML, CSS, and JavaScript, and back-end languages like Python, Java, Ruby, and PHP',
      icon: '/assets/careers/web-dev-icon.png'
    },
    {
      id: 3,
      title: 'Web Development',
      description: 'Coding: Proficiency in front-end languages like HTML, CSS, and JavaScript, and back-end languages like Python, Java, Ruby, and PHP',
      icon: '/assets/careers/web-dev-icon.png'
    },
    {
      id: 4,
      title: 'Web Development',
      description: 'Coding: Proficiency in front-end languages like HTML, CSS, and JavaScript, and back-end languages like Python, Java, Ruby, and PHP',
      icon: '/assets/careers/web-dev-icon.png'
    },
    {
      id: 5,
      title: 'Web Development',
      description: 'Coding: Proficiency in front-end languages like HTML, CSS, and JavaScript, and back-end languages like Python, Java, Ruby, and PHP',
      icon: '/assets/careers/web-dev-icon.png'
    },
    {
      id: 6,
      title: 'Web Development',
      description: 'Coding: Proficiency in front-end languages like HTML, CSS, and JavaScript, and back-end languages like Python, Java, Ruby, and PHP',
      icon: '/assets/careers/web-dev-icon.png'
    }
  ];

  return (
    <main className="w-full bg-black overflow-x-hidden font-['Poppins']">
      {/* Section 1 - Be a part of our team */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-22">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="w-full max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight">
                Be a part of our team
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
                Struggling with repetitive tasks that slow you down? Luminar takes the hassle out of your workflow by automating routine IT processes.
              </p>
              
              <button className="inline-flex items-center gap-3 px-8 py-3 border-2 border-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                Know more
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Right Images - Overlapping Cards with Zig-Zag Border */}
            <div className="relative w-full h-100 sm:h-112.5 lg:h-125 flex items-center justify-center">
              {/* Back Card - Top Right */}
              <div 
                className="absolute z-1"
                style={{
                  width: isMobile ? '250px' : 'clamp(200px, 75%, 400px)',
                  height: isMobile ? '200px' : 'clamp(0px, 80%, 380px)',
                  top: isMobile ? '5%' : '5%',
                  right: isMobile ? '30%' : '35%',
                }}
              >
                <div 
                  className="absolute border-2 border-blue-400 rounded-4xl pointer-events-none z-20"
                  style={{
                    width: '100%',
                    height: '100%',
                    top: '-15px',
                    left: '12px',
                  }}
                />
                
                <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/assets/careers/herosection2.png"
                    alt="Team member working"
                    fill
                    sizes="(max-width: 640px) 50vw, 280px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Front Card - Bottom Left */}
              <div 
                className="absolute z-2"
                style={{
                  width: isMobile ? '250px' : 'clamp(200px, 70%, 350px)',
                  height: isMobile ? '200px' : 'clamp(280px, 40%, 350px)',
                  bottom: isMobile ? '5%' : '0%',
                  left: isMobile ? '25%' : '40%',
                }}
              >
                <div 
                  className="absolute border-2 border-blue-400 rounded-4xl pointer-events-none z-20"
                  style={{
                    width: '100%',
                    height: '100%',
                    top: '-15px',
                    left: '12px',
                  }}
                />
                
                <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/assets/careers/herosection1.png"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 640px) 60vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - We are currently looking for */}
      <section 
        className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #004BF2 0%, #3771C8 42%, #112C6A 100%)'
        }}
      >
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-12 lg:mb-16">
            We are currently looking for
          </h2>

          {/* Career Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {careerPositions.map((position) => (
              <div
                key={position.id}
                className="relative group"
              >
                {/* Card Content */}
                <div 
                  className="relative rounded-3xl p-6 transition-all duration-300 hover:scale-105 h-full flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.95) 0%, rgba(15, 35, 65, 0.98) 100%)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-linear-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                    {position.title}
                  </h3>

                  {/* Divider Line */}
                  <div className="w-full h-px bg-linear-to-r from-blue-400/50 via-blue-300/50 to-transparent mb-3" />

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed line-clamp-4 grow">
                    {position.description}
                  </p>

                  {/* Read More Link */}
                  <button className="text-blue-400 hover:text-blue-300 text-sm sm:text-base font-medium transition-colors duration-300 flex items-center gap-2 group mb-4">
                    read more...
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  {/* Apply Now Button */}
                  <button className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    Apply now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}