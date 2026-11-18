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

  // Career positions data - easily add more cards here.
  // `isOpen: false` across the board means we're not actively hiring right now —
  // this drives the disabled "Not Open Yet" state on each card's CTA below.
  const careerPositions = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Front-end and back-end engineering: HTML, CSS, JavaScript/TypeScript on the front end, and Python, Java, or Node.js on the back end.',
      isOpen: false,
      iconPath: 'M9.75 17L15 12l-5.25-5M4.5 7h.008v.008H4.5V7zm15 10h.008v.008h-.008V17z M17 8l4 4-4 4M7 8L3 12l4 4'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform app development using React Native, Flutter, Swift, or Kotlin for iOS and Android.',
      isOpen: false,
      iconPath: 'M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5M10.5 1.5v1.5h3V1.5M10.5 1.5h3m-3 18.75h3'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Crafting intuitive, accessible product experiences with tools like Figma, from wireframes and prototypes to polished visual design.',
      isOpen: false,
      iconPath: 'M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.4-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42'
    },
    {
      id: 4,
      title: 'Cloud & DevOps Engineering',
      description: 'Building and maintaining CI/CD pipelines, infrastructure-as-code, and scalable cloud environments on AWS, Azure, or GCP.',
      isOpen: false,
      iconPath: 'M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'
    },
    {
      id: 5,
      title: 'Data Science & Analytics',
      description: 'Turning raw data into insight: statistical modeling, dashboards, and data pipelines using Python, SQL, and modern BI tools.',
      isOpen: false,
      iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
    },
    {
      id: 6,
      title: 'Quality Assurance & Testing',
      description: 'Manual and automated testing to keep releases reliable — writing test plans, regression suites, and end-to-end automation.',
      isOpen: false,
      iconPath: 'M9 12.75L11.25 15 15 9.75M21 12c0 4.556-3.582 8.257-8.25 8.995C7.582 20.257 4 16.556 4 12V6.5a1 1 0 01.553-.894L12 3l7.447 2.606a1 1 0 01.553.894V12z'
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4">
            We are currently looking for
          </h2>

          {/* Subtitle - honest status about openings */}
          <p className="text-base sm:text-lg text-gray-300 mb-12 lg:mb-16 max-w-2xl">
            We don&apos;t have any open positions at the moment, but we&apos;re always excited to hear from talented people. Take a look at the roles we typically hire for below, and check back soon.
          </p>

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
                  {/* Icon + Status Badge */}
                  <div className="mb-5 flex items-start justify-between">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-linear-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl bg-linear-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={position.iconPath} />
                        </svg>
                      </div>
                    </div>

                    {!position.isOpen && (
                      <span className="text-xs font-medium text-gray-300 bg-white/10 border border-white/15 rounded-full px-3 py-1 whitespace-nowrap">
                        No openings
                      </span>
                    )}
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

                  {/* Apply Now / Not Open Yet Button */}
                  {position.isOpen ? (
                    <button className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm sm:text-base font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                      Apply now
                    </button>
                  ) : (
                    <button
                      disabled
                      title="This role isn't open right now — send your resume and we'll reach out when it is."
                      className="w-full px-6 py-3 bg-white/5 border border-white/10 text-gray-400 text-sm sm:text-base font-medium rounded-xl cursor-not-allowed"
                    >
                      Not open yet
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* General CTA - path forward when nothing is open */}
          <div className="mt-12 lg:mt-16 rounded-3xl border border-white/10 bg-white/5 px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                Don&apos;t see the right fit yet?
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-xl">
                We&apos;re growing and new roles open up regularly. Send us your resume and we&apos;ll reach out when something matches your skills.
              </p>
            </div>
            <a
              href="mailto:careers@luminar.com"
              className="inline-flex shrink-0 items-center gap-2 px-6 py-3 border-2 border-blue-500 text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            >
              Send your resume
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}