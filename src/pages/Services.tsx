'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CircleOrbs from '../components/CircleOrbs';

const Services: React.FC = () => {
  const services = [
    {
      icon: '/assets/images/student-icon.png',
      title: 'Student',
      description: 'Gain hands-on skills, real-world experience, and mentorship to boost your career journey.',
      link: '/services/student',
      iconPath: 'M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
    },
    {
      icon: '/assets/images/college-icon.png',
      title: 'College',
      description: 'Enhance campus learning with innovative programs, industry exposure, and academic opportunities.',
      link: '/services/college',
      iconPath: 'M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z'
    },
    {
      icon: '/assets/images/startup-icon.png',
      title: 'Startup',
      description: 'Access mentorship, resources, and strategies to scale faster and shape the future.',
      link: '/services/startup',
      iconPath: 'M12 2L2 7L12 12L22 7L12 2M2 17L12 22L22 17V11L12 16L2 11V17Z'
    },
    {
      icon: '/assets/images/organization-icon.png',
      title: 'Organization',
      description: 'Drive innovation, upskill teams, and implement solutions for sustainable business growth.',
      link: '/services/organization',
      iconPath: 'M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z'
    }
  ];

  return (
    <div className="w-full bg-black overflow-x-hidden font-['Poppins']">
      {/* Hero Section - Our Services - NO min-h-screen */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        <CircleOrbs />
        
        {/* Controlled padding for proper spacing */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="w-full max-w-xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-5 leading-tight">
                Our Services
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                We empower every stage of growth—whether you are a student seeking skills, a college elevating learning, an organization driving innovation, or a startup shaping the future. Our tailored solutions blend technology, mentorship, and real-world application to unlock potential, spark creativity, and accelerate success.
              </p>
              
              <button className="inline-flex items-center gap-3 px-8 py-3 border-2 border-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                Get in touch
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </button>
            </div>

            {/* Right Image with Zig-Zag Border */}
            <div className="relative w-full h-87.5 sm:h-112.5 lg:h-130 flex items-center justify-center">
              {/* Zig-zag border */}
              <div 
                className="absolute border-2 border-blue-400 rounded-4xl pointer-events-none z-20"
                style={{
                  width: 'clamp(350px, 80%, 450px)',
                  height: 'clamp(340px, 80%, 480px)',
                  top: '45%',
                  left: '55%',
                  transform: 'translate(-50%, -52%)',
                }}
              />
              
              {/* Image container */}
              <div 
                className="relative rounded-4xl overflow-hidden shadow-2xl z-10 bg-linear-to-br from-blue-500 to-blue-600/20"
                style={{
                  width: 'clamp(350px, 80%, 450px)',
                  height: 'clamp(340px, 80%, 480px)',
                }}
              >
                <Image
                  src="/assets/services/herosection.png"
                  alt="Team Service"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Compact, NO min-h-screen */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden" style={{
        background: 'radial-gradient(ellipse at center, #3771C8 0%, #163C74 50%, #112C6A 100%)'
      }}>
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header - Reduced spacing */}
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 leading-tight">
              Our Services for Every Stage of Growth
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We provide tailored solutions for students, colleges, organizations, and startups—empowering learning, innovation, and future-ready skills. From mentorship to real-world applications, our services unlock potential, spark creativity, and accelerate success.
            </p>
          </div>

          {/* Services Grid - Compact cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-linear-to-br from-blue-900/50 to-blue-800/30 backdrop-blur-md rounded-xl p-5 sm:p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/10 group-hover:to-blue-600/10 rounded-xl transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 shrink-0 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                      <svg className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d={service.iconPath}/>
                      </svg>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Read More Button with Link */}
                  <Link href={service.link}>
                    <button className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 group-hover:gap-3 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105">
                      Read More
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;