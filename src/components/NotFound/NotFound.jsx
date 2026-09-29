import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] bg-[#113de5] flex items-center justify-center overflow-hidden px-4">
      
      <div 
        className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto -mt-20 lg:-mt-32">
        
        <h1 className="text-[130px] sm:text-[180px] md:text-[240px] lg:text-[400px] font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-[#cfff04] via-[#cfff04]/80 to-transparent select-none">
          404
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white -mt-10 sm:-mt-14 md:-mt-20 lg:-mt-24 mb-4 md:mb-6 leading-[1.2] tracking-wide">
          The page you are looking <br className="hidden sm:block" /> for doesn't exist
        </h2>

        <p className="text-[13px] md:text-[15px] text-blue-100/80 font-light mb-8 md:mb-10 max-w-md mx-auto tracking-wide">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link 
          to="/" 
          className="bg-[#cfff04] text-black font-semibold text-sm md:text-base px-8 md:px-10 h-11 md:h-12 rounded-full flex items-center justify-center hover:bg-[#b8e600] transition-colors shadow-lg w-fit mx-auto"
        >
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;