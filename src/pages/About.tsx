// About.tsx
'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CircleOrbs from '../components/CircleOrbs';

const CARD_CONFIG = {
  active: {
    width: 'w-72 sm:w-80',
    padding: 'p-5',
    imageAspect: 'aspect-[3/4]',
    nameSize: 'text-lg lg:text-xl',
    titleSize: 'text-sm',
    logoSize: 'w-9 h-9',
    iconSize: 'w-7 h-7',
    iconInnerSize: 'w-3.5 h-3.5'
  },
  inactive: {
    width: 'w-64 sm:w-72',
    padding: 'p-4',
    imageAspect: 'aspect-[3/4]',
    nameSize: 'text-base lg:text-lg',
    titleSize: 'text-xs',
    logoSize: 'w-8 h-8',
    iconSize: 'w-6 h-6',
    iconInnerSize: 'w-3 h-3'
  }
};

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lastDragTime = useRef(0);
  const lastDragX = useRef(0);

  const teamMembers = [
    { 
      name: 'Mr. Shubham Bhat', 
      title: 'CEO', 
      image: '/assets/about/employee.png',
      social: {
        facebook: 'https://facebook.com/shubham.bhat',
        instagram: 'https://instagram.com/shubham.bhat',
        linkedin: 'https://linkedin.com/in/shubham-bhat'
      }
    },
    { 
      name: 'Ms. Priya Sharma', 
      title: 'COO', 
      image: '/assets/about/employee.png',
      social: {
        facebook: 'https://facebook.com/priya.sharma.cto',
        instagram: 'https://instagram.com/priya.sharma.tech',
        linkedin: 'https://linkedin.com/in/priya-sharma-cto'
      }
    },
    { 
      name: 'Mr. Raj Kumar', 
      title: 'CMO', 
      image: '/assets/about/employee.png',
      social: {
        facebook: 'https://facebook.com/raj.kumar.dev',
        instagram: 'https://instagram.com/raj.codes',
        linkedin: 'https://linkedin.com/in/raj-kumar-developer'
      }
    },
    { 
      name: 'Mr. Omkar Narkar', 
      title: 'Lead Developer', 
      image: '/assets/about/employee.png',
      social: {
        facebook: 'https://facebook.com/raj.kumar.dev',
        instagram: 'https://instagram.com/raj.codes',
        linkedin: 'https://linkedin.com/in/raj-kumar-developer'
      }
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setDragOffset(0);
    setVelocity(0);
    lastDragTime.current = Date.now();
    lastDragX.current = clientX;
    if (carouselRef.current) carouselRef.current.style.cursor = 'grabbing';
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - dragStartX;
    const now = Date.now();
    const timeDiff = now - lastDragTime.current;
    
    if (timeDiff > 0) {
      const dragVelocity = (clientX - lastDragX.current) / timeDiff;
      setVelocity(dragVelocity);
    }
    
    setDragOffset(diff);
    lastDragTime.current = now;
    lastDragX.current = clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 80;
    const velocityThreshold = 0.5;
    
    if (Math.abs(dragOffset) > threshold || Math.abs(velocity) > velocityThreshold) {
      if (dragOffset < 0 || velocity < -velocityThreshold) {
        nextSlide();
      } else if (dragOffset > 0 || velocity > velocityThreshold) {
        prevSlide();
      }
    }
    
    setDragOffset(0);
    setVelocity(0);
    if (carouselRef.current) carouselRef.current.style.cursor = 'grab';
  };

  return (
    <div className="relative w-full overflow-x-hidden font-['Poppins']">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen pt-24 pb-8 px-4 sm:px-6 lg:px-12" style={{ backgroundColor: '#0A2540' }}>
        <CircleOrbs />
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                Discover Our Identity
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed">
                Luminiore is a team of passionate engineers specialists dedicated to crafting ingenious solution for real world challenges. We combine cutting edge expertise with collaborative Spirit to deliver impact full result for our clients.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-3 px-8 py-3 border-2 border-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  Get in touch
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            <div className="relative w-full h-125 sm:h-150 lg:h-170 flex items-center justify-center">
              <div 
                className="absolute border-2 border-blue-400 rounded-4xl pointer-events-none z-20"
                style={{
                  width: 'clamp(280px, 80%, 480px)',
                  height: 'clamp(420px, 75%, 680px)',
                  top: '45%',
                  left: '55%',
                  transform: 'translate(-50%, -52%)',
                }}
              />
              <div 
                className="relative rounded-4xl overflow-hidden shadow-2xl z-10"
                style={{
                  width: 'clamp(280px, 80%, 480px)',
                  height: 'clamp(420px, 75%, 680px)',
                }}
              >
                <Image
                  src="/assets/about/teamemployee.png"
                  alt="Team collaboration"
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 480px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section 
        className="relative w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-12"
        style={{
          background: 'radial-gradient(circle at center, #B2B2B2 0%, #3771C8 15%, #082F87 45%, #112C6A 100%)'
        }}
      >
        <CircleOrbs />
        <div className="relative max-w-7xl mx-auto z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-['Poppins'] text-white mb-12 lg:mb-16">
            Meet our team
          </h2>

          <div 
            ref={carouselRef}
            className="relative flex items-center justify-center select-none"
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <button
              onClick={prevSlide}
              className="absolute left-0 z-30 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-400/30 hover:bg-blue-400/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 -translate-x-4 sm:-translate-x-6"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div 
              className="flex gap-4 lg:gap-20 items-stretch justify-center px-12 sm:px-16 lg:px-20 w-full max-w-6xl transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(${dragOffset}px)`,
                transition: isDragging ? 'none' : 'transform 500ms ease-out'
              }}
            >
              <div className="hidden md:block transition-all duration-700 ease-out" style={{ transform: 'scale(0.9)', opacity: 0.7 }}>
                <TeamCard member={teamMembers[(currentSlide - 1 + teamMembers.length) % teamMembers.length]} />
              </div>

              <div className="transition-all duration-700 ease-out transform hover:scale-105 hover:z-40">
                <TeamCard member={teamMembers[currentSlide]} isActive />
              </div>

              <div className="hidden md:block transition-all duration-700 ease-out" style={{ transform: 'scale(0.9)', opacity: 0.7 }}>
                <TeamCard member={teamMembers[(currentSlide + 1) % teamMembers.length]} />
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-30 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-400/30 hover:bg-blue-400/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 translate-x-4 sm:translate-x-6"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/40 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative w-full px-6 md:px-12 py-16 lg:py-40 bg-linear-to-b from-[#1e3a5f] to-[#0a1628]">
        <CircleOrbs />
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">Our Story</h2>
              <p className="text-lg text-gray-200 leading-relaxed">
                Founded with a vision to revolutionize how businesses operate, Reunyte has grown from a small startup to a trusted partner for organizations worldwide.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Our journey began with a simple belief: that every business deserves access to powerful, intuitive tools that drive success.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Today, we're proud to serve thousands of clients, helping them achieve their goals and exceed their expectations.
              </p>
            </div>
            <div className="bg-linear-to-br from-blue-500/80 to-purple-600/80 backdrop-blur-sm rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <p className="text-white text-2xl font-semibold">Our Journey</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamCard: React.FC<{ member: { name: string; title: string; image: string; social: { facebook: string; instagram: string; linkedin: string } }; isActive?: boolean }> = ({ member, isActive = false }) => {
  const config = isActive ? CARD_CONFIG.active : CARD_CONFIG.inactive;
  
  return (
    <div className={`${config.width} bg-linear-to-b ${isActive ? 'from-gray-700/70 to-gray-900/90' : 'from-blue-600/50 to-blue-800/70'} backdrop-blur-md rounded-3xl ${config.padding} border-2 ${isActive ? 'border-gray-600/60' : 'border-blue-400/40'} shadow-2xl transition-all duration-700 h-full flex flex-col`}>
      <div className={`relative w-full ${config.imageAspect} rounded-[18px] overflow-hidden mb-4`}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes={isActive ? "(max-width: 640px) 90vw, 400px" : "300px"}
          className="object-cover"
        />
      </div>
      <h3 className={`${config.nameSize} font-semibold text-white mb-2`}>{member.name}</h3>
      <p className={`${config.titleSize} ${isActive ? 'text-gray-300' : 'text-blue-200'} mb-4 grow`}>{member.title}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <div className={`relative ${config.logoSize}`}>
            <div 
              className="absolute bg-white rounded-sm" 
              style={{
                width: isActive ? '24px' : '20px',
                height: isActive ? '24px' : '20px',
                top: '0',
                left: '0'
              }}
            />
            <div 
              className="absolute bg-blue-500 rounded-full" 
              style={{
                width: isActive ? '24px' : '20px',
                height: isActive ? '24px' : '20px',
                bottom: '0',
                right: '0',
                zIndex: 10
              }}
            />
          </div>
          <div>
            <p className={`${isActive ? 'text-sm' : 'text-xs'} font-bold text-white`}>Reunyte</p>
            <p className={`${isActive ? 'text-xs' : 'text-[10px]'} ${isActive ? 'text-gray-300' : 'text-blue-200'}`}>Rise for Success</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <SocialIcon href={member.social.facebook} isActive={isActive}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </SocialIcon>
          <SocialIcon href={member.social.instagram} isActive={isActive}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </SocialIcon>
          <SocialIcon href={member.social.linkedin} isActive={isActive}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </SocialIcon>
        </div>
      </div>
    </div>
  );
};

const SocialIcon: React.FC<{ children: React.ReactNode; isActive?: boolean; href: string }> = ({ children, isActive = false, href }) => {
  const config = isActive ? CARD_CONFIG.active : CARD_CONFIG.inactive;
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${config.iconSize} bg-blue-500/30 rounded-full flex items-center justify-center hover:bg-blue-500/60 transition-all duration-300 hover:scale-110`}
    >
      <svg className={`${config.iconInnerSize} text-white`} fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );
};

export default About;