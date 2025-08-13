'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🐕</span>
            <span className="text-xl font-bold warm-text-gradient">
              Dog years in human years
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#calculator" 
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Calculator
            </Link>
            <Link 
              href="/#how-it-works" 
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              How It Works
            </Link>
            <Link 
              href="/#facts" 
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Fun Facts
            </Link>
            <Link 
              href="/articles" 
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              Articles
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/#calculator" 
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Calculator
              </Link>
              <Link 
                href="/#how-it-works" 
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link 
                href="/#facts" 
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Fun Facts
              </Link>
              <Link 
                href="/articles" 
                className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;