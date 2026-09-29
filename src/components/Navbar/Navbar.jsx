import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 text-white max-w-7xl mx-auto w-full relative z-50">
      
      {/* Brand Logo */}
     <Link to="/">
      <div className="flex items-center gap-2 cursor-pointer z-50">
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
    <Link to="/" className="cursor-pointer hover:text-gray-300 transition-colors">
      Home
    </Link>
  </li>
  <li>
    <Link to="/courses" className="cursor-pointer text-gray-300 hover:text-white transition-colors">
      Courses
    </Link>
  </li>
  <li>
    <Link to="/creators" className="cursor-pointer text-gray-300 hover:text-white transition-colors">
      Creators
    </Link>
  </li>
</ul>

      {/* Right Action Buttons & Mobile Toggle */}
      <div className="flex items-center gap-4 md:gap-6 text-sm font-medium z-50">
        <Link to="/login" className="hover:text-gray-300 transition-colors hidden sm:block">
  Sign In
</Link>
<Link to="/signup" className="hover:text-gray-300 transition-colors hidden sm:block">
  Join Us
</Link>
        
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

      {/* Mobile Navigation Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#113de5] border-t border-white/10 flex flex-col items-center py-6 gap-5 md:hidden shadow-2xl rounded-b-2xl z-40">
          <span className="cursor-pointer text-white font-medium hover:text-gray-300 transition-colors">Home</span>
          <span className="cursor-pointer text-gray-300 hover:text-white transition-colors">Courses</span>
          <span className="cursor-pointer text-gray-300 hover:text-white transition-colors">Creators</span>
          
          {/* Sign In & Join Us for extra small screens */}
          <hr className="w-1/2 border-white/20 my-1 sm:hidden" />
          <Link to="/login" className="cursor-pointer text-gray-300 hover:text-white transition-colors sm:hidden">
            Sign In
          </Link>
          <Link to="/signup" className="cursor-pointer text-gray-300 hover:text-white transition-colors sm:hidden">
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;