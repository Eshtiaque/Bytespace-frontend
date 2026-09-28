import React from 'react';

const Header = () => {
  return (
    <header className="  relative flex-1 min-h-0 w-full max-w-full mx-auto flex flex-col items-center justify-between overflow-hidden pt-2 lg:pt-4">
      
      {/* 1. TOP SECTION (Text & Search) */}
      <div className="relative z-30 flex flex-col items-center text-center px-4 w-full mt-4">
        
        {/* Texts */}
        <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-[1.2] mb-3 text-white tracking-wide">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="text-xs lg:text-sm font-light text-gray-200 max-w-xl mb-6">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar - */}
        <div className="flex items-center justify-center gap-2 w-full max-w-[600px]">
          {/* Input Section */}
          <div className="flex-1 flex items-center bg-white rounded-full px-4 h-10 md:h-12 shadow-xl">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent focus:outline-none text-xs md:text-sm text-gray-800 placeholder-gray-400 ml-2 h-full"
            />
          </div>
          
          {/* Search Button */}
          <button className="bg-[#cfff04] text-black font-bold text-xs md:text-sm px-8 h-10 md:h-12 rounded-full hover:bg-[#b8e600] transition-colors whitespace-nowrap shadow-xl shrink-0">
            Search
          </button>
        </div>
      </div>

      {/* 2. BOTTOM GRAPHICS AREA (Circle, Image, Cards) */}
      <div className="relative flex-1 w-full flex justify-center items-end z-10 pointer-events-none mt-2">
        
        {/* The Yellow Ring (SVG) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[60%] z-0 w-[550px] md:w-[700px] lg:w-[850px]">
          <svg viewBox="0 0 1000 1000" fill="none" className="w-full h-auto drop-shadow-2xl">
            <circle cx="500" cy="500" r="350" stroke="#cfff04" strokeWidth="240" />
          </svg>
        </div>

        {/* Wrapper for Image and Cards */}
        <div className="relative w-full max-w-[900px] flex justify-center items-end h-full">
          
          <img 
            src="/headerMan.png" 
            alt="Student" 
            className="relative z-10 h-[40vh] lg:h-[52vh] object-contain object-bottom pointer-events-auto"
          />

          {/* Card 1: UI/UX Design (Left) */}
          <div className="absolute top-[20%] left-[2%] lg:left-[23%] bg-white p-2 lg:p-3 rounded-xl shadow-2xl z-20 w-[150px] lg:w-[160px] pointer-events-auto">
  <h3 className="text-black font-bold text-[10px] lg:text-xs mb-1">UI/UX Design</h3>
  
  <p className="flex justify-between items-center text-gray-500 text-[8px] lg:text-[9px] font-medium w-full">
    <span>200 Courses</span>
    <span className="text-gray-400 mx-1">&bull;</span>
    <span>1000+ Students</span>
  </p>
</div>

          {/* Card 2: Learning Progress (Right) */}
          <div className="absolute top-[24%] right-[2%] lg:right-[18%] bg-white p-3 lg:p-4 rounded-xl shadow-2xl z-20 w-[150px] lg:w-[180px] pointer-events-auto">
            <h3 className="text-gray-800 font-semibold text-[9px] lg:text-[10px]">Learning Progress</h3>
            <p className="text-black font-extrabold text-xl lg:text-2xl mt-1">55%</p>
            <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden mt-2">
              <div className="bg-[#cfff04] w-[55%] h-full"></div>
            </div>
          </div>

          {/* Card 3: Happy Students (Bottom Left) */}
          <div className="absolute bottom-[16%] left-[-2%] lg:left-[16%] bg-white p-3 lg:p-2 rounded-2xl shadow-2xl z-20 w-[170px] lg:w-[220px] pointer-events-auto">
            
            <h3 className="text-gray-900 font-medium text-sm lg:text-sm leading-tight ">
              Happy Students
            </h3>
            
            <div className="flex items-center gap-1 text-gray-800 text-[11px] lg:text-xs mb-1">
              <span>4.5</span> 
              <span className="text-gray-400">(240)</span>
              <span className="text-[#cfff04] text-sm md:text-base">★</span>
            </div>
            
            {/* Avatars Group  */}
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=11" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=12" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=13" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=14" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=15" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=53" alt="Student" />
              <img className="inline-block h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white object-cover" src="https://i.pravatar.cc/100?img=59" alt="Student" />
              
<div className="flex items-center justify-center h-6 w-6 lg:h-8 lg:w-8 rounded-full ring-2 ring-white bg-[#cfff04] text-[9px] lg:text-[12px] font-bold text-black z-10 relative leading-none">                2K+
              </div>
            </div>
            
          </div>

        
        {/* 1 no: Yellow Zigzag (Top Left) */}
        <img 
          src="/public/shape-yellow-zigzag.png" 
          className="absolute text-yellow-300 top-[-230px] left-[-364px] w-[300px] h-[300px] z-0 object-contain drop-shadow-xl pointer-events-none" 
          alt="" 
        />
        
        {/* 2 no: White Zigzag Small (Mid Left) */}
        <img 
          src="/public/shape-white-zigzag-small.png" 
          className="absolute top-[-20px] left-[-90px] w-[175px] h-[175px] -rotate-180 z-0 object-contain drop-shadow-lg pointer-events-none" 
          alt="" 
        />
        
        {/* 3 no: White Donut (Bottom Left) */}
        <img 
          src="/public/shape-white-donut.png" 
          className="absolute top-[px] left-[-44px] w-[200px] h-[200px] z-30 object-contain drop-shadow-xl pointer-events-none" 
          alt="" 
        />
        
        {/* 4 no: Yellow Cylinder (Top Right) */}
        <img 
          src="/public/shape-yellow-cylinder.png" 
          className="absolute top-[-230px] right-[-400px] w-[300px] h-[300px] z-0 object-contain drop-shadow-xl pointer-events-none" 
          alt="" 
        />
        {/* 5 no: White Zigzag Small (Mid Right) */}
        <img 
          src="/public/shape-white-cone.png" 
          className="absolute top-[-50px] right-[-118px] w-[188px] h-[188px] z-30 object-contain drop-shadow-xl pointer-events-none" 
          alt="" 
        />
        {/* 6 no: White Zigzag Large (Bottom Right) */}
        <img 
          src="/public/shape-white-zigzag-large.png" 
          className="absolute bottom-[-8px] right-[-80px] w-[250px] h-[250px] z-0 object-contain drop-shadow-lg pointer-events-none" 
          alt="" 
        />
        
        
        </div>
      </div>
    </header>
  );
};

export default Header;