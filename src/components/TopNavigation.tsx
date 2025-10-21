'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${scrolled ? 'bg-white backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <img src="/images/logo.webp" alt="RealEstate Logo" className="h-15 w-auto transition-transform duration-300 hover:scale-105" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-['Helvetica'] transition-all duration-300 hover:bg-[#1E3634] hover:-translate-y-1 hover:shadow-lg transform">
             LISTINGS
            </Link>
            <Link href="/properties" className="text-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-['Helvetica'] transition-all duration-300 hover:bg-[#1E3634] hover:-translate-y-1 hover:shadow-lg transform">
              LET&apos;S MOVE
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium font-['Helvetica'] transition-all duration-300 hover:bg-[#1E3634] hover:-translate-y-1 hover:shadow-lg transform">
              ABOUT US
            </Link>
            {/* <Link href="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium font-['Helvetica'] transition-colors duration-300 hover:bg-gray-100">
              CONTACT
            </Link> */}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-300"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div key={isOpen ? 'open' : 'closed'} className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-transparent backdrop-blur-md shadow-lg">
            <Link href="/" className="mobile-menu-item text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Helvetica'] transition-all duration-300 hover:bg-black hover:translate-x-2 hover:scale-105">
             LISTINGS
            </Link>
            <Link href="/properties" className="mobile-menu-item text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Helvetica'] transition-all duration-300 hover:bg-black hover:translate-x-2 hover:scale-105">
              LET&apos;S MOVE
            </Link>
            <Link href="/about" className="mobile-menu-item text-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium font-['Helvetica'] transition-all duration-300 hover:bg-black hover:translate-x-2 hover:scale-105">
              ABOUT US
            </Link>
            {/* <Link href="/contact" className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium font-['Helvetica'] transition-colors duration-300 hover:bg-gray-100">
              CONTACT
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
