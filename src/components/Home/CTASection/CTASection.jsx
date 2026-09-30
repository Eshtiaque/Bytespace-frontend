import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#113de5] overflow-hidden flex items-center justify-center py-20 md:py-32 px-4 z-0">
      
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 z-[-1] opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      ></div>
      
     {/* Top Left Yellow Zigzag */}
      <img src="/shape-yellow-zigzag.png" alt="3D Shape" className="absolute top-[4%] left-[4%] md:top-[-4%] md:left-[-3%] lg:top-[-5%] lg:left-[-2%] w-[80px] md:w-[150px] lg:w-[250px] object-contain drop-shadow-2xl z-0 hidden sm:block" />
      
      {/* Top Left White Spring */}
      <img src="/shape-white-zigzag-small.png" alt="3D Shape" className="absolute top-[3%] left-[3%] md:top-[6%] md:left-[18%] lg:top-[10%] lg:left-[15%] w-[50px] md:w-[80px] lg:w-[120px] object-contain drop-shadow-2xl z-0" />
      
      {/* Top Right Yellow Pyramid */}
      <img src="/Cone-yellow.png" alt="3D Shape" className="absolute top-[4%] right-[3%] md:top-[5%] md:right-[10%] lg:top-[5%] lg:right-[18%] w-[60px] md:w-[90px] lg:w-[130px] object-contain drop-shadow-2xl z-0" />
      
      {/* Top Right White Cube */}
      <img src="/cylinder-white.png" alt="3D Shape" className="absolute top-[8%] right-[-4%] md:top-[10%] md:right-[-2%] lg:top-[10%] lg:right-[-1%] w-[90px] md:w-[140px] lg:w-[200px] object-contain drop-shadow-2xl z-0 hidden md:block" />
      
      {/* Bottom Left White Cone */}
      <img src="/shape-white-cone.png" alt="3D Shape" className="absolute bottom-[24%] left-[0%] md:bottom-[8%] md:left-[-3%] lg:bottom-[10%] lg:left-[-5%] w-[60px] md:w-[100px] lg:w-[160px] object-contain drop-shadow-2xl z-0" />
      
      {/* Bottom Left Yellow Ring */}
      <img src="/shape-yellow-donut.png" alt="3D Shape" className="absolute bottom-[-1%] left-[2%] md:bottom-[-2%] md:left-[4%] lg:bottom-[-1%] lg:left-[5%] w-[100px] md:w-[180px] lg:w-[280px] object-contain drop-shadow-2xl z-0 " />
      
      {/* Bottom Right Yellow Zigzag */}
      <img src="/zikzak-yellow.png" alt="3D Shape" className="absolute bottom-[-1%] right-[-10%] md:bottom-[0%] md:right-[4%] lg:bottom-[-1%] lg:right-[8%] w-[150px] md:w-[160px] lg:w-[260px] object-contain drop-shadow-2xl z-0" />

      <div className="relative z-10 max-w-[950px] mx-auto text-center flex flex-col items-center">
        
        
        <h2 className="text-3xl md:text-4xl lg:text-[54px] font-bold text-white mb-6 leading-[1.2] tracking-tight">
          Unlock Your Potential as a <br className="hidden sm:block" /> Creator with ByteSpace
        </h2>
        
        
        <p className="text-[13px] md:text-[15px] lg:text-[16px] text-blue-100/90 max-w-[800px] mb-10 leading-relaxed font-light">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a 
          part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your 
          expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        
        
        <Link to="/creators">
        <button className="bg-[#cfff04] text-black font-semibold text-sm md:text-base px-8 md:px-10 py-3 md:py-3.5 rounded-full hover:bg-[#b8e600] transition-colors shadow-lg hover:shadow-xl">
          Join as Creator
        </button>
        </Link>

      </div>
    </section>
  );
};

export default CTASection;