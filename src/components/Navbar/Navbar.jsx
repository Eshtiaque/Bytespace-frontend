import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Prevent background scrolling when mobile menu is open 
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="w-full relative z-[99999]">
        <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 text-white max-w-7xl mx-auto w-full">
          
          {/* Brand Logo */}
          <Link to="/" onClick={closeMenu}>
            <div className="flex items-center gap-2 cursor-pointer">
              <img 
                src="/Vector.png" 
                alt="ByteSpace Logo" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain" 
              />
              <span className="text-xl md:text-2xl font-bold tracking-wide">ByteSpace</span>
            </div>
          </Link>

          {/* Center Navigation Links - Desktop Only */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <Link to="/" className="cursor-pointer hover:text-gray-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/courses" className="cursor-pointer text-gray-300 hover:text-white transition-colors">Courses</Link>
            </li>
            <li>
              <Link to="/creators" className="cursor-pointer text-gray-300 hover:text-white transition-colors">Creators</Link>
            </li>
          </ul>

          {/* Right Action Buttons & Mobile Toggle */}
          <div className="flex items-center gap-4 md:gap-6 text-sm font-medium">
            <Link to="/login" className="hover:text-gray-300 transition-colors hidden sm:block">Sign In</Link>
            <Link to="/signup" className="hover:text-gray-300 transition-colors hidden sm:block">Join Us</Link>
            
            {/* Cart Icon */}
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>

            {/* Hamburger Menu Icon - Mobile Only */}
            <button 
              className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[99998] bg-black/40 backdrop-blur-sm" 
          onClick={closeMenu} 
        >
          {/* Dropdown Box */}
          <div 
            className="absolute top-[64px] left-0 w-full bg-[#113de5] flex flex-col items-center py-8 gap-6 shadow-2xl rounded-b-3xl border-t border-white/10"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the menu area itself
          >
            <Link to="/" onClick={closeMenu} className="text-white font-medium text-base hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link to="/courses" onClick={closeMenu} className="text-gray-200 font-medium text-base hover:text-white transition-colors">
              Courses
            </Link>
            <Link to="/creators" onClick={closeMenu} className="text-gray-200 font-medium text-base hover:text-white transition-colors">
              Creators
            </Link>
            
            {/* Divider for Mobile */}
            <hr className="w-[150px] border-white/20 my-1" />
            
            <Link to="/login" onClick={closeMenu} className="text-gray-200 font-medium text-base hover:text-white transition-colors">
              Sign In
            </Link>
            <Link to="/signup" onClick={closeMenu} className="text-gray-200 font-medium text-base hover:text-white transition-colors">
              Join Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;