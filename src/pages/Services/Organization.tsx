'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import CircleOrbs from '../../components/CircleOrbs';
import Link from 'next/link';

export default function Organization() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragThreshold = 50;

  const organizationServices = [
    {
      id: 1,
      title: 'Talent Acquisition Support',
      image: '/assets/services/organization4.jpg',
      color: 'from-blue-400/80 to-blue-600/80'
    },
    {
      id: 2,
      title: 'Team Training & Upskilling Programs',
      image: '/assets/services/organization5.jpg',
      color: 'from-blue-500/90 to-blue-700/90'
    },
    {
      id: 3,
      title: 'Organizational Development',
      image: '/assets/services/organization1.jpg',
      color: 'from-blue-400/70 to-blue-600/70',
      isCenter: true
    },
    {
      id: 4,
      title: 'Student-Industry Collaboration',
      image: '/assets/services/organization2.jpg',
      color: 'from-blue-500/90 to-blue-700/90'
    },
    {
      id: 5,
      title: 'Digital Transformation Solutions',
      image: '/assets/services/organization3.jpg',
      color: 'from-blue-400/80 to-blue-600/80'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % organizationServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + organizationServices.length) % organizationServices.length);
  };

  const goToSlide = (index: number) => {
    if (!isDragging) {
      setCurrentSlide(index);
    }
  };

  const getVisibleSteps = () => {
    const steps = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + organizationServices.length) % organizationServices.length;
      steps.push({ ...organizationServices[index], position: i, originalIndex: index });
    }
    return steps;
  };

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging) {
      e.preventDefault();
      const clientX = e.touches[0].clientX;
      setCurrentX(clientX);
      const offset = clientX - startX;
      setDragOffset(offset);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const finalOffset = currentX - startX;
    
    if (Math.abs(finalOffset) > dragThreshold) {
      if (finalOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
    setStartX(0);
    setCurrentX(0);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      const finalOffset = currentX - startX;
      
      if (Math.abs(finalOffset) > dragThreshold) {
        if (finalOffset > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
      
      setIsDragging(false);
      setDragOffset(0);
      setStartX(0);
      setCurrentX(0);
    }
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      setCurrentX(e.clientX);
      const offset = e.clientX - startX;
      setDragOffset(offset);
    };

    const handleGlobalMouseUp = () => {
      const finalOffset = currentX - startX;
      
      if (Math.abs(finalOffset) > dragThreshold) {
        if (finalOffset > 0) {
          setCurrentSlide((prev) => (prev - 1 + organizationServices.length) % organizationServices.length);
        } else {
          setCurrentSlide((prev) => (prev + 1) % organizationServices.length);
        }
      }
      
      setIsDragging(false);
      setDragOffset(0);
      setStartX(0);
      setCurrentX(0);
    };
    
    document.addEventListener('mousemove', handleGlobalMouseMove);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX, currentX, dragThreshold, organizationServices.length]);

  return (
    <main className="w-full bg-black overflow-x-hidden font-['Poppins']">
      {/* Hero Section - Organization Services */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-22">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="w-full max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight">
                Organization Services
              </h1>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                Our organization services help businesses build future-ready teams and digitally optimized operations. We work closely with leadership and functional teams to identify skill gaps, streamline processes, and introduce modern technology solutions.
              </p>
              
              <Link href="/contact">
                <button className="inline-flex items-center gap-3 px-8 py-3 border-2 border-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
                  Get in touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Right Image - Single Card with Zig-Zag Border */}
            <div className="relative w-full h-96 sm:h-112 lg:h-120 flex items-center justify-center">
              <div 
                className="relative z-2"
                style={{
                  width: 'clamp(280px, 100%, 700px)',
                  height: 'clamp(320px, 85%, 400px)',
                }}
              >
                {/* Zig-Zag Blue Border */}
                <div 
                  className="absolute border-2 border-blue-400 rounded-4xl pointer-events-none z-20"
                  style={{
                    width: '100%',
                    height: '100%',
                    top: '-15px',
                    left: '12px',
                  }}
                />
                
                {/* Main Image Card */}
                <div className="relative w-full h-full rounded-4xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/assets/services/organization0.jpg"
                    alt="Organization growth and team development"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 450px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Services Carousel Section */}
      <section 
        className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #3771C8 0%, #3771C8 46%, #112C6A 100%)'
        }}
      >
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="mb-12 lg:mb-16 text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white max-w-4xl mx-auto leading-relaxed">
              We focus on learning-by-doing, ensuring that every participant builds a strong portfolio, improves problem-solving ability, and becomes placement-ready.
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 sm:left-4 lg:left-8 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-blue-400/40 hover:bg-blue-400/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Carousel Track - SMOOTH DRAGGABLE */}
            <div 
              ref={carouselRef}
              className="relative w-full max-w-6xl px-16 sm:px-20 lg:px-24 h-96 flex items-center justify-center"
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                touchAction: 'pan-y'
              }}
            >
              {getVisibleSteps().map((step, idx) => {
                const isCenter = step.position === 0;
                const isNearCenter = Math.abs(step.position) === 1;
                const isFarSide = Math.abs(step.position) === 2;
                
                const circleSize = isCenter ? 220 : isNearCenter ? 140 : 100;
                
                // Smooth drag offset calculation
                const baseOffset = step.position * 200;
                const smoothDragOffset = isDragging ? dragOffset * 0.5 : 0;
                const horizontalOffset = baseOffset + smoothDragOffset;
                
                return (
                  <div
                    key={`${step.id}-${idx}`}
                    className="absolute ease-out"
                    onClick={() => goToSlide(step.originalIndex)}
                    style={{
                      transform: `translateX(${horizontalOffset}px)`,
                      opacity: isFarSide ? 0.5 : isNearCenter ? 0.8 : 1,
                      zIndex: isCenter ? 30 : isNearCenter ? 20 : 10,
                      left: '50%',
                      top: '50%',
                      transition: isDragging ? 'opacity 200ms ease-out' : 'all 700ms ease-out',
                      cursor: isCenter ? 'default' : 'pointer',
                      pointerEvents: isFarSide ? 'none' : 'auto'
                    }}
                  >
                    <div 
                      className={`relative rounded-full bg-linear-to-br ${step.color} backdrop-blur-md border-2 ${
                        isCenter ? 'border-white/60 shadow-2xl' : 'border-blue-300/40 shadow-xl'
                      } flex items-center justify-center overflow-hidden transition-transform duration-300 ${
                        !isCenter && !isDragging ? 'hover:scale-110' : ''
                      }`}
                      style={{
                        width: `${circleSize}px`,
                        height: `${circleSize}px`,
                        marginLeft: `-${circleSize / 2}px`,
                        marginTop: `-${circleSize / 2}px`,
                        transition: isDragging ? 'none' : 'all 700ms ease-out'
                      }}
                    >
                      {/* Image inside circle */}
                      <div className="relative w-full h-full">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {isCenter && (
                      <div 
                        className="text-center absolute pointer-events-none" 
                        style={{ 
                          top: `${circleSize / 2 + 20}px`,
                          left: '0%',
                          transform: 'translateX(-50%)',
                          transition: isDragging ? 'none' : 'opacity 700ms ease-out',
                          width: '240px',
                          maxWidth: '90vw'
                        }}
                      >
                        <p className="text-base text-white font-medium leading-snug" style={{ wordWrap: 'break-word' }}>
                          {step.title}
                        </p>
                      </div>
                    )}
                    
                    {isNearCenter && (
                      <div 
                        className="text-center absolute pointer-events-none" 
                        style={{ 
                          top: `${circleSize / 2 + 10}px`,
                          left: '5%',
                          transform: 'translateX(-50%)',
                          transition: isDragging ? 'none' : 'opacity 700ms ease-out',
                          width: '180px',
                          maxWidth: '80vw'
                        }}
                      >
                        <p className="text-sm text-white/80 font-medium leading-snug" style={{ wordWrap: 'break-word' }}>
                          {step.title}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 sm:right-4 lg:right-8 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-blue-400/40 hover:bg-blue-400/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next"
            >
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-12">
            {organizationServices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  currentSlide === index ? 'bg-white w-8' : 'bg-white/40 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}