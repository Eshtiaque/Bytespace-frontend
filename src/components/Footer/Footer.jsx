import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-20 pb-8 px-4 border-t border-gray-50">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section: Newsletter and Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
          
          {/* Left Column: Logo & Newsletter */}
          <div className="w-full lg:w-5/12 flex flex-col items-start pr-0 lg:pr-12">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-6">
              <svg className="w-8 h-8 text-[#cfff04]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4l16 8-16 8z" />
              </svg>
              <span className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight">ByteSpace</span>
            </Link>
            
            <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-gray-700 mb-5 font-medium whitespace-normal lg:whitespace-nowrap">
  Stay Up to date with our latest features and releases by joining our newsletter.
</p>

{/* Newsletter Input & Button */}
<div className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-[450px] mb-4">
  <input 
    type="email" 
    placeholder="Enter your email" 
    className="w-full sm:flex-1 h-10 md:h-11 px-5 rounded-full border border-gray-300 focus:outline-none focus:border-[#113de5] text-[13px]"
  />
  <Link 
    to="/search" 
    className="w-full sm:w-auto h-10 md:h-11 bg-[#cfff04] text-black font-semibold text-[14px] px-10 md:px-12 rounded-full hover:bg-[#b8e600] transition-colors flex items-center justify-center inline-flex"
  >
    Search
  </Link>
</div>
            
            <p className="text-[11px] md:text-[12px] text-gray-500 leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Column: Links Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-3 gap-8">
            
            {/* Link Column 1 */}
            <div className="flex flex-col gap-4">
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Featured Courses</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Featured Categories</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Business</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">IT</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Design</Link>
            </div>

            {/* Link Column 2 */}
            <div className="flex flex-col gap-4">
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Development</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Marketing</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Photography</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Finance</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Sport</Link>
            </div>

            {/* Link Column 3 */}
            <div className="flex flex-col gap-4">
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Become a Creator</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Affiliate Program</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Contact</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">Help</Link>
              <Link to="#" className="text-[14px] md:text-[15px] text-gray-600 hover:text-[#113de5] transition-colors">About</Link>
            </div>
            
          </div>
          
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
          
          <p className="text-[12px] md:text-[13px] text-gray-500">
            @ 2023 ByteSpace. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link to="#" className="text-[12px] md:text-[13px] text-gray-500 hover:text-[#113de5] transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-[12px] md:text-[13px] text-gray-500 hover:text-[#113de5] transition-colors">Terms of Service</Link>
            <Link to="#" className="text-[12px] md:text-[13px] text-gray-500 hover:text-[#113de5] transition-colors">Cookies Settings</Link>
          </div>
          
        </div>

      </div>
    </footer>
  );
};

export default Footer;