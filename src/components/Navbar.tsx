'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import reunyteLogo from '@/assets/images/reunytelogo.png';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Carriers', href: '/carriers' },
    { name: 'Contact us', href: '/contact' }
  ];

  const isActive = (href: string) => {
    // Handle null pathname case
    if (!pathname) return false;
    
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-2 bg-black/30 backdrop-blur-md">
      {/* Container with max-width to keep everything centered */}
      <div className="max-w-400 mx-auto w-full flex items-center justify-between gap-3 md:gap-6">
        
        {/* Logo Section - Left Side */}
        <Link href="/" className="flex items-center gap-3 md:gap-4 shrink-0">
          {/* Logo Circle */}
          <div className="w-14 h-14 md:w-17 md:h-17 bg-white rounded-full flex items-center justify-center shadow-lg p-0.5">
            <Image 
              src={reunyteLogo}
              alt="Reunyte Logo" 
              width={150}
              height={150}
              className="w-full h-full object-cover rounded-full"
              priority
            />
          </div>
          
          {/* Company Name & Tagline */}
          <div className="flex flex-col">
            <h1 
              className="text-lg md:text-3xl font-bold text-white leading-tight" 
              style={{ fontFamily: "'Jockey One', sans-serif" }}
            >
              Reunyte
            </h1>
            <p 
              className="hidden sm:block text-[9px] md:text-[12px] text-gray-300 leading-tight" 
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 300 }}
            >
              Think Ahead. Build Bold. Shape the Future
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - Center (Hidden on mobile) */}
        <div className="hidden lg:flex grow items-center justify-center max-w-5xl mx-auto">
          <div className="bg-[#407BFF]/30 backdrop-blur-sm rounded-full px-6 xl:px-8 py-3 border border-white/10 w-full">
            <ul className="flex items-center justify-between">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-300 hover:text-[#407BFF] whitespace-nowrap ${
                      isActive(link.href) ? 'text-[#407BFF]' : 'text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Desktop Get in Touch Button & Mobile Menu */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          {/* Desktop Get in Touch Button */}
          <Link href="/contact" className="hidden lg:block bg-[#407BFF] hover:bg-[#3068E6] text-white px-6 xl:px-8 py-2.5 md:py-3 rounded-full font-medium text-sm transition-all duration-300 shadow-lg shadow-[#407BFF]/30 hover:shadow-[#407BFF]/50 hover:scale-105 whitespace-nowrap">
            Get in touch
          </Link>

          {/* Mobile Get in Touch Button (beside hamburger) */}
          <Link href="/contact" className="lg:hidden bg-[#407BFF] hover:bg-[#3068E6] text-white px-4 py-2 rounded-full font-medium text-xs transition-all duration-300 shadow-lg whitespace-nowrap">
            Get in touch
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1 w-7 h-7 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <div className="max-w-400 mx-auto">
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive(link.href)
                        ? 'text-[#407BFF] bg-white/10' 
                        : 'text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}