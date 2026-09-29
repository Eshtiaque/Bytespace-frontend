import React from 'react';

const Header = () => {
  return (
    <header className="relative lg:flex-1 lg:min-h-0 w-full max-w-full mx-auto flex flex-col items-center justify-start lg:justify-between overflow-hidden pt-4 lg:pt-4">
      
      {/* 1. TOP SECTION (Text & Search) */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 w-full mt-2 lg:mt-8">
        
        {/* Texts */}
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.2] mb-3 text-white tracking-wide">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="text-[13px] md:text-[14px] lg:text-sm font-light text-gray-200 max-w-xl mb-6 px-2">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center gap-2 w-full max-w-[600px]">
          <div className="flex-1 flex items-center bg-white rounded-full px-4 h-11 md:h-12 shadow-xl">
            <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent focus:outline-none text-sm text-gray-800 placeholder-gray-400 ml-2 h-full"
            />
          </div>
          <button className="bg-[#cfff04] text-black font-bold text-sm px-6 md:px-8 h-11 md:h-12 rounded-full hover:bg-[#b8e600] transition-colors whitespace-nowrap shadow-xl shrink-0">
            Search
          </button>
        </div>
      </div>

      {/* 2. BOTTOM GRAPHICS AREA (Circle, Image, Cards) */}
      <div className="relative w-full flex justify-center items-end z-10 pointer-events-none mt-10 lg:mt-2 flex-1">
        
        {/* The Yellow Ring (SVG) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[55%] md:translate-y-[50%] lg:translate-y-[60%] z-0 w-[450px] md:w-[650px] lg:w-[850px]">
          <svg viewBox="0 0 1000 1000" fill="none" className="w-full h-auto drop-shadow-2xl">
            <circle cx="500" cy="500" r="350" stroke="#cfff04" strokeWidth="240" />
          </svg>
        </div>

        {/* Wrapper for Image and Cards */}
        <div className="relative w-full max-w-[900px] flex justify-center items-end h-full px-2">
          
          <img 
            src="/headerMan.png" 
            alt="Student" 
            className="relative z-10 h-[360px] md:h-[450px] lg:h-[52vh] object-contain object-bottom pointer-events-auto"
          />

          {/* Card 1: UI/UX Design (Left) */}
          <div className="absolute top-[12%] md:top-[38%] left-[1%] md:left-[15%] lg:top-[20%] lg:left-[23%] bg-white p-2.5 md:p-3 lg:p-3 rounded-xl shadow-xl lg:shadow-2xl z-20 w-[140px] md:w-[150px] lg:w-[160px] pointer-events-auto">
            <h3 className="text-black font-bold text-[11px] lg:text-xs mb-1">UI/UX Design</h3>
            <p className="flex justify-between items-center text-gray-500 text-[8px] lg:text-[9px] font-medium w-full">
              <span>200 Courses</span>
              <span className="text-gray-400 mx-0.5">&bull;</span>
              <span>1000+ Students</span>
            </p>
          </div>

          {/* Card 2: Learning Progress (Right) */}
          <div className="absolute top-[28%] md:top-[40%] right-[1%] md:right-[10%] lg:top-[24%] lg:right-[18%] bg-white p-3 md:p-4 lg:p-4 rounded-xl shadow-xl lg:shadow-2xl z-20 w-[145px] md:w-[160px] lg:w-[180px] pointer-events-auto">
            <h3 className="text-gray-800 font-semibold text-[10px]">Learning Progress</h3>
            <p className="text-black font-extrabold text-xl lg:text-2xl mt-1">55%</p>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1.5 lg:mt-2">
              <div className="bg-[#cfff04] w-[55%] h-full"></div>
            </div>
          </div>

          {/* Card 3: Happy Students (Bottom Left) */}
          <div className="absolute bottom-[10%] md:bottom-[12%] left-[2%] md:left-[10%] lg:bottom-[16%] lg:left-[16%] bg-white p-2.5 md:p-3 lg:p-2 rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl z-20 w-[165px] md:w-[190px] lg:w-[220px] pointer-events-auto">
            <h3 className="text-gray-900 font-medium text-xs lg:text-sm leading-tight mb-1 lg:mb-0">
              Happy Students
            </h3>
            <div className="flex items-center gap-1 text-gray-800 text-[10px] lg:text-xs mb-1">
              <span>4.5</span> 
              <span className="text-gray-400">(240)</span>
              <span className="text-[#cfff04] text-[12px] md:text-base">★</span>
            </div>
            <div className="flex -space-x-1.5 lg:-space-x-2 overflow-hidden mt-1">
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=11" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=12" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=13" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=14" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=15" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=53" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=59" alt="Student" />
              <div className="flex items-center justify-center h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white bg-[#cfff04] text-[9px] lg:text-[12px] font-bold text-black z-10 relative leading-none">
                2K+
              </div>
            </div>
          </div>

          {/* 3D ASSETS  */}
          
          <img 
            src="/shape-yellow-zigzag.png" 
            className="absolute top-[-6%] md:top-[0%] left-[-3%] md:left-[-3%] w-16 h-16 md:w-32 md:h-32 lg:top-[-230px] lg:left-[-364px] lg:w-[300px] lg:h-[300px] z-0 object-contain drop-shadow-xl pointer-events-none opacity-90 lg:opacity-100" 
            alt="" 
          />
          
          <img 
            src="/shape-white-zigzag-small.png" 
            className="absolute top-[30%] md:top-[15%] left-[15%] md:left-[30%] w-12 h-12 md:w-16 md:h-16 lg:top-[-20px] lg:left-[-90px] lg:w-[175px] lg:h-[175px] -rotate-180 z-0 object-contain drop-shadow-lg pointer-events-none opacity-80 lg:opacity-100" 
            alt="" 
          />
          
          <img 
            src="/shape-white-donut.png" 
            className="absolute bottom-[34%] md:bottom-[25%] left-[2%] md:left-[0%] w-16 h-16 md:w-24 md:h-24 lg:bottom-auto lg:top-[150px] lg:left-[-44px] lg:w-[200px] lg:h-[200px] z-30 object-contain drop-shadow-xl pointer-events-none" 
            alt="" 
          />
          
          <img 
            src="/shape-yellow-cylinder.png" 
            className="absolute top-[-8%] md:top-[-5%] right-[-5%] md:right-[-4%] w-20 h-20 md:w-32 md:h-32 lg:top-[-230px] lg:right-[-400px] lg:w-[300px] lg:h-[300px] z-0 object-contain drop-shadow-xl pointer-events-none opacity-90 lg:opacity-100" 
            alt="" 
          />
          
          <img 
            src="/shape-white-cone.png" 
            className="absolute top-[8%] md:top-[15%] right-[20%] md:right-[10%] w-12 h-12 md:w-20 md:h-20 lg:top-[-50px] lg:right-[-118px] lg:w-[188px] lg:h-[188px] z-30 object-contain drop-shadow-xl pointer-events-none opacity-80 lg:opacity-100" 
            alt="" 
          />
          
          <img 
            src="/shape-white-zigzag-large.png" 
            className="absolute bottom-[-3%] md:bottom-[0%] right-[-2%] md:right-[2%] w-16 h-16 md:w-24 md:h-24 lg:bottom-[-8px] lg:right-[-80px] lg:w-[250px] lg:h-[250px] z-0 object-contain drop-shadow-lg pointer-events-none" 
            alt="" 
          />
          
        </div>
      </div>
    </header>
  );
};

export default Header;