'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md marugame-soft-shadow">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <div className="text-xl font-medium marugame-text-gradient">
            串かつ枡や
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#concept" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium relative group">
              店のこだわり
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#menu" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium relative group">
              メニュー
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#interior" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium relative group">
              店内紹介
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium relative group">
              お客様の声
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#access" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium relative group">
              アクセス
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="marugame-button px-6 py-2 text-sm">
              ご予約
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-red-600 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <nav className="md:hidden py-6 border-t border-gray-100 bg-white/98">
            <div className="flex flex-col space-y-4">
              <a href="#concept" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                店のこだわり
              </a>
              <a href="#menu" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                メニュー
              </a>
              <a href="#interior" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                店内紹介
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                お客様の声
              </a>
              <a href="#access" className="text-gray-600 hover:text-red-600 transition-colors duration-300 font-medium" onClick={toggleMenu}>
                アクセス
              </a>
              <a href="#contact" className="marugame-button text-center" onClick={toggleMenu}>
                ご予約
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 