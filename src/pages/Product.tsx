'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import CircleOrbs from '../components/CircleOrbs';
import Link from 'next/link';

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragThreshold = 50;

  const workflowSteps = [
    {
      id: 1,
      title: 'Deployment',
      icon: '📊',
      color: 'from-blue-400/80 to-blue-600/80'
    },
    {
      id: 2,
      title: 'Product maintenance',
      icon: '🔧',
      color: 'from-blue-500/90 to-blue-700/90'
    },
    {
      id: 3,
      title: 'Product idea generation',
      icon: '💡',
      color: 'from-blue-400/70 to-blue-600/70',
      isCenter: true
    },
    {
      id: 4,
      title: 'Requirement analysis',
      icon: '📋',
      color: 'from-blue-500/90 to-blue-700/90'
    },
    {
      id: 5,
      title: 'Product design',
      icon: '🎨',
      color: 'from-blue-400/80 to-blue-600/80'
    }
  ];

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workflowSteps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length);
  };

  const goToSlide = (index: number) => {
    if (!isDragging) {
      setCurrentSlide(index);
    }
  };

  const getVisibleSteps = () => {
    const steps = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentSlide + i + workflowSteps.length) % workflowSteps.length;
      steps.push({ ...workflowSteps[index], position: i, originalIndex: index });
    }
    return steps;
  };

  // Smooth drag handlers
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
          setCurrentSlide((prev) => (prev - 1 + workflowSteps.length) % workflowSteps.length);
        } else {
          setCurrentSlide((prev) => (prev + 1) % workflowSteps.length);
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
  }, [isDragging, startX, currentX, dragThreshold, workflowSteps.length]);

  return (
    <main className="w-full bg-black overflow-x-hidden font-['Poppins']">
      {/* Hero Section - Luminar */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: '#0A2540' }}>
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-22">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="w-full max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-5 leading-tight">
                Luminar : Automate Your Workflow and Boost Efficiency
              </h1>
              
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                Struggling with repetitive tasks that slow you down? Luminar takes the hassle out of your workflow by automating routine IT processes.
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

            {/* Right Images - Overlapping Cards with Zig-Zag Border */}
            <div className="relative w-full h-100 sm:h-112.5 lg:h-125 flex items-center justify-center">
              {/* Back Card - Top Right */}
              <div 
                className="absolute z-1"
                style={{
                  // MOBILE: Change these values for mobile
                  width: isMobile ? '180px' : 'clamp(200px, 45%, 300px)',
                  height: isMobile ? '250px' : 'clamp(0px, 80%, 350px)',
                  top: isMobile ? '10%' : '5%',
                  right: isMobile ? '50%' : '50%',
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
                    src="/assets/product/herosection20.png"
                    alt="Workflow automation on laptop"
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
                  // MOBILE: Change these values for mobile
                  width: isMobile ? '230px' : 'clamp(200px, 70%, 350px)',
                  height: isMobile ? '200px' : 'clamp(280px, 40%, 350px)',
                  bottom: isMobile ? '5%' : '0%',
                  left: isMobile ? '35%' : '40%',
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
                    src="/assets/product/herosection10.png"
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

      {/* Product Development Workflow Section - WITH SMOOTH DRAG */}
      <section 
        className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #F6F6F6 0%, #4172BC 46%, #112C6A 100%)'
        }}
      >
        <CircleOrbs />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white mb-1 lg:mb-10">
            Product Development<br/> Workflow
          </h2>

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
                
                const circleSize = isCenter ? 220 : isNearCenter ? 130 : 90;
                const iconSize = isCenter ? '88px' : isNearCenter ? '52px' : '36px';
                
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
                      } flex items-center justify-center transition-transform duration-300 ${
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
                      <span style={{ 
                        fontSize: iconSize,
                        transition: isDragging ? 'none' : 'all 700ms ease-out'
                      }}>
                        {step.icon}
                      </span>
                    </div>
                    
                    {isCenter && (
                      <div 
                        className="text-center absolute pointer-events-none" 
                        style={{ 
                          top: `${circleSize / 2 + 20}px`,
                          left: '5%',
                          transform: 'translateX(-50%)',
                          whiteSpace: 'nowrap',
                          transition: isDragging ? 'none' : 'opacity 700ms ease-out'
                        }}
                      >
                        <p className="text-lg text-white font-medium">
                          {step.title}
                        </p>
                      </div>
                    )}
                    
                    {isNearCenter && (
                      <div 
                        className="text-center absolute pointer-events-none" 
                        style={{ 
                          top: `${circleSize / 2 + 15}px`,
                          left: '5%',
                          transform: 'translateX(-50%)',
                          whiteSpace: 'nowrap',
                          transition: isDragging ? 'none' : 'opacity 700ms ease-out'
                        }}
                      >
                        <p className="text-sm text-white/80 font-medium">
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
            {workflowSteps.map((_, index) => (
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