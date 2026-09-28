import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 text-white max-w-7xl mx-auto w-full relative z-20">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 bg-[#cfff04] rounded-tr-xl rounded-bl-xl flex items-center justify-center">
          <div className="w-4 h-4 bg-[#113de5] rounded-full"></div>
        </div>
        <span className="text-2xl font-bold tracking-wide">ByteSpace</span>
      </div>

      {/* Center Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li className="cursor-pointer hover:text-gray-300 transition-colors">Home</li>
        <li className="cursor-pointer text-gray-300 hover:text-white transition-colors">Courses</li>
        <li className="cursor-pointer text-gray-300 hover:text-white transition-colors">Creators</li>
      </ul>

      {/* Right Action Buttons */}
      <div className="flex items-center gap-6 text-sm font-medium">
        <button className="hover:text-gray-300 transition-colors hidden sm:block">Sign In</button>
        <button className="hover:text-gray-300 transition-colors hidden sm:block">Join Us</button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;