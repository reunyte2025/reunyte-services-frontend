import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A2540] text-white py-12 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Navigation Links Column */}
          <div className="space-y-3">
            <Link href="/" className="block text-white hover:text-blue-400 transition-colors text-sm">
              Home
            </Link>
            <Link href="/about" className="block text-white hover:text-blue-400 transition-colors text-sm">
              About
            </Link>
            <Link href="/products" className="block text-white hover:text-blue-400 transition-colors text-sm">
              Products
            </Link>
            <Link href="/contact" className="block text-white hover:text-blue-400 transition-colors text-sm">
              Contact us
            </Link>
          </div>

          {/* Address Column */}
          <div className="space-y-2">
            <h3 className="font-semibold text-sm mb-3">Address:</h3>
            <p className="text-sm leading-relaxed">
              Santacruz, Mumbai<br />
              Maharashtra 400055, India
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-sm mb-2">Email ID:</h3>
              <a href="mailto:info@reunyte.in" className="text-sm hover:text-blue-400 transition-colors">
                info@reunyte.in
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="space-y-4 md:col-start-4">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium text-sm transition-colors">
                Send
              </button>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://wa.me/918346218493" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-green-600 hover:bg-green-700 rounded flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-pink-600 hover:bg-pink-700 rounded flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>

            {/* Contact Information */}
            <div className="text-sm space-y-1 mt-4">
              <p>Mobile: <a href="tel:+918346218493" className="hover:text-blue-400 transition-colors">+91 8346218493</a></p>
              <p>Email: <a href="mailto:info@reunyte.in" className="hover:text-blue-400 transition-colors">info@reunyte.in</a></p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              {/* White square positioned at top-left */}
              <div 
                className="absolute bg-white rounded-sm" 
                style={{
                  width: '32px',
                  height: '32px',
                  top: '0',
                  left: '0',
                }}
              />
              {/* Blue circle positioned at bottom-right, overlapping the square */}
              <div 
                className="absolute bg-blue-500 rounded-full" 
                style={{
                  width: '32px',
                  height: '32px',
                  bottom: '0',
                  right: '0',
                  zIndex: 10
                }}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold">Reunyte</h2>
              <p className="text-xs text-gray-400">Run for Success</p>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <Link href="/terms&condition" className="text-sm hover:text-blue-400 transition-colors underline">
              Terms & Conditions Apply
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-blue-600">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Reunyte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}